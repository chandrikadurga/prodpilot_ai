import React from 'react'

/**
 * Meetings summaries page.
 */
export default function Meetings() {
  return (
    <div className="flex flex-col gap-3 py-4 max-w-4xl text-left select-none">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
        Meetings
      </h1>
      <p className="text-base text-neutral-500 dark:text-neutral-455 leading-relaxed">
        Transcribe meeting audio, extract key discussion points, and generate follow-up tasks.
      </p>
    </div>
  )
}
