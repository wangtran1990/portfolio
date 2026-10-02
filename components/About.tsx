import FadeIn from '@/components/FadeIn'
import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import { about } from '@/data/resume'

export default function About() {
  const pillars = [
    {
      title: 'Technical Leadership',
      description:
        'Led cross-functional teams (backend, mobile, web). Hands-on in system design, rigorous code review standards, and engineer mentorship.',
    },
    {
      title: 'High-Scale Concurrency',
      description:
        'Designed streaming and billing backends scaling to 400,000+ concurrent users with distributed caching and robust fault-tolerance.',
    },
    {
      title: 'AI Engineering Workflows',
      description:
        'Actively applying modern AI coding agents (Claude Code, Copilot, OpenCode) to accelerate development cycles and improve code quality.',
    },
  ]

  // ponytail: clean narrative with 3 focus pillars. Upgrade path: add personal philosophy quote if desired.
  return (
    <section id="about" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionTitle
            title="About Me"
            subtitle="Hands-on Technical Lead bridging architectural vision, execution speed, and cross-functional leadership."
          />
        </FadeIn>

        {/* Narrative Card */}
        <FadeIn delay={0.08}>
          <Card className="mb-6 p-7 sm:p-9">
            <p className="text-text-sub text-base sm:text-lg leading-relaxed font-normal">
              {about}
            </p>
          </Card>
        </FadeIn>

        {/* 3 Pillars Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={0.12 + i * 0.05}>
              <Card className="h-full p-6">
                <h3 className="font-semibold text-text-main text-base mb-2">
                  {p.title}
                </h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  {p.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
