import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <footer className="text-center text-text-muted text-xs py-8 border-t border-border-card">
        © {new Date().getFullYear()} Trần Đăng Quang  · Built with Next.js & Tailwind CSS
      </footer>
    </>
  )
}
