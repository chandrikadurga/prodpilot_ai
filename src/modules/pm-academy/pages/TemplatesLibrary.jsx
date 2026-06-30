import React, { useState, useMemo } from 'react'
import { useAcademy } from '../hooks/useAcademy'
import { templatesData } from '../data/templates'
import { AcademyNavbar } from '../components/AcademyNavbar'
import { ResourceCard } from '../components/ResourceCard'
import { Input } from '../../../ui/Input'
import { Modal } from '../../../ui/Modal'
import { Button } from '../../../ui/Button'
import { EmptyState } from '../components/EmptyState'
import { useToast } from '../../../ui/Toast'

export default function TemplatesLibrary() {
  const toast = useToast()
  const { toggleBookmark, isBookmarked, downloadTemplate } = useAcademy()

  // Filter States
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [previewTemplate, setPreviewTemplate] = useState(null)

  // Categories list
  const categories = useMemo(() => {
    const list = new Set(templatesData.map(t => t.category))
    return ['All', ...Array.from(list)]
  }, [])

  // Filtered Templates
  const filteredTemplates = useMemo(() => {
    return templatesData.filter((t) => {
      const matchesSearch = 
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase())
      
      const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategory])

  const handleOpenPreview = (template) => {
    setPreviewTemplate(template)
  }

  const handleClosePreview = () => {
    setPreviewTemplate(null)
  }

  const handleCopyContent = (template) => {
    navigator.clipboard.writeText(template.previewContent)
    downloadTemplate(template.id) // Track stats downloads count
    toast.success('Template code copied to clipboard!')
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 page-fade-in text-left">
      {/* Sub-navigation tabs */}
      <AcademyNavbar />

      {/* Filter and Control Bar */}
      <div className="p-4 border-2 border-border rounded-md bg-surface flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[3px_3px_0px_0px_var(--color-border)] select-none">
        <div className="w-full sm:max-w-md">
          <Input
            type="text"
            placeholder="Search templates..."
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
        </div>
      </div>

      {/* Main Grid List */}
      {filteredTemplates.length === 0 ? (
        <EmptyState
          title="No Templates Found"
          description="We couldn't find any documents matching your keywords. Try clearing filters."
          actionLabel="Clear Filter"
          onAction={() => { setSearch(''); setSelectedCategory('All'); }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <ResourceCard
              key={template.id}
              resource={template}
              type="template"
              isBookmarked={isBookmarked(template.id)}
              onBookmark={() => {
                toggleBookmark(template.id)
                toast.show({
                  title: isBookmarked(template.id) ? 'Bookmark Removed' : 'Bookmark Saved',
                  message: `${template.title} updated.`,
                  variant: isBookmarked(template.id) ? 'warning' : 'success'
                })
              }}
              onOpen={() => handleOpenPreview(template)}
            />
          ))}
        </div>
      )}

      {/* Template Preview Overlay Dialog */}
      {previewTemplate && (
        <Modal
          isOpen={true}
          onClose={handleClosePreview}
          title={`Document Preview: ${previewTemplate.title}`}
          size="md"
        >
          <div className="space-y-4 text-left">
            <p className="text-xs text-text-secondary leading-relaxed">
              Below is the structured markdown blueprint for this document. Use this to outline your next feature spec or stakeholders update.
            </p>

            {/* Markdown Display Block */}
            <pre className="p-4 border-2 border-border bg-background text-xs font-mono text-text-primary overflow-x-auto max-h-80 select-all leading-normal rounded-sm">
              {previewTemplate.previewContent}
            </pre>

            {/* Footer Buttons */}
            <div className="flex gap-3 justify-end pt-2 border-t border-border select-none">
              <Button variant="outline" size="sm" onClick={handleClosePreview}>
                Cancel
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                onClick={() => handleCopyContent(previewTemplate)}
                icon="i-lucide-copy"
                className="font-bold text-xs"
              >
                Copy Template Text
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
