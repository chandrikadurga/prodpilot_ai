import React from 'react'
import { cn } from '../utils/cn'
import { Button } from './Button'

/**
 * Reusable Empty State component with a premium vector SVG illustration, 
 * description lines, and an action CTA button.
 */
export function EmptyState({
  title = 'No items found',
  description = 'Get started by creating your first entry in the workspace.',
  actionLabel,
  onActionClick,
  actionIcon,
  className = '',
  ...props
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center p-8 md:p-12 border border-dashed border-border rounded-xl bg-surface/30 select-none w-full max-w-xl mx-auto',
        className
      )}
      {...props}
    >
      {/* Premium SVG Illustration (Minimal Stacked Dashboards) */}
      <svg
        className="w-32 h-32 text-text-muted/20 dark:text-text-muted/10 mb-6"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="25" y="30" width="70" height="50" rx="8" fill="currentColor" opacity="0.1" />
        <rect x="25" y="30" width="70" height="50" rx="8" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
        
        {/* Decorative Grid items */}
        <rect x="35" y="42" width="20" height="8" rx="2" fill="currentColor" opacity="0.3" />
        <rect x="65" y="42" width="20" height="8" rx="2" fill="currentColor" opacity="0.3" />
        <circle cx="40" cy="62" r="3" fill="var(--color-primary)" opacity="0.7" />
        <line x1="50" y1="62" x2="85" y2="62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        
        {/* Overlapping top card */}
        <g filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.05))">
          <rect x="45" y="55" width="60" height="42" rx="6" fill="var(--color-surface)" stroke="currentColor" strokeWidth="2" />
          <circle cx="58" cy="68" r="4" fill="var(--color-accent)" opacity="0.8" />
          <line x1="68" y1="68" x2="93" y2="68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="54" y="78" width="42" height="8" rx="2" fill="currentColor" opacity="0.15" />
        </g>
      </svg>

      <h4 className="text-base font-bold text-text-primary tracking-tight leading-snug">
        {title}
      </h4>
      <p className="text-xs text-text-secondary mt-1.5 mb-6 max-w-sm leading-relaxed">
        {description}
      </p>

      {actionLabel && (
        <Button variant="primary" icon={actionIcon} onClick={onActionClick}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
