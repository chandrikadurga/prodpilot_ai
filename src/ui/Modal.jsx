import React, { useEffect, useRef } from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable accessible modal dialog with backdrop blur, overlay close, and escape key listener.
 */
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  ...props
}) {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/40 dark:bg-neutral-950/60 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        className={cn(
          'w-full bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl shadow-hard overflow-hidden transition-all transform duration-250 page-fade-in',
          sizes[size],
          className
        )}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 dark:border-neutral-800">
          {title ? (
            <h3 id="modal-title" className="text-base font-bold text-neutral-900 dark:text-neutral-50">
              {title}
            </h3>
          ) : (
            <div />
          )}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-lg text-neutral-450 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
          >
            <span className="i-lucide-x w-5 h-5 block" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4 overflow-y-auto max-h-[calc(100vh-12rem)] text-neutral-600 dark:text-neutral-350">
          {children}
        </div>
      </div>
    </div>
  )
}
