import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PAŠTRIK — DAN KADA JE SRBIJA ODBRANJENA POD KIŠOM VATRE I ČELIKA | Istok Info Pult',
  description:
    'Na današnji dan, 27. maja 1999. godine, započela je jedna od najtežih i najslavnijih bitaka u novijoj istoriji Srbije — Bitka na Paštriku.',
  openGraph: {
    title: 'PAŠTRIK — DAN KADA JE SRBIJA ODBRANJENA POD KIŠOM VATRE I ČELIKA',
    description:
      'Pod udarima „tepih-bombi“ i NATO avijacije, srpski vojnici odbranili su granicu i sprečili kopneni prodor na Paštriku.',
    url: 'https://istokinfopult.rs/vesti/bitka-na-pastriku',
    siteName: 'Istok Info Pult',
    type: 'article',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/bitka-pastrik.jpg',
        width: 1200,
        height: 630,
        alt: 'Bitka na Paštriku',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAŠTRIK — DAN KADA JE SRBIJA ODBRANJENA POD KIŠOM VATRE I ČELIKA',
    description:
      'Paštrik i Košare ostaju večni simbol srpske žrtve, hrabrosti i otpora tokom NATO agresije 1999. godine.',
    images: ['https://istokinfopult.rs/static/images/bitka-pastrik.jpg'],
  },
}

export default function PastrikLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
