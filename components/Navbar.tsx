'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { SearchIcon, SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@/components/icons'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Highlights' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [shortcutKey, setShortcutKey] = useState('⌘K')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const platform = (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData?.platform ?? navigator.userAgent
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(platform)
    setShortcutKey(isMac ? '⌘K' : 'Ctrl+K')
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const openCmd = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'))
  }

  // ponytail: sticky header with quick search trigger. Upgrade path: add progress scroll bar if desired.
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-surface-card/90 dark:bg-background/90 backdrop-blur-md border-b border-border-card shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="flex items-center gap-2 font-semibold text-text-main hover:text-sky-600 dark:hover:text-sky-400 tracking-tight text-base"
          aria-label="Back to top"
        >
          <span className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 font-mono text-sm font-bold">
            DQ
          </span>
          <span className="font-mono text-xs text-text-muted hidden sm:inline">
            / tech-lead
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm text-text-sub font-medium">
            {navLinks.map((l) => {
              const isActive = activeSection === l.href.slice(1)
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`transition-colors ${
                      isActive
                        ? 'text-sky-600 dark:text-sky-400 font-semibold'
                        : 'hover:text-sky-600 dark:hover:text-sky-400'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2 border-l border-border-card pl-5">
            {/* Command Palette Trigger */}
            <button
              onClick={openCmd}
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-muted hover:bg-surface-muted/80 border border-border-card text-text-muted hover:text-text-main transition-colors text-xs font-mono"
              aria-label={`Open command palette (${shortcutKey})`}
            >
              <SearchIcon className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Search</span>
              <kbd className="bg-surface-card px-1.5 py-0.5 rounded text-[10px] border border-border-card">{shortcutKey}</kbd>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-lg bg-surface-muted hover:bg-surface-muted/80 border border-border-card text-text-main transition-colors text-sm"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-4 h-4" />
              ) : (
                <MoonIcon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={openCmd}
            type="button"
            aria-label="Search"
            className="p-2 rounded-lg bg-surface-muted border border-border-card text-sky-600 dark:text-sky-400 text-sm"
          >
            <SearchIcon className="w-4 h-4" />
          </button>
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg bg-surface-muted border border-border-card text-text-main transition-colors text-sm"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-4 h-4" />
            ) : (
              <MoonIcon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-lg bg-surface-muted border border-border-card text-text-main transition-colors"
          >
            {menuOpen ? (
              <CloseIcon className="w-5 h-5" />
            ) : (
              <HamburgerIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed left-0 right-0 bottom-0 top-16 bg-background/95 backdrop-blur-xl border-t border-border-card md:hidden z-30 flex flex-col p-6 animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-4 text-base font-medium text-text-main">
            {navLinks.map((l) => {
              const isActive = activeSection === l.href.slice(1)
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2.5 px-3 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-surface-muted text-sky-600 dark:text-sky-400 font-semibold'
                        : 'hover:bg-surface-muted hover:text-sky-600'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="mt-auto pt-6 border-t border-border-card flex items-center justify-between text-xs text-text-muted">
            <span>Trần Đăng Quang · Technical Lead</span>
            <button
              onClick={() => {
                setMenuOpen(false)
                openCmd()
              }}
              className="text-sky-600 dark:text-sky-400 font-mono"
            >
              Open {shortcutKey}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
