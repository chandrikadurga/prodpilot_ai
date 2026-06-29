import React from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '../utils/cn'
import { SIDEBAR_NAV_ITEMS } from '../constants/navigation'
import { Avatar } from '../ui/Avatar'

/**
 * Modern SaaS sidebar component featuring scrollable navigation, active path states,
 * and a profile card at the bottom. Collapses on mobile with a backdrop shadow.
 */
export function Sidebar({ isOpen, onClose, onLogout, user }) {
  return (
    <>
      {/* Mobile Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-950/30 md:hidden backdrop-blur-xs transition-opacity duration-200"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex flex-col w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200/80 dark:border-neutral-800/80 transition-transform duration-300 ease-in-out md:translate-x-0 md:static shrink-0',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Header/Logo */}
        <div className="flex items-center gap-3 px-6 h-16 border-b border-neutral-100 dark:border-neutral-800 shrink-0">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-extrabold text-lg select-none shadow-sm">
            P
          </div>
          <span className="font-extrabold text-lg text-neutral-900 dark:text-neutral-50 tracking-tight select-none">
            ProdPilot <span className="text-primary">AI</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {SIDEBAR_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose} // close sidebar drawer on mobile navigation
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 select-none',
                  isActive
                    ? 'bg-primary-50 dark:bg-primary-950/20 text-primary dark:text-primary font-bold shadow-sm'
                    : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-200'
                )
              }
            >
              <span className={cn(item.icon, 'w-5 h-5')} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom User Section */}
        <div className="p-4 border-t border-neutral-100 dark:border-neutral-800 shrink-0 bg-neutral-50/50 dark:bg-neutral-900/30">
          <div className="flex items-center gap-3 mb-4">
            <Avatar name={user?.name || 'Alex Rivera'} size="sm" status="online" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 truncate leading-snug">
                {user?.name || 'Alex Rivera'}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                {user?.role || 'Staff PM'}
              </p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center justify-center gap-2 w-full px-3 py-2 border border-neutral-200 dark:border-neutral-850 rounded-lg text-xs font-bold text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-danger-600 dark:hover:text-danger-400 transition-colors cursor-pointer"
          >
            <span className="i-lucide-log-out w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}
