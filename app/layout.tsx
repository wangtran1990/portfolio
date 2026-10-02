import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trần Đăng Quang — Technical Lead',
  description:
    'Personal portfolio of Trần Đăng Quang, a hands-on Technical Lead with 10+ years building cloud-native backends, distributed systems, and payment platforms.',
  openGraph: {
    title: 'Trần Đăng Quang — Technical Lead',
    description:
      'Hands-on Technical Lead with 10+ years of experience in cloud-native backends, distributed systems, and payment solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{document.documentElement.classList.add('no-transition');const t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else if(!t&&!window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.remove('dark')}}catch(e){}requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.remove('no-transition')})})})()`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased bg-background text-foreground transition-colors duration-200">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-600 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
