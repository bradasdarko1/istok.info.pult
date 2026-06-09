import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Auto-kolona u Nišu povodom Dana Rusije 11. juna',
  description:
    'Društvo rusko-srpskog prijateljstva „Bratstvo“ iz Niša organizuje svečanu auto-kolonu 11. juna u susret Danu Rusije i poziva građane da se pridruže događaju.',

  openGraph: {
    title:
      'Auto-kolona u Nišu povodom Dana Rusije 11. juna',
    description:
      'Uoči Dana Rusije, Društvo „Bratstvo“ iz Niša organizuje auto-kolonu koja će biti održana 11. juna od 18.15 časova.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/auto-kolona-u-nisu-povodom-dana-rusije',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/auto-kolona-u-nisu.jpeg',
        width: 1200,
        height: 630,
        alt: 'Auto-kolona u Nišu povodom Dana Rusije',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Auto-kolona u Nišu povodom Dana Rusije 11. juna',
    description:
      'Društvo „Bratstvo“ iz Niša organizuje svečanu auto-kolonu povodom Dana Rusije.',
    images: [
      'https://istokinfopult.rs/static/images/auto-kolona-u-nisu.jpeg',
    ],
  },
}

export default function AutoKolonaUNisuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
