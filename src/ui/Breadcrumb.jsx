import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../utils/cn'

/**
 * Reusable Breadcrumb component for page hierarchies.
 */
export function Breadcrumb({
  items = [], // [{label, href, icon: Icon}]
  separator = 'chevron', // 'chevron' | 'slash'
  className = '',
  ...props
}) {
  const separators = {
    chevron: <span className="i-lucide-chevron-right w-3.5 h-3.5 mx-1.5 text-text-muted shrink-0" />,
    slash: <span className="mx-2 text-text-muted shrink-0">/</span>,
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center text-xs font-semibold text-text-secondary select-none overflow-x-auto no-scrollbar py-1 w-full', className)}
      {...props}
    >
      <ol className="flex items-center min-w-max">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          const Icon = item.icon

          return (
            <li key={idx} className="flex items-center">
              {idx > 0 && separators[separator]}
              
              {isLast ? (
                <span className="text-text-primary font-bold truncate max-w-[160px] md:max-w-none" aria-current="page">
                  {Icon && <Icon className="w-3.5 h-3.5 inline mr-1" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-text-primary flex items-center transition-colors outline-none focus-visible:text-text-primary"
                >
                  {Icon && <Icon className="w-3.5 h-3.5 inline mr-1" />}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
