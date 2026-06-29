import React from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable layout divider with options for text label overlay and vertical orientation.
 */
export function Divider({
  children,
  className = '',
  orientation = 'horizontal', // 'horizontal' | 'vertical'
  align = 'center', // 'left' | 'center' | 'right'
  ...props
}) {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn('inline-block w-[1px] bg-neutral-200 dark:bg-neutral-800 self-stretch min-h-[1em]', className)}
        {...props}
      />
    )
  }

  if (!children) {
    return (
      <div
        className={cn('w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 my-4', className)}
        {...props}
      />
    )
  }

  return (
    <div
      className={cn(
        'flex items-center text-xs font-medium text-neutral-400 dark:text-neutral-500 my-4 select-none',
        className
      )}
      {...props}
    >
      <div className={cn('h-[1px] bg-neutral-200 dark:bg-neutral-800', align === 'left' ? 'w-4' : 'flex-grow')} />
      <span className="px-3 shrink-0">{children}</span>
      <div className={cn('h-[1px] bg-neutral-200 dark:bg-neutral-800', align === 'right' ? 'w-4' : 'flex-grow')} />
    </div>
  )
}
