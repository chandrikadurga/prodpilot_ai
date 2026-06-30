import React, { useState, useEffect, useRef } from 'react'
import { cn } from '../utils/cn'
import { Avatar } from './Avatar'

/**
 * Reusable Dropdown component supporting keyboard navigation, custom triggers, 
 * and profile/notification sub-layouts.
 */
export function Dropdown({
  trigger,
  children,
  align = 'right', // 'left' | 'right'
  className = '',
  isOpen: controlledIsOpen,
  onOpenChange,
  ...props
}) {
  const [localIsOpen, setLocalIsOpen] = useState(false)
  const isControlled = controlledIsOpen !== undefined
  const isOpen = isControlled ? controlledIsOpen : localIsOpen
  const setIsOpen = isControlled ? onOpenChange : setLocalIsOpen
  
  const dropdownRef = useRef(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  // Handle outside click to close
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, setIsOpen])

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, setIsOpen])

  const alignStyles = {
    left: 'left-0 origin-top-left',
    right: 'right-0 origin-top-right',
  }

  return (
    <div ref={dropdownRef} className={cn('relative inline-block text-left', className)} {...props}>
      {/* Trigger Slot */}
      <div onClick={toggleDropdown} className="inline-flex w-full cursor-pointer">
        {trigger}
      </div>

      {/* Menu Options */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          tabIndex="-1"
          className={cn(
            'absolute mt-2 w-56 rounded-md bg-surface border-2 border-border shadow-dropdown z-50 overflow-hidden focus:outline-none animate-scale-in',
            alignStyles[align]
          )}
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

Dropdown.Item = function DropdownItem({
  children,
  onClick,
  className = '',
  disabled = false,
  icon: Icon,
  ...props
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!disabled && onClick) onClick()
    }
  }

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      onClick={() => {
        if (!disabled && onClick) onClick()
      }}
      onKeyDown={handleKeyDown}
      className={cn(
        'w-full text-left px-4 py-2.5 text-sm text-text-secondary hover:bg-hover hover:text-text-primary transition-colors cursor-pointer select-none outline-none focus:bg-hover focus:text-text-primary flex items-center gap-2.5',
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0 text-text-muted" />}
      <span className="flex-1">{children}</span>
    </div>
  )
}

Dropdown.Divider = function DropdownDivider({ className = '', ...props }) {
  return <div className={cn('h-[2px] bg-border my-1', className)} {...props} />
}

Dropdown.Header = function DropdownHeader({ children, className = '', ...props }) {
  return (
    <div className={cn('px-4 py-2 text-xs font-semibold text-text-muted tracking-wider uppercase select-none', className)} {...props}>
      {children}
    </div>
  )
}

/**
 * Pre-configured Profile Card drop layout item
 */
Dropdown.ProfileHeader = function DropdownProfileHeader({
  name,
  email,
  avatarUrl,
  className = '',
  ...props
}) {
  return (
    <div className={cn('px-4 py-3 flex items-center gap-3 border-b-2 border-border bg-background/35 select-none', className)} {...props}>
      <Avatar name={name} src={avatarUrl} size="sm" />
      <div className="flex flex-col text-left min-w-0">
        <span className="text-sm font-bold text-text-primary truncate">{name}</span>
        <span className="text-xs text-text-muted truncate">{email}</span>
      </div>
    </div>
  )
}

/**
 * Pre-configured Notification list item
 */
Dropdown.NotificationItem = function DropdownNotificationItem({
  title,
  description,
  timestamp,
  unread = false,
  icon: Icon,
  onClick,
  className = '',
  ...props
}) {
  return (
    <div
      onClick={onClick}
      role="menuitem"
      tabIndex={0}
      className={cn(
        'px-4 py-3 border-b-2 border-border last:border-0 text-left flex items-start gap-3 hover:bg-hover transition-colors cursor-pointer select-none outline-none focus:bg-hover',
        unread && 'bg-primary/5 dark:bg-primary-950/10',
        className
      )}
      {...props}
    >
      {Icon && (
        <div className={cn('p-1.5 rounded-sm shrink-0 mt-0.5 border-2 border-border', unread ? 'bg-primary/15 text-primary' : 'bg-background text-text-secondary')}>
          <Icon className="w-4 h-4" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <span className={cn('text-xs font-bold text-text-primary truncate', unread && 'text-primary')}>{title}</span>
          {unread && (
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
          )}
        </div>
        <p className="text-xs text-text-secondary truncate mt-0.5">{description}</p>
        <span className="text-[10px] text-text-muted block mt-1">{timestamp}</span>
      </div>
    </div>
  )
}
