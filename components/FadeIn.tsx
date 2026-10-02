'use client'

import { useEffect, useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationPlayState = 'running'
          observer.disconnect()
        }
      },
      { rootMargin: '-50px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const directionClass = {
    up: 'fade-in-up',
    left: 'fade-in-left',
    right: 'fade-in-right',
    none: 'fade-in-none',
  }[direction]

  return (
    <div
      ref={ref}
      className={`${directionClass} ${className}`}
      style={{ animationDelay: `${delay}s`, animationPlayState: 'paused' }}
    >
      {children}
    </div>
  )
}
