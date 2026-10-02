'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import SectionTitle from '@/components/SectionTitle'
import { experiences } from '@/data/resume'

type FilterCategory = 'all' | 'fintech' | 'streaming' | 'startup' | 'enterprise'

const filters: { key: FilterCategory; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'startup', label: '0-to-1 Platform' },
  { key: 'fintech', label: 'FinTech & Payments' },
  { key: 'streaming', label: 'High-Scale Streaming' },
  { key: 'enterprise', label: 'Enterprise' },
]

export default function Experience() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all')

  const filteredExperiences = experiences.filter((exp) => {
    if (selectedFilter === 'all') return true
    return exp.category === selectedFilter
  })

  // ponytail: clean timeline with domain filtering. Upgrade path: add project milestone date range slider if required.
  return (
    <section id="experience" className="py-20 px-6 bg-surface-muted/50 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionTitle
            title="Experience & Systems Built"
            subtitle="10+ years of leading engineering teams and building production-grade distributed architectures."
          />
        </FadeIn>

        {/* Filter Pills */}
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                aria-pressed={selectedFilter === f.key}
                onClick={() => setSelectedFilter(f.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedFilter === f.key
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-surface-card border border-border-card text-text-sub hover:border-sky-300 dark:hover:border-sky-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Experience List */}
        <div className="flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
              >
                <Card className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-text-main">
                          {exp.company}
                        </h3>
                        <span className="text-xs font-medium text-text-muted px-2 py-0.5 rounded bg-surface-muted border border-border-card">
                          {exp.subtitle}
                        </span>
                      </div>

                      <p className="text-sky-600 dark:text-sky-400 font-medium text-sm mt-1">
                        {exp.role}
                        {exp.roleNote && (
                          <span className="text-text-muted font-normal ml-2">
                            ({exp.roleNote})
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="text-xs text-text-muted font-mono sm:text-right shrink-0">
                      <p className="font-semibold text-text-sub">{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5 text-sm text-text-sub leading-relaxed">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 items-start">
                        <span className="text-sky-500 mt-1 select-none text-xs">
                          •
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-border-card text-xs font-mono text-text-muted">
                    <span className="font-semibold text-text-sub mr-2">Stack:</span>
                    <span>{exp.stack}</span>
                  </div>

                  {/* Tags */}
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border-card/60">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-text-main bg-surface-muted border border-border-card px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
