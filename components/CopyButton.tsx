'use client'

import { useState, useRef } from 'react'
import { CopyIcon, CheckIcon } from '@/components/icons'

interface CopyButtonProps {
  text: string
  label?: string
  copiedLabel?: string
  variant?: 'outline' | 'ghost' | 'full'
  className?: string
}

export default function CopyButton({
  text,
  label = 'Copy',
  copiedLabel = 'Copied to Clipboard!',
  variant = 'outline',
  className = '',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  const baseStyle =
    'transition-all text-xs font-mono inline-flex items-center justify-center gap-2 cursor-pointer'

  const variants = {
    outline:
      'px-5 py-3 border border-border-card hover:border-emerald-500/50 bg-surface-muted text-text-main hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl',
    ghost:
      'p-2 text-text-sub hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-surface-muted rounded-lg',
    full:
      'w-full py-2 px-3 rounded-lg bg-surface-muted hover:bg-emerald-500/15 border border-border-card hover:border-emerald-500/40 text-text-main hover:text-emerald-600 dark:hover:text-emerald-400',
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className={`${baseStyle} ${variants[variant]} ${className}`}
        aria-label={copied ? copiedLabel : `${label} (${text})`}
      >
        {copied ? (
          <CheckIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
        ) : (
          <CopyIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
        )}
        <span>{copied ? copiedLabel : label}</span>
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? copiedLabel : ''}
      </span>
    </>
  )
}
