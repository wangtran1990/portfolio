import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import SectionTitle from '@/components/SectionTitle'
import { skills } from '@/data/resume'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionTitle title="Skills" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.06}>
              <Card className="p-5 h-full">
                <h3 className="text-cyan-500 text-xs font-semibold uppercase tracking-widest mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-text-sub bg-surface-muted border border-border-card px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
