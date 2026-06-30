import React, { useState, useMemo } from 'react'
import { useAcademy } from '../hooks/useAcademy'
import { frameworksData } from '../data/frameworks'
import { AcademyNavbar } from '../components/AcademyNavbar'
import { Card } from '../../../ui/Card'
import { Badge } from '../../../ui/Badge'
import { Button } from '../../../ui/Button'
import { Input } from '../../../ui/Input'
import { EmptyState } from '../components/EmptyState'
import { useToast } from '../../../ui/Toast'

export default function FrameworkLibrary() {
  const toast = useToast()
  const { incrementFrameworkCount } = useAcademy()

  // Selection states
  const [activeId, setActiveId] = useState('f-rice')
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // RICE Calculator State
  const [riceReach, setRiceReach] = useState(10000)
  const [riceImpact, setRiceImpact] = useState(2) // High
  const [riceConfidence, setRiceConfidence] = useState(80) // 80%
  const [riceEffort, setRiceEffort] = useState(3) // 3 person months

  // ICE Calculator State
  const [iceImpact, setIceImpact] = useState(8)
  const [iceConfidence, setIceConfidence] = useState(7)
  const [iceEase, setIceEase] = useState(9)

  // Categories list
  const categories = useMemo(() => {
    const list = new Set(frameworksData.map(f => f.category))
    return ['All', ...Array.from(list)]
  }, [])

  // Filtered Framework List
  const filteredList = useMemo(() => {
    return frameworksData.filter(f => {
      const matchesSearch = 
        f.title.toLowerCase().includes(search.toLowerCase()) ||
        f.abbreviation.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategory])

  // Active framework detail
  const activeFramework = useMemo(() => {
    return frameworksData.find(f => f.id === activeId) || frameworksData[0]
  }, [activeId])

  const selectFramework = (id) => {
    setActiveId(id)
    incrementFrameworkCount() // Track learning stats count
  }

  // Calculated scores
  const computedRiceScore = useMemo(() => {
    const confidenceVal = riceConfidence / 100
    const score = (riceReach * riceImpact * confidenceVal) / Math.max(0.1, riceEffort)
    return Math.round(score)
  }, [riceReach, riceImpact, riceConfidence, riceEffort])

  const computedIceScore = useMemo(() => {
    return iceImpact * iceConfidence * iceEase
  }, [iceImpact, iceConfidence, iceEase])

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 page-fade-in text-left">
      {/* Sub-navigation tabs */}
      <AcademyNavbar />

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Index List (3 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <Card variant="basic" className="space-y-3 bg-surface p-4 select-none">
            <h3 className="font-bold text-xs uppercase tracking-wider border-b border-border pb-2">
              Frameworks Index
            </h3>
            
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Search index..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                icon="i-lucide-search"
                size="sm"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-2.5 py-1.5 border-2 border-border rounded-md text-xs font-bold bg-surface text-text-primary focus:outline-none cursor-pointer"
              >
                <option value="All">All Categories</option>
                {categories.filter(c => c !== 'All').map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* List links */}
            <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
              {filteredList.map((item) => (
                <button
                  key={item.id}
                  onClick={() => selectFramework(item.id)}
                  className={`w-full p-2.5 rounded-sm border-2 text-xs font-bold text-left flex justify-between items-center gap-2 cursor-pointer transition-all ${
                    item.id === activeFramework.id
                      ? 'border-border bg-primary text-white shadow-none'
                      : 'border-transparent text-text-secondary hover:bg-hover hover:border-border'
                  }`}
                >
                  <div className="truncate">
                    <span className="opacity-75 mr-1 font-mono">[{item.abbreviation}]</span>
                    {item.title}
                  </div>
                  <span className={`w-3.5 h-3.5 shrink-0 ${
                    item.id === activeFramework.id ? 'i-lucide-check-circle-2 text-white' : 'i-lucide-chevron-right text-text-muted'
                  }`} />
                </button>
              ))}

              {filteredList.length === 0 && (
                <p className="text-[10px] text-text-muted py-4 text-center">No frameworks match filters.</p>
              )}
            </div>
          </Card>
        </div>

        {/* Right Column: Detailed Guide Panel (8 cols) */}
        <div className="lg:col-span-8">
          {activeFramework ? (
            <Card variant="basic" className="space-y-6 bg-surface p-6">
              
              {/* Header Title Section */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-border pb-4">
                <div>
                  <div className="flex items-center gap-2 select-none">
                    <Badge variant="primary" shape="square">{activeFramework.category}</Badge>
                    <span className="text-[10px] font-bold text-text-muted uppercase">Duration: {activeFramework.estimatedTime}</span>
                  </div>
                  <h2 className="text-lg font-extrabold text-text-primary mt-1.5 flex items-center gap-1.5">
                    <span className="i-lucide-brain text-primary" />
                    {activeFramework.title} Guide
                  </h2>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => toast.success(`Saved bookmark: ${activeFramework.title}`)}
                  icon="i-lucide-star"
                  className="text-xs font-bold select-none"
                >
                  Bookmark
                </Button>
              </div>

              {/* Overview Details */}
              <div className="space-y-2 text-left">
                <h4 className="text-xs font-extrabold uppercase text-text-primary tracking-wide">Overview</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{activeFramework.overview}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-text-primary tracking-wide">Purpose & Value</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{activeFramework.purpose}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-text-primary tracking-wide">When to Apply</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{activeFramework.whenToUse}</p>
                </div>
              </div>

              {/* Step-by-Step guides */}
              <div className="space-y-3 text-left">
                <h4 className="text-xs font-extrabold uppercase text-text-primary tracking-wide">Step-by-Step Guide</h4>
                <div className="space-y-2">
                  {activeFramework.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-3 items-start text-xs text-text-secondary leading-relaxed">
                      <span className="w-5 h-5 rounded-full border-2 border-border bg-background flex items-center justify-center font-bold text-[9px] text-primary shrink-0 select-none">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Visual Diagrams / Calculators */}
              <div className="space-y-3 text-left">
                <h4 className="text-xs font-extrabold uppercase text-text-primary tracking-wide select-none">
                  Interactive Diagram / Canvas Sandbox
                </h4>
                
                {/* 1. Interactive RICE Calculator */}
                {activeFramework.id === 'f-rice' && (
                  <div className="p-4 border-2 border-border rounded-md bg-background space-y-4">
                    <div className="flex justify-between items-center border-b border-border/60 pb-2 select-none">
                      <span className="text-[10px] font-bold text-text-primary uppercase">RICE Calculator Sandbox</span>
                      <Badge variant="primary" shape="square">Computed score: {computedRiceScore}</Badge>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {/* Reach */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-text-muted uppercase">Reach (Users/mo)</label>
                        <input
                          type="number"
                          value={riceReach}
                          onChange={(e) => setRiceReach(parseInt(e.target.value) || 0)}
                          className="w-full px-2 py-1 border-2 border-border rounded bg-surface text-xs font-bold"
                        />
                      </div>
                      
                      {/* Impact */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-text-muted uppercase">Impact Multiplier</label>
                        <select
                          value={riceImpact}
                          onChange={(e) => setRiceImpact(parseFloat(e.target.value) || 0)}
                          className="w-full px-2 py-1 border-2 border-border rounded bg-surface text-xs font-bold cursor-pointer"
                        >
                          <option value="3">3.0 (Massive)</option>
                          <option value="2">2.0 (High)</option>
                          <option value="1">1.0 (Medium)</option>
                          <option value="0.5">0.5 (Low)</option>
                          <option value="0.25">0.25 (Minimal)</option>
                        </select>
                      </div>

                      {/* Confidence */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-text-muted uppercase">Confidence (%)</label>
                        <input
                          type="number"
                          value={riceConfidence}
                          onChange={(e) => setRiceConfidence(parseInt(e.target.value) || 0)}
                          className="w-full px-2 py-1 border-2 border-border rounded bg-surface text-xs font-bold"
                          max="100"
                        />
                      </div>

                      {/* Effort */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-text-muted uppercase">Effort (Person-mo)</label>
                        <input
                          type="number"
                          value={riceEffort}
                          onChange={(e) => setRiceEffort(parseFloat(e.target.value) || 0.1)}
                          className="w-full px-2 py-1 border-2 border-border rounded bg-surface text-xs font-bold"
                          step="0.5"
                        />
                      </div>
                    </div>

                    <div className="p-3 border-2 border-dashed border-border bg-surface text-center rounded-sm font-bold font-mono text-sm">
                      RICE FORMULA: ({riceReach} × {riceImpact} × {riceConfidence}%) / {riceEffort} = <span className="text-primary">{computedRiceScore} pts</span>
                    </div>
                  </div>
                )}

                {/* 2. Interactive ICE Calculator */}
                {activeFramework.id === 'f-ice' && (
                  <div className="p-4 border-2 border-border rounded-md bg-background space-y-4">
                    <div className="flex justify-between items-center border-b border-border/60 pb-2 select-none">
                      <span className="text-[10px] font-bold text-text-primary uppercase">ICE Score Slider Calculator</span>
                      <Badge variant="accent" shape="square">ICE Score: {computedIceScore}</Badge>
                    </div>

                    <div className="space-y-3">
                      {/* Impact */}
                      <div className="flex items-center justify-between gap-4 text-xs font-bold">
                        <span className="w-24 text-text-secondary">Impact (1-10)</span>
                        <input 
                          type="range" min="1" max="10" value={iceImpact} 
                          onChange={(e) => setIceImpact(parseInt(e.target.value))}
                          className="flex-1 accent-primary" 
                        />
                        <span className="w-6 text-right font-mono">{iceImpact}</span>
                      </div>
                      
                      {/* Confidence */}
                      <div className="flex items-center justify-between gap-4 text-xs font-bold">
                        <span className="w-24 text-text-secondary">Confidence (1-10)</span>
                        <input 
                          type="range" min="1" max="10" value={iceConfidence} 
                          onChange={(e) => setIceConfidence(parseInt(e.target.value))}
                          className="flex-1 accent-primary" 
                        />
                        <span className="w-6 text-right font-mono">{iceConfidence}</span>
                      </div>

                      {/* Ease */}
                      <div className="flex items-center justify-between gap-4 text-xs font-bold">
                        <span className="w-24 text-text-secondary">Ease (1-10)</span>
                        <input 
                          type="range" min="1" max="10" value={iceEase} 
                          onChange={(e) => setIceEase(parseInt(e.target.value))}
                          className="flex-1 accent-primary" 
                        />
                        <span className="w-6 text-right font-mono">{iceEase}</span>
                      </div>
                    </div>

                    <div className="p-3 border-2 border-dashed border-border bg-surface text-center rounded-sm font-bold font-mono text-sm">
                      ICE FORMULA: {iceImpact} × {iceConfidence} × {iceEase} = <span className="text-accent">{computedIceScore} pts</span>
                    </div>
                  </div>
                )}

                {/* 3. MoSCoW Quadrant Box Mock Visual */}
                {activeFramework.id === 'f-moscow' && (
                  <div className="grid grid-cols-2 gap-3 p-3 border-2 border-border bg-background rounded-md text-left">
                    <div className="p-3 border-2 border-border bg-surface rounded-sm">
                      <h5 className="font-extrabold text-[10px] text-danger uppercase mb-1">Must Have</h5>
                      <p className="text-[10px] text-text-secondary leading-relaxed">System-critical utilities required for operation (e.g. user authentication, database commits).</p>
                    </div>
                    <div className="p-3 border-2 border-border bg-surface rounded-sm">
                      <h5 className="font-extrabold text-[10px] text-warning uppercase mb-1">Should Have</h5>
                      <p className="text-[10px] text-text-secondary leading-relaxed">Important but not time-critical items (e.g. export options, search keyword filters).</p>
                    </div>
                    <div className="p-3 border-2 border-border bg-surface rounded-sm">
                      <h5 className="font-extrabold text-[10px] text-primary uppercase mb-1">Could Have</h5>
                      <p className="text-[10px] text-text-secondary leading-relaxed">Desirable nice-to-have features (e.g. background grid patterns, avatar custom initials).</p>
                    </div>
                    <div className="p-3 border-2 border-border bg-surface rounded-sm">
                      <h5 className="font-extrabold text-[10px] text-text-muted uppercase mb-1">Won't Have (For Now)</h5>
                      <p className="text-[10px] text-text-secondary leading-relaxed">Deferred requirements agreed to be out-of-scope for the current sprint milestone.</p>
                    </div>
                  </div>
                )}

                {/* 4. Canvas Diagram generic fallback */}
                {activeFramework.id !== 'f-rice' && activeFramework.id !== 'f-ice' && activeFramework.id !== 'f-moscow' && (
                  <div className="p-6 border-2 border-border border-dashed rounded-md bg-background text-center select-none">
                    <div className="w-12 h-12 border border-border bg-surface flex items-center justify-center mx-auto mb-3 shadow-[2px_2px_0px_0px_var(--color-border)] rounded-sm">
                      <span className="i-lucide-git-fork text-text-muted w-6 h-6" />
                    </div>
                    <h5 className="text-[10px] font-bold text-text-primary uppercase tracking-wide">
                      {activeFramework.diagramType} Placeholder Diagram
                    </h5>
                    <p className="text-[10px] text-text-muted max-w-xs mx-auto leading-relaxed mt-1">
                      Visual diagram representations for {activeFramework.abbreviation} models are locked. Connect system controls to print PDF diagrams.
                    </p>
                  </div>
                )}
              </div>

              {/* Advantages vs Limitations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="p-4 border-2 border-border rounded-md bg-success/5 space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-success tracking-wide flex items-center gap-1.5">
                    <span className="i-lucide-check-circle-2 text-success w-4 h-4 block" />
                    Advantages
                  </h4>
                  <ul className="list-disc list-inside text-xs text-text-secondary space-y-1">
                    {activeFramework.advantages.map((adv, idx) => (
                      <li key={idx}>{adv}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 border-2 border-border rounded-md bg-danger/5 space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-danger tracking-wide flex items-center gap-1.5">
                    <span className="i-lucide-alert-circle text-danger w-4 h-4 block" />
                    Limitations
                  </h4>
                  <ul className="list-disc list-inside text-xs text-text-secondary space-y-1">
                    {activeFramework.limitations.map((limit, idx) => (
                      <li key={idx}>{limit}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Example and Reference info */}
              <div className="space-y-4 border-t border-border pt-4 text-left">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-text-muted uppercase">Real-World Case Example</span>
                  <p className="text-xs text-text-secondary font-mono leading-relaxed bg-background p-3 border-2 border-border rounded-sm">
                    {activeFramework.example}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold text-text-muted select-none">
                  <span>Related Systems: {activeFramework.relatedFrameworks.map(f => f.replace('f-', '').toUpperCase()).join(', ')}</span>
                  <span>• Recommended PDFs: {activeFramework.recommendedReading.map(r => r.replace('p-', '').toUpperCase()).join(', ')}</span>
                </div>
              </div>

            </Card>
          ) : (
            <EmptyState
              title="Select a Framework"
              description="Click a framework from the left-side index list to read its detailed guides and prioritize templates."
            />
          )}
        </div>

      </div>
    </div>
  )
}
