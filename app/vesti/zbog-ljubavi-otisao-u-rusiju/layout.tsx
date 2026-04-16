import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Zbog ljubavi u Rusiji: Milan Stojanović o životu, radu i srpsko-ruskim vezama | Istok Info Pult',
  description:
    'Ekskluzivni razgovor sa Milanom Stojanovićem o životu u Rusiji, odnosu Rusa prema Srbima, mogućnostima za mlade i značaju srpsko-ruskih veza.',
  openGraph: {
    title:
      'Zbog ljubavi u Rusiji: Milan Stojanović o životu, radu i srpsko-ruskim vezama',
    description:
      'Ekskluzivni razgovor sa Milanom Stojanovićem o životu u Rusiji, odnosu Rusa prema Srbima, mogućnostima za mlade i značaju srpsko-ruskih veza.',
    url: 'https://istokinfopult.com/vesti/zbog-ljubavi-otisao-u-rusiju',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.com/static/images/zbog-ljubavi-rusija-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Zbog ljubavi u Rusiji - Milan Stojanović',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Zbog ljubavi u Rusiji: Milan Stojanović o životu, radu i srpsko-ruskim vezama',
    description:
      'Ekskluzivni razgovor sa Milanom Stojanovićem o životu u Rusiji, odnosu Rusa prema Srbima, mogućnostima za mlade i značaju srpsko-ruskih veza.',
    images: ['https://istokinfopult.com/static/images/zbog-ljubavi-rusija-1.jpeg'],
  },
  alternates: {
    canonical: 'https://istokinfopult.com/vesti/zbog-ljubavi-otisao-u-rusiju',
  },
}

export default function ZbogLjubaviURusijiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
