import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'
import { ROUTES } from '../constants/routes'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

/**
 * User Login Page.
 * Implements client-side input validations, forms, and triggers simulated auth redirects.
 */
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    
    // Local validations
    const newErrors = {}
    if (!email) newErrors.email = 'Email address is required'
    if (!password) newErrors.password = 'Password is required'
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    // Simulate network authentication delay
    setTimeout(() => {
      login(email, password)
      setIsLoading(false)
      navigate(ROUTES.DASHBOARD)
    }, 850)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 relative overflow-hidden font-sans">
      
      {/* Dynamic graphic glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary-500/10 dark:bg-primary-500/5 filter blur-3xl pointer-events-none"></div>

      {/* Landing navigation helper */}
      <Link
        to={ROUTES.LANDING}
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors select-none"
      >
        <span className="i-lucide-arrow-left w-4 h-4 block" />
        <span>Back to Landing</span>
      </Link>

      <div className="w-full max-w-md page-fade-in relative z-10">
        <div className="text-center mb-8 flex flex-col items-center select-none">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white font-extrabold text-xl shadow-md mb-4">
            P
          </div>
          <h2 className="text-2xl font-black tracking-tight mb-1.5">Welcome Back</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Sign in to access your product pilot dashboard
          </p>
        </div>

        <Card variant="glass" className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Work Email"
              type="email"
              placeholder="alex@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              icon="i-lucide-mail"
              autoFocus
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              icon="i-lucide-lock"
            />

            <div className="flex items-center justify-between text-xs select-none">
              <label className="flex items-center gap-2 cursor-pointer font-medium text-neutral-600 dark:text-neutral-450">
                <input
                  type="checkbox"
                  className="rounded border-neutral-300 dark:border-neutral-800 text-primary-650 focus:ring-primary-500/20 bg-white dark:bg-neutral-950 w-4 h-4 cursor-pointer"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="font-semibold text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full shadow-md mt-2"
              loading={isLoading}
            >
              Sign In
            </Button>
          </form>
        </Card>

        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-6 select-none">
          Don't have an account?{' '}
          <Link to={ROUTES.REGISTER} className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}
