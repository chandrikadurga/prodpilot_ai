import React from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable Card component supporting structural variants, hover animation styles, and glassmorphism.
 */
export function Card({
  children,
  className = '',
  variant = 'basic', // 'basic' | 'feature' | 'dashboard' | 'stat' | 'interactive' | 'hover' | 'glass'
  onClick,
  ...props
}) {
  const styles = {
    basic: 'bg-surface border border-border rounded-lg shadow-sm',
    feature: 'bg-surface border border-border rounded-xl shadow-sm hover:border-primary/40 transition-colors',
    dashboard: 'bg-surface border border-border rounded-xl shadow-md p-6',
    stat: 'bg-surface border border-border rounded-lg shadow-sm p-5 flex flex-col justify-between',
    interactive: 'bg-surface border border-border rounded-lg shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-pointer hover:-translate-y-0.5',
    hover: 'bg-surface border border-border rounded-lg shadow-sm hover:shadow-floating hover:border-border transition-all duration-200',
    glass: 'glass-panel rounded-xl shadow-glass border border-white/10 dark:border-zinc-800/50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70',
  }

  // Adjust default padding for cards that don't specify it in styles
  const defaultPadding = ['dashboard', 'stat'].includes(variant) ? '' : 'p-6'

  return (
    <div
      onClick={onClick}
      className={cn(
        styles[variant],
        defaultPadding,
        onClick && variant !== 'interactive' && 'cursor-pointer hover:opacity-95',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Sub-components for composability
Card.Header = function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={cn('flex items-center justify-between pb-4 mb-4 border-b border-border', className)} {...props}>
      {children}
    </div>
  )
}

Card.Body = function CardBody({ children, className = '', ...props }) {
  return (
    <div className={cn('text-sm text-text-secondary', className)} {...props}>
      {children}
    </div>
  )
}

Card.Footer = function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={cn('flex items-center justify-between pt-4 mt-4 border-t border-border', className)} {...props}>
      {children}
    </div>
  )
}

Card.Stat = function CardStat({ label, value, trend, trendType = 'up', className = '', ...props }) {
  const trendColors = {
    up: 'text-success bg-success/10',
    down: 'text-danger bg-danger/10',
    neutral: 'text-text-secondary bg-hover',
  }
  
  return (
    <div className={cn('flex flex-col gap-1 w-full text-left', className)} {...props}>
      <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">{label}</span>
      <div className="flex items-baseline gap-2 mt-1">
        <span className="text-2xl font-bold text-text-primary tracking-tight">{value}</span>
        {trend && (
          <span className={cn('text-xs font-bold px-1.5 py-0.5 rounded-full inline-flex items-center gap-0.5', trendColors[trendType])}>
            {trendType === 'up' && <span className="i-lucide-arrow-up-right w-3 h-3" />}
            {trendType === 'down' && <span className="i-lucide-arrow-down-right w-3 h-3" />}
            <span>{trend}</span>
          </span>
        )}
      </div>
    </div>
  )
}

