import FadeIn from '@/components/FadeIn'
import SectionTitle from '@/components/SectionTitle'
import { personal } from '@/data/resume'

const contacts = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    external: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'dang-quang-tran',
    href: personal.linkedin,
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Phone / Zalo',
    value: personal.phone,
    href: `tel:${personal.phone}`,
    external: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface-muted scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <SectionTitle
            title="Get in Touch"
            subtitle="Open to new opportunities and interesting conversations. Reach out via any channel below."
            center
          />
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {contacts.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.1}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 bg-surface-card border border-border-card hover:border-cyan-500 rounded-xl px-6 py-4 text-text-sub hover:text-cyan-500 transition-colors group h-full shadow-xs"
              >
                <span className="text-cyan-500 group-hover:text-cyan-400 transition-colors">
                  {c.icon}
                </span>
                <div className="text-left">
                  <p className="text-xs text-text-muted uppercase tracking-wider">
                    {c.label}
                  </p>
                  <p className="text-sm font-medium text-text-main group-hover:text-cyan-500 transition-colors">
                    {c.value}
                  </p>
                </div>
                {c.external && (
                  <span className="sr-only">(opens in a new tab)</span>
                )}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
