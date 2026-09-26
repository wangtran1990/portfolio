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
      <h2 className="text-3xl font-bold text-text-main mb-2 tracking-tight">
        {title}
      </h2>
      <div
        className={`w-12 h-1 bg-cyan-500 rounded ${center ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
      {subtitle && (
        <p className={`text-text-sub mt-4 max-w-md ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
