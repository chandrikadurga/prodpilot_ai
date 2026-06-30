import { useState, useEffect } from 'react'
import { booksData } from '../data/books'
import { pdfsData } from '../data/pdfs'
import { frameworksData } from '../data/frameworks'
import { templatesData } from '../data/templates'
import { learningPathsData } from '../data/learningPaths'

const STORAGE_KEYS = {
  BOOKMARKS: 'pm_academy_bookmarks',
  PROGRESS: 'pm_academy_progress',
  STATS: 'pm_academy_stats',
  RECENTLY_VIEWED: 'pm_academy_recently_viewed',
}

const DEFAULT_STATS = {
  streak: 5,
  learningHours: 24.5,
  booksCompleted: 2,
  pdfsRead: 4,
  frameworksLearned: 5,
  templatesDownloaded: 3,
  lastActive: new Date().toISOString(),
}

export function useAcademy() {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS)
    if (saved) return JSON.parse(saved)
    
    // Seed initial bookmarks from mock data
    const initial = []
    booksData.forEach(b => b.isBookmarked && initial.push(b.id))
    templatesData.forEach(t => t.isBookmarked && initial.push(t.id))
    return initial
  })

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS)
    if (saved) return JSON.parse(saved)

    // Seed initial progress from mock data
    const initial = {}
    booksData.forEach(b => { if (b.progress > 0) initial[b.id] = b.progress })
    learningPathsData.forEach(p => { if (p.progress > 0) initial[p.id] = p.progress })
    return initial
  })

  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STATS)
    return saved ? JSON.parse(saved) : DEFAULT_STATS
  })

  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED)
    return saved ? JSON.parse(saved) : ['b-inspired', 'f-rice', 't-prd']
  })

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks))
  }, [bookmarks])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress))
  }, [progress])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats))
  }, [stats])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED, JSON.stringify(recentlyViewed))
  }, [recentlyViewed])

  // Actions
  const toggleBookmark = (id) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    )
  }

  const isBookmarked = (id) => bookmarks.includes(id)

  const updateProgress = (id, percent) => {
    const cappedPercent = Math.min(100, Math.max(0, percent))
    setProgress(prev => ({
      ...prev,
      [id]: cappedPercent
    }))

    // Increment completed counts if reaching 100%
    if (cappedPercent === 100 && progress[id] !== 100) {
      if (id.startsWith('b-')) {
        setStats(prev => ({ ...prev, booksCompleted: prev.booksCompleted + 1, learningHours: prev.learningHours + 3 }))
      } else if (id.startsWith('lp-')) {
        setStats(prev => ({ ...prev, learningHours: prev.learningHours + 10 }))
      }
    }
  }

  const getProgress = (id) => progress[id] || 0

  const trackView = (id) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(rId => rId !== id)
      return [id, ...filtered].slice(0, 6) // limit to 6 recent items
    })
  }

  const downloadTemplate = (_id) => {
    setStats(prev => ({
      ...prev,
      templatesDownloaded: prev.templatesDownloaded + 1
    }))
  }

  const incrementFrameworkCount = () => {
    setStats(prev => ({
      ...prev,
      frameworksLearned: prev.frameworksLearned + 1
    }))
  }

  const incrementPdfCount = () => {
    setStats(prev => ({
      ...prev,
      pdfsRead: prev.pdfsRead + 1
    }))
  }

  // Resolve item references
  const getResourceById = (id) => {
    if (id.startsWith('b-')) return booksData.find(b => b.id === id)
    if (id.startsWith('p-')) return pdfsData.find(p => p.id === id)
    if (id.startsWith('f-')) return frameworksData.find(f => f.id === id)
    if (id.startsWith('t-')) return templatesData.find(t => t.id === id)
    if (id.startsWith('lp-')) return learningPathsData.find(lp => lp.id === id)
    return null
  }

  return {
    bookmarks,
    progress,
    stats,
    recentlyViewed,
    toggleBookmark,
    isBookmarked,
    updateProgress,
    getProgress,
    trackView,
    downloadTemplate,
    incrementFrameworkCount,
    incrementPdfCount,
    getResourceById,
  }
}
