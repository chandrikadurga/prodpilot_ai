import React from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable Badge component supporting solid and subtle styling, shapes, and semantic color variants.
 */
export function Badge({
  children,
  className = '',
  variant = 'primary', // 'primary' | 'success' | 'warning' | 'danger' | 'neutral'
  type = 'subtle', // 'solid' | 'subtle'
  shape = 'rounded', // 'rounded' (pill-style) | 'square' (soft rounded edges)
  ...props
}) {
  const variants = {
    solid: {
      primary: 'bg-primary text-white border-transparent',
      success: 'bg-success text-white border-transparent',
      warning: 'bg-warning text-white border-transparent',
      danger: 'bg-danger text-white border-transparent',
      neutral: 'bg-secondary text-white border-transparent',
    },
    subtle: {
      primary: 'bg-primary/10 text-primary border-primary/20 dark:border-primary/10',
      success: 'bg-success/10 text-success border-success/20 dark:border-success/10',
      warning: 'bg-warning/10 text-warning border-warning/20 dark:border-warning/10',
      danger: 'bg-danger/10 text-danger border-danger/20 dark:border-danger/10',
      neutral: 'bg-surface border-border text-text-secondary',
    }
  }

  const shapes = {
    rounded: 'rounded-pill px-2.5 py-0.5',
    square: 'rounded-sm px-2 py-0.5',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center text-[11px] font-bold border-2 select-none leading-none tracking-wide uppercase',
        variants[type][variant],
        shapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

