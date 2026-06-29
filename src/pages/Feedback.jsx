import React from 'react'

/**
 * Customer Feedback analysis page.
 */
export default function Feedback() {
  return (
    <div className="flex flex-col gap-3 py-4 max-w-4xl text-left select-none">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
        Feedback
      </h1>
      <p className="text-base text-neutral-500 dark:text-neutral-455 leading-relaxed">
        Aggregate user reviews, classify feature requests, and calculate priority scores.
      </p>
    </div>
  )
}
