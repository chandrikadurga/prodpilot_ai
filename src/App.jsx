import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AuthProvider } from './hooks/useAuth.jsx'

/**
 * Main Application root component.
 * Integrates global state providers and sets up routing context.
 */
export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
