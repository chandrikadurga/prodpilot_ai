import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAcademy } from '../hooks/useAcademy'
import { booksData } from '../data/books'
import { AcademyNavbar } from '../components/AcademyNavbar'
import { ResourceCard } from '../components/ResourceCard'
import { Input } from '../../../ui/Input'
import { Button } from '../../../ui/Button'
import { Badge } from '../../../ui/Badge'
import { EmptyState } from '../components/EmptyState'
import { useToast } from '../../../ui/Toast'

export default function BooksLibrary() {
  const navigate = useNavigate()
  const toast = useToast()
  const { toggleBookmark, isBookmarked, progress } = useAcademy()

  // Filter States
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [isGridView, setIsGridView] = useState(true)
  const [sortBy, setSortBy] = useState('Popular')

  // Categories list
  const categories = useMemo(() => {
    const list = new Set(booksData.map(b => b.category))
    return ['All', ...Array.from(list)]
  }, [])

  // Filtered & Sorted Books
  const filteredBooks = useMemo(() => {
    return booksData
      .filter((book) => {
        const matchesSearch = 
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
        
        const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory
        const matchesDifficulty = selectedDifficulty === 'All' || book.difficulty === selectedDifficulty

        return matchesSearch && matchesCategory && matchesDifficulty
      })
      .sort((a, b) => {
        if (sortBy === 'Alphabetical') {
          return a.title.localeCompare(b.title)
        }
        if (sortBy === 'Newest') {
          return b.publishedYear - a.publishedYear
        }
        if (sortBy === 'Progress') {
          const progressA = progress[a.id] || 0
          const progressB = progress[b.id] || 0
          return progressB - progressA
        }
        return b.rating - a.rating // default Popular sort
      })
  }, [search, selectedCategory, selectedDifficulty, sortBy, progress])

  const clearFilters = () => {
    setSearch('')
    setSelectedCategory('All')
    setSelectedDifficulty('All')
    setSortBy('Popular')
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 page-fade-in text-left">
      {/* Sub-Navigation tabs */}
      <AcademyNavbar />

      {/* Filter and Control Bar */}
      <div className="p-4 border-2 border-border rounded-md bg-surface flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[3px_3px_0px_0px_var(--color-border)] select-none">
        
        {/* Left Side: Search & Toggles */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1 max-w-xl">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon="i-lucide-search"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border-2 border-border rounded-md text-xs font-bold bg-surface text-text-primary focus:outline-none cursor-pointer"
            >
              <option disabled>Category</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 border-2 border-border rounded-md text-xs font-bold bg-surface text-text-primary focus:outline-none cursor-pointer"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Right Side: Sorting & Layout Views */}
        <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border-2 border-border rounded-md text-xs font-bold bg-surface text-text-primary focus:outline-none cursor-pointer"
          >
            <option value="Popular">Popularity</option>
            <option value="Alphabetical">Alphabetical</option>
            <option value="Newest">Newest Added</option>
            <option value="Progress">Highest Progress</option>
          </select>

          {/* Grid/List Toggles */}
          <div className="flex border-2 border-border rounded-md overflow-hidden bg-background">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 cursor-pointer transition-colors border-0 ${isGridView ? 'bg-primary text-white' : 'bg-transparent text-text-muted hover:text-text-primary'}`}
              title="Grid View"
            >
              <span className="i-lucide-grid w-4 h-4 block" />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 cursor-pointer transition-colors border-0 border-l border-border ${!isGridView ? 'bg-primary text-white' : 'bg-transparent text-text-muted hover:text-text-primary'}`}
              title="List View"
            >
              <span className="i-lucide-list w-4 h-4 block" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Books Grid / List */}
      {filteredBooks.length === 0 ? (
        <EmptyState
          title="No Books Found"
          description="Your search filters did not match any product books. Click below to clear filters."
          actionLabel="Clear Search Filters"
          onAction={clearFilters}
        />
      ) : isGridView ? (
        // Grid View Layout
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <ResourceCard
              key={book.id}
              resource={book}
              type="book"
              isBookmarked={isBookmarked(book.id)}
              progress={progress[book.id] || 0}
              onBookmark={() => {
                toggleBookmark(book.id)
                toast.show({
                  title: isBookmarked(book.id) ? 'Bookmark Removed' : 'Bookmark Saved',
                  message: `${book.title} updated.`,
                  variant: isBookmarked(book.id) ? 'warning' : 'success'
                })
              }}
              onOpen={() => navigate(`/academy/resource/${book.id}`)}
            />
          ))}
        </div>
      ) : (
        // List View Layout (Compact Neo-Brutalist rows)
        <div className="space-y-4">
          {filteredBooks.map((book) => {
            const hasProgress = (progress[book.id] || 0) > 0
            const isRead = progress[book.id] === 100
            
            return (
              <div 
                key={book.id}
                className="p-4 border-2 border-border rounded-md bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[3px_3px_0px_0px_var(--color-border)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_var(--color-border)] transition-all"
              >
                {/* Book cover & Details */}
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-12 h-16 bg-background border-2 border-border rounded-sm overflow-hidden shrink-0 select-none">
                    {book.coverUrl && <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" />}
                  </div>
                  <div className="min-w-0 text-left space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="primary" shape="square" className="text-[9px]">{book.category}</Badge>
                      <span className="text-[10px] font-bold text-text-muted uppercase">{book.difficulty} • {book.readingTime}</span>
                    </div>
                    <h4 
                      className="text-sm font-bold text-text-primary truncate hover:underline cursor-pointer"
                      onClick={() => navigate(`/academy/resource/${book.id}`)}
                    >
                      {book.title}
                    </h4>
                    <p className="text-xs text-text-muted truncate">by {book.author}</p>
                  </div>
                </div>

                {/* Progress bar in row */}
                {hasProgress && (
                  <div className="w-36 text-left shrink-0 select-none">
                    <div className="flex justify-between items-center text-[9px] font-bold text-text-secondary mb-1">
                      <span>Progress</span>
                      <span>{progress[book.id]}%</span>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 border border-border rounded-sm overflow-hidden">
                      <div className={`h-full ${isRead ? 'bg-success' : 'bg-primary'}`} style={{ width: `${progress[book.id]}%` }} />
                    </div>
                  </div>
                )}

                {/* Bookmark & Open buttons */}
                <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => toggleBookmark(book.id)}
                    className="p-2 border-2 border-border bg-background rounded-sm hover:bg-hover cursor-pointer"
                    aria-label="Bookmark"
                  >
                    <span className={`w-4 h-4 block ${isBookmarked(book.id) ? 'i-lucide-star-off text-accent' : 'i-lucide-star text-text-muted'}`} />
                  </button>

                  <Button 
                    variant={isRead ? 'success' : 'secondary'} 
                    size="sm"
                    onClick={() => navigate(`/academy/resource/${book.id}`)}
                    className="text-xs font-bold"
                  >
                    {isRead ? 'Completed' : 'Read Now'}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
