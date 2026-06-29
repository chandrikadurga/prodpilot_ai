import React from 'react'
import { cn } from '../utils/cn'
import { Spinner } from './Spinner'

/**
 * Reusable button component with modern variants, loading state, and icons.
 */
export function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  type = 'button',
  ...props
}) {
  const baseStyles = 'btn-base'

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-sm focus:ring-primary-500/50 active:scale-98',
    secondary: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:ring-neutral-500/50 active:scale-98 border border-neutral-200/50 dark:border-neutral-700/50',
    accent: 'bg-secondary-600 text-white hover:bg-secondary-700 hover:shadow-sm focus:ring-secondary-500/50 active:scale-98',
    outline: 'bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:ring-primary-500/50 active:scale-98',
    ghost: 'bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:ring-neutral-500/50 active:scale-98',
    danger: 'bg-danger-600 text-white hover:bg-danger-700 focus:ring-danger-500/50 active:scale-98',
  }

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-md',
    md: 'text-sm px-4 py-2 gap-2 rounded-lg',
    lg: 'text-base px-6 py-2.5 gap-2.5 rounded-xl',
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        loading && 'opacity-70 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {loading && <Spinner size="sm" variant={variant === 'primary' || variant === 'danger' || variant === 'accent' ? 'light' : 'dark'} />}
      {!loading && Icon && iconPosition === 'left' && <span className={cn(Icon, 'w-4 h-4')} />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <span className={cn(Icon, 'w-4 h-4')} />}
    </button>
  )
}
