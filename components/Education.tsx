import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import SectionTitle from '@/components/SectionTitle'
import { education } from '@/data/resume'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionTitle title="Education" />
        </FadeIn>

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <FadeIn key={edu.degree} delay={i * 0.08} direction="left">
              <Card className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-text-main font-semibold text-base sm:text-lg">
                    {edu.degree}
                  </h3>
                  <p className="text-text-muted text-sm mt-1">{edu.institution}</p>
                </div>
                <span className="text-cyan-500 text-sm font-mono shrink-0">
                  {edu.period}
                </span>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
