import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-text-main tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-text-muted text-sm sm:text-base mt-2 max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
