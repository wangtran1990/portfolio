'use client'

import { useState, useRef } from 'react'
import FadeIn from '@/components/FadeIn'
import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import { personal } from '@/data/resume'
import { EmailIcon, PhoneIcon, LinkedInIcon, CopyIcon } from '@/components/icons'

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [copyErrorKey, setCopyErrorKey] = useState<string | null>(null)
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const errorTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  const copyToClipboard = async (text: string, key: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
        setCopiedKey(key)
        clearTimeout(copiedTimerRef.current)
        copiedTimerRef.current = setTimeout(() => setCopiedKey(null), 2000)
        return
      }
      throw new Error('Clipboard API unavailable')
    } catch {
      try {
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.opacity = '0'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        const successful = document.execCommand('copy')
        document.body.removeChild(textArea)
        if (successful) {
          setCopiedKey(key)
          clearTimeout(copiedTimerRef.current)
          copiedTimerRef.current = setTimeout(() => setCopiedKey(null), 2000)
          return
        }
        throw new Error('execCommand failed')
      } catch {
        setCopyErrorKey(key)
        clearTimeout(errorTimerRef.current)
        errorTimerRef.current = setTimeout(() => setCopyErrorKey(null), 2000)
      }
    }
  }

  // ponytail: clean contact cards with instant copy. Upgrade path: add contact form endpoint when backend is added.
  return (
    <section id="contact" className="py-20 px-6 bg-surface-muted/50 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionTitle
            title="Get in Touch"
            subtitle="Open to technical leadership, consulting, architecture advisory, and new opportunities."
            center
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Email */}
          <FadeIn delay={0.05}>
            <Card className="h-full p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">
                  <EmailIcon />
                </div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-text-muted mb-1">Email</h3>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm font-semibold text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors truncate block"
                >
                  {personal.email}
                </a>
              </div>

              <div className="pt-6 mt-6 border-t border-border-card flex items-center gap-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex-1 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs text-center transition-colors"
                >
                  Send Email
                </a>
                <button
                  type="button"
                  title="Copy email address"
                  aria-label="Copy email address"
                  onClick={() => copyToClipboard(personal.email, 'email')}
                  className="p-2 min-w-[36px] min-h-[36px] rounded-lg bg-surface-muted hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-border-card hover:border-sky-300 dark:hover:border-sky-800 text-xs font-mono text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center justify-center"
                >
                  {copiedKey === 'email' ? (
                    <span className="text-sky-600 dark:text-sky-400 font-bold">✓</span>
                  ) : copyErrorKey === 'email' ? (
                    <span className="text-rose-500 font-bold">!</span>
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copyErrorKey === 'email' && (
                <p className="text-xs text-rose-500 mt-2 font-mono text-center">Copy failed</p>
              )}
            </Card>
          </FadeIn>

          {/* LinkedIn */}
          <FadeIn delay={0.1}>
            <Card className="h-full p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">
                  <LinkedInIcon />
                </div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-text-muted mb-1">LinkedIn</h3>
                <p className="text-sm font-semibold text-text-main truncate">dang-quang-tran</p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-card">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs transition-colors"
                >
                  <span>Open LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>
            </Card>
          </FadeIn>

          {/* Phone / Location */}
          <FadeIn delay={0.15}>
            <Card className="h-full p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">
                  <PhoneIcon />
                </div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-text-muted mb-1">Phone / Location</h3>
                <a
                  href={`tel:${personal.phone.replace(/[^+\d]/g, '')}`}
                  className="text-sm font-semibold text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors block"
                >
                  {personal.phone}
                </a>
                <p className="text-xs text-text-muted mt-1">📍 {personal.location}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-card flex items-center gap-2">
                <a
                  href={`tel:${personal.phone.replace(/[^+\d]/g, '')}`}
                  className="flex-1 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs text-center transition-colors"
                >
                  Call Phone
                </a>
                <button
                  type="button"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                  onClick={() => copyToClipboard(personal.phone, 'phone')}
                  className="p-2 min-w-[36px] min-h-[36px] rounded-lg bg-surface-muted hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-border-card hover:border-sky-300 dark:hover:border-sky-800 text-xs font-mono text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center justify-center"
                >
                  {copiedKey === 'phone' ? (
                    <span className="text-sky-600 dark:text-sky-400 font-bold">✓</span>
                  ) : copyErrorKey === 'phone' ? (
                    <span className="text-rose-500 font-bold">!</span>
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copyErrorKey === 'phone' && (
                <p className="text-xs text-rose-500 mt-2 font-mono text-center">Copy failed</p>
              )}
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
