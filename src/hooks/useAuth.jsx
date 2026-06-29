import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

/**
 * AuthProvider component that wraps the app and provides the authentication state.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('prodpilot_user')
      return stored ? JSON.parse(stored) : null
    }
    return null
  })

  const login = (email, password) => {
    // Simulated login for Day 1
    const mockUser = {
      email,
      name: 'Alex Rivera',
      role: 'Staff Product Manager',
      avatarUrl: '', // Will fallback to default letter avatar
    }
    setUser(mockUser)
    localStorage.setItem('prodpilot_user', JSON.stringify(mockUser))
    return true
  }

  const register = (name, email, password) => {
    // Simulated registration for Day 1
    const mockUser = {
      email,
      name: name || 'New User',
      role: 'Product Manager',
      avatarUrl: '',
    }
    setUser(mockUser)
    localStorage.setItem('prodpilot_user', JSON.stringify(mockUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('prodpilot_user')
  }

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Hook to access the mock authentication context.
 */
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
