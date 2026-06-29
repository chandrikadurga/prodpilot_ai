import React from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable badge pill component supporting solid and subtle styling variants.
 */
export function Badge({
  children,
  className = '',
  variant = 'primary',
  type = 'subtle', // 'solid' | 'subtle'
  ...props
}) {
  const styles = {
    solid: {
      primary: 'bg-primary-600 text-white',
      secondary: 'bg-secondary-600 text-white',
      success: 'bg-success-600 text-white',
      warning: 'bg-warning-600 text-white',
      danger: 'bg-danger-600 text-white',
      neutral: 'bg-neutral-600 text-white',
    },
    subtle: {
      primary: 'bg-primary-50 text-primary-700 dark:bg-primary-950/40 dark:text-primary-300 border border-primary-200/30 dark:border-primary-800/30',
      secondary: 'bg-secondary-50 text-secondary-700 dark:bg-secondary-950/40 dark:text-secondary-300 border border-secondary-200/30 dark:border-secondary-800/30',
      success: 'bg-success-50 text-success-700 dark:bg-success-950/40 dark:text-success-300 border border-success-200/30 dark:border-success-800/30',
      warning: 'bg-warning-50 text-warning-700 dark:bg-warning-950/40 dark:text-warning-300 border border-warning-200/30 dark:border-warning-800/30',
      danger: 'bg-danger-50 text-danger-700 dark:bg-danger-950/40 dark:text-danger-300 border border-danger-200/30 dark:border-danger-800/30',
      neutral: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-350 border border-neutral-200/30 dark:border-neutral-700/30',
    }
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold select-none leading-none',
        styles[type][variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
