import React from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable Avatar component supporting image fallbacks, initials generation, and online status badges.
 */
export function Avatar({
  src,
  name = '',
  size = 'md',
  className = '',
  status = '', // 'online' | 'offline' | 'busy' | ''
  ...props
}) {
  const sizes = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  }

  const getInitials = (fullName) => {
    if (!fullName) return 'U'
    const parts = fullName.split(' ').filter(Boolean)
    if (parts.length === 0) return 'U'
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
  }

  const getHashColor = (str) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    const colors = [
      'bg-primary-500 text-white',
      'bg-secondary-500 text-white',
      'bg-emerald-500 text-white',
      'bg-amber-500 text-white',
      'bg-rose-500 text-white',
      'bg-blue-500 text-white',
      'bg-purple-500 text-white',
      'bg-teal-500 text-white',
    ]
    const index = Math.abs(hash) % colors.length
    return colors[index]
  }

  const statusColors = {
    online: 'bg-success ring-white dark:ring-neutral-900',
    offline: 'bg-neutral-400 ring-white dark:ring-neutral-900',
    busy: 'bg-danger ring-white dark:ring-neutral-900',
  }

  return (
    <div className="relative inline-flex select-none">
      {src ? (
        <img
          src={src}
          alt={name}
          className={cn('rounded-full object-cover border border-neutral-200/50 dark:border-neutral-700/50', sizes[size], className)}
          {...props}
        />
      ) : (
        <div
          className={cn(
            'rounded-full flex items-center justify-center font-bold uppercase border border-neutral-200/20 dark:border-neutral-800/20',
            sizes[size],
            getHashColor(name || 'User'),
            className
          )}
          {...props}
        >
          {getInitials(name)}
        </div>
      )}
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 block rounded-full ring-2',
            size === 'xs' || size === 'sm' ? 'w-2 h-2' : 'w-2.5 h-2.5',
            statusColors[status]
          )}
        />
      )}
    </div>
  )
}
