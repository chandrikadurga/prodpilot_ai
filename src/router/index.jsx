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
import Components from '../pages/Components'

// Import PM Academy Pages
import AcademyDashboard from '../modules/pm-academy/pages/AcademyDashboard'
import BooksLibrary from '../modules/pm-academy/pages/BooksLibrary'
import PdfLibrary from '../modules/pm-academy/pages/PdfLibrary'
import FrameworkLibrary from '../modules/pm-academy/pages/FrameworkLibrary'
import TemplatesLibrary from '../modules/pm-academy/pages/TemplatesLibrary'
import LearningPaths from '../modules/pm-academy/pages/LearningPaths'
import InterviewPrep from '../modules/pm-academy/pages/InterviewPrep'
import Bookmarks from '../modules/pm-academy/pages/Bookmarks'
import ResourceDetails from '../modules/pm-academy/pages/ResourceDetails'

/**
 * Route guard component for authenticated pages.
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to={ROUTES.LOGIN} replace />
}

/**
 * Route guard component for guest-only pages (e.g. Login, Register).
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
  
  // Design System Component Playground
  {
    path: ROUTES.COMPONENTS,
    element: <Components />,
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
      {
        path: ROUTES.ACADEMY,
        element: <AcademyDashboard />,
      },
      {
        path: ROUTES.ACADEMY_BOOKS,
        element: <BooksLibrary />,
      },
      {
        path: ROUTES.ACADEMY_PDFS,
        element: <PdfLibrary />,
      },
      {
        path: ROUTES.ACADEMY_FRAMEWORKS,
        element: <FrameworkLibrary />,
      },
      {
        path: ROUTES.ACADEMY_TEMPLATES,
        element: <TemplatesLibrary />,
      },
      {
        path: ROUTES.ACADEMY_PATHS,
        element: <LearningPaths />,
      },
      {
        path: ROUTES.ACADEMY_INTERVIEW,
        element: <InterviewPrep />,
      },
      {
        path: ROUTES.ACADEMY_BOOKMARKS,
        element: <Bookmarks />,
      },
      {
        path: ROUTES.ACADEMY_RESOURCE,
        element: <ResourceDetails />,
      },
    ],
  },
  
  // Wildcard 404 Fallback Page
  {
    path: '*',
    element: <NotFound />,
  },
])
