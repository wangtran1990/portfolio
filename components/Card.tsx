import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  interactive?: boolean
}

export default function Card({
  children,
  className = '',
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-surface-card border border-border-card rounded-2xl p-6 sm:p-7 transition-all duration-200 ${
        interactive
          ? 'hover:border-sky-400/60 hover:shadow-sm dark:hover:border-sky-500/40'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
