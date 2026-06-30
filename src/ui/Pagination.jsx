import React from 'react'
import { cn } from '../utils/cn'
import { Button } from './Button'

/**
 * Reusable Pagination component with page numbers, dot ellipses, and arrow buttons.
 */
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  ...props
}) {
  if (totalPages <= 1) return null

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  // Generate page numbers with ellipses
  const getPageNumbers = () => {
    const siblingCount = 1

    // Always show first, last, current, and siblings
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = Array.from({ length: leftItemCount }, (_, idx) => idx + 1)
      return [...leftRange, 'ellipsis', totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = Array.from({ length: rightItemCount }, (_, idx) => totalPages - rightItemCount + idx + 1)
      return [1, 'ellipsis', ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, idx) => leftSiblingIndex + idx)
      return [1, 'ellipsis', ...middleRange, 'ellipsis', totalPages]
    }

    // Default: show all pages
    return Array.from({ length: totalPages }, (_, idx) => idx + 1)
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav
      aria-label="Pagination"
      className={cn('flex items-center justify-between border-t-2 border-border px-4 py-4 sm:px-6 w-full select-none', className)}
      {...props}
    >
      {/* Mobile view */}
      <div className="flex flex-1 justify-between sm:hidden">
        <Button variant="secondary" size="sm" onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button variant="secondary" size="sm" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-xs text-text-secondary font-medium">
            Page <span className="font-bold text-text-primary">{currentPage}</span> of{' '}
            <span className="font-bold text-text-primary">{totalPages}</span>
          </p>
        </div>
        
        <div>
          <div className="inline-flex gap-1.5" aria-label="Pagination actions">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="p-2 border-2 border-border bg-surface text-text-secondary hover:bg-hover rounded-md disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer focus:outline-none shadow-[1.5px_1.5px_0px_0px_var(--color-border)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none"
              aria-label="Previous page"
            >
              <span className="i-lucide-chevron-left w-4 h-4 block" />
            </button>

            {/* Page numbers */}
            {pageNumbers.map((page, idx) => {
              if (page === 'ellipsis') {
                return (
                  <span
                    key={`ellipsis-${idx}`}
                    className="inline-flex items-center justify-center w-9 h-9 text-xs text-text-muted select-none"
                  >
                    •••
                  </span>
                )
              }

              const isActive = page === currentPage

              return (
                <button
                  key={`page-${page}`}
                  onClick={() => onPageChange(page)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'w-9 h-9 text-xs font-bold rounded-md border-2 border-border flex items-center justify-center transition-all cursor-pointer focus:outline-none shadow-[1.5px_1.5px_0px_0px_var(--color-border)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none',
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-surface text-text-secondary hover:bg-hover'
                  )}
                >
                  {page}
                </button>
              )
            })}

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="p-2 border-2 border-border bg-surface text-text-secondary hover:bg-hover rounded-md disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer focus:outline-none shadow-[1.5px_1.5px_0px_0px_var(--color-border)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none"
              aria-label="Next page"
            >
              <span className="i-lucide-chevron-right w-4 h-4 block" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
