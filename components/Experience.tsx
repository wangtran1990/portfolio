import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import SectionTitle from '@/components/SectionTitle'
import { experiences } from '@/data/resume'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface-muted scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionTitle title="Experience" />
        </FadeIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-3 top-2 bottom-2 w-px bg-border-card hidden md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.1} direction="left">
                <div className="md:pl-10 relative">
                  {/* Timeline dot */}
                  <div
                    className="hidden md:block absolute left-0 top-3 w-6 h-6 rounded-full border-2 border-cyan-500 bg-background"
                    aria-hidden="true"
                  />

                  <Card>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-text-main">
                          {exp.company}
                        </h3>
                        <p className="text-cyan-500 text-sm font-medium">
                          {exp.subtitle}
                        </p>
                        <p className="text-text-sub font-medium mt-1">
                          {exp.role}
                          {exp.roleNote && (
                            <span className="text-text-muted text-xs ml-2">
                              ({exp.roleNote})
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="text-left sm:text-right text-sm text-text-muted shrink-0">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-text-sub text-sm flex gap-2">
                          <span
                            className="text-cyan-500 select-none shrink-0"
                            aria-hidden="true"
                          >
                            ▸
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-text-muted font-mono border-t border-border-card pt-3">
                      {exp.stack}
                    </p>
                  </Card>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
