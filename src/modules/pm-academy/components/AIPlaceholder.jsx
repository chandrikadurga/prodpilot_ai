import React from 'react'
import { Card } from '../../../ui/Card'

/**
 * Reusable panel displaying disabled future AI features with boxy locked styling.
 */
export function AIPlaceholder({ 
  className = '', 
  features = [
    { label: 'AI Summarize', icon: 'i-lucide-file-text' },
    { label: 'AI Tutor chat', icon: 'i-lucide-sparkles' },
    { label: 'Create Flashcards', icon: 'i-lucide-layers' },
    { label: 'Generate Quiz', icon: 'i-lucide-help-circle' },
    { label: 'Interactive Mind Map', icon: 'i-lucide-git-fork' },
    { label: 'Generate Study Notes', icon: 'i-lucide-edit-3' },
    { label: 'Concept Explain', icon: 'i-lucide-help-circle' },
    { label: 'Practice Interview Prep', icon: 'i-lucide-message-square' }
  ]
}) {
  return (
    <Card variant="basic" className={`text-left bg-surface border-2 border-border p-4 select-none relative ${className}`}>
      {/* Locked overlay theme tags */}
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-[10px] font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
          <span className="i-lucide-sparkles text-accent animate-pulse" />
          AI Co-Pilot Integrations
        </h5>
        <span className="text-[8px] font-bold text-accent px-1.5 py-0.5 border border-accent/40 rounded-sm bg-accent/5 uppercase">
          Locked
        </span>
      </div>

      <p className="text-[11px] text-text-muted mb-4 leading-relaxed">
        Unlock automated reviews, interactive flashcard decks, and AI simulations once the server connects to the LLM agent network.
      </p>

      {/* Grid of disabled buttons */}
      <div className="grid grid-cols-2 gap-2.5">
        {features.map((item, idx) => (
          <button
            key={idx}
            disabled
            className="flex items-center gap-2 px-3 py-2 border-2 border-dashed border-border/40 text-text-muted bg-background/50 rounded-sm text-xs text-left cursor-not-allowed select-none group relative overflow-hidden"
            title={`${item.label} (Coming Soon)`}
          >
            <span className={`${item.icon} w-3.5 h-3.5 shrink-0 opacity-60`} />
            <span className="truncate flex-1 font-bold">{item.label}</span>
            <span className="i-lucide-lock w-3 h-3 text-text-muted/60 shrink-0 ml-1" />
            
            {/* Tooltip on mouse over */}
            <div className="absolute inset-0 bg-surface/95 flex items-center justify-center text-[10px] font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150 border border-accent/20">
              COMING SOON
            </div>
          </button>
        ))}
      </div>
    </Card>
  )
}
export default AIPlaceholder
