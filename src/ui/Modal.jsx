import React, { useEffect, useRef } from 'react'
import { cn } from '../utils/cn'
import { Button } from './Button'

/**
 * Reusable modal component with backdrop blur, keyboard ESC support, backdrop click listeners, 
 * and custom scale transitions. Offers subcomponents Modal.Header, Modal.Body, and Modal.Footer.
 */
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  primaryAction, // Function
  primaryLabel = 'Confirm',
  secondaryAction, // Function
  secondaryLabel = 'Cancel',
  primaryLoading = false,
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

  // Detect if composite children (Modal.Header/Body/Footer) are used
  const hasCompositeChildren = React.Children.toArray(children).some(
    (child) => 
      React.isValidElement(child) && 
      (child.type === Modal.Header || child.type === Modal.Body || child.type === Modal.Footer)
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 dark:bg-black/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        className={cn(
          'w-full bg-surface border-2 border-border rounded-md shadow-modal overflow-hidden animate-scale-in',
          sizes[size],
          className
        )}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {hasCompositeChildren ? (
          children
        ) : (
          <>
            {/* Retro Modal Header (Win95 Style) */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-primary text-white border-b-2 border-border font-bold select-none">
              {title ? (
                <h3 id="modal-title" className="text-sm font-bold text-white tracking-wide uppercase">
                  {title}
                </h3>
              ) : (
                <div />
              )}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-6 h-6 border-2 border-white bg-surface text-black rounded-sm flex items-center justify-center font-bold text-xs hover:bg-hover active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              >
                <span className="i-lucide-x w-3.5 h-3.5 block" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5 overflow-y-auto max-h-[calc(100vh-12rem)] text-sm text-text-secondary">
              {children}
            </div>

            {/* Modal Footer */}
            {(primaryAction || secondaryAction) && (
              <div className="flex items-center justify-end gap-3 px-6 py-4 border-t-2 border-border bg-background/50">
                {secondaryAction && (
                  <Button variant="outline" onClick={secondaryAction}>
                    {secondaryLabel}
                  </Button>
                )}
                {primaryAction && (
                  <Button variant="primary" onClick={primaryAction} loading={primaryLoading}>
                    {primaryLabel}
                  </Button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

// Sub-components for composability
Modal.Header = function ModalHeader({ children, onClose, className = '', ...props }) {
  return (
    <div className={cn('flex items-center justify-between px-4 py-2.5 bg-primary text-white border-b-2 border-border font-bold select-none', className)} {...props}>
      <div className="text-sm font-bold text-white tracking-wide uppercase">{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="w-6 h-6 border-2 border-white bg-surface text-black rounded-sm flex items-center justify-center font-bold text-xs hover:bg-hover active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
        >
          <span className="i-lucide-x w-3.5 h-3.5 block" />
        </button>
      )}
    </div>
  )
}

Modal.Body = function ModalBody({ children, className = '', ...props }) {
  return (
    <div className={cn('px-6 py-5 overflow-y-auto max-h-[calc(100vh-12rem)] text-sm text-text-secondary', className)} {...props}>
      {children}
    </div>
  )
}

Modal.Footer = function ModalFooter({ children, className = '', ...props }) {
  return (
    <div className={cn('flex items-center justify-end gap-3 px-6 py-4 border-t-2 border-border bg-background/50', className)} {...props}>
      {children}
    </div>
  )
}

