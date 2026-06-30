import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAcademy } from '../hooks/useAcademy'
import { AcademyNavbar } from '../components/AcademyNavbar'
import { Card } from '../../../ui/Card'
import { Button } from '../../../ui/Button'
import { Badge } from '../../../ui/Badge'
import { ProgressBar } from '../../../ui/Progress'
import { AIPlaceholder } from '../components/AIPlaceholder'
import { useToast } from '../../../ui/Toast'

export default function ResourceDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const toast = useToast()
  const { getResourceById, getProgress, updateProgress, toggleBookmark, isBookmarked, trackView } = useAcademy()

  // Fetch target resource
  const resource = getResourceById(id)

  // Track state progress slider
  const [localProgress, setLocalProgress] = useState(0)

  useEffect(() => {
    if (resource) {
      setLocalProgress(getProgress(resource.id))
      trackView(resource.id) // Add to recently viewed logs
    }
  }, [id, resource, getProgress, trackView])

  if (!resource) {
    return (
      <div className="p-6 max-w-7xl mx-auto space-y-6 text-left page-fade-in">
        <AcademyNavbar />
        <Card variant="basic" className="p-8 text-center bg-surface">
          <h3 className="text-sm font-bold text-text-primary uppercase">Resource Not Found</h3>
          <p className="text-xs text-text-muted mt-2">The selected curriculum item could not be retrieved from databases.</p>
          <Button variant="secondary" size="sm" onClick={() => navigate('/academy')} className="mt-4 text-xs font-bold">
            Back to Academy
          </Button>
        </Card>
      </div>
    )
  }

  const {
    title,
    author,
    category,
    description,
    readingTime,
    pages,
    coverUrl,
    difficulty,
    tags = [],
    publishedYear
  } = resource

  const handleProgressChange = (e) => {
    const value = parseInt(e.target.value) || 0
    setLocalProgress(value)
  }

  const handleSaveProgress = () => {
    updateProgress(resource.id, localProgress)
    toast.success(`Reading progress updated to ${localProgress}%!`)
  }

  // Mock Table of Contents
  const tableOfContents = [
    { title: 'Chapter 1: The Core Value Diagnosis', duration: '20 mins' },
    { title: 'Chapter 2: Structuring User Discovery Interviews', duration: '35 mins' },
    { title: 'Chapter 3: Defining Scoping Milestones & MVPs', duration: '40 mins' },
    { title: 'Chapter 4: Formulating Coherent Growth Funnels', duration: '30 mins' },
    { title: 'Chapter 5: Managing Post-Launch Telemetry Feedback', duration: '25 mins' }
  ]

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 page-fade-in text-left">
      {/* Sub-navigation tabs */}
      <AcademyNavbar />

      {/* Back button */}
      <div className="select-none">
        <button 
          onClick={() => navigate(-1)} 
          className="text-xs font-bold text-text-secondary hover:text-text-primary flex items-center gap-1.5 bg-transparent border-0 cursor-pointer"
        >
          <span className="i-lucide-arrow-left w-4 h-4" /> Back to Library
        </button>
      </div>

      {/* Main Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Book cover, info, and progress tracker (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <Card variant="basic" className="p-6 bg-surface space-y-6">
            
            {/* Top row Info */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Cover Image */}
              <div className="w-32 h-44 border-2 border-border bg-background rounded-sm overflow-hidden shrink-0 select-none shadow-[3px_3px_0px_0px_var(--color-border)]">
                {coverUrl ? (
                  <img src={coverUrl} alt={title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10">
                    <span className="i-lucide-book-open w-8 h-8 text-primary/60" />
                  </div>
                )}
              </div>

              {/* Text metadata */}
              <div className="space-y-3 min-w-0">
                <div className="flex flex-wrap items-center gap-2 select-none">
                  <Badge variant="primary" shape="square">{category}</Badge>
                  <span className="text-[10px] font-bold text-text-muted uppercase">
                    {difficulty} • {readingTime} • {pages} Pages
                  </span>
                </div>
                
                <h2 className="text-base sm:text-lg font-extrabold text-text-primary leading-snug">
                  {title}
                </h2>
                <p className="text-xs text-text-secondary">
                  by <span className="font-bold">{author}</span> {publishedYear && `(Published ${publishedYear})`}
                </p>

                {/* Tag list */}
                <div className="flex flex-wrap gap-1.5 select-none pt-1">
                  {tags.map((t, idx) => (
                    <span key={idx} className="text-[9px] font-bold text-text-secondary px-1.5 py-0.5 border border-border/40 rounded-sm bg-background">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 border-t border-border pt-4">
              <h4 className="text-xs font-extrabold uppercase text-text-primary tracking-wide">About this book</h4>
              <p className="text-xs text-text-secondary leading-relaxed">{description}</p>
            </div>

            {/* Progress Adjuster controls */}
            <div className="p-4 border-2 border-border rounded-md bg-background space-y-4">
              <div className="flex justify-between items-center border-b border-border/60 pb-2 select-none">
                <span className="text-[10px] font-bold text-text-primary uppercase">Curriculum Reading Progress</span>
                <Badge variant={localProgress === 100 ? 'success' : 'primary'} shape="square">
                  {localProgress}% Complete
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Progress bar and slider */}
                <div className="flex-1 w-full space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={localProgress}
                    onChange={handleProgressChange}
                    className="w-full accent-primary cursor-pointer"
                  />
                  <ProgressBar value={localProgress} variant={localProgress === 100 ? 'success' : 'primary'} size="sm" />
                </div>

                {/* Save button */}
                <Button
                  variant={localProgress === 100 ? 'success' : 'secondary'}
                  size="sm"
                  onClick={handleSaveProgress}
                  className="font-bold text-xs shrink-0 w-full sm:w-auto"
                >
                  Save Progress
                </Button>
              </div>
            </div>

            {/* Syllabus / Chapters List */}
            <div className="space-y-3 border-t border-border pt-4">
              <h4 className="text-xs font-extrabold uppercase text-text-primary tracking-wide select-none">Table of Contents</h4>
              <div className="space-y-2">
                {tableOfContents.map((chap, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2.5 border border-border/60 hover:bg-hover rounded-sm text-xs text-text-secondary select-none">
                    <span className="truncate">{chap.title}</span>
                    <span className="text-[10px] text-text-muted shrink-0 font-bold">{chap.duration}</span>
                  </div>
                ))}
              </div>
            </div>

          </Card>
        </div>

        {/* Right Column: AI tool locks & Actions (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Main actions card */}
          <Card variant="basic" className="bg-surface p-4 text-left space-y-4 select-none">
            <h4 className="font-bold text-xs uppercase tracking-wider border-b border-border pb-2">Reading Core Actions</h4>
            
            <div className="space-y-2">
              <Button 
                variant={isBookmarked(resource.id) ? 'success' : 'outline'}
                fullWidth 
                onClick={() => {
                  toggleBookmark(resource.id)
                  toast.success(isBookmarked(resource.id) ? 'Removed from shelf' : 'Added to shelf')
                }}
                icon={isBookmarked(resource.id) ? 'i-lucide-star-off' : 'i-lucide-star'}
                className="font-bold text-xs"
              >
                {isBookmarked(resource.id) ? 'Saved' : 'Save to Shelf'}
              </Button>
              
              <Button 
                variant="primary" 
                fullWidth 
                onClick={() => toast.success('Initializing e-reader panel...')}
                icon="i-lucide-book-open"
                className="font-bold text-xs"
              >
                Launch E-Reader
              </Button>
            </div>
          </Card>

          {/* AI placeholder lock box */}
          <AIPlaceholder 
            features={[
              { label: 'Summarize Chapters', icon: 'i-lucide-file-text' },
              { label: 'Ask AI Chatbot', icon: 'i-lucide-sparkles' },
              { label: 'Flashcard deck', icon: 'i-lucide-layers' },
              { label: 'Start Concept Quiz', icon: 'i-lucide-help-circle' },
              { label: 'Generate Mind Map', icon: 'i-lucide-git-fork' },
              { label: 'Compile Study Notes', icon: 'i-lucide-edit-3' }
            ]}
          />
        </div>

      </div>
    </div>
  )
}
