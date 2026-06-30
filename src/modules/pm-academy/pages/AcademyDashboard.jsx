import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAcademy } from '../hooks/useAcademy'
import { AcademyNavbar } from '../components/AcademyNavbar'
import { ProgressTracker } from '../components/ProgressTracker'
import { ResourceCard } from '../components/ResourceCard'
import { Card } from '../../../ui/Card'
import { Button } from '../../../ui/Button'
import { Badge } from '../../../ui/Badge'
import { useToast } from '../../../ui/Toast'

export default function AcademyDashboard() {
  const navigate = useNavigate()
  const toast = useToast()
  const { 
    stats, 
    recentlyViewed, 
    progress,
    toggleBookmark, 
    isBookmarked,
    getResourceById 
  } = useAcademy()

  // Recommended Books (first 3 books from the list)
  const recommendedIds = ['b-inspired', 'b-build-trap', 'b-mon-test']
  
  // Trending Frameworks (first 3 frameworks)
  const trendingFrameworks = [
    { id: 'f-rice', title: 'RICE Scoring', count: '14.2k views', tag: 'Prioritization' },
    { id: 'f-jtbd', title: 'Jobs To Be Done (JTBD)', count: '10.8k views', tag: 'Discovery' },
    { id: 'f-aarrr', title: 'AARRR Funnel', count: '9.5k views', tag: 'Growth' },
  ]

  // Quick Action Buttons
  const quickActions = [
    { label: 'Bookshelf', route: '/academy/books', icon: 'i-lucide-book' },
    { label: 'PDF Shelf', route: '/academy/pdfs', icon: 'i-lucide-file-text' },
    { label: 'PM Frameworks', route: '/academy/frameworks', icon: 'i-lucide-brain' },
    { label: 'Docs Templates', route: '/academy/templates', icon: 'i-lucide-file-spreadsheet' },
    { label: 'Interview Deck', route: '/academy/interview-prep', icon: 'i-lucide-help-circle' },
  ]

  // Filter recently viewed items that exist
  const recentItems = recentlyViewed
    .map(id => getResourceById(id))
    .filter(item => item !== null)
    .slice(0, 3)

  // Scan items currently in progress (0 < progress < 100)
  const inProgressItems = Object.entries(progress)
    .filter(([_, percent]) => percent > 0 && percent < 100)
    .map(([id, percent]) => {
      const item = getResourceById(id)
      return item ? { ...item, percent } : null
    })
    .filter(item => item !== null)
    .slice(0, 2)

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 page-fade-in text-left">
      {/* Sub-Navigation Tabs */}
      <AcademyNavbar />

      {/* Retro Welcome Banner */}
      <Card variant="basic" className="bg-primary text-white p-6 relative overflow-hidden shadow-[4px_4px_0px_0px_var(--color-border)] select-none">
        {/* Terminal decorative grid overlays */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:12px_12px] opacity-60 hidden md:block" />
        
        <div className="relative z-10 space-y-2 max-w-xl">
          <Badge variant="success" type="solid" className="border-white text-[9px]">SYSTEM ACTIVE</Badge>
          <h2 className="text-xl font-bold uppercase tracking-tight">
            Welcome to the PM Learning Terminal
          </h2>
          <p className="text-xs text-primary-100 leading-relaxed">
            Initialize your product curriculum. Browse 20 core books, study 20 business templates, master 20 frameworks, and drill 100 mock interview scenarios.
          </p>
          <div className="pt-2">
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={() => navigate('/academy/learning-paths')}
              className="text-primary hover:bg-white border-2 border-white hover:border-white text-xs font-bold"
            >
              Start Learning Path
            </Button>
          </div>
        </div>
      </Card>

      {/* Progress & Streak Dashboard */}
      <ProgressTracker stats={stats} />

      {/* Main Content Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Recommended Shelf & Actions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section: Recommended Reading */}
          <div className="space-y-3">
            <div className="flex justify-between items-center select-none">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                Recommended Reading
              </h3>
              <button 
                onClick={() => navigate('/academy/books')}
                className="text-xs font-bold text-primary hover:underline bg-transparent border-0 cursor-pointer"
              >
                View Bookshelf →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recommendedIds.map(id => {
                const book = getResourceById(id)
                if (!book) return null
                return (
                  <ResourceCard
                    key={book.id}
                    resource={book}
                    type="book"
                    isBookmarked={isBookmarked(book.id)}
                    progress={progress[book.id] || 0}
                    onBookmark={() => {
                      toggleBookmark(book.id)
                      toast.show({
                        title: isBookmarked(book.id) ? 'Bookmark Removed' : 'Bookmark Saved',
                        message: `${book.title} updated.`,
                        variant: isBookmarked(book.id) ? 'warning' : 'success'
                      })
                    }}
                    onOpen={() => navigate(`/academy/resource/${book.id}`)}
                  />
                )
              })}
            </div>
          </div>

          {/* Section: Continue Learning / In Progress */}
          {inProgressItems.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary select-none">
                Continue Learning
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inProgressItems.map(item => (
                  <Card key={item.id} variant="interactive" className="p-4 flex items-center justify-between gap-4 bg-surface">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-14 bg-background border-2 border-border shrink-0 rounded-sm overflow-hidden select-none">
                        {item.coverUrl && <img src={item.coverUrl} alt={item.title} className="w-full h-full object-cover" />}
                      </div>
                      <div className="min-w-0 text-left">
                        <h4 className="text-xs font-bold text-text-primary truncate">{item.title}</h4>
                        <span className="text-[10px] text-text-muted mt-0.5 block">{item.category}</span>
                        <div className="w-24 bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-sm overflow-hidden border border-border mt-1">
                          <div className="bg-primary h-full" style={{ width: `${item.percent}%` }} />
                        </div>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm" onClick={() => navigate(`/academy/resource/${item.id}`)} className="text-[10px] px-2 py-1 font-bold">
                      Resume
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Section: Quick Start Terminal Shortcuts */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary select-none">
              Learning Core Shortcuts
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate(action.route)}
                  className="p-3 border-2 border-border bg-surface hover:bg-hover rounded-md text-center flex flex-col items-center gap-2 justify-center shadow-[2px_2px_0px_0px_var(--color-border)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer outline-none"
                >
                  <span className={`${action.icon} w-6 h-6 text-primary`} />
                  <span className="text-[10px] font-bold text-text-primary uppercase leading-tight select-none">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Activity Logs & Trending Frameworks */}
        <div className="space-y-6">
          {/* Trending Frameworks Panel */}
          <Card variant="basic" className="space-y-4 bg-surface text-left">
            <Card.Header className="pb-2 border-b border-border select-none">
              <span className="font-bold text-xs uppercase tracking-wider">Trending Frameworks</span>
            </Card.Header>
            <div className="space-y-3 pt-1">
              {trendingFrameworks.map(item => (
                <div 
                  key={item.id} 
                  onClick={() => navigate(`/academy/frameworks`)}
                  className="p-3 border-2 border-border rounded-md bg-background hover:bg-hover cursor-pointer transition-colors flex items-center justify-between gap-2"
                >
                  <div>
                    <h4 className="text-xs font-bold text-text-primary">{item.title}</h4>
                    <span className="text-[9px] font-bold text-text-muted uppercase mt-0.5 block">{item.tag}</span>
                  </div>
                  <Badge variant="primary" shape="square" className="text-[9px] select-none">{item.count}</Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Recently Viewed Panel */}
          {recentItems.length > 0 && (
            <Card variant="basic" className="space-y-4 bg-surface text-left">
              <Card.Header className="pb-2 border-b border-border select-none">
                <span className="font-bold text-xs uppercase tracking-wider">Recently Inspected</span>
              </Card.Header>
              <div className="space-y-2 pt-1">
                {recentItems.map(item => (
                  <div 
                    key={item.id} 
                    onClick={() => {
                      if (item.id.startsWith('f-')) navigate('/academy/frameworks')
                      else if (item.id.startsWith('t-')) navigate('/academy/templates')
                      else navigate(`/academy/resource/${item.id}`)
                    }}
                    className="p-2 border-2 border-transparent hover:border-border hover:bg-hover rounded-md cursor-pointer transition-all flex items-center gap-3 min-w-0"
                  >
                    <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center border-2 border-border shrink-0 select-none">
                      <span className={`w-4 h-4 text-primary ${
                        item.id.startsWith('b-') ? 'i-lucide-book' :
                        item.id.startsWith('p-') ? 'i-lucide-file-text' :
                        item.id.startsWith('f-') ? 'i-lucide-brain' : 'i-lucide-file'
                      }`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-text-primary truncate">{item.title}</h4>
                      <span className="text-[9px] text-text-muted truncate block uppercase font-bold">{item.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Console Output Activity Logs */}
          <Card variant="basic" className="space-y-3 bg-neutral-900 border-2 border-border text-left select-none text-[10px] font-mono text-zinc-400 p-4">
            <div className="flex justify-between items-center text-zinc-200 border-b border-zinc-800 pb-2 mb-2 font-retro font-bold">
              <span>LEARNING SYSTEM LOGS</span>
              <span className="text-success blink font-retro">ONLINE</span>
            </div>
            <div className="space-y-1.5 font-retro">
              <p className="text-zinc-500">[09:12:04] Seeding curriculum assets...</p>
              <p className="text-success">[09:12:05] Seeding complete. 20 Books, 30 PDFs ready.</p>
              <p className="text-zinc-300">[10:14:22] Opened 'Inspired' by Marty Cagan.</p>
              <p className="text-zinc-300">[11:05:04] Practice mode: metrics questions unlocked.</p>
              <p className="text-zinc-300">[11:32:00] Downloaded PRD template package.</p>
              <p className="text-accent animate-pulse font-bold">[SYS] 5-Day Learning streak maintained.</p>
            </div>
          </Card>
        </div>

      </div>
    </div>
  )
}
