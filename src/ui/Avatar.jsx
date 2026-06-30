import React from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable Avatar component supporting image fallbacks, initials generation, shapes, and online status badges.
 */
export function Avatar({
  src,
  name = '',
  size = 'md', // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape = 'circle', // 'circle' | 'square'
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

  const shapes = {
    circle: 'rounded-full',
    square: 'rounded-lg',
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
      'bg-primary text-white',
      'bg-accent text-white',
      'bg-success text-white',
      'bg-warning text-white',
      'bg-danger text-white',
      'bg-info text-white',
      'bg-secondary text-white',
    ]
    const index = Math.abs(hash) % colors.length
    return colors[index]
  }

  const statusColors = {
    online: 'bg-success ring-surface',
    offline: 'bg-text-muted ring-surface',
    busy: 'bg-danger ring-surface',
  }

  return (
    <div className="relative inline-flex select-none shrink-0">
      {src ? (
        <img
          src={src}
          alt={name}
          className={cn(
            'object-cover border-2 border-border',
            shapes[shape],
            sizes[size],
            className
          )}
          {...props}
        />
      ) : (
        <div
          className={cn(
            'flex items-center justify-center font-bold uppercase border-2 border-border',
            shapes[shape],
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

