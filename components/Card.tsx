import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  interactive?: boolean
}

export default function Card({
  children,
  className = '',
  interactive = true,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-surface-card border border-border-card rounded-xl p-6 ${
        interactive ? 'hover:border-border-hover transition-colors duration-200' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
