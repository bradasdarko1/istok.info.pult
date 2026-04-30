import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Murino – 27 godina od zločina koji ne sme da se zaboravi | Istok Info Pult',
  description:
    'Navršilo se 27 godina od bombardovanja mosta u Murinu, gde je 30. aprila 1999. godine poginulo šest civila, među njima troje dece.',

  openGraph: {
    title: 'Murino – 27 godina od zločina koji ne sme da se zaboravi',
    description:
      'Sećanje na šest civila, među njima troje dece, koji su poginuli 30. aprila 1999. godine tokom NATO bombardovanja mosta u Murinu.',
    url: 'https://istokinfopult.rs/vesti/murino',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/murino-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Murino – 27 godina od tragedije',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Murino – 27 godina od zločina koji ne sme da se zaboravi',
    description:
      'Sećanje na žrtve bombardovanja mosta u Murinu 30. aprila 1999. godine.',
    images: ['https://istokinfopult.rs/static/images/murino-1.jpeg'],
  },
}

export default function MurinoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
