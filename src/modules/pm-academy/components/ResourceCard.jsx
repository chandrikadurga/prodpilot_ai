import React from 'react'
import { Card } from '../../../ui/Card'
import { Button } from '../../../ui/Button'
import { Badge } from '../../../ui/Badge'
import { ProgressBar } from '../../../ui/Progress'

/**
 * Reusable Card component for books, PDFs, frameworks, templates, and learning paths.
 */
export function ResourceCard({
  resource,
  type = 'book',
  isBookmarked = false,
  progress = 0,
  onBookmark,
  onOpen,
  loading = false,
}) {
  if (loading) {
    return (
      <Card variant="basic" className="h-full flex flex-col justify-between animate-pulse">
        <div className="space-y-3">
          <div className="w-full h-40 bg-zinc-200 dark:bg-zinc-800 rounded-sm border-2 border-border" />
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-sm w-3/4" />
          <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded-sm w-1/2" />
        </div>
        <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-sm w-full mt-4" />
      </Card>
    )
  }

  const {
    title,
    author,
    category,
    description,
    readingTime,
    duration,
    pages,
    fileSize,
    coverUrl,
    difficulty,
    tags = []
  } = resource

  // Helper to resolve card-specific icon
  const getHeaderIcon = () => {
    switch (type) {
      case 'book': return 'i-lucide-book-open'
      case 'pdf': return 'i-lucide-file-text'
      case 'template': return 'i-lucide-file-spreadsheet'
      case 'framework': return 'i-lucide-brain'
      case 'path': return 'i-lucide-milestone'
      default: return 'i-lucide-file'
    }
  }

  return (
    <Card variant="interactive" className="flex flex-col justify-between h-full bg-surface">
      <div>
        {/* Cover Image & Category */}
        <div className="relative w-full h-44 bg-background border-b-2 border-border overflow-hidden rounded-t-sm select-none">
          {coverUrl ? (
            <img 
              src={coverUrl} 
              alt={title} 
              className="w-full h-full object-cover grayscale-25 transition-all duration-300 hover:scale-105 hover:grayscale-0"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/10">
              <span className={`${getHeaderIcon()} w-12 h-12 text-primary/60`} />
            </div>
          )}

          {/* Floating Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              if (onBookmark) onBookmark()
            }}
            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-sm bg-surface border-2 border-border flex items-center justify-center shadow-[1px_1px_0px_0px_var(--color-border)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-hover cursor-pointer z-10"
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark resource'}
          >
            <span className={`w-4 h-4 block ${isBookmarked ? 'i-lucide-star-off text-accent' : 'i-lucide-star text-text-muted'}`} />
          </button>

          {/* Floating Category Badge */}
          <div className="absolute bottom-2.5 left-2.5">
            <Badge variant="primary" shape="square">{category}</Badge>
          </div>
        </div>

        {/* Card Content Info */}
        <div className="p-4 space-y-2">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-text-muted select-none">
            {difficulty && (
              <span className="px-1.5 py-0.5 border border-border bg-background rounded-sm uppercase">
                {difficulty}
              </span>
            )}
            {readingTime && <span>• {readingTime}</span>}
            {duration && <span>• {duration}</span>}
            {pages && <span>• {pages} Pages</span>}
            {fileSize && <span>• {fileSize}</span>}
          </div>

          {/* Title & Author */}
          <div className="text-left">
            <h4 className="text-sm font-bold text-text-primary line-clamp-2 leading-snug hover:underline cursor-pointer" onClick={onOpen}>
              {title}
            </h4>
            {author && (
              <p className="text-xs text-text-secondary mt-0.5 truncate">
                by {author}
              </p>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-xs text-text-muted text-left line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}

          {/* Tag Badges */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1.5 select-none">
              {tags.slice(0, 2).map((t, idx) => (
                <span key={idx} className="text-[9px] font-bold text-text-secondary px-1 border border-border/40 rounded-sm bg-background">
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Progress & CTA Actions */}
      <div className="p-4 pt-0 space-y-3">
        {/* Progress Bar (Books & Paths) */}
        {(type === 'book' || type === 'path') && progress > 0 && (
          <div className="space-y-1 text-left select-none">
            <div className="flex items-center justify-between text-[10px] font-bold text-text-secondary">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <ProgressBar value={progress} variant={progress === 100 ? 'success' : 'primary'} size="sm" />
          </div>
        )}

        {/* Action Button */}
        <Button 
          variant={progress === 100 ? 'success' : 'secondary'} 
          size="sm" 
          fullWidth 
          onClick={onOpen}
          className="font-bold text-xs"
        >
          {progress === 100 ? 'Review Complete' : type === 'template' ? 'Use Template' : type === 'framework' ? 'Learn Framework' : 'Read Now'}
        </Button>
      </div>
    </Card>
  )
}
