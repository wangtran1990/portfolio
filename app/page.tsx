import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import CommandPalette from '@/components/CommandPalette'

export default function Page() {
  return (
    <>
      <Navbar />
      <CommandPalette />
      <main id="content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <footer className="py-12 border-t border-border-card text-xs text-text-muted">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="font-mono text-text-main font-medium">Trần Đăng Quang</span>
            <span>— Technical Lead</span>
          </div>
          <div className="font-mono text-[11px] text-text-muted">
            Built with Next.js & Tailwind CSS
          </div>
        </div>
      </footer>
    </>
  )
}
