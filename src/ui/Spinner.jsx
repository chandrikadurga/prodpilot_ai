import React from 'react'
import { cn } from '../utils/cn'

/**
 * Spinner component used for showing loading state.
 */
export function Spinner({ size = 'md', variant = 'primary', className = '' }) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  }

  const variants = {
    primary: 'border-neutral-200 border-t-primary-600 dark:border-neutral-700 dark:border-t-primary-400',
    secondary: 'border-neutral-200 border-t-secondary-600 dark:border-neutral-700 dark:border-t-secondary-400',
    neutral: 'border-neutral-200 border-t-neutral-600 dark:border-neutral-700 dark:border-t-neutral-300',
    light: 'border-white/20 border-t-white',
    dark: 'border-neutral-800/20 border-t-neutral-800 dark:border-neutral-200/20 dark:border-t-neutral-200',
  }

  return (
    <div
      role="status"
      className={cn(
        'animate-spin rounded-full border-solid',
        sizes[size],
        variants[variant],
        className
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
