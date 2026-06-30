import React, { useState } from 'react'
import {
  Search,
  ChevronDown,
  Plus,
  FileText,
  LayoutDashboard,
  Settings,
  MessageSquare,
  ArrowUpRight,
  Sun,
  Moon,
  Mail,
  Lock,
  User,
  LogOut,
  Bell,
  Trash,
  ArrowLeft,
  Terminal,
  Grid
} from 'lucide-react'

// Import all UI components
import {
  Button,
  Input,
  Card,
  Badge,
  Avatar,
  Modal,
  Alert,
  SkeletonText,
  SkeletonCard,
  Dropdown,
  Tabs,
  Accordion,
  Table,
  Pagination,
  ProgressBar,
  CircularProgress,
  StepProgress,
  Breadcrumb,
  EmptyState,
  CommandPalette,
  useToast,
  Divider
} from '../ui'

import { useTheme } from '../hooks/useTheme'

export default function Components() {
  const { toggleTheme, isDark } = useTheme()
  const toast = useToast()

  // Navigation state
  const [activeSection, setActiveSection] = useState('tokens')

  // Interactive component states
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalLoading, setModalLoading] = useState(false)
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState('tab-1')
  const [tableLoading, setTableLoading] = useState(false)
  const [tableEmpty, setTableEmpty] = useState(false)
  
  // Table Sorting State
  const [sortCol, setSortCol] = useState('name')
  const [sortDir, setSortDir] = useState('asc')
  const [tableData, setTableData] = useState([
    { id: 1, name: 'Project Alpha', status: 'Active', size: '12 MB', score: 92 },
    { id: 2, name: 'Beta PRD Draft', status: 'Reviewing', size: '4.5 MB', score: 85 },
    { id: 3, name: 'Roadmap Q3', status: 'Completed', size: '1.2 MB', score: 98 },
    { id: 4, name: 'Feedback Log', status: 'Active', size: '22 MB', score: 76 },
  ])

  // Stepper state
  const [currentStep, setCurrentStep] = useState(1)

  // Input states
  const [textVal, setTextVal] = useState('')
  const [selectVal, setSelectVal] = useState('opt-1')

  const handleTableSort = (key) => {
    const dir = sortCol === key && sortDir === 'asc' ? 'desc' : 'asc'
    setSortCol(key)
    setSortDir(dir)

    const sorted = [...tableData].sort((a, b) => {
      const aVal = a[key]
      const bVal = b[key]
      if (typeof aVal === 'number') {
        return dir === 'asc' ? aVal - bVal : bVal - aVal
      }
      return dir === 'asc' 
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal))
    })
    setTableData(sorted)
  }

  // Sidebar navigation menu
  const menuItems = [
    { id: 'tokens', label: 'Design Tokens' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'inputs', label: 'Inputs' },
    { id: 'cards', label: 'Cards' },
    { id: 'badges-avatars', label: 'Badges & Avatars' },
    { id: 'alerts-toasts', label: 'Alerts & Toasts' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'data-disclosure', label: 'Data & Disclosure' },
    { id: 'loaders-empty', label: 'Loaders & Empty' },
    { id: 'palette', label: 'Command Palette' },
  ]

  const breadcrumbItems = [
    { label: 'System', href: '/components', icon: Grid },
    { label: 'Documentation', href: '/components', icon: FileText },
    { label: 'Playground', href: '/components' },
  ]

  const accordionItems = [
    {
      id: 'faq-1',
      title: 'How does the auto-dismiss Toast notify systems work?',
      content: 'Under the hood, the ToastProvider manages an array of active toast objects. When you trigger useToast(), it pushes an item to the state queue and starts a setTimeOut wrapper using the specified duration, calling the clean hook to pop it out automatically.'
    },
    {
      id: 'faq-2',
      title: 'Are these components fully accessible via keyboard?',
      content: 'Yes! Elements are built using standard semantic elements. Dropdowns, modals, list palettes, and tabs implement custom keyboard key event listeners (ESC, Arrow keys, Enter, and TabIndexes) to comply with ARIA accessibility protocols.'
    },
    {
      id: 'faq-3',
      title: 'How do you switch themes globally?',
      content: 'The useTheme hook toggles the ".dark" class wrapper at the root HTML document element level. All sub-components utilize CSS variables defined in theme.css, causing their backgrounds, border colors, shadows, and text alignments to transition simultaneously.'
    }
  ]

  const tableColumns = [
    { key: 'name', label: 'Resource Name', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (val) => {
        const variants = {
          Active: 'primary',
          Reviewing: 'warning',
          Completed: 'success',
        }
        return <Badge variant={variants[val] || 'neutral'}>{val}</Badge>
      }
    },
    { key: 'size', label: 'File Size' },
    {
      key: 'score',
      label: 'Quality Score',
      sortable: true,
      className: 'text-right',
      render: (val) => (
        <span className={cn('font-bold', val > 90 ? 'text-success' : 'text-text-secondary')}>
          {val}/100
        </span>
      )
    }
  ]



  return (
    <div className="flex min-h-screen bg-background text-text-primary">
      {/* 1. Component Playground Sidebar */}
      <aside className="w-64 border-r border-border bg-surface shrink-0 hidden lg:flex flex-col sticky top-0 h-screen select-none">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center font-extrabold text-sm shadow-sm">
              P
            </div>
            <span className="font-extrabold text-base tracking-tight">ProdPilot <span className="text-primary font-bold">DS</span></span>
          </div>
          <Badge variant="primary" type="subtle">v1.0</Badge>
        </div>
        <nav className="flex-1 py-6 px-4 overflow-y-auto space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id)
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={cn(
                'w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer outline-none focus-visible:bg-hover',
                activeSection === item.id
                  ? 'bg-primary/10 text-primary font-bold'
                  : 'text-text-secondary hover:bg-hover hover:text-text-primary'
              )}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-border bg-background/50">
          <a
            href="/"
            className="flex items-center justify-center gap-2 w-full px-3 py-2 border border-border rounded-lg text-xs font-bold text-text-secondary hover:bg-hover hover:text-text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Application</span>
          </a>
        </div>
      </aside>

      {/* 2. Main Documentation Scroll Area */}
      <main className="flex-grow overflow-y-auto px-4 md:px-12 py-8 flex flex-col min-w-0">
        
        {/* Navigation & Header Actions */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-8 border-b border-border">
          <div className="text-left">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-h-l text-text-primary mt-2">Design System & Component Library</h1>
            <p className="text-sm text-text-secondary mt-1 max-w-xl">
              Preview and interact with our production-ready UI kit designed for premium enterprise SaaS apps.
            </p>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme switcher */}
            <Button
              variant="secondary"
              onClick={toggleTheme}
              icon={isDark ? Sun : Moon}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </Button>
            
            {/* Command Palette Button */}
            <Button
              variant="primary"
              icon={Terminal}
              onClick={() => setIsCommandOpen(true)}
            >
              Open Command Palette
            </Button>
          </div>
        </header>

        {/* Section 1: Design Tokens */}
        <section id="tokens" className="py-6 border-b border-border scroll-mt-6">
          <div className="text-left mb-6">
            <h2 className="text-h-s text-text-primary">Design Tokens</h2>
            <p className="text-xs text-text-secondary mt-1">Our centralized token system defines typography, spacing, border radiuses, and shadows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Colors Token preview */}
            <Card variant="basic" className="flex flex-col text-left">
              <Card.Header>
                <span className="font-bold text-sm">Theme Color Palette</span>
                <Badge variant="primary" type="subtle">CSS Variables</Badge>
              </Card.Header>
              <Card.Body className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-primary shrink-0 border border-black/10 dark:border-white/10" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-text-primary truncate">Primary</p>
                      <p className="text-[10px] text-text-muted truncate">--color-primary</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-secondary shrink-0 border border-black/10 dark:border-white/10" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-text-primary truncate">Secondary</p>
                      <p className="text-[10px] text-text-muted truncate">--color-secondary</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-accent shrink-0 border border-black/10 dark:border-white/10" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-text-primary truncate">Accent</p>
                      <p className="text-[10px] text-text-muted truncate">--color-accent</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-success shrink-0 border border-black/10 dark:border-white/10" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-text-primary truncate">Success</p>
                      <p className="text-[10px] text-text-muted truncate">--color-success</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-warning shrink-0 border border-black/10 dark:border-white/10" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-text-primary truncate">Warning</p>
                      <p className="text-[10px] text-text-muted truncate">--color-warning</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-danger shrink-0 border border-black/10 dark:border-white/10" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-text-primary truncate">Danger</p>
                      <p className="text-[10px] text-text-muted truncate">--color-danger</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-info shrink-0 border border-black/10 dark:border-white/10" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-text-primary truncate">Info</p>
                      <p className="text-[10px] text-text-muted truncate">--color-info</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-surface shrink-0 border border-border" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-text-primary truncate">Surface</p>
                      <p className="text-[10px] text-text-muted truncate">--color-surface</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Typography Token Preview */}
            <Card variant="basic" className="flex flex-col text-left">
              <Card.Header>
                <span className="font-bold text-sm">Typography Hierarchy</span>
                <Badge variant="neutral" type="subtle">Font Sizes</Badge>
              </Card.Header>
              <Card.Body className="space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-text-muted uppercase block">Heading XL (36px)</span>
                  <span className="text-h-xl text-text-primary block truncate">Aa Bb Cc</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-text-muted uppercase block">Heading L (30px)</span>
                  <span className="text-h-l text-text-primary block truncate">Aa Bb Cc</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-text-muted uppercase block">Heading M (24px)</span>
                  <span className="text-h-m text-text-primary block truncate">Aa Bb Cc</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-text-muted uppercase block">Heading S (20px)</span>
                  <span className="text-h-s text-text-primary block truncate">Aa Bb Cc</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-text-muted uppercase block">Body / Caption</span>
                  <div className="flex flex-wrap gap-4 mt-1 text-xs">
                    <span className="text-body-lg text-text-secondary">Body Large (18px)</span>
                    <span className="text-body text-text-secondary">Body (16px)</span>
                    <span className="text-small text-text-secondary">Small (14px)</span>
                    <span className="text-caption text-text-muted">Caption (12px)</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Spacing Scale Preview */}
            <Card variant="basic" className="flex flex-col text-left md:col-span-2">
              <Card.Header>
                <span className="font-bold text-sm">Spacing Scale</span>
                <Badge variant="neutral" type="subtle">4px to 80px</Badge>
              </Card.Header>
              <Card.Body>
                <div className="flex flex-wrap gap-3 items-end">
                  {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80].map((space) => (
                    <div key={space} className="flex flex-col items-center gap-1.5">
                      <div
                        style={{ height: `${space}px` }}
                        className="w-8 bg-primary rounded-t-sm opacity-80"
                      />
                      <span className="text-[10px] font-bold text-text-secondary">{space}</span>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </section>

        {/* Section 2: Buttons */}
        <section id="buttons" className="py-8 border-b border-border scroll-mt-6">
          <div className="text-left mb-6">
            <h2 className="text-h-s text-text-primary">Buttons</h2>
            <p className="text-xs text-text-secondary mt-1">Variations, loading animation locks, shapes, and dimension states.</p>
          </div>

          <Card variant="basic" className="text-left space-y-6">
            <div>
              <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Variants</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="danger">Danger Button</Button>
                <Button variant="success">Success Button</Button>
              </div>
            </div>

            <Divider />

            <div>
              <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Dimensions & Icons</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="sm">Small Size</Button>
                <Button variant="primary" size="md">Medium (Default)</Button>
                <Button variant="primary" size="lg">Large Size</Button>
                <Button variant="secondary" icon={Plus}>Icon Left</Button>
                <Button variant="secondary" icon={ArrowUpRight} iconPosition="right">Icon Right</Button>
                <Button variant="outline" icon={Trash} aria-label="Delete" />
              </div>
            </div>

            <Divider />

            <div>
              <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Loading & Disabled States</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" loading>Loading Primary</Button>
                <Button variant="secondary" loading>Loading Secondary</Button>
                <Button variant="primary" disabled>Disabled State</Button>
                <Button variant="outline" disabled icon={Lock}>Disabled with Icon</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Section 3: Inputs */}
        <section id="inputs" className="py-8 border-b border-border scroll-mt-6">
          <div className="text-left mb-6">
            <h2 className="text-h-s text-text-primary">Inputs</h2>
            <p className="text-xs text-text-secondary mt-1">Form controllers for Text, Select lists, Textareas, Dates, and Password blocks.</p>
          </div>

          <Card variant="basic" className="text-left space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Text Input"
                placeholder="Type something..."
                helperText="This is basic helper description text."
                value={textVal}
                onChange={(e) => setTextVal(e.target.value)}
              />
              <Input
                label="Email Input (With Left Icon)"
                type="email"
                icon={Mail}
                placeholder="alex@domain.com"
              />
              <Input
                label="Password Input (With Hide/Show Eye Toggle)"
                type="password"
                placeholder="••••••••"
              />
              <Input
                label="Search Field (With Icon)"
                type="search"
                icon={Search}
                placeholder="Search resources..."
              />
              <Input
                label="Number Input"
                type="number"
                placeholder="42"
              />
              <Input
                label="Date Picker"
                type="date"
              />
              <Input
                label="Select Dropdown"
                type="select"
                options={[
                  { value: 'opt-1', label: 'Option A' },
                  { value: 'opt-2', label: 'Option B' },
                  { value: 'opt-3', label: 'Option C' },
                ]}
                value={selectVal}
                onChange={(e) => setSelectVal(e.target.value)}
              />
              <Input
                label="Textarea Box"
                type="textarea"
                rows={3}
                placeholder="Write description notes..."
                className="md:col-span-2"
              />
              <Input
                label="File Upload Input"
                type="file"
              />
              <Input
                label="Validation Error State"
                placeholder="Invalid content..."
                error="Invalid email domain structure. Try again."
              />
              <Input
                label="Disabled State"
                disabled
                placeholder="Cannot edit this box"
              />
            </div>
          </Card>
        </section>

        {/* Section 4: Cards */}
        <section id="cards" className="py-8 border-b border-border scroll-mt-6">
          <div className="text-left mb-6">
            <h2 className="text-h-s text-text-primary">Cards</h2>
            <p className="text-xs text-text-secondary mt-1">SaaS panels, Stat counters, Hover cards, and Frosted Glass elements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Card */}
            <Card variant="basic" className="text-left flex flex-col justify-between h-48">
              <div>
                <h4 className="text-sm font-bold text-text-primary">Basic Card</h4>
                <p className="text-xs text-text-secondary mt-1.5">Standard card borders with low-elevation clean shadow margins.</p>
              </div>
              <div className="text-xs text-text-muted font-semibold">Standard Container</div>
            </Card>

            {/* Feature Card */}
            <Card variant="feature" className="text-left flex flex-col justify-between h-48">
              <div>
                <span className="i-lucide-layout-dashboard w-6 h-6 text-primary mb-2.5 block" />
                <h4 className="text-sm font-bold text-text-primary">Feature Card</h4>
                <p className="text-xs text-text-secondary mt-1.5">Transitions its border outline and shadow slightly when hovered.</p>
              </div>
              <div className="text-xs text-primary font-bold">Interactive</div>
            </Card>

            {/* Interactive Card */}
            <Card variant="interactive" className="text-left flex flex-col justify-between h-48">
              <div>
                <h4 className="text-sm font-bold text-text-primary">Interactive Click Card</h4>
                <p className="text-xs text-text-secondary mt-1.5">Elevates with scale shifts and border adjustments on hover clicks.</p>
              </div>
              <div className="text-xs text-text-muted font-semibold flex items-center gap-1">
                <span>Clickable card</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </Card>

            {/* Glass Card */}
            <Card variant="glass" className="text-left flex flex-col justify-between h-48 md:col-span-2">
              <div>
                <h4 className="text-sm font-bold text-text-primary">Glassmorphism Card</h4>
                <p className="text-xs text-text-secondary mt-1.5">
                  Frosted glass look using background-blur filters and semi-transparent borders. Fits dark background layers.
                </p>
              </div>
              <div className="text-xs text-text-muted">backdrop-filter: blur(12px)</div>
            </Card>

            {/* Stat Card */}
            <Card variant="stat" className="h-48">
              <Card.Stat
                label="Workspace Health Score"
                value="98.4%"
                trend="+4.2%"
                trendType="up"
              />
              <span className="text-[10px] text-text-muted block text-left">Compared to last Monday</span>
            </Card>
          </div>
        </section>

        {/* Section 5: Badges & Avatars */}
        <section id="badges-avatars" className="py-8 border-b border-border scroll-mt-6">
          <div className="text-left mb-6">
            <h2 className="text-h-s text-text-primary">Badges & Avatars</h2>
            <p className="text-xs text-text-secondary mt-1">Status pills, profile photo masks, initials, and indicators.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Badges card */}
            <Card variant="basic" className="text-left space-y-5">
              <Card.Header>
                <span className="font-bold text-sm">Status Badges</span>
              </Card.Header>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-[10px] font-bold text-text-muted uppercase mb-2">Subtle Style (Default)</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="neutral">Neutral</Badge>
                  </div>
                </div>

                <div>
                  <h5 className="text-[10px] font-bold text-text-muted uppercase mb-2">Solid Style</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" type="solid">Primary</Badge>
                    <Badge variant="success" type="solid">Success</Badge>
                    <Badge variant="warning" type="solid">Warning</Badge>
                    <Badge variant="danger" type="solid">Danger</Badge>
                    <Badge variant="neutral" type="solid">Neutral</Badge>
                  </div>
                </div>

                <div>
                  <h5 className="text-[10px] font-bold text-text-muted uppercase mb-2">Square Badges</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" shape="square">Primary</Badge>
                    <Badge variant="success" shape="square">Success</Badge>
                    <Badge variant="danger" shape="square" type="solid">Danger</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Avatars card */}
            <Card variant="basic" className="text-left space-y-5">
              <Card.Header>
                <span className="font-bold text-sm">User Avatars</span>
              </Card.Header>

              <div className="space-y-4">
                <div>
                  <h5 className="text-[10px] font-bold text-text-muted uppercase mb-2">Dimensions & Shapes</h5>
                  <div className="flex flex-wrap items-end gap-3">
                    <Avatar name="Alex Rivera" size="xs" />
                    <Avatar name="Alex Rivera" size="sm" />
                    <Avatar name="Alex Rivera" size="md" />
                    <Avatar name="Alex Rivera" size="lg" />
                    <Avatar name="Alex Rivera" size="xl" />
                    <Avatar name="Staff PM" size="md" shape="square" />
                  </div>
                </div>

                <div>
                  <h5 className="text-[10px] font-bold text-text-muted uppercase mb-2">Activity Indicators</h5>
                  <div className="flex flex-wrap gap-4">
                    <Avatar name="John Doe" size="md" status="online" />
                    <Avatar name="Jane Smith" size="md" status="busy" />
                    <Avatar name="Mark Robinson" size="md" status="offline" />
                  </div>
                </div>

                <div>
                  <h5 className="text-[10px] font-bold text-text-muted uppercase mb-2">Initials Fallback Generator</h5>
                  <div className="flex flex-wrap gap-3">
                    <Avatar name="Alex Rivera" size="md" />
                    <Avatar name="Sarah Jenkins" size="md" />
                    <Avatar name="Tom Hanks" size="md" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Dropdown Menu Card */}
            <Card variant="basic" className="text-left space-y-5 md:col-span-2">
              <Card.Header>
                <span className="font-bold text-sm">Dropdown Menu Selectors</span>
                <Badge variant="primary" type="subtle">Interactive Focus</Badge>
              </Card.Header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Simple Dropdown */}
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold text-text-muted uppercase">Simple Options List</h5>
                  <Dropdown
                    trigger={
                      <Button variant="secondary" icon={ChevronDown} iconPosition="right">
                        Manage Options
                      </Button>
                    }
                  >
                    <Dropdown.Item onClick={() => toast.info('Edit clicked')}>Edit Resource</Dropdown.Item>
                    <Dropdown.Item onClick={() => toast.info('Duplicate clicked')}>Duplicate</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => toast.error('Delete clicked')} className="text-danger hover:bg-danger/10 focus:bg-danger/10">
                      Delete Permanent
                    </Dropdown.Item>
                  </Dropdown>
                </div>

                {/* 2. Profile Dropdown */}
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold text-text-muted uppercase">Profile Card Dropdown</h5>
                  <Dropdown
                    trigger={
                      <div className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <Avatar name="Alex Rivera" size="sm" status="online" />
                        <span className="text-xs font-bold text-text-secondary select-none">Alex Rivera</span>
                      </div>
                    }
                  >
                    <Dropdown.ProfileHeader
                      name="Alex Rivera"
                      email="alex@prodpilot.ai"
                    />
                    <Dropdown.Item onClick={() => toast.info('Navigating to profile...')} icon={User}>My Profile</Dropdown.Item>
                    <Dropdown.Item onClick={() => toast.info('Navigating to settings...')} icon={Settings}>Workspace Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => toast.warning('Logged out')} icon={LogOut}>Logout Session</Dropdown.Item>
                  </Dropdown>
                </div>

                {/* 3. Notification Dropdown */}
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold text-text-muted uppercase">Notification Center Dropdown</h5>
                  <Dropdown
                    align="right"
                    trigger={
                      <Button variant="outline" size="sm" icon={Bell} className="relative">
                        <span className="absolute -top-1.5 -right-1.5 flex h-2 w-2">
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                      </Button>
                    }
                  >
                    <Dropdown.Header>Notifications</Dropdown.Header>
                    <Dropdown.NotificationItem
                      title="PRD Draft Approved"
                      description="Sarah Jenkins approved the Roadmap Q3 beta draft."
                      timestamp="3 minutes ago"
                      unread
                      icon={FileText}
                      onClick={() => toast.success('Notification loaded')}
                    />
                    <Dropdown.NotificationItem
                      title="New Feedback Received"
                      description="User submitted feature feedback log in Projects."
                      timestamp="2 hours ago"
                      unread={false}
                      icon={MessageSquare}
                      onClick={() => toast.success('Notification loaded')}
                    />
                  </Dropdown>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 6: Alerts & Toasts */}
        <section id="alerts-toasts" className="py-8 border-b border-border scroll-mt-6">
          <div className="text-left mb-6">
            <h2 className="text-h-s text-text-primary">Alerts & Toasts</h2>
            <p className="text-xs text-text-secondary mt-1">Inline notification banners and sliding toast alert queues.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Alerts list */}
            <Card variant="basic" className="text-left space-y-4">
              <Card.Header>
                <span className="font-bold text-sm">Inline Alerts</span>
              </Card.Header>
              <Alert variant="info" title="General Info">
                Welcome to ProdPilot AI's brand new modular design library system.
              </Alert>
              <Alert variant="success" title="Success Checklist">
                Theme token configuration loaded and applied successfully.
              </Alert>
              <Alert variant="warning" title="Warning Update">
                UnoCSS presets require virtual stylesheet rebuilds to trigger.
              </Alert>
              <Alert variant="danger" title="Error Fault" dismissible>
                Failed to execute compilation checklist. Click X to clear.
              </Alert>
            </Card>

            {/* Toasts Trigger controls */}
            <Card variant="basic" className="text-left flex flex-col justify-between">
              <div>
                <Card.Header>
                  <span className="font-bold text-sm">Toast Notifications</span>
                </Card.Header>
                <Card.Body>
                  <p className="text-xs text-text-secondary">
                    Toasts render overlays in the top-right of the viewport. Click below to launch dynamic toasts.
                  </p>
                </Card.Body>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button
                  variant="success"
                  onClick={() => toast.success('Your workspace database has synced successfully.', 'Data Synced')}
                >
                  Success Toast
                </Button>
                <Button
                  variant="danger"
                  onClick={() => toast.error('Failed to validate connection key credentials.', 'Access Denied')}
                >
                  Error Toast
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => toast.info('A quarterly roadmap report is compiling in background.', 'Compiling')}
                >
                  Info Toast
                </Button>
                <Button
                  variant="outline"
                  onClick={() => toast.warning('Your storage limits have reached 92% capacity.', 'Storage Warning')}
                >
                  Warning Toast
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 7: Navigation */}
        <section id="navigation" className="py-8 border-b border-border scroll-mt-6">
          <div className="text-left mb-6">
            <h2 className="text-h-s text-text-primary">Navigation</h2>
            <p className="text-xs text-text-secondary mt-1">Hierarchical breadcrumbs, horizontal sliding tabs, and data pagination.</p>
          </div>

          <Card variant="basic" className="text-left space-y-6">
            {/* Breadcrumb row */}
            <div>
              <h5 className="text-[10px] font-bold text-text-muted uppercase mb-2">Breadcrumbs Navigation</h5>
              <div className="p-4 border border-border rounded-lg bg-background/35">
                <Breadcrumb items={breadcrumbItems} />
              </div>
            </div>

            {/* Tabs rows */}
            <div>
              <h5 className="text-[10px] font-bold text-text-muted uppercase mb-3">Sliding Tabs (Underline & Pill variants)</h5>
              <div className="space-y-4">
                <Tabs
                  variant="underline"
                  tabs={[
                    { id: 'tab-1', label: 'Resource Files', icon: FileText },
                    { id: 'tab-2', label: 'Overview Metrics', icon: LayoutDashboard },
                    { id: 'tab-3', label: 'Settings Preferences', icon: Settings },
                  ]}
                  activeTab={activeTab}
                  onChange={setActiveTab}
                />
                
                <Tabs
                  variant="pill"
                  tabs={[
                    { id: 'tab-1', label: 'Overview', icon: LayoutDashboard },
                    { id: 'tab-2', label: 'Documents', icon: FileText },
                    { id: 'tab-3', label: 'Settings', icon: Settings },
                  ]}
                  activeTab={activeTab}
                  onChange={setActiveTab}
                />
              </div>
            </div>

            {/* Pagination demo */}
            <div>
              <h5 className="text-[10px] font-bold text-text-muted uppercase mb-2">Table Pagination controls</h5>
              <div className="border border-border rounded-lg bg-background/30">
                <Pagination
                  currentPage={currentPage}
                  totalPages={8}
                  onPageChange={(page) => {
                    setCurrentPage(page)
                    toast.info(`Switched to page ${page}`)
                  }}
                />
              </div>
            </div>

            <Divider />

            {/* Progress & Stepper row */}
            <div>
              <h5 className="text-[10px] font-bold text-text-muted uppercase mb-3">Progress Indicators & Step Steppers</h5>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <ProgressBar value={65} showLabel />
                  <div className="flex items-center gap-6">
                    <CircularProgress value={45} showLabel />
                    <CircularProgress value={80} size={50} strokeWidth={4} showLabel />
                    <div className="flex-1 text-xs text-text-secondary leading-normal">
                      Circular SVGs transition offset dimensions smoothly as they complete operations.
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-border rounded-lg bg-background/35">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-bold text-text-secondary">Interactive Workflow Progress</span>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        disabled={currentStep === 0}
                        onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                      >
                        Prev Step
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        disabled={currentStep === 2}
                        onClick={() => setCurrentStep((prev) => Math.min(2, prev + 1))}
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                  <StepProgress
                    steps={['Requirement Stage', 'Collaborative Design', 'Production Sync']}
                    currentStep={currentStep}
                  />
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Section 8: Data & Disclosure */}
        <section id="data-disclosure" className="py-8 border-b border-border scroll-mt-6">
          <div className="text-left mb-6">
            <h2 className="text-h-s text-text-primary">Data & Disclosure</h2>
            <p className="text-xs text-text-secondary mt-1">Sortable tables with skeleton states, and collapsible FAQs.</p>
          </div>

          <div className="space-y-6">
            {/* Table controller card */}
            <Card variant="basic" className="text-left space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-border">
                <div>
                  <h4 className="font-bold text-sm">Sortable Resource Catalog Table</h4>
                  <p className="text-xs text-text-secondary">Click headers to trigger active column sorting.</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTableLoading(!tableLoading)}
                  >
                    Toggle Table Loading
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTableEmpty(!tableEmpty)}
                  >
                    Toggle Empty State
                  </Button>
                </div>
              </div>

              <Table
                columns={tableColumns}
                data={tableEmpty ? [] : tableData}
                loading={tableLoading}
                sortColumn={sortCol}
                sortDirection={sortDir}
                onSort={handleTableSort}
              />
            </Card>

            {/* Accordion FAQ card */}
            <Card variant="basic" className="text-left space-y-4">
              <h4 className="font-bold text-sm">FAQ / Accordion Group</h4>
              <Accordion items={accordionItems} />
            </Card>
          </div>
        </section>

        {/* Section 9: Loaders & Empty States */}
        <section id="loaders-empty" className="py-8 border-b border-border scroll-mt-6">
          <div className="text-left mb-6">
            <h2 className="text-h-s text-text-primary">Loaders & Empty States</h2>
            <p className="text-xs text-text-secondary mt-1">Skeletons for loading visual placeholders and missing index banners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Loading skeletons */}
            <Card variant="basic" className="text-left space-y-6">
              <Card.Header>
                <span className="font-bold text-sm">Loading Skeletons</span>
              </Card.Header>

              <div className="space-y-6">
                <div>
                  <h5 className="text-[10px] font-bold text-text-muted uppercase mb-3">Skeleton Text Loading lines</h5>
                  <SkeletonText lines={3} />
                </div>

                <Divider />

                <div>
                  <h5 className="text-[10px] font-bold text-text-muted uppercase mb-3">Skeleton Card placeholder</h5>
                  <SkeletonCard hasImage={false} />
                </div>
              </div>
            </Card>

            {/* Empty state panel */}
            <Card variant="basic" className="text-left">
              <Card.Header>
                <span className="font-bold text-sm">Empty State placeholder</span>
              </Card.Header>
              <div className="pt-2">
                <EmptyState
                  title="No project repositories registered"
                  description="Your workspace does not have any code repositories linked. Create a new one below."
                  actionLabel="Add Repository"
                  onActionClick={() => toast.info('New repository dialog placeholder')}
                  actionIcon={Plus}
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Section 10: Command Palette */}
        <section id="palette" className="py-8 scroll-mt-6">
          <div className="text-left mb-6">
            <h2 className="text-h-s text-text-primary">Command Palette & Overlay dialog</h2>
            <p className="text-xs text-text-secondary mt-1">Linear-style keyboard shortcut command launcher.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Keyboard Command palette instructions */}
            <Card variant="basic" className="text-left flex flex-col justify-between">
              <div>
                <Card.Header>
                  <span className="font-bold text-sm">Command Palette Shortcut</span>
                  <Badge variant="primary" type="subtle">Ctrl+K</Badge>
                </Card.Header>
                <Card.Body>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Press <kbd className="px-1.5 py-0.5 border border-border bg-hover rounded font-bold">Ctrl + K</kbd> (or Cmd + K on macOS) anywhere on this page to pop open the command launcher overlay.
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed mt-2">
                    Use Up/Down Arrow keys to highlight list choices, Escape to close, and Enter to trigger selection mocks.
                  </p>
                </Card.Body>
              </div>

              <div className="mt-6">
                <Button
                  variant="primary"
                  fullWidth
                  icon={Terminal}
                  onClick={() => setIsCommandOpen(true)}
                >
                  Trigger Palette Manually
                </Button>
              </div>
            </Card>

            {/* Modal Dialog toggle */}
            <Card variant="basic" className="text-left flex flex-col justify-between">
              <div>
                <Card.Header>
                  <span className="font-bold text-sm">Interactive Modal Dialog</span>
                </Card.Header>
                <Card.Body>
                  <p className="text-xs text-text-secondary">
                    Launch a fully keyboard-accessible modal dialog. It locks focus, binds ESC key, and scales smoothly.
                  </p>
                </Card.Body>
              </div>

              <div className="mt-6">
                <Button
                  variant="primary"
                  fullWidth
                  icon={LayoutDashboard}
                  onClick={() => setIsModalOpen(true)}
                >
                  Trigger Modal Popup
                </Button>
              </div>
            </Card>
          </div>
        </section>

      </main>

      {/* 3. Modal Overlays & Portals */}
      
      {/* Interactive Testing Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Collaborator"
        primaryLabel="Add Collaborator"
        primaryLoading={modalLoading}
        primaryAction={() => {
          setModalLoading(true)
          setTimeout(() => {
            setModalLoading(false)
            setIsModalOpen(false)
            toast.success('Collaborator was added successfully.')
          }, 1500)
        }}
        secondaryAction={() => setIsModalOpen(false)}
      >
        <div className="space-y-4 text-left">
          <p className="text-xs text-text-secondary">
            Invite an engineer or product architect to join your ProdPilot AI workspace database logs.
          </p>
          
          <Input
            label="Email Address"
            type="email"
            icon={Mail}
            placeholder="colleague@domain.com"
          />

          <Input
            label="Workspace Role"
            type="select"
            options={[
              { value: 'pm', label: 'Product Manager' },
              { value: 'eng', label: 'Software Engineer' },
              { value: 'admin', label: 'Workspace Administrator' },
            ]}
          />
        </div>
      </Modal>

      {/* Reusable Command Palette Dialog */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />
    </div>
  )
}
