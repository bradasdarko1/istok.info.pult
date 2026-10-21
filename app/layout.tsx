
import '../css/tailwind.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { LanguageProvider } from '@/components/LanguageProvider'
import { ThemeProviders } from './theme-providers'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

// =====================================
// FONT
// =====================================

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

// =====================================
// GLOBALNI SEO
// =====================================

const SITE_URL = 'https://www.istokinfopult.rs'
const SITE_NAME = 'Исток Инфо Пулт'

const SITE_TITLE =
  'Исток Инфо Пулт | Вести, историја и култура'

const SITE_DESCRIPTION =
  'Исток Инфо Пулт доноси вести, историјске приче, културне догађаје и садржаје о Србији, Русији и српско-руским односима.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  icons: {
    icon: '/static/favicons/logo.PNG',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'sr_RS',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

// =====================================
// ROOT LAYOUT
// =====================================

export default function RootLayout({
  children,
}: {
  children: ReactNode
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
            {/* Pozadinska slika */}
            <div
              className="pointer-events-none fixed inset-0 -z-30 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('/static/images/pozadina1.jpg')",
              }}
            />

            {/* Tamni sloj */}
            <div className="pointer-events-none fixed inset-0 -z-20 bg-black/50" />

            {/* Gradijent */}
            <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

            <SectionContainer>
              <div className="flex min-h-screen flex-col">
                <Navbar />

                <main className="mb-auto pt-16 sm:pt-20">
                  {children}
                </main>

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
