import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'
import { ROUTES } from '../constants/routes'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

/**
 * User Registration Page.
 * Implements name, email, and password fields, local validations, and triggers simulated sign-up.
 */
export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    
    // Local validations
    const newErrors = {}
    if (!name) newErrors.name = 'Full name is required'
    if (!email) newErrors.email = 'Email address is required'
    if (!password) newErrors.password = 'Password is required'
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    // Simulate network authentication delay
    setTimeout(() => {
      register(name, email, password)
      setIsLoading(false)
      navigate(ROUTES.DASHBOARD)
    }, 850)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 relative overflow-hidden font-sans">
      
      {/* Decorative blurred backdrop glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary-500/10 dark:bg-primary-500/5 filter blur-3xl pointer-events-none"></div>

      {/* Navigation helper */}
      <Link
        to={ROUTES.LANDING}
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-semibold text-neutral-550 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors select-none"
      >
        <span className="i-lucide-arrow-left w-4 h-4 block" />
        <span>Back to Landing</span>
      </Link>

      <div className="w-full max-w-md page-fade-in relative z-10">
        <div className="text-center mb-8 flex flex-col items-center select-none">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white font-extrabold text-xl shadow-md mb-4">
            P
          </div>
          <h2 className="text-2xl font-black tracking-tight mb-1.5">Create Your Account</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Start pilot testing your PM operations workspace free today
          </p>
        </div>

        <Card variant="glass" className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Alex Rivera"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
              icon="i-lucide-user"
              autoFocus
            />

            <Input
              label="Work Email"
              type="email"
              placeholder="alex@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              icon="i-lucide-mail"
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

            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug select-none">
              By signing up, you agree to our{' '}
              <a href="#" className="text-primary font-semibold hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-primary font-semibold hover:underline">Privacy Policy</a>.
            </p>

            <Button
              type="submit"
              variant="primary"
              className="w-full shadow-md mt-2"
              loading={isLoading}
            >
              Get Started Free
            </Button>
          </form>
        </Card>

        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-6 select-none">
          Already have an account?{' '}
          <Link to={ROUTES.LOGIN} className="font-semibold text-primary hover:underline">
            Sign in instead
          </Link>
        </p>
      </div>
    </div>
  )
}
