import { ROUTES } from './routes'

/**
 * Sidebar navigation items with corresponding label, route path, and Lucide icons.
 */
export const SIDEBAR_NAV_ITEMS = [
  { label: 'Dashboard', path: ROUTES.DASHBOARD, icon: 'i-lucide-layout-dashboard' },
  { label: 'PM Academy ⭐', path: ROUTES.ACADEMY, icon: 'i-lucide-graduation-cap' },
  { label: 'Projects', path: ROUTES.PROJECTS, icon: 'i-lucide-kanban-square' },
  { label: 'PRDs', path: ROUTES.PRDS, icon: 'i-lucide-file-text' },
  { label: 'Roadmap', path: ROUTES.ROADMAP, icon: 'i-lucide-milestone' },
  { label: 'Meetings', path: ROUTES.MEETINGS, icon: 'i-lucide-video' },
  { label: 'Feedback', path: ROUTES.FEEDBACK, icon: 'i-lucide-message-square' },
  { label: 'Reports', path: ROUTES.REPORTS, icon: 'i-lucide-line-chart' },
  { label: 'Settings', path: ROUTES.SETTINGS, icon: 'i-lucide-settings' },
]
