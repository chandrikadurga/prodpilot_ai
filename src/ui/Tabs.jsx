import React, { useState, useEffect, useRef } from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable animated Tabs component. 
 * Automatically calculates tab widths to slide the active underline smoothly.
 */
export function Tabs({
  tabs = [], // [{id, label, icon: Icon}]
  activeTab,
  onChange,
  variant = 'underline', // 'underline' | 'pill'
  className = '',
  ...props
}) {
  const [localActiveTab, setLocalActiveTab] = useState(tabs[0]?.id)
  const currentTab = activeTab !== undefined ? activeTab : localActiveTab
  const setCurrentTab = onChange || setLocalActiveTab

  const containerRef = useRef(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef({})

  useEffect(() => {
    const activeTabEl = tabRefs.current[currentTab]
    if (activeTabEl && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const tabRect = activeTabEl.getBoundingClientRect()
      
      setIndicatorStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      })
    }
  }, [currentTab, tabs])

  const variants = {
    underline: 'border-b border-border pb-px',
    pill: 'bg-background p-1 rounded-lg border border-border',
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex items-center w-full overflow-x-auto no-scrollbar scroll-smooth select-none',
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1 w-full min-w-max relative">
        {/* Animated Sliding Background/Underline */}
        {tabs.length > 0 && (
          <div
            style={{
              transform: `translateX(${indicatorStyle.left}px)`,
              width: `${indicatorStyle.width}px`,
            }}
            className={cn(
              'absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-out pointer-events-none',
              variant === 'underline' && 'bottom-0 h-0.5 bg-primary',
              variant === 'pill' && 'top-0 bottom-0 h-auto bg-surface rounded-md border border-border shadow-sm my-0.5'
            )}
          />
        )}

        {/* Tab Buttons */}
        {tabs.map((tab) => {
          const isActive = tab.id === currentTab
          const Icon = tab.icon

          return (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[tab.id] = el)}
              onClick={() => setCurrentTab(tab.id)}
              className={cn(
                'relative z-10 px-4 py-2.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors cursor-pointer flex items-center justify-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-primary/20',
                variant === 'underline' && 'border-b-2 border-transparent',
                isActive && 'text-text-primary font-bold',
                variant === 'pill' && isActive && 'text-primary'
              )}
            >
              {Icon && <Icon className="w-4 h-4 shrink-0" />}
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
