import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import SectionTitle from '@/components/SectionTitle'
import { achievements } from '@/data/resume'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-surface-muted scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionTitle title="Key Achievements" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <Card className="group h-full">
                <div
                  className="text-cyan-500 text-2xl mb-3 select-none"
                  aria-hidden="true"
                >
                  ✦
                </div>
                <h3 className="text-text-main font-semibold text-lg mb-2 group-hover:text-cyan-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-sub text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
