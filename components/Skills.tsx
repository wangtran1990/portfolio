'use client'

import { useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import SectionTitle from '@/components/SectionTitle'
import { skills } from '@/data/resume'
import { SearchIcon } from '@/components/icons'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const categories = useMemo(() => {
    return ['All', ...skills.map((s) => s.category)]
  }, [])

  const filteredGroups = useMemo(() => {
    return skills
      .map((group) => {
        const matchesCategory =
          selectedCategory === 'All' || group.category === selectedCategory

        if (!matchesCategory) return null

        const query = searchQuery.trim().toLowerCase()
        const items = query
          ? group.items.filter((item) => item.toLowerCase().includes(query))
          : group.items

        if (items.length === 0) return null

        return {
          ...group,
          items,
        }
      })
      .filter(Boolean) as typeof skills
  }, [selectedCategory, searchQuery])

  // ponytail: clean filterable skill cards with instant search. Upgrade path: add grouping by proficiency level if needed.
  return (
    <section id="skills" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionTitle
              title="Skills & Technologies"
              subtitle="Core programming languages, distributed architecture, cloud infrastructure, and leadership."
            />

            {/* Quick search input */}
            <div className="w-full sm:w-60 relative shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills..."
                className="w-full px-3.5 py-2 pl-9 rounded-xl bg-surface-card border border-border-card text-xs text-text-main placeholder:text-text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus:border-sky-500 transition-colors"
              />
              <SearchIcon className="w-4 h-4 text-text-muted absolute left-3 top-2.5 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-xs text-text-muted hover:text-text-main rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Category Pills */}
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-surface-card border border-border-card text-text-sub hover:border-sky-300 dark:hover:border-sky-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skills Cards Grid */}
        {filteredGroups.length === 0 ? (
          <div className="text-center py-10 border border-border-card rounded-2xl bg-surface-card text-text-muted text-sm">
            No technologies match &quot;{searchQuery}&quot;
          </div>
        ) : (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredGroups.map((group) => (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4 pb-2 border-b border-border-card flex items-center justify-between">
                        <span>{group.category}</span>
                        <span className="text-text-muted text-[10px] font-normal">
                          {group.items.length}
                        </span>
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs text-text-main bg-surface-muted border border-border-card px-2.5 py-1 rounded-md"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  )
}
