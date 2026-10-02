import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import SectionTitle from '@/components/SectionTitle'
import { education } from '@/data/resume'

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionTitle
            title="Education"
            subtitle="Academic background in computer science and software engineering."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <FadeIn key={edu.degree} delay={i * 0.08}>
              <Card className="h-full p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold mb-2 block">
                    {edu.period}
                  </span>
                  <h3 className="text-text-main font-semibold text-base mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-text-muted text-sm">{edu.institution}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
