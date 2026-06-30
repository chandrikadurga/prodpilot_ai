import React, { useState, useMemo } from 'react'
import { interviewQuestionsData } from '../data/interviewQuestions'
import { AcademyNavbar } from '../components/AcademyNavbar'
import { Card } from '../../../ui/Card'
import { Badge } from '../../../ui/Badge'
import { Button } from '../../../ui/Button'
import { EmptyState } from '../components/EmptyState'
import { useToast } from '../../../ui/Toast'

export default function InterviewPrep() {
  const toast = useToast()

  // Selection states
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [userDraft, setUserDraft] = useState('')

  // Map of category cards with metadata
  const categories = useMemo(() => {
    return [
      { id: 'Product Sense', label: 'Product Sense', icon: 'i-lucide-brain', difficulty: 'Hard', duration: '25m avg', count: 15 },
      { id: 'Behavioral', label: 'Behavioral Prep', icon: 'i-lucide-users', difficulty: 'Medium', duration: '15m avg', count: 15 },
      { id: 'Metrics', label: 'Metrics & KPIs', icon: 'i-lucide-line-chart', difficulty: 'Hard', duration: '20m avg', count: 20 },
      { id: 'Execution', label: 'Product Execution', icon: 'i-lucide-play-circle', difficulty: 'Medium', duration: '18m avg', count: 15 },
      { id: 'SQL', label: 'SQL Essentials', icon: 'i-lucide-database', difficulty: 'Medium', duration: '12m avg', count: 10 },
      { id: 'Analytics', label: 'Product Analytics', icon: 'i-lucide-bar-chart-2', difficulty: 'Hard', duration: '22m avg', count: 10 },
      { id: 'Leadership', label: 'PM Leadership', icon: 'i-lucide-award', difficulty: 'Hard', duration: '20m avg', count: 10 },
      { id: 'Case Studies', label: 'Product Cases', icon: 'i-lucide-briefcase', difficulty: 'Hard', duration: '30m avg', count: 5 }
    ]
  }, [])

  // Filtered questions for active category
  const filteredQuestions = useMemo(() => {
    if (!activeCategory) return []
    // Match against raw category data
    const queryCat = activeCategory === 'Behavioral Prep' ? 'Behavioral' :
                     activeCategory === 'Metrics & KPIs' ? 'Metrics' :
                     activeCategory === 'Product Cases' ? 'Case Studies' : activeCategory

    return interviewQuestionsData.filter(q => q.category === queryCat)
  }, [activeCategory])

  const handleStartPractice = (catLabel) => {
    setActiveCategory(catLabel)
    toast.success(`Loading practice questions for ${catLabel}`)
  }

  const handleSelectQuestion = (q) => {
    setSelectedQuestion(q)
    setShowAnswer(false)
    setUserDraft('')
  }

  const handleCloseQuestion = () => {
    setSelectedQuestion(null)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 page-fade-in text-left">
      {/* Sub-navigation tabs */}
      <AcademyNavbar />

      {/* Main Categories Grid */}
      {!activeCategory ? (
        <div className="space-y-4">
          <div className="text-left select-none">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary">
              Interview Drill Deck Categories
            </h3>
            <p className="text-xs text-text-secondary mt-1">
              Select an interview discipline to drill mock prompts, outline diagnostics, and inspect guide solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Card 
                key={cat.id} 
                variant="interactive" 
                className="flex flex-col justify-between h-full bg-surface p-5 text-left shadow-[2px_2px_0px_0px_var(--color-border)] select-none"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-sm border-2 border-border bg-primary/10 flex items-center justify-center">
                    <span className={`${cat.icon} w-6 h-6 text-primary`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-text-primary">{cat.label}</h4>
                    <span className="text-[10px] font-bold text-text-muted uppercase mt-0.5 block">
                      {cat.count} Questions • {cat.difficulty} • {cat.duration}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    fullWidth 
                    onClick={() => handleStartPractice(cat.id)}
                    className="font-bold text-xs"
                  >
                    Start Practice
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        // Practice mode lists
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Category questions list (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Card variant="basic" className="bg-surface p-4 text-left select-none space-y-3">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="font-bold text-xs uppercase tracking-wider">{activeCategory} Deck</span>
                <button 
                  onClick={() => setActiveCategory(null)}
                  className="text-xs font-bold text-primary hover:underline bg-transparent border-0 cursor-pointer"
                >
                  ← Back to Categories
                </button>
              </div>

              {/* Scrollable list */}
              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {filteredQuestions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => handleSelectQuestion(q)}
                    className={`w-full p-3 border-2 rounded-sm text-xs font-bold text-left flex items-start gap-2.5 cursor-pointer transition-all ${
                      selectedQuestion?.id === q.id 
                        ? 'border-border bg-primary text-white shadow-none' 
                        : 'border-transparent hover:bg-hover hover:border-border text-text-primary'
                    }`}
                  >
                    <span className="opacity-75 font-mono mt-0.5">Q{idx + 1}.</span>
                    <div className="flex-1 truncate">{q.question}</div>
                    <Badge 
                      variant={q.difficulty === 'Hard' ? 'danger' : q.difficulty === 'Medium' ? 'warning' : 'success'} 
                      shape="square"
                      className="text-[8px] font-bold py-0 ml-1 shrink-0"
                    >
                      {q.difficulty}
                    </Badge>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Active Question Workspace (7 cols) */}
          <div className="lg:col-span-7">
            {selectedQuestion ? (
              <Card variant="basic" className="bg-surface p-6 space-y-5 text-left">
                {/* Header details */}
                <div className="border-b-2 border-border pb-4 select-none">
                  <div className="flex items-center justify-between gap-4">
                    <Badge variant="primary" shape="square">{selectedQuestion.category}</Badge>
                    <span className="text-[10px] font-bold text-text-muted uppercase">Duration: {selectedQuestion.estimatedTime}</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-text-primary leading-snug mt-2">
                    {selectedQuestion.question}
                  </h3>
                </div>

                {/* Draft Workspace */}
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-text-primary tracking-wide select-none">Your Response Draft</h4>
                  <textarea
                    rows="6"
                    value={userDraft}
                    onChange={(e) => setUserDraft(e.target.value)}
                    placeholder="Outline your diagnostic steps, user segments, solutions, and prioritization trade-offs here..."
                    className="w-full p-3 border-2 border-border rounded-md bg-background text-xs font-mono text-text-primary placeholder-text-muted focus:outline-none focus:bg-hover leading-normal"
                  />
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 items-center select-none justify-between border-t border-border pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setShowAnswer(!showAnswer)
                      if (!showAnswer) toast.success('Hints and Solution guides unlocked!')
                    }}
                    icon={showAnswer ? 'i-lucide-eye-off' : 'i-lucide-eye'}
                    className="font-bold text-xs"
                  >
                    {showAnswer ? 'Hide Solution' : 'Reveal Solution & Hints'}
                  </Button>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      toast.success('Your response outline draft was locally saved.')
                      handleCloseQuestion()
                    }}
                    className="font-bold text-xs"
                  >
                    Complete Practice
                  </Button>
                </div>

                {/* Toggled Guide Answer */}
                {showAnswer && (
                  <div className="space-y-4 pt-3 border-t border-border animate-fade-in">
                    {/* Hint Box */}
                    <div className="p-3 border-2 border-border border-dashed bg-warning/5 rounded-sm">
                      <h5 className="font-extrabold text-[10px] text-warning uppercase flex items-center gap-1 mb-1">
                        <span className="i-lucide-help-circle" />
                        Prompt Interview Hint
                      </h5>
                      <p className="text-[11px] text-text-secondary leading-relaxed">{selectedQuestion.hint}</p>
                    </div>

                    {/* Guide Answer steps */}
                    <div className="space-y-2 text-left">
                      <h5 className="font-extrabold text-[10px] text-success uppercase flex items-center gap-1 mb-1">
                        <span className="i-lucide-check-circle-2 text-success" />
                        Model Solution Outline Guide
                      </h5>
                      <p className="text-xs text-text-secondary font-mono leading-relaxed bg-background p-3 border-2 border-border rounded-sm whitespace-pre-line">
                        {selectedQuestion.guideAnswer}
                      </p>
                    </div>
                  </div>
                )}

              </Card>
            ) : (
              <EmptyState
                title="Select a Question"
                description="Click a prompt from the left column question list to open your response draft workspace and review solution guides."
              />
            )}
          </div>

        </div>
      )}
    </div>
  )
}
