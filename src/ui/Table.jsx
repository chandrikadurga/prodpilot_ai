import React from 'react'
import { cn } from '../utils/cn'

/**
 * Reusable Data Table component with sortable headers, loading skeletons, and empty states.
 */
export function Table({
  columns = [], // [{key, label, sortable: bool, render: func, className: string}]
  data = [],
  loading = false,
  emptyMessage = 'No records found.',
  sortColumn = null, // key of currently sorted column
  sortDirection = 'asc', // 'asc' | 'desc'
  onSort, // callback (columnKey) => void
  className = '',
  ...props
}) {
  const handleHeaderClick = (col) => {
    if (col.sortable && onSort) {
      onSort(col.key)
    }
  }

  return (
    <div className={cn('w-full border-2 border-border rounded-md bg-surface shadow-[4px_4px_0px_0px_var(--color-border)] overflow-hidden text-left', className)} {...props}>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-sm text-text-primary">
          {/* Table Headers */}
          <thead>
            <tr className="bg-background border-b-2 border-border text-text-secondary font-bold text-xs uppercase tracking-wider select-none">
              {columns.map((col) => {
                const isSorted = sortColumn === col.key
                return (
                  <th
                    key={col.key}
                    onClick={() => handleHeaderClick(col)}
                    className={cn(
                      'px-6 py-3.5 font-bold',
                      col.sortable && 'cursor-pointer hover:text-text-primary hover:bg-hover/50 transition-colors',
                      col.className
                    )}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{col.label}</span>
                      {col.sortable && (
                        <span className="inline-flex flex-col text-text-muted shrink-0">
                          {isSorted ? (
                            sortDirection === 'asc' ? (
                              <span className="i-lucide-chevron-up w-3.5 h-3.5 text-primary" />
                            ) : (
                              <span className="i-lucide-chevron-down w-3.5 h-3.5 text-primary" />
                            )
                          ) : (
                            <span className="i-lucide-chevrons-up-down w-3.5 h-3.5 opacity-40 hover:opacity-100" />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y-2 divide-border text-text-secondary">
            {loading ? (
              // Loading Skeletons
              Array.from({ length: 4 }).map((_, rowIdx) => (
                <tr key={rowIdx} className="animate-pulse">
                  {columns.map((col, colIdx) => (
                    <td key={colIdx} className="px-6 py-4.5">
                      <div
                        className={cn(
                          'h-3.5 bg-neutral-200 dark:bg-zinc-800 rounded-sm',
                          colIdx === 0 ? 'w-2/3' : 'w-1/2'
                        )}
                      />
                    </td>
                  ))}
                </tr>
              ))
            ) : data.length === 0 ? (
              // Empty State
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center text-text-muted">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="i-lucide-database w-8 h-8 opacity-40" />
                    <p className="font-semibold text-sm text-text-secondary">{emptyMessage}</p>
                  </div>
                </td>
              </tr>
            ) : (
              // Real Data Rows
              data.map((item, rowIdx) => (
                <tr
                  key={item.id || rowIdx}
                  className="hover:bg-hover/25 dark:hover:bg-hover/10 transition-colors"
                >
                  {columns.map((col) => {
                    const value = item[col.key]
                    return (
                      <td key={col.key} className={cn('px-6 py-4.5', col.className)}>
                        {col.render ? col.render(value, item) : value}
                      </td>
                    )
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
