import React from 'react'
import { cn } from '../utils/cn'
import { Spinner } from './Spinner'

/**
 * Reusable Button component supporting variants, sizes, loading states, and icons.
 */
export function Button({
  children,
  className = '',
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
  size = 'md', // 'sm' | 'md' | 'lg'
  loading = false,
  disabled = false,
  icon: Icon, // Lucide icon component
  iconPosition = 'left',
  type = 'button',
  fullWidth = false,
  ...props
}) {
  const baseStyles = 'btn-base font-bold'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-surface text-text-primary',
    outline: 'bg-transparent text-text-secondary',
    ghost: 'bg-transparent text-text-secondary border-transparent shadow-none active:translate-x-0 active:translate-y-0 hover:bg-hover hover:border-border',
    danger: 'bg-danger text-white hover:bg-red-700',
    success: 'bg-success text-white hover:bg-emerald-600',
  }

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-sm',
    md: 'text-sm px-4 py-2 gap-2 rounded-md',
    lg: 'text-base px-5 py-2.5 gap-2.5 rounded-lg',
  }

  // Adjust padding for square icon buttons if no text is provided
  const hasText = children !== undefined && children !== null && children !== '';
  const paddingStyles = !hasText && Icon ? {
    sm: 'p-1.5 rounded-sm',
    md: 'p-2 rounded-md',
    lg: 'p-2.5 rounded-lg',
  }[size] : sizes[size]

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(
        baseStyles,
        variants[variant],
        paddingStyles,
        fullWidth && 'w-full',
        loading && 'opacity-70 cursor-not-allowed pointer-events-none',
        className
      )}
      {...props}
    >
      {loading && (
        <Spinner 
          size="sm" 
          variant={
            ['primary', 'danger', 'success'].includes(variant) ? 'light' : 'neutral'
          } 
          className="mr-1 shrink-0"
        />
      )}
      {!loading && Icon && iconPosition === 'left' && (
        <Icon className={cn('w-4 h-4 shrink-0', hasText && 'mr-0.5')} aria-hidden="true" />
      )}
      {children}
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className={cn('w-4 h-4 shrink-0', hasText && 'ml-0.5')} aria-hidden="true" />
      )}
    </button>
  )
}

