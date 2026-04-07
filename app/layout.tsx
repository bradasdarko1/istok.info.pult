// app/layout.tsx
import '../css/tailwind.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { LanguageProvider } from '@/components/LanguageProvider'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Istok Info Pult',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="sr"
      className={`${spaceGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden bg-black text-white antialiased">
        <ThemeProviders>
          <LanguageProvider>
            <div
              className="pointer-events-none fixed inset-0 -z-30 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/static/images/pozadina1.jpg')" }}
            />

            <div className="pointer-events-none fixed inset-0 -z-20 bg-black/50" />

            <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

            <SectionContainer>
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="mb-auto pt-16 sm:pt-20">{children}</main>
                <Footer />
              </div>
            </SectionContainer>

            <Analytics />
          </LanguageProvider>
        </ThemeProviders>
      </body>
    </html>
  )
}
