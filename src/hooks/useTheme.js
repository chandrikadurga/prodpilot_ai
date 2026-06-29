import { useEffect, useState } from 'react'

/**
 * Custom hook to manage the dark/light theme state.
 * Syncs theme with localStorage and updates the document's classList.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored === 'light' || stored === 'dark') return stored
      
      // Fallback to system preference
      const media = window.matchMedia('(prefers-color-scheme: dark)')
      return media.matches ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  }
}
