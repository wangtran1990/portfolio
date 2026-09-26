import FadeIn from '@/components/FadeIn'
import SectionTitle from '@/components/SectionTitle'
import { about } from '@/data/resume'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionTitle title="About" />
          <p className="text-text-sub text-lg leading-relaxed">{about}</p>
        </FadeIn>
      </div>
    </section>
  )
}
