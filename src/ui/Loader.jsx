import React from 'react'
import { cn } from '../utils/cn'

// Re-export Spinner
export { Spinner } from './Spinner'

/**
 * Skeleton component representing text loading blocks.
 */
export function SkeletonText({
  lines = 3,
  className = '',
  ...props
}) {
  const lineWidths = ['w-full', 'w-11/12', 'w-4/5', 'w-2/3', 'w-1/2']
  
  return (
    <div className={cn('space-y-2.5', className)} {...props}>
      {Array.from({ length: lines }).map((_, idx) => {
        // Vary the width of lines for realistic text layout
        const widthClass = idx === lines - 1 
          ? lineWidths[3] 
          : lineWidths[idx % lineWidths.length]
          
        return (
          <div
            key={idx}
            className={cn(
              'h-3.5 bg-neutral-200 dark:bg-zinc-800 rounded-sm animate-pulse',
              widthClass
            )}
          />
        )
      })}
    </div>
  )
}

/**
 * Skeleton component representing card loading blocks.
 */
export function SkeletonCard({
  className = '',
  hasImage = true,
  ...props
}) {
  return (
    <div
      className={cn(
        'border border-border bg-surface rounded-xl p-5 space-y-4 animate-pulse',
        className
      )}
      {...props}
    >
      {hasImage && (
        <div className="w-full h-40 bg-neutral-200 dark:bg-zinc-800 rounded-lg" />
      )}
      <div className="space-y-3">
        <div className="h-4 bg-neutral-200 dark:bg-zinc-800 rounded-md w-1/3" />
        <div className="space-y-2">
          <div className="h-3 bg-neutral-200 dark:bg-zinc-800 rounded-sm w-full" />
          <div className="h-3 bg-neutral-200 dark:bg-zinc-800 rounded-sm w-5/6" />
        </div>
      </div>
    </div>
  )
}

/**
 * Skeleton component representing tabular loading blocks.
 */
export function SkeletonTable({
  rows = 4,
  columns = 4,
  className = '',
  ...props
}) {
  return (
    <div className={cn('border border-border rounded-xl overflow-hidden bg-surface animate-pulse w-full', className)} {...props}>
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-background border-b border-border">
        {Array.from({ length: columns }).map((_, idx) => (
          <div key={idx} className="h-4 bg-neutral-200 dark:bg-zinc-800 rounded-md w-1/2" />
        ))}
      </div>
      
      {/* Table Rows */}
      <div className="divide-y divide-border">
        {Array.from({ length: rows }).map((_, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-4 gap-4 px-6 py-4.5">
            {Array.from({ length: columns }).map((_, colIdx) => {
              const widths = ['w-3/4', 'w-1/2', 'w-5/6', 'w-2/3']
              return (
                <div
                  key={colIdx}
                  className={cn(
                    'h-3 bg-neutral-200 dark:bg-zinc-800 rounded-sm',
                    widths[(rowIdx + colIdx) % widths.length]
                  )}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
