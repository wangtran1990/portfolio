import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import SectionTitle from '@/components/SectionTitle'
import { achievements } from '@/data/resume'

export default function Achievements() {
  // ponytail: clean milestone grid with category labels. Upgrade path: add metrics charts if quantitative data grows.
  return (
    <section id="achievements" className="py-20 px-6 bg-surface-muted/50 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionTitle
            title="Key Milestones & Impact"
            subtitle="Demonstrated impact across high-scale streaming, payment gateways, and technical leadership."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <Card className="h-full p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 px-2.5 py-0.5 rounded-full mb-3">
                    {item.tag || 'Milestone'}
                  </span>

                  <h3 className="text-text-main font-bold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-text-sub text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
