import React from 'react'
import { Avatar } from '../ui/Avatar'

/**
 * Top Navbar component for the authenticated dashboard.
 * Includes workspace search, theme toggle controller, notification indicator, and user info.
 */
export function Navbar({ onMenuToggle, isDark, onThemeToggle, user }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 md:px-6 h-16 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 w-full shrink-0">
      
      {/* Left section: Drawer Toggle (Mobile) + Search bar */}
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onMenuToggle}
          className="p-2 -ml-2 rounded-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 md:hidden cursor-pointer"
          aria-label="Open menu"
        >
          <span className="i-lucide-menu w-6 h-6 block" />
        </button>

        {/* Search Input Placeholder */}
        <div className="hidden sm:flex items-center relative w-64 md:w-80">
          <span className="i-lucide-search absolute left-3.5 text-neutral-400 w-4 h-4 pointer-events-none" />
          <input
            type="search"
            placeholder="Search workspace..."
            className="w-full pl-10 pr-3.5 py-1.5 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50 dark:bg-neutral-950 text-sm text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
          />
        </div>
      </div>

      {/* Right section: Action Buttons & Avatar */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile Search Button (Placeholder) */}
        <button className="sm:hidden p-2 rounded-lg text-neutral-505 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
          <span className="i-lucide-search w-5 h-5 block" />
        </button>

        {/* Theme Toggle Switcher */}
        <button
          onClick={onThemeToggle}
          className="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors cursor-pointer"
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {isDark ? (
            <span className="i-lucide-sun w-5 h-5 block text-amber-500 animate-pulse" />
          ) : (
            <span className="i-lucide-moon w-5 h-5 block text-indigo-500" />
          )}
        </button>

        {/* Notifications Icon with Ping */}
        <button className="relative p-2 rounded-lg text-neutral-505 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-850 dark:hover:text-neutral-250 transition-colors cursor-pointer">
          <span className="i-lucide-bell w-5 h-5 block" />
          <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-500"></span>
          </span>
        </button>

        <span className="h-6 w-[1px] bg-neutral-200 dark:bg-neutral-800 hidden md:block" />

        {/* Desktop User profile detail */}
        <div className="hidden md:flex flex-col items-end leading-tight select-none">
          <span className="text-sm font-semibold text-neutral-850 dark:text-neutral-150">
            {user?.name || 'Alex Rivera'}
          </span>
          <span className="text-[11px] text-neutral-500 dark:text-neutral-450 font-medium">
            {user?.role || 'Staff PM'}
          </span>
        </div>

        {/* Avatar */}
        <Avatar name={user?.name || 'Alex Rivera'} size="sm" className="cursor-pointer" />
      </div>
    </header>
  )
}
