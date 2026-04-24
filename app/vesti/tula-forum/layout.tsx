import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'RAME UZ RAME KROZ VEKOVE: U TULI ODRŽAN FORUM O MNOGONACIONALNOJ POBEDI | Istok Info Pult',
  description:
    'U Tulskom državnom univerzitetu održan je forum posvećen zajedničkoj borbi naroda protiv nacizma, uz snažan srpski glas i poruku da se istorijska istina ne sme zaboraviti.',
  openGraph: {
    title:
      'RAME UZ RAME KROZ VEKOVE: U TULI ODRŽAN FORUM O MNOGONACIONALNOJ POBEDI',
    description:
      'Srbi i Rusi na istoj strani istorije — pobeda koja pripada svim narodima.',
    url: 'https://istokinfopult.rs/vesti/tula-forum',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/tula-forum-3.jpeg',
        width: 1200,
        height: 630,
        alt: 'Forum u Tuli - mnogonacionalna pobeda',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'RAME UZ RAME KROZ VEKOVE: U TULI ODRŽAN FORUM O MNOGONACIONALNOJ POBEDI',
    description:
      'Srbi i Rusi na istoj strani istorije — pobeda koja pripada svim narodima.',
    images: ['https://istokinfopult.rs/static/images/tula-forum-3.jpeg'],
  },
}

export default function TulaForumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}