import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAcademy } from '../hooks/useAcademy'
import { booksData } from '../data/books'
import { pdfsData } from '../data/pdfs'
import { templatesData } from '../data/templates'
import { AcademyNavbar } from '../components/AcademyNavbar'
import { ResourceCard } from '../components/ResourceCard'
import { EmptyState } from '../components/EmptyState'
import { useToast } from '../../../ui/Toast'

export default function Bookmarks() {
  const navigate = useNavigate()
  const toast = useToast()
  const { bookmarks, toggleBookmark, progress } = useAcademy()

  // Resolve all bookmarked items across catalogs
  const bookmarkedItems = useMemo(() => {
    const list = []

    // 1. Scan Books
    booksData.forEach((b) => {
      if (bookmarks.includes(b.id)) {
        list.push({ ...b, type: 'book' })
      }
    })

    // 2. Scan PDFs
    pdfsData.forEach((p) => {
      if (bookmarks.includes(p.id)) {
        list.push({ ...p, type: 'pdf' })
      }
    })

    // 3. Scan Templates
    templatesData.forEach((t) => {
      if (bookmarks.includes(t.id)) {
        list.push({ ...t, type: 'template' })
      }
    })

    return list
  }, [bookmarks])

  const handleBookmarkToggle = (id, title) => {
    toggleBookmark(id)
    toast.show({
      title: 'Bookmark Removed',
      message: `${title} was removed from your shelf.`,
      variant: 'warning'
    })
  }

  const handleOpenItem = (item) => {
    if (item.type === 'book') navigate(`/academy/resource/${item.id}`)
    if (item.type === 'pdf') navigate('/academy/pdfs')
    if (item.type === 'template') navigate('/academy/templates')
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 page-fade-in text-left">
      {/* Sub-navigation tabs */}
      <AcademyNavbar />

      {/* Bookmarks count info banner */}
      {bookmarkedItems.length > 0 && (
        <div className="p-3 border-2 border-border rounded-md bg-background flex items-center justify-between text-xs font-bold text-text-secondary select-none shadow-[2px_2px_0px_0px_var(--color-border)]">
          <span>Total Bookmarked Resources on your Shelf: {bookmarkedItems.length} items</span>
          <span className="i-lucide-star text-accent animate-pulse w-4 h-4 block" />
        </div>
      )}

      {/* Bookmarked items grid */}
      {bookmarkedItems.length === 0 ? (
        <EmptyState
          title="No bookmarks yet"
          description="You haven't bookmarked any PM books, PDF guides, or stakeholder templates yet."
          actionLabel="Explore Academy Shelf"
          onAction={() => navigate('/academy')}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bookmarkedItems.map((item) => (
            <ResourceCard
              key={item.id}
              resource={item}
              type={item.type}
              isBookmarked={true}
              progress={item.type === 'book' ? progress[item.id] || 0 : 0}
              onBookmark={() => handleBookmarkToggle(item.id, item.title)}
              onOpen={() => handleOpenItem(item)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
