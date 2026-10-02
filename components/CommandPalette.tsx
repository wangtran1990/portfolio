'use client'

import { useEffect, useState, useRef, useMemo, type ReactNode } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { personal } from '@/data/resume'

interface CommandItem {
  id: string
  title: string
  category: 'Navigation' | 'Actions' | 'Social'
  icon: ReactNode
  action: () => void
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const copyTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const { theme, toggleTheme } = useTheme()
  const inputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null)

  const openPalette = () => {
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null
    setQuery('')
    setSelectedIndex(0)
    setOpen(true)
  }

  // Listen for global open event & Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((prev) => {
          if (!prev) {
            previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null
            setQuery('')
            setSelectedIndex(0)
            return true
          }
          return false
        })
      } else if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }

    const handleOpenCustom = () => openPalette()

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('open-command-palette', handleOpenCustom)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('open-command-palette', handleOpenCustom)
    }
  }, [open])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      inputRef.current?.focus()
    } else {
      document.body.style.overflow = ''
      previouslyFocusedElementRef.current?.focus()
    }
  }, [open])

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(`Copied ${label}!`)
      clearTimeout(copyTimerRef.current)
      copyTimerRef.current = setTimeout(() => {
        setCopiedText(null)
        setOpen(false)
      }, 1000)
    } catch {
      // fallback
    }
  }

  const navigateTo = (hash: string) => {
    setOpen(false)
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const items: CommandItem[] = useMemo(
    () => [
      {
        id: 'nav-top',
        title: 'Top / Overview',
        category: 'Navigation',
        icon: '⚡',
        action: () => navigateTo('#'),
      },
      {
        id: 'nav-about',
        title: 'About Trần Đăng Quang',
        category: 'Navigation',
        icon: '👤',
        action: () => navigateTo('#about'),
      },
      {
        id: 'nav-exp',
        title: 'Experience & Systems',
        category: 'Navigation',
        icon: '💼',
        action: () => navigateTo('#experience'),
      },
      {
        id: 'nav-skills',
        title: 'Skills & Technologies',
        category: 'Navigation',
        icon: '🛠️',
        action: () => navigateTo('#skills'),
      },
      {
        id: 'nav-achieve',
        title: 'Key Milestones & Impact',
        category: 'Navigation',
        icon: '🏆',
        action: () => navigateTo('#achievements'),
      },
      {
        id: 'nav-contact',
        title: 'Contact Information',
        category: 'Navigation',
        icon: '📬',
        action: () => navigateTo('#contact'),
      },
      {
        id: 'act-email',
        title: `Copy Email: ${personal.email}`,
        category: 'Actions',
        icon: '📧',
        action: () => copy(personal.email, 'email'),
      },
      {
        id: 'act-phone',
        title: `Copy Phone: ${personal.phone}`,
        category: 'Actions',
        icon: '📱',
        action: () => copy(personal.phone, 'phone number'),
      },
      {
        id: 'act-theme',
        title: `Toggle Theme (Current: ${theme})`,
        category: 'Actions',
        icon:
          theme === 'dark' ? (
            <svg
              className="w-4 h-4 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-sky-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ),
        action: () => toggleTheme(),
      },
      {
        id: 'soc-linkedin',
        title: 'Visit LinkedIn Profile',
        category: 'Social',
        icon: '🔗',
        action: () => {
          setOpen(false)
          window.open(personal.linkedin, '_blank', 'noopener,noreferrer')
        },
      },
    ],
    [theme, toggleTheme]
  )

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items
    const q = query.toLowerCase()
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    )
  }, [items, query])

  const handleKeyDownModal = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Tab') {
      const container = modalRef.current
      if (!container) return
      const focusable = container.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const firstElement = focusable[0]
      const lastElement = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }
  }

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(
        (prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1)
      )
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action()
      }
    }
  }

  if (!open) return null

  // ponytail: modal navigation palette with search. Upgrade path: extract to hook if re-used.
  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={() => setOpen(false)}
      onKeyDown={handleKeyDownModal}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-xl bg-surface-card border border-border-card rounded-2xl shadow-xl overflow-hidden text-text-main"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownList}
      >
        {/* Search header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border-card bg-surface-muted/40">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-palette-results"
            aria-activedescendant={
              filteredItems[selectedIndex] ? `cmd-item-${filteredItems[selectedIndex].id}` : undefined
            }
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            className="w-full bg-transparent text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 placeholder:text-text-muted"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-text-muted bg-surface-muted border border-border-card rounded font-mono">
            ESC
          </kbd>
        </div>

        {/* Status toast */}
        {copiedText && (
          <div className="px-4 py-2 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-mono border-b border-sky-200 dark:border-sky-800 flex items-center justify-between">
            <span>✓ {copiedText}</span>
          </div>
        )}

        {/* List items */}
        <div
          id="command-palette-results"
          role="listbox"
          className="max-h-80 overflow-y-auto p-2 space-y-1"
        >
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-text-muted text-sm">
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <button
                key={item.id}
                id={`cmd-item-${item.id}`}
                role="option"
                aria-selected={selectedIndex === idx}
                type="button"
                onClick={() => item.action()}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                  selectedIndex === idx
                    ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-medium'
                    : 'text-text-sub hover:bg-surface-muted/60'
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  <span className="text-base">{item.icon}</span>
                  <span className="truncate">{item.title}</span>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-text-muted px-2 py-0.5 rounded bg-surface-muted shrink-0">
                  {item.category}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-border-card bg-surface-muted/20 text-xs text-text-muted flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>↑↓ navigate</span>
            <span>↵ select</span>
          </div>
          <span className="text-text-muted font-mono text-[11px]">Trần Đăng Quang · Technical Lead</span>
        </div>
      </div>
    </div>
  )
}
