import React from 'react'

/**
 * Projects overview page.
 */
export default function Projects() {
  return (
    <div className="flex flex-col gap-3 py-4 max-w-4xl text-left select-none">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
        Projects
      </h1>
      <p className="text-base text-neutral-500 dark:text-neutral-455 leading-relaxed">
        Manage epic backlogs, track project boards, and organize sprint releases.
      </p>
    </div>
  )
}
