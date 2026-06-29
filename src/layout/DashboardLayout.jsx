import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { Navbar } from '../components/Navbar'
import { useAuth } from '../hooks/useAuth.jsx'
import { useTheme } from '../hooks/useTheme'

/**
 * Reusable layout for all authenticated pages.
 * Handles the responsive layout grid: Sidebar, Navbar, and content viewport with footer.
 */
export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { user, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()

  const handleMenuToggle = () => setIsSidebarOpen(prev => !prev)
  const handleCloseSidebar = () => setIsSidebarOpen(false)

  return (
    <div className="flex h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      {/* Left Sidebar Navigation */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        onLogout={logout}
        user={user}
      />

      {/* Content Viewport */}
      <div className="flex-grow flex flex-col min-w-0 overflow-hidden">
        {/* Top Header Navbar */}
        <Navbar
          onMenuToggle={handleMenuToggle}
          isDark={isDark}
          onThemeToggle={toggleTheme}
          user={user}
        />

        {/* Scrollable page body */}
        <main className="flex-grow overflow-y-auto px-4 md:px-8 py-6 flex flex-col">
          <div className="flex-grow page-fade-in">
            <Outlet />
          </div>

          {/* Standard brand footer */}
          <footer className="mt-8 pt-6 pb-2 text-center border-t border-neutral-200/50 dark:border-neutral-900/60 text-xs text-neutral-400 font-medium select-none shrink-0">
            <p>© {new Date().getFullYear()} ProdPilot AI. Built for Product Architects. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  )
}
