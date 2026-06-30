import React, { createContext, useContext, useState, useCallback } from 'react'
import { cn } from '../utils/cn'

const ToastContext = createContext(null)

/**
 * Toast Notification Provider that mounts a container in the top-right 
 * and provides triggers to launch toasts from anywhere.
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const addToast = useCallback(({ title, message, variant = 'info', duration = 3000 }) => {
    const id = Math.random().toString(36).substring(2, 9)
    
    setToasts((prev) => [...prev, { id, title, message, variant, duration }])
    
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }
  }, [removeToast])

  const toastHelpers = {
    show: addToast,
    success: (message, title = 'Success') => addToast({ message, title, variant: 'success' }),
    error: (message, title = 'Error') => addToast({ message, title, variant: 'danger' }),
    info: (message, title = 'Information') => addToast({ message, title, variant: 'info' }),
    warning: (message, title = 'Warning') => addToast({ message, title, variant: 'warning' }),
  }

  const icons = {
    success: 'i-lucide-check-circle-2 text-success',
    info: 'i-lucide-info text-info',
    warning: 'i-lucide-alert-triangle text-warning',
    danger: 'i-lucide-alert-circle text-danger',
  }

  const borderColors = {
    success: 'border-l-4 border-l-success',
    info: 'border-l-4 border-l-info',
    warning: 'border-l-4 border-l-warning',
    danger: 'border-l-4 border-l-danger',
  }

  return (
    <ToastContext.Provider value={toastHelpers}>
      {children}
      
      {/* Toast Overlay Container */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 w-full max-w-sm pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="alert"
            className={cn(
              'pointer-events-auto flex items-start gap-3 p-4 bg-surface border border-border rounded-lg shadow-floating animate-slide-up select-none',
              borderColors[t.variant]
            )}
          >
            {/* Icon */}
            <span className={cn(icons[t.variant], 'w-5 h-5 shrink-0 mt-0.5')} />

            {/* Content */}
            <div className="flex-1 text-left min-w-0">
              {t.title && (
                <h5 className="text-sm font-bold text-text-primary leading-snug">{t.title}</h5>
              )}
              <p className="text-xs text-text-secondary mt-0.5 leading-normal">{t.message}</p>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={() => removeToast(t.id)}
              className="p-1 -mr-1.5 -mt-1.5 rounded-lg text-text-muted hover:bg-hover hover:text-text-primary transition-colors cursor-pointer shrink-0"
              aria-label="Close notification"
            >
              <span className="i-lucide-x w-4 h-4 block" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

/**
 * Custom hook to trigger Toast alerts.
 */
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
