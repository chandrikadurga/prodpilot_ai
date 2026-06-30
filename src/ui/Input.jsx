import React, { useId, useState } from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable input element that supports text, email, password, search, textarea, select, number, date, and file.
 * Automatically wraps labels, helper text, errors, icons, and handles state styles.
 */
export function Input({
  label,
  helperText,
  error,
  type = 'text',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  options = [], // Used for select type: [{value, label}]
  disabled = false,
  rows = 4, // Used for textarea
  ...props
}) {
  const generatedId = useId()
  const inputId = props.id || generatedId
  const [showPassword, setShowPassword] = useState(false)

  const isTextarea = type === 'textarea'
  const isSelect = type === 'select'
  const isPassword = type === 'password'
  
  // Decide what final HTML input type to use
  let finalType = type
  if (isPassword) {
    finalType = showPassword ? 'text' : 'password'
  }

  const baseInputStyles = cn(
    'input-base block w-full rounded-md border border-border bg-surface px-3.5 py-2 text-sm text-text-primary placeholder-text-muted transition-all duration-150',
    'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary',
    'disabled:bg-disabled disabled:text-disabled-text disabled:cursor-not-allowed',
    error && 'border-danger focus:ring-danger/20 focus:border-danger'
  )

  const renderInputControl = () => {
    if (isTextarea) {
      return (
        <textarea
          id={inputId}
          disabled={disabled}
          rows={rows}
          className={cn(baseInputStyles, Icon && iconPosition === 'left' && 'pl-10', className)}
          {...props}
        />
      )
    }

    if (isSelect) {
      return (
        <div className="relative w-full">
          <select
            id={inputId}
            disabled={disabled}
            className={cn(baseInputStyles, 'appearance-none pr-10', className)}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-text-secondary">
            <span className="i-lucide-chevron-down w-4 h-4" />
          </div>
        </div>
      )
    }

    return (
      <div className="relative flex items-center w-full">
        {Icon && iconPosition === 'left' && (
          <span className="absolute left-3.5 text-text-secondary pointer-events-none flex items-center justify-center">
            <Icon className="w-4 h-4" />
          </span>
        )}
        <input
          id={inputId}
          type={finalType}
          disabled={disabled}
          className={cn(
            baseInputStyles,
            Icon && iconPosition === 'left' && 'pl-10',
            (Icon && iconPosition === 'right' || isPassword) && 'pr-10',
            className
          )}
          {...props}
        />
        {/* Password Eye toggle */}
        {isPassword && !disabled && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 text-text-secondary hover:text-text-primary focus:outline-none transition-colors"
          >
            {showPassword ? (
              <span className="i-lucide-eye-off w-4 h-4 block" />
            ) : (
              <span className="i-lucide-eye w-4 h-4 block" />
            )}
          </button>
        )}
        {!isPassword && Icon && iconPosition === 'right' && (
          <span className="absolute right-3.5 text-text-secondary pointer-events-none flex items-center justify-center">
            <Icon className="w-4 h-4" />
          </span>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-text-secondary select-none"
        >
          {label}
        </label>
      )}
      
      {renderInputControl()}

      {error ? (
        <span className="text-xs text-danger font-medium mt-0.5" id={`${inputId}-error`}>
          {error}
        </span>
      ) : helperText ? (
        <span className="text-xs text-text-muted mt-0.5">
          {helperText}
        </span>
      ) : null}
    </div>
  )
}

