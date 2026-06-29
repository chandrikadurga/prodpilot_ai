import React from 'react'

/**
 * Dashboard Overview page.
 */
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-3 py-4 max-w-4xl text-left select-none">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
        Dashboard
      </h1>
      <p className="text-base text-neutral-500 dark:text-neutral-450 leading-relaxed">
        Overview of your workspace, recent items, active sprints, and quick actions.
      </p>
    </div>
  )
}
