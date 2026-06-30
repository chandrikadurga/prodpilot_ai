import React, { useState } from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable Alert component with semantic styling variants and close dismissal.
 */
export function Alert({
  children,
  className = '',
  variant = 'info', // 'success' | 'info' | 'warning' | 'danger'
  dismissible = false,
  onDismiss,
  title,
  ...props
}) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const handleDismiss = () => {
    setVisible(false)
    if (onDismiss) onDismiss()
  }

  const variants = {
    success: {
      container: 'bg-success/15 dark:bg-success/10 border-border text-text-primary',
      icon: 'i-lucide-check-circle-2 text-success',
    },
    info: {
      container: 'bg-info/15 dark:bg-info/10 border-border text-text-primary',
      icon: 'i-lucide-info text-info',
    },
    warning: {
      container: 'bg-warning/15 dark:bg-warning/10 border-border text-text-primary',
      icon: 'i-lucide-alert-triangle text-warning',
    },
    danger: {
      container: 'bg-danger/15 dark:bg-danger/10 border-border text-text-primary',
      icon: 'i-lucide-alert-circle text-danger',
    },
  }

  const currentVariant = variants[variant]

  return (
    <div
      role="alert"
      className={cn(
        'flex items-start gap-3 p-4 rounded-md border-2 text-sm shadow-[2px_2px_0px_0px_var(--color-border)] transition-all animate-fade-in',
        currentVariant.container,
        className
      )}
      {...props}
    >
      <span className={cn(currentVariant.icon, 'w-5 h-5 shrink-0 mt-0.5')} />
      <div className="flex-1 text-left">
        {title && <h5 className="font-bold mb-1 leading-snug">{title}</h5>}
        <div className="text-text-secondary dark:text-zinc-300 font-medium">{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={handleDismiss}
          aria-label="Dismiss alert"
          className="p-1 -mr-1.5 -mt-1.5 rounded-lg text-text-muted hover:bg-hover hover:text-text-primary transition-colors cursor-pointer shrink-0"
        >
          <span className="i-lucide-x w-4 h-4 block" />
        </button>
      )}
    </div>
  )
}
