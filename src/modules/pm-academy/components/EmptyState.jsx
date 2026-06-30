import React from 'react'
import { Card } from '../../../ui/Card'
import { Button } from '../../../ui/Button'

/**
 * Reusable empty state screen for search queries, bookmarks, or category filters.
 */
export function EmptyState({
  title = 'No resources found',
  description = 'Try refining your search keyword or clearing the filters.',
  actionLabel,
  onAction,
  icon: Icon,
}) {
  return (
    <Card variant="basic" className="flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto my-8 bg-surface">
      {/* Retro Floppy Disk / Drawer SVG */}
      <div className="w-16 h-16 border-2 border-border rounded-sm bg-background flex items-center justify-center shadow-[3px_3px_0px_0px_var(--color-border)] mb-4 select-none animate-pulse">
        {Icon ? (
          <Icon className="w-8 h-8 text-text-muted" />
        ) : (
          <svg
            className="w-10 h-10 text-text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        )}
      </div>

      {/* Text Info */}
      <h3 className="text-sm font-extrabold text-text-primary uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-xs text-text-muted mt-1.5 mb-5 max-w-xs leading-relaxed">
        {description}
      </p>

      {/* Action Button */}
      {actionLabel && onAction && (
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={onAction}
          className="font-bold text-xs"
        >
          {actionLabel}
        </Button>
      )}
    </Card>
  )
}
export default EmptyState
