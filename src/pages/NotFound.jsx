import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/Button'
import { ROUTES } from '../constants/routes'

/**
 * 404 Route Fallback page.
 */
export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 text-center font-sans">
      <div className="max-w-md page-fade-in flex flex-col items-center">
        <span className="i-lucide-alert-circle text-5xl text-primary mb-6 block" />
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-3 select-none">
          Page Not Found
        </h1>
        <p className="text-base text-neutral-550 dark:text-neutral-400 mb-8 select-none">
          The resource you are looking for does not exist or has been relocated.
        </p>
        <Button variant="primary" size="md" onClick={() => navigate(ROUTES.LANDING)}>
          Go Back Home
        </Button>
      </div>
    </div>
  )
}
