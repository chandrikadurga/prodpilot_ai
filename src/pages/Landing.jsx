import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { useAuth } from '../hooks/useAuth.jsx'

/**
 * Premium landing page for ProdPilot AI.
 * Built using atomic UI components, responsive grids, and modern layout design.
 */
export default function Landing() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  const handleCTA = () => {
    if (isAuthenticated) {
      navigate(ROUTES.DASHBOARD)
    } else {
      navigate(ROUTES.REGISTER)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 overflow-x-hidden font-sans">
      {/* Landing Navbar */}
      <header className="w-full h-20 border-b border-neutral-250/20 dark:border-neutral-800/40 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-extrabold text-lg select-none shadow-sm">
            P
          </div>
          <span className="font-extrabold text-lg tracking-tight">
            ProdPilot <span className="text-primary">AI</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <Button variant="primary" size="sm" onClick={() => navigate(ROUTES.DASHBOARD)}>
              Go to Workspace
            </Button>
          ) : (
            <>
              <Link to={ROUTES.LOGIN} className="text-sm font-semibold text-neutral-600 dark:text-neutral-350 hover:text-primary dark:hover:text-primary transition-colors">
                Sign In
              </Link>
              <Button variant="primary" size="sm" onClick={() => navigate(ROUTES.REGISTER)}>
                Get Started
              </Button>
            </>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto text-center flex flex-col items-center">
        <Badge variant="primary" type="subtle" className="mb-6 px-4 py-1.5 text-sm tracking-wide uppercase">
          ✦ PM Productivity Reinvented
        </Badge>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-neutral-905 dark:text-neutral-50 max-w-4xl leading-[1.1] mb-6">
          The AI-Powered Workspace for <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Product Leaders</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed mb-10">
          Unify your PRDs, project roadmaps, user feedback loops, and team meeting summaries in a single, high-performance product management console.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
          <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-md" onClick={handleCTA}>
            Get Started Free
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto border border-neutral-200 dark:border-neutral-800" onClick={() => navigate(ROUTES.LOGIN)}>
            Request Demo
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-neutral-100/40 dark:bg-neutral-900/20 border-y border-neutral-200/50 dark:border-neutral-900/60 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Complete Suite of PM Tooling</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
              Skip scattered documents and spreadsheets. Work in a cohesive developer-grade environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="default" className="hover:-translate-y-1 transition-transform duration-300">
              <span className="i-lucide-file-text text-3xl text-primary mb-4 block" />
              <h3 className="font-bold text-lg mb-2">Automated PRD Synthesizer</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Generate highly comprehensive Product Requirement Documents incorporating technical constraints and feature scopes.
              </p>
            </Card>
            <Card variant="default" className="hover:-translate-y-1 transition-transform duration-300">
              <span className="i-lucide-milestone text-3xl text-primary mb-4 block" />
              <h3 className="font-bold text-lg mb-2">Roadmap Visualizer</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Translate company priorities into dynamic timelines. Align executive partners and engineering squads instantly.
              </p>
            </Card>
            <Card variant="default" className="hover:-translate-y-1 transition-transform duration-300">
              <span className="i-lucide-message-square text-3xl text-primary mb-4 block" />
              <h3 className="font-bold text-lg mb-2">Feedback Analyzer</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Ingest customer request tickets, categorise features, and score feedback against your core strategy.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" type="subtle" className="mb-4">Why ProdPilot</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              Spend less time reporting, more time shipping value.
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-450">
                  <span className="i-lucide-check w-5 h-5 block" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Increase Speed by 40%</h4>
                  <p className="text-sm text-neutral-550 dark:text-neutral-400">Streamline ticket creation, PRD spec draft, and alignment meetings.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-450">
                  <span className="i-lucide-check w-5 h-5 block" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Consolidated Workspace</h4>
                  <p className="text-sm text-neutral-550 dark:text-neutral-400">Ditch the monthly subscription chaos. One single workspace for PM operations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-450">
                  <span className="i-lucide-check w-5 h-5 block" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Direct Developer Integration</h4>
                  <p className="text-sm text-neutral-550 dark:text-neutral-400">Integrate roadmap items directly with developer task systems.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            {/* Design abstract UI container mockup */}
            <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl shadow-medium border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col gap-4 relative overflow-hidden select-none">
              <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3">
                <span className="text-xs font-bold text-neutral-400">Q3 TIMELINE & PRD</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="h-6 bg-neutral-100 dark:bg-neutral-800 rounded-md w-3/4"></div>
              <div className="h-16 bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-lg p-3 space-y-2">
                <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full w-full"></div>
                <div className="h-2 bg-neutral-250 dark:bg-neutral-850 rounded-full w-5/6"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-6 bg-primary-100 dark:bg-primary-950/40 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center">Roadmap Drafted</div>
                <div className="h-6 bg-secondary-100 dark:bg-secondary-950/40 text-secondary text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center">Scope Approved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-neutral-100/40 dark:bg-neutral-900/20 border-t border-neutral-200/50 dark:border-neutral-900/60 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">How ProdPilot Works</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
              Get set up in seconds. Import from current tools or start fresh with AI-enabled scaffolding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-black text-lg mb-6 shadow-sm">1</div>
              <h3 className="font-bold text-lg mb-2">Connect Your Workspace</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
                Link your team's repository, task tracker, and messaging channels in a single click.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-black text-lg mb-6 shadow-sm">2</div>
              <h3 className="font-bold text-lg mb-2">Draft specs & map schedules</h3>
              <p className="text-sm text-neutral-550 dark:text-neutral-400 leading-relaxed max-w-xs">
                Convert transcripts and logs into structural PRDs and visually interactive roadmaps automatically.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-black text-lg mb-6 shadow-sm">3</div>
              <h3 className="font-bold text-lg mb-2">Sync and Deploy</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
                Export clean markdown docs and tasks directly to developer queues. Align all stakeholders instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:py-24 bg-gradient-to-b from-transparent to-primary-500/5 dark:to-primary-950/10">
        <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-8 md:p-16 text-center shadow-hard relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full filter blur-3xl"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Ready to lead your product lifecycle with clarity?
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto mb-8">
            Create your account today and experience product management tools structured for speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={handleCTA}>
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate(ROUTES.LOGIN)}>
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 px-6 md:px-12 border-t border-neutral-200/80 dark:border-neutral-900/60 bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-extrabold text-lg select-none">
              P
            </div>
            <span className="font-extrabold text-lg tracking-tight select-none">
              ProdPilot <span className="text-primary">AI</span>
            </span>
          </div>
          <p className="text-xs text-neutral-400 font-medium md:order-last">
            © {new Date().getFullYear()} ProdPilot AI Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-neutral-500 dark:text-neutral-400 font-semibold">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
