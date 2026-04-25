import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Doživotne kazne koje su potresle srpski narod | Istok Info Pult',
  description:
    'Vest o izricanju doživotnih kazni Blagoju Spasojeviću i Vladimiru Toliću, dok je Dušan Maksimović osuđen na 30 godina zatvora, duboko je potresla javnost.',
  openGraph: {
    title:
      'Doživotne kazne koje su potresle srpski narod',
    description:
      'Danas više nego ikada moramo biti uz svoju braću i njihove porodice.',
    url: 'https://istokinfopult.rs/vesti/slucaj-banjska',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/banjska.jpg',
        width: 1200,
        height: 630,
        alt: 'Doživotne kazne koje su potresle srpski narod',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Doživotne kazne koje su potresle srpski narod',
    description:
      'Danas više nego ikada moramo biti uz svoju braću i njihove porodice.',
    images: ['https://istokinfopult.rs/static/images/banjska.jpg'],
  },
}

export default function SlucajBanjskaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}