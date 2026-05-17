import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novak ujedinitelj',
  description:
    'Poziv Novaku Đokoviću da svojim ugledom, autoritetom i međunarodnim prijateljstvima pomogne u ujedinjenju naroda i očuvanju Srbije.',

  openGraph: {
    title: 'Novak ujedinitelj',
    description:
      'Poziv Novaku Đokoviću da svojim ugledom, autoritetom i međunarodnim prijateljstvima pomogne u ujedinjenju naroda i očuvanju Srbije.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/novak-ujedinitelj',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/novak.jpeg',
        width: 1200,
        height: 630,
        alt: 'Novak ujedinitelj',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Novak ujedinitelj',
    description:
      'Poziv Novaku Đokoviću da svojim ugledom, autoritetom i međunarodnim prijateljstvima pomogne u ujedinjenju naroda i očuvanju Srbije.',
    images: ['https://istokinfopult.rs/static/images/novak.jpeg'],
  },
}

export default function NovakUjediniteljLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
