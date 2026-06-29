import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { useAuth } from '../hooks/useAuth.jsx'

// Import Layouts
import DashboardLayout from '../layout/DashboardLayout'

// Import Pages
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Projects from '../pages/Projects'
import PRDs from '../pages/PRDs'
import Roadmap from '../pages/Roadmap'
import Meetings from '../pages/Meetings'
import Feedback from '../pages/Feedback'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'
import NotFound from '../pages/NotFound'

/**
 * Route guard component for authenticated pages.
 * Redirects user to Login if they are not authenticated.
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to={ROUTES.LOGIN} replace />
}

/**
 * Route guard component for guest-only pages (e.g. Login, Register).
 * Redirects user to Dashboard if they are already authenticated.
 */
function GuestRoute({ children }) {
  const { isAuthenticated } = useAuth()
  return !isAuthenticated ? children : <Navigate to={ROUTES.DASHBOARD} replace />
}

/**
 * React Router core router configuration.
 */
export const router = createBrowserRouter([
  // Public Landing Page
  {
    path: ROUTES.LANDING,
    element: <Landing />,
  },
  
  // Guest-only Auth Pages
  {
    path: ROUTES.LOGIN,
    element: (
      <GuestRoute>
        <Login />
      </GuestRoute>
    ),
  },
  {
    path: ROUTES.REGISTER,
    element: (
      <GuestRoute>
        <Register />
      </GuestRoute>
    ),
  },
  
  // Authenticated Layout-wrapped Pages
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTES.PROJECTS,
        element: <Projects />,
      },
      {
        path: ROUTES.PRDS,
        element: <PRDs />,
      },
      {
        path: ROUTES.ROADMAP,
        element: <Roadmap />,
      },
      {
        path: ROUTES.MEETINGS,
        element: <Meetings />,
      },
      {
        path: ROUTES.FEEDBACK,
        element: <Feedback />,
      },
      {
        path: ROUTES.REPORTS,
        element: <Reports />,
      },
      {
        path: ROUTES.SETTINGS,
        element: <Settings />,
      },
    ],
  },
  
  // Wildcard 404 Fallback Page
  {
    path: '*',
    element: <NotFound />,
  },
])
