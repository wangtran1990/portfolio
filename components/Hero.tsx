import FadeIn from '@/components/FadeIn'
import { personal } from '@/data/resume'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 relative">
      <FadeIn className="max-w-3xl">
        <p className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-4 font-semibold">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-text-main mb-4 leading-tight tracking-tight">
          {personal.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-text-sub font-light mb-6">
          {personal.title}
        </h2>
        <p className="text-text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {personal.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-colors shadow-sm"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-3 border border-border-card hover:border-cyan-500 text-text-main hover:text-cyan-500 rounded-lg transition-colors"
          >
            View Experience
          </a>
        </div>
      </FadeIn>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 text-text-muted animate-bounce"
        aria-hidden="true"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  )
}
