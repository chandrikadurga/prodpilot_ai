import React from 'react'

/**
 * Product Requirement Documents (PRDs) page.
 */
export default function PRDs() {
  return (
    <div className="flex flex-col gap-3 py-4 max-w-4xl text-left select-none">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
        PRDs
      </h1>
      <p className="text-base text-neutral-500 dark:text-neutral-455 leading-relaxed">
        Write, review, and export Product Requirement Documents scaffolded with AI.
      </p>
    </div>
  )
}
