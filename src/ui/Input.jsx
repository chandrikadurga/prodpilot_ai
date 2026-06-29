import React, { useId } from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable and accessible input field supporting icons, labels, and error states.
 */
export function Input({
  label,
  error,
  type = 'text',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const generatedId = useId()
  const inputId = props.id || generatedId

  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 select-none"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center w-full">
        {Icon && iconPosition === 'left' && (
          <span className={cn(Icon, 'absolute left-3.5 text-neutral-400 pointer-events-none w-4 h-4')} />
        )}
        <input
          id={inputId}
          type={type}
          className={cn(
            'input-base',
            Icon && iconPosition === 'left' && 'pl-10',
            Icon && iconPosition === 'right' && 'pr-10',
            error && 'border-danger-500 focus:ring-danger-500/20 focus:border-danger-500',
            className
          )}
          {...props}
        />
        {Icon && iconPosition === 'right' && (
          <span className={cn(Icon, 'absolute right-3.5 text-neutral-400 pointer-events-none w-4 h-4')} />
        )}
      </div>
      {error && (
        <span className="text-xs text-danger-500 font-medium mt-0.5">
          {error}
        </span>
      )}
    </div>
  )
}
