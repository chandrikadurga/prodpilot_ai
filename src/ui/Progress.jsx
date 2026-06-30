import React from 'react'
import { cn } from '../utils/cn'

/**
 * Progress Bar component representing vertical completion ratios.
 */
export function ProgressBar({
  value = 0, // 0 to 100
  showLabel = false,
  className = '',
  ...props
}) {
  const percent = Math.min(Math.max(value, 0), 100)

  return (
    <div className={cn('w-full text-left', className)} {...props}>
      {showLabel && (
        <div className="flex items-center justify-between text-xs font-semibold text-text-secondary mb-1">
          <span>Progress</span>
          <span>{percent}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-hover rounded-full overflow-hidden border border-border/20">
        <div
          style={{ width: `${percent}%` }}
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
        />
      </div>
    </div>
  )
}

/**
 * Circular Progress component using SVG layouts.
 */
export function CircularProgress({
  value = 0,
  size = 60,
  strokeWidth = 6,
  showLabel = false,
  className = '',
  ...props
}) {
  const percent = Math.min(Math.max(value, 0), 100)
  
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (percent / 100) * circumference

  return (
    <div className={cn('relative inline-flex items-center justify-center select-none', className)} {...props}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="stroke-border"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="stroke-primary transition-all duration-500 ease-out"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      {showLabel && (
        <span className="absolute text-xs font-bold text-text-primary">
          {percent}%
        </span>
      )}
    </div>
  )
}

/**
 * Stepper checkpoints component.
 */
export function StepProgress({
  steps = [], // ['Step 1', 'Step 2', ...]
  currentStep = 0, // index (0-based)
  className = '',
  ...props
}) {
  return (
    <div className={cn('flex items-center w-full select-none', className)} {...props}>
      {steps.map((step, idx) => {
        const isCompleted = idx < currentStep
        const isActive = idx === currentStep
        const isLast = idx === steps.length - 1

        return (
          <React.Fragment key={idx}>
            {/* Step Node */}
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  'w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs transition-colors shrink-0',
                  isCompleted && 'bg-primary border-primary text-white',
                  isActive && 'border-primary text-primary bg-primary/10',
                  !isCompleted && !isActive && 'border-border text-text-muted bg-surface'
                )}
              >
                {isCompleted ? (
                  <span className="i-lucide-check w-4 h-4 block" />
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>
              <span
                className={cn(
                  'text-xs font-semibold whitespace-nowrap hidden md:inline-block',
                  isCompleted && 'text-text-primary',
                  isActive && 'text-primary font-bold',
                  !isCompleted && !isActive && 'text-text-muted'
                )}
              >
                {step}
              </span>
            </div>

            {/* Connecting Bar */}
            {!isLast && (
              <div className="flex-1 mx-2 h-[2px] bg-hover rounded-full overflow-hidden">
                <div
                  className={cn(
                    'h-full bg-primary transition-all duration-500',
                    isCompleted ? 'w-full' : 'w-0'
                  )}
                />
              </div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
