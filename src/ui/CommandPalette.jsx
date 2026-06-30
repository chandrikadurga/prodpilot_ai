import React, { useState, useEffect, useRef } from 'react'
import { cn } from '../utils/cn'

/**
 * Linear-inspired Command Palette dialog (UI layout and keyboard selection state only).
 * Opens globally with Ctrl+K / Cmd+K.
 */
export function CommandPalette({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  ...props
}) {
  const [localIsOpen, setLocalIsOpen] = useState(false)
  const isControlled = controlledIsOpen !== undefined
  const isOpen = isControlled ? controlledIsOpen : localIsOpen
  const onClose = isControlled ? controlledOnClose : () => setLocalIsOpen(false)

  const [search, setSearch] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)
  
  // Register Cmd+K / Ctrl+K global keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isControlled) {
          if (isOpen) onClose()
          // Otherwise parent opens it
        } else {
          setLocalIsOpen((prev) => !prev)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, isControlled, onClose])

  // Focus input when palette opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 50)
      setActiveIndex(0)
    }
  }, [isOpen])

  // Commands dataset
  const groups = [
    {
      title: 'Suggestions',
      items: [
        { id: 'proj-new', label: 'Create new project...', shortcut: 'P N', icon: 'i-lucide-plus' },
        { id: 'prd-gen', label: 'Generate PRD draft...', shortcut: 'G P', icon: 'i-lucide-file-text' },
        { id: 'theme-toggle', label: 'Toggle dark mode theme', shortcut: 'T T', icon: 'i-lucide-sun-moon' },
      ],
    },
    {
      title: 'Navigation',
      items: [
        { id: 'nav-dash', label: 'Go to Dashboard', shortcut: 'G D', icon: 'i-lucide-layout-dashboard' },
        { id: 'nav-proj', label: 'Go to Projects', shortcut: 'G P', icon: 'i-lucide-folder' },
        { id: 'nav-set', label: 'Go to Settings', shortcut: 'G S', icon: 'i-lucide-settings' },
      ],
    },
    {
      title: 'Recent Activity',
      items: [
        { id: 'act-feed', label: 'View user feedback log', shortcut: 'V F', icon: 'i-lucide-message-square' },
        { id: 'act-rep', label: 'Generate quarterly reports', shortcut: 'V R', icon: 'i-lucide-bar-chart-3' },
      ],
    },
  ]

  // Filter items by search text
  const filteredGroups = groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0)

  const flattenedFilteredItems = filteredGroups.flatMap((group) => group.items)

  // Handle keyboard selectors inside palette
  useEffect(() => {
    const handleNavigation = (e) => {
      if (!isOpen) return
      
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((prev) => (prev + 1) % flattenedFilteredItems.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((prev) => (prev - 1 + flattenedFilteredItems.length) % flattenedFilteredItems.length)
      } else if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const selected = flattenedFilteredItems[activeIndex]
        if (selected) {
          alert(`Command selected: ${selected.label}`)
          onClose()
        }
      }
    }
    
    window.addEventListener('keydown', handleNavigation)
    return () => window.removeEventListener('keydown', handleNavigation)
  }, [isOpen, activeIndex, flattenedFilteredItems, onClose])

  if (!isOpen) return null

  // Helper to check if an item is active
  let absoluteItemIndex = -1

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-16 bg-zinc-950/40 dark:bg-black/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      {/* Palette Container */}
      <div
        className="w-full max-w-xl bg-surface border-2 border-border rounded-md shadow-modal overflow-hidden animate-scale-in flex flex-col mt-12 md:mt-24"
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {/* Search header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b-2 border-border">
          <span className="i-lucide-search text-text-secondary w-5 h-5 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setActiveIndex(0)
            }}
            className="w-full text-sm text-text-primary placeholder-text-muted bg-transparent border-0 focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded border-2 border-border bg-background text-[10px] font-bold text-text-muted select-none">
            ESC
          </kbd>
        </div>

        {/* Results menu */}
        <div className="max-h-[360px] overflow-y-auto p-2 space-y-3">
          {flattenedFilteredItems.length === 0 ? (
            <div className="px-4 py-8 text-center text-xs text-text-muted">
              No commands found matching "{search}"
            </div>
          ) : (
            filteredGroups.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-1">
                <span className="px-3 py-1.5 text-[10px] font-bold text-text-muted uppercase tracking-wider block text-left select-none">
                  {group.title}
                </span>
                
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    absoluteItemIndex++
                    const isActive = absoluteItemIndex === activeIndex
                    
                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => {
                          // Allow mouse hover to update index
                          const index = flattenedFilteredItems.findIndex((fi) => fi.id === item.id)
                          if (index !== -1) setActiveIndex(index)
                        }}
                        onClick={() => {
                          alert(`Command selected: ${item.label}`)
                          onClose()
                        }}
                        className={cn(
                          'flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-text-secondary transition-colors cursor-pointer select-none',
                          isActive
                            ? 'bg-primary text-white'
                            : 'hover:bg-hover hover:text-text-primary'
                        )}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={cn(item.icon, 'w-4 h-4 shrink-0', isActive ? 'text-white' : 'text-text-muted')} />
                          <span className="truncate">{item.label}</span>
                        </div>
                        {item.shortcut && (
                          <div className="flex gap-1.5 shrink-0">
                            {item.shortcut.split(' ').map((char, charIdx) => (
                              <kbd
                                key={charIdx}
                                className={cn(
                                  'px-1.5 py-0.5 rounded text-[9px] font-bold border',
                                  isActive
                                    ? 'bg-primary-hover border-primary/50 text-white'
                                    : 'bg-background border-2 border-border text-text-muted'
                                )}
                              >
                                {char}
                              </kbd>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info instructions */}
        <div className="flex items-center justify-between px-4 py-2 bg-background border-t-2 border-border text-[10px] text-text-muted select-none">
          <div className="flex gap-2">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>Command Menu</span>
        </div>
      </div>
    </div>
  )
}
export default CommandPalette
