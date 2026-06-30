import React, { useState, useMemo } from 'react'
import { useAcademy } from '../hooks/useAcademy'
import { pdfsData } from '../data/pdfs'
import { AcademyNavbar } from '../components/AcademyNavbar'
import { ResourceCard } from '../components/ResourceCard'
import { Input } from '../../../ui/Input'
import { Modal } from '../../../ui/Modal'
import { EmptyState } from '../components/EmptyState'
import { AIPlaceholder } from '../components/AIPlaceholder'
import { useToast } from '../../../ui/Toast'

export default function PdfLibrary() {
  const toast = useToast()
  const { toggleBookmark, isBookmarked, incrementPdfCount } = useAcademy()

  // Filter States
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPdf, setSelectedPdf] = useState(null)

  // Categories list
  const categories = useMemo(() => {
    const list = new Set(pdfsData.map(p => p.category))
    return ['All', ...Array.from(list)]
  }, [])

  // Filtered PDFs
  const filteredPdfs = useMemo(() => {
    return pdfsData.filter((pdf) => {
      const matchesSearch = 
        pdf.title.toLowerCase().includes(search.toLowerCase()) ||
        pdf.author.toLowerCase().includes(search.toLowerCase()) ||
        pdf.description.toLowerCase().includes(search.toLowerCase())
      
      const matchesCategory = selectedCategory === 'All' || pdf.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategory])

  const handleOpenPdf = (pdf) => {
    setSelectedPdf(pdf)
    incrementPdfCount() // Track learning stats count
    toast.success(`Opening ${pdf.title}`)
  }

  const handleClosePdf = () => {
    setSelectedPdf(null)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 page-fade-in text-left">
      {/* Sub-Navigation tabs */}
      <AcademyNavbar />

      {/* Filter and Control Bar */}
      <div className="p-4 border-2 border-border rounded-md bg-surface flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[3px_3px_0px_0px_var(--color-border)] select-none">
        <div className="w-full sm:max-w-md">
          <Input
            type="text"
            placeholder="Search PDFs by title or description..."
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

      {/* Main Grid Shelf */}
      {filteredPdfs.length === 0 ? (
        <EmptyState
          title="No PDFs Found"
          description="We couldn't find any PDF guides matching your search key. Try clearing filters."
          actionLabel="Clear Search Filter"
          onAction={() => { setSearch(''); setSelectedCategory('All'); }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPdfs.map((pdf) => (
            <ResourceCard
              key={pdf.id}
              resource={pdf}
              type="pdf"
              isBookmarked={isBookmarked(pdf.id)}
              onBookmark={() => {
                toggleBookmark(pdf.id)
                toast.show({
                  title: isBookmarked(pdf.id) ? 'Bookmark Removed' : 'Bookmark Saved',
                  message: `${pdf.title} updated.`,
                  variant: isBookmarked(pdf.id) ? 'warning' : 'success'
                })
              }}
              onOpen={() => handleOpenPdf(pdf)}
            />
          ))}
        </div>
      )}

      {/* Retro PDF Reader Modal (Win95 style dialog overlay) */}
      {selectedPdf && (
        <Modal
          isOpen={true}
          onClose={handleClosePdf}
          title={`Document Reader: ${selectedPdf.title}`}
          size="lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left 2 Columns: Mock PDF Text Viewer */}
            <div className="md:col-span-2 space-y-4 text-left">
              <div className="flex justify-between items-center select-none border-b border-border pb-2">
                <span className="text-[10px] font-bold text-text-muted uppercase">
                  Pages: {selectedPdf.pages} • Size: {selectedPdf.fileSize}
                </span>
                <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                  <span className="i-lucide-file-text" /> Read Mode active
                </span>
              </div>

              <div className="p-4 border-2 border-border bg-background rounded-sm text-xs font-mono text-text-secondary leading-relaxed max-h-96 overflow-y-auto select-text">
                <h3 className="font-bold text-text-primary text-sm mb-2">{selectedPdf.title}</h3>
                <p className="text-[10px] text-text-muted mb-4">by {selectedPdf.author}</p>
                
                <p className="mb-4">
                  [PM ACADEMY DOCUMENT PREVIEW SHELL]
                  <br />
                  This document covers strategic product management. To manage product prioritization, teams must coordinate reach and confidence inputs before writing specifications...
                </p>
                <p className="mb-4">
                  <strong>Section 1: Aligning Team Deliverables</strong>
                  <br />
                  Successful product handoffs require establishing a clear baseline definition of success. Product Managers must outline diagnostic metrics, detail user story criteria using z-score or z-checks, and verify that design grids adhere to the spacing scale.
                </p>
                <p>
                  <strong>Section 2: Avoiding the Build Trap</strong>
                  <br />
                  Organizations often become obsessed with shipping features rather than validating core customer outcomes. Use this playbook to structure experiments, run phased beta rollouts, and continuously gather telemetry to evaluate adoption.
                </p>
              </div>
            </div>

            {/* Right Column: AI Co-pilot placeholders */}
            <div className="space-y-4">
              <AIPlaceholder 
                features={[
                  { label: 'AI Summarize PDF', icon: 'i-lucide-file-text' },
                  { label: 'Generate PDF Notes', icon: 'i-lucide-edit-3' },
                  { label: 'Create Flashcards', icon: 'i-lucide-layers' },
                  { label: 'Quiz Me on PDF', icon: 'i-lucide-help-circle' },
                  { label: 'Interactive Mind Map', icon: 'i-lucide-git-fork' },
                  { label: 'Generate Prep Qs', icon: 'i-lucide-message-square' }
                ]}
              />
            </div>

          </div>
        </Modal>
      )}
    </div>
  )
}
