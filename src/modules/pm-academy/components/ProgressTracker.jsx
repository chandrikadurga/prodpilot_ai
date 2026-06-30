import React from 'react'
import { Card } from '../../../ui/Card'
import { Badge } from '../../../ui/Badge'

/**
 * Console-styled progress dashboard showing study metrics, streaks, and stats.
 */
export function ProgressTracker({ stats }) {
  const {
    streak = 0,
    learningHours = 0,
    booksCompleted = 0,
    pdfsRead = 0,
    frameworksLearned = 0,
    templatesDownloaded = 0
  } = stats

  const metrics = [
    { label: 'Books Read', value: booksCompleted, icon: 'i-lucide-book', color: 'text-primary bg-primary-50 dark:bg-primary-950/20' },
    { label: 'PDFs Analyzed', value: pdfsRead, icon: 'i-lucide-file-text', color: 'text-accent bg-accent/10' },
    { label: 'Frameworks Mastered', value: frameworksLearned, icon: 'i-lucide-brain', color: 'text-success bg-success/10' },
    { label: 'Templates Used', value: templatesDownloaded, icon: 'i-lucide-file-spreadsheet', color: 'text-info bg-info/10' },
  ]

  // Render a mock calendar grid for the weekly streak (last 7 days)
  const streakDays = [
    { day: 'Mon', active: true },
    { day: 'Tue', active: true },
    { day: 'Wed', active: true },
    { day: 'Thu', active: true },
    { day: 'Fri', active: true },
    { day: 'Sat', active: false },
    { day: 'Sun', active: false },
  ]

  return (
    <Card variant="basic" className="space-y-6 text-left bg-surface">
      <Card.Header className="flex justify-between items-center pb-2 border-b border-border select-none">
        <span className="font-bold text-sm tracking-wide uppercase">Learning Terminal Control</span>
        <Badge variant="success" type="subtle">Sync Active</Badge>
      </Card.Header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left Column: Streaks & Hours */}
        <div className="space-y-4">
          {/* Daily Streak Indicator */}
          <div className="p-4 border-2 border-border rounded-md bg-background flex items-center justify-between shadow-[2px_2px_0px_0px_var(--color-border)] select-none">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-text-muted uppercase">Daily Learning Streak</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-accent">{streak}</span>
                <span className="text-xs font-bold text-text-secondary">Days</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-sm border-2 border-border bg-accent/10 flex items-center justify-center">
              <span className="i-lucide-flame text-accent w-6 h-6 animate-pulse" />
            </div>
          </div>

          {/* Cumulative Hours */}
          <div className="p-4 border-2 border-border rounded-md bg-background flex items-center justify-between shadow-[2px_2px_0px_0px_var(--color-border)] select-none">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-text-muted uppercase">Total Study Volume</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-primary">{learningHours}</span>
                <span className="text-xs font-bold text-text-secondary">Hours</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-sm border-2 border-border bg-primary-50 dark:bg-primary-950/20 flex items-center justify-center">
              <span className="i-lucide-clock text-primary w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Right Column: Weekly Streak Grid */}
        <div className="p-4 border-2 border-border rounded-md bg-background flex flex-col justify-between shadow-[2px_2px_0px_0px_var(--color-border)] select-none">
          <span className="text-[10px] font-bold text-text-muted uppercase mb-3 block">Weekly Commitment Grid</span>
          <div className="flex justify-between items-center gap-1.5 pt-1">
            {streakDays.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className={`w-8 h-8 rounded-sm border-2 border-border flex items-center justify-center transition-all ${
                    item.active 
                      ? 'bg-success text-white shadow-[1px_1px_0px_0px_var(--color-border)]' 
                      : 'bg-surface text-text-muted opacity-40'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 block ${item.active ? 'i-lucide-check-circle-2' : 'i-lucide-circle'}`} />
                </div>
                <span className="text-[9px] font-bold text-text-muted uppercase">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Metric counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 select-none">
        {metrics.map((item, idx) => (
          <div key={idx} className="p-3 border-2 border-border rounded-md bg-background flex items-center gap-3">
            <div className={`w-9 h-9 rounded-sm border-2 border-border flex items-center justify-center ${item.color} shrink-0`}>
              <span className={`${item.icon} w-5 h-5`} />
            </div>
            <div className="min-w-0 text-left">
              <div className="text-base font-extrabold text-text-primary leading-tight">{item.value}</div>
              <div className="text-[9px] font-bold text-text-muted uppercase truncate leading-none mt-0.5">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
export default ProgressTracker
