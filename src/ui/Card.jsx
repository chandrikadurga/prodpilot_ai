import React from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable card container component supporting multiple structural and hover states.
 */
export function Card({
  children,
  className = '',
  variant = 'default', // 'default' | 'glass' | 'flat' | 'interactive'
  ...props
}) {
  const styles = {
    default: 'bg-white dark:bg-neutral-900 border border-neutral-200/85 dark:border-neutral-800/85 rounded-xl shadow-soft',
    glass: 'glass-panel rounded-xl shadow-glass',
    flat: 'bg-neutral-100 dark:bg-neutral-800 border border-transparent rounded-xl',
    interactive: 'bg-white dark:bg-neutral-900 border border-neutral-200/85 dark:border-neutral-800/85 rounded-xl shadow-soft hover:shadow-medium hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-250 cursor-pointer hover:-translate-y-0.5',
  }

  return (
    <div
      className={cn(styles[variant], 'p-6', className)}
      {...props}
    >
      {children}
    </div>
  )
}
