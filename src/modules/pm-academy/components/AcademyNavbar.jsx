import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../../constants/routes'
import { cn } from '../../../utils/cn'

/**
 * Folder-tab styled sub-navigation navbar for the PM Academy sections.
 */
export function AcademyNavbar({ className = '', ...props }) {
  const tabs = [
    { label: 'Overview', path: ROUTES.ACADEMY, end: true },
    { label: 'Books', path: ROUTES.ACADEMY_BOOKS },
    { label: 'PDF Library', path: ROUTES.ACADEMY_PDFS },
    { label: 'Frameworks', path: ROUTES.ACADEMY_FRAMEWORKS },
    { label: 'Templates', path: ROUTES.ACADEMY_TEMPLATES },
    { label: 'Learning Paths', path: ROUTES.ACADEMY_PATHS },
    { label: 'Interview Prep', path: ROUTES.ACADEMY_INTERVIEW },
    { label: 'Bookmarks', path: ROUTES.ACADEMY_BOOKMARKS },
  ]

  return (
    <div className={cn('w-full space-y-4 mb-6', className)} {...props}>
      {/* Module Title Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b-2 border-border pb-4 text-left">
        <div>
          <h1 className="text-h-l text-text-primary flex items-center gap-2">
            <span className="i-lucide-graduation-cap text-primary" />
            PM Academy
          </h1>
          <p className="text-xs text-text-secondary mt-1">
            Curated books, frameworks, checklists, templates, and career pathways.
          </p>
        </div>

        {/* Short info banner */}
        <div className="flex items-center gap-3 px-3 py-1.5 border-2 border-border rounded-sm bg-success/10 text-success text-[10px] font-bold uppercase select-none w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          Daily Learning active
        </div>
      </div>

      {/* Retro Folder Tabs Nav */}
      <nav className="flex items-center gap-1 border-b-2 border-border overflow-x-auto no-scrollbar scroll-smooth pt-1.5 select-none shrink-0">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.end}
            className={({ isActive }) =>
              cn(
                'px-4 py-2 border-t-2 border-x-2 font-bold text-xs uppercase rounded-t-sm whitespace-nowrap cursor-pointer transition-all duration-100',
                isActive
                  ? 'border-border bg-surface text-primary -translate-y-[-2px] relative z-10 shadow-none'
                  : 'border-transparent text-text-muted hover:text-text-primary hover:bg-hover/40'
              )
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
