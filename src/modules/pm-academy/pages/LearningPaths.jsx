import React, { useState } from 'react'
import { useAcademy } from '../hooks/useAcademy'
import { learningPathsData } from '../data/learningPaths'
import { AcademyNavbar } from '../components/AcademyNavbar'
import { Card } from '../../../ui/Card'
import { Badge } from '../../../ui/Badge'
import { Button } from '../../../ui/Button'
import { ProgressBar } from '../../../ui/Progress'
import { Accordion } from '../../../ui/Accordion'
import { useToast } from '../../../ui/Toast'
import { EmptyState } from '../components/EmptyState'

export default function LearningPaths() {
  const toast = useToast()
  const { updateProgress, getProgress } = useAcademy()

  // Track expanded roadmap ID
  const [expandedId, setExpandedId] = useState('lp-beginner')

  // Check off lesson lists to calculate progress
  // Storing ticked lessons in local state, keyed by pathId-moduleIdx-lessonIdx
  const [completedLessons, setCompletedLessons] = useState(() => {
    // Seed some lessons as completed for beginner path to match 70% progress
    return {
      'lp-beginner-0-0': true, 'lp-beginner-0-1': true, 'lp-beginner-0-2': true,
      'lp-beginner-0-3': true, 'lp-beginner-0-4': true, 'lp-beginner-0-5': true,
      'lp-beginner-1-0': true, 'lp-beginner-1-1': true, 'lp-beginner-1-2': true,
      'lp-beginner-1-3': true, 'lp-beginner-1-4': true, 'lp-beginner-1-5': true,
      'lp-beginner-1-6': true, 'lp-beginner-1-7': true,
      'lp-beginner-2-0': true, 'lp-beginner-2-1': true, 'lp-beginner-2-2': true,
      'lp-beginner-2-3': true,
      'lp-growth-pm-0-0': true, 'lp-growth-pm-0-1': true,
    }
  })

  const toggleLesson = (pathId, moduleIdx, lessonIdx, lessonsInModule, totalLessons, path) => {
    const key = `${pathId}-${moduleIdx}-${lessonIdx}`
    const isCompleted = !!completedLessons[key]
    
    const newCompleted = {
      ...completedLessons,
      [key]: !isCompleted
    }
    setCompletedLessons(newCompleted)

    // Recalculate total path progress percentage
    // Count checked lessons for this pathId
    let checkedCount = 0
    path.modules.forEach((mod, mIdx) => {
      for (let lIdx = 0; lIdx < mod.lessonsCount; lIdx++) {
        if (newCompleted[`${pathId}-${mIdx}-${lIdx}`]) {
          checkedCount++
        }
      }
    })

    const percent = Math.round((checkedCount / totalLessons) * 100)
    updateProgress(pathId, percent)

    if (percent === 100) {
      toast.success(`Congratulations! You completed ${path.title}! Certificate unlocked.`)
    }
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 page-fade-in text-left">
      {/* Sub-navigation tabs */}
      <AcademyNavbar />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Roadmap list (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary select-none">
              Curated Career Roadmaps
            </h3>
            <div className="space-y-4">
              {learningPathsData.map((path) => {
                const pathProgress = getProgress(path.id)
                const isCompleted = pathProgress === 100
                const isExpanded = expandedId === path.id
                
                // Count total lessons
                const totalLessons = path.modules.reduce((sum, m) => sum + m.lessonsCount, 0)

                return (
                  <Card 
                    key={path.id} 
                    variant="interactive" 
                    className={`p-4 border-2 border-border rounded-md text-left flex flex-col justify-between gap-4 transition-all shadow-[2px_2px_0px_0px_var(--color-border)] select-none ${
                      isExpanded ? 'bg-primary/5 border-primary shadow-[3px_3px_0px_0px_var(--color-border)]' : 'bg-surface'
                    }`}
                    onClick={() => setExpandedId(path.id)}
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <Badge variant="primary" shape="square">{path.duration}</Badge>
                        <div className="flex gap-2">
                          {path.certificate && <span className="i-lucide-award text-accent w-4 h-4" title="Certificate Option" />}
                          {isCompleted && <Badge variant="success" type="solid">Completed</Badge>}
                        </div>
                      </div>
                      
                      <h4 className="text-sm font-extrabold text-text-primary">{path.title}</h4>
                      <p className="text-xs text-text-muted leading-relaxed line-clamp-2">{path.description}</p>
                    </div>

                    <div className="space-y-3">
                      {/* Path Progress */}
                      {pathProgress > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-[9px] font-bold text-text-secondary">
                            <span>Journey Progress</span>
                            <span>{pathProgress}%</span>
                          </div>
                          <ProgressBar value={pathProgress} variant={isCompleted ? 'success' : 'primary'} size="xs" />
                        </div>
                      )}

                      <div className="flex items-center justify-between gap-2 border-t border-border/50 pt-2.5">
                        <span className="text-[10px] font-bold text-text-muted">
                          {path.modules.length} Modules • {totalLessons} Lessons
                        </span>
                        <Button 
                          variant={isExpanded ? 'primary' : 'outline'} 
                          size="sm" 
                          className="text-[10px] px-2.5 py-1 font-bold"
                          onClick={(e) => {
                            e.stopPropagation()
                            setExpandedId(path.id)
                          }}
                        >
                          {isExpanded ? 'Inspecting' : 'Open Path'}
                        </Button>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Module Syllabus & Progress Checklist (7 cols) */}
        <div className="lg:col-span-7">
          {expandedId ? (() => {
            const path = learningPathsData.find(lp => lp.id === expandedId)
            const pathProgress = getProgress(path.id)
            const totalLessons = path.modules.reduce((sum, m) => sum + m.lessonsCount, 0)
            const isCompleted = pathProgress === 100

            return (
              <Card variant="basic" className="space-y-6 bg-surface p-6">
                {/* Header detail */}
                <div className="border-b-2 border-border pb-4 text-left">
                  <h3 className="text-base font-extrabold text-text-primary uppercase tracking-wide">
                    {path.title} Syllabus
                  </h3>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Check off completed lessons to update your path progress in real time.
                  </p>
                </div>

                {/* Interactive checkoff checklist inside accordions */}
                <div className="space-y-3">
                  {path.modules.map((mod, mIdx) => {
                    // Check checked count for this module
                    let modChecked = 0
                    for (let lIdx = 0; lIdx < mod.lessonsCount; lIdx++) {
                      if (completedLessons[`${path.id}-${mIdx}-${lIdx}`]) modChecked++
                    }
                    const modPercent = Math.round((modChecked / mod.lessonsCount) * 100)

                    return (
                      <Accordion
                        key={mIdx}
                        title={
                          <div className="flex flex-1 items-center justify-between text-xs font-bold gap-3 pr-3 select-none">
                            <span className="truncate">{mod.title}</span>
                            <span className="text-[10px] font-bold text-text-muted text-right shrink-0">
                              {modChecked}/{mod.lessonsCount} Completed ({modPercent}%)
                            </span>
                          </div>
                        }
                      >
                        <div className="p-3 bg-background/50 border-t border-border/40 space-y-2 text-left">
                          {Array.from({ length: mod.lessonsCount }).map((_, lIdx) => {
                            const key = `${path.id}-${mIdx}-${lIdx}`
                            const isTicked = !!completedLessons[key]
                            
                            return (
                              <label 
                                key={lIdx} 
                                className={`flex items-center gap-3 p-2 border-2 rounded bg-surface hover:bg-hover cursor-pointer transition-colors text-xs font-semibold ${
                                  isTicked ? 'border-success/35 text-text-secondary bg-success/5' : 'border-border/50 text-text-secondary'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isTicked}
                                  onChange={() => toggleLesson(path.id, mIdx, lIdx, mod.lessonsCount, totalLessons, path)}
                                  className="w-4 h-4 rounded border-border accent-success cursor-pointer"
                                />
                                <span className="flex-1 select-none">
                                  Lesson {lIdx + 1}: Detailed module concept & target execution templates
                                </span>
                                <Badge variant={isTicked ? 'success' : 'secondary'} shape="square" className="text-[9px]">
                                  {isTicked ? 'DONE' : 'LOCKED'}
                                </Badge>
                              </label>
                            )
                          })}
                        </div>
                      </Accordion>
                    )
                  })}
                </div>

                {/* Certificate Locker Placeholder */}
                <div className="p-4 border-2 border-border rounded-md bg-background flex flex-col sm:flex-row items-center justify-between gap-4 text-left select-none">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 border-2 border-border rounded-sm flex items-center justify-center ${
                      isCompleted ? 'bg-success/15 text-success' : 'bg-surface text-text-muted opacity-50'
                    }`}>
                      <span className="i-lucide-award w-7 h-7" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-text-primary uppercase">Career Certification Badge</h5>
                      <p className="text-[10px] text-text-muted mt-0.5 leading-normal">
                        {isCompleted ? 'Valid certificate credentials issued!' : 'Complete all lessons to generate certification URL.'}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant={isCompleted ? 'success' : 'outline'}
                    size="sm"
                    disabled={!isCompleted}
                    onClick={() => toast.success('Downloading curriculum certificate PDF...')}
                    className="font-bold text-xs shrink-0"
                  >
                    {isCompleted ? 'Print Certificate' : 'Locked'}
                  </Button>
                </div>

              </Card>
            )
          })() : (
            <EmptyState
              title="Select a Learning Path"
              description="Click a career path card from the left column index to view its detailed modules and syllabus."
            />
          )}
        </div>

      </div>
    </div>
  )
}
