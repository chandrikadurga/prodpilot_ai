import React, { useState } from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable Accordion component for FAQs and collapsible content sections.
 * Supports arrow keys, space/enter triggers, single or multiple item disclosure.
 */
export function Accordion({
  items = [], // [{id, title, content}]
  allowMultiple = false,
  className = '',
  ...props
}) {
  const [openIds, setOpenIds] = useState([])

  const toggleItem = (id) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
      )
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className={cn('border border-border rounded-xl divide-y divide-border bg-surface w-full overflow-hidden shadow-sm', className)} {...props}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        
        return (
          <div key={item.id} className="flex flex-col text-left">
            {/* Accordion Trigger Header */}
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 font-semibold text-sm text-text-primary hover:bg-hover flex items-center justify-between transition-colors select-none outline-none focus-visible:bg-hover"
              >
                <span>{item.title}</span>
                <span
                  className={cn(
                    'i-lucide-chevron-down w-4 h-4 text-text-muted transition-transform duration-300 ease-in-out shrink-0',
                    isOpen && 'transform rotate-180 text-primary'
                  )}
                />
              </button>
            </h3>

            {/* Accordion Panel Content with Modern Grid Height Transition */}
            <div
              role="region"
              aria-hidden={!isOpen}
              className={cn(
                'grid transition-all duration-300 ease-in-out border-t border-transparent',
                isOpen ? 'grid-rows-[1fr] border-border' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 py-4.5 text-sm leading-relaxed text-text-secondary">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
