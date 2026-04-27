// app/vesti/balkanski-most/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Srpski istoričar oduševio Rusiju: Milan Stojanović u Ivanovu predstavio knjigu koja spaja Balkan i Rusiju',
  description:
    'Na VI forumu-festivalu „Balkanski most“ u Ivanovu, srpski istoričar Milan Stojanović predstavio je knjigu „Balkan: istorija i perspektive“.',
  openGraph: {
    title:
      'SRPSKI ISTORIČAR ODUŠEVIO RUSIJU: MILAN STOJANOVIĆ U IVANOVU PREDSTAVIO KNJIGU KOJA SPAJA BALKAN I RUSIJU',
    description:
      'Milan Stojanović predstavio je u Ivanovu knjigu „Balkan: istorija i perspektive“, dajući snažan intelektualni pečat forumu „Balkanski most“.',
    url: 'https://istokinfopult.rs/vesti/balkanski-most-u-ivanovu',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/ivanovo-3.jpeg',
        width: 1200,
        height: 630,
        alt: 'Milan Stojanović predstavio knjigu Balkan: istorija i perspektive u Ivanovu',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'SRPSKI ISTORIČAR ODUŠEVIO RUSIJU: MILAN STOJANOVIĆ U IVANOVU PREDSTAVIO KNJIGU',
    description:
      'Knjiga Milana Stojanovića „Balkan: istorija i perspektive“ predstavljena je na forumu „Balkanski most“ u Ivanovu.',
    images: ['https://istokinfopult.rs/static/images/ivanovo-3.jpeg'],
  },
}

export default function BalkanskiMostUIvanovuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
