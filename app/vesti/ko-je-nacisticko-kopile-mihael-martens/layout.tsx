import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Usred Beograda pitao kako „ubiti više Rusa“ — ko je Mihael Martens?',

  description:
    'Nemački novinar Mihael Martens pitao je u Beogradu šta Evropljani mogu da učine kako bi pomogli Ukrajini da „ubije više Rusa“, nakon čega je precizirao — „više ruskih vojnika“. Ko je Martens i kako je naknadno objasnio svoje reči?',

  openGraph: {
    title:
      'Usred Beograda pitao kako „ubiti više Rusa“ — ko je Mihael Martens?',

    description:
      'Nemački novinar Mihael Martens izazvao je burne reakcije nakon što je u Beogradu pitao šta Evropa može da učini kako bi Ukrajina „ubila više Rusa“. Pogledajte ko je Martens, šta je rekao i kako je kasnije objasnio svoj stav.',

    type: 'article',

    url: 'https://istokinfopult.rs/vesti/ko-je-nacisticko-kopile-mihael-martens',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/mihael-martens.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mihael Martens - nemački novinar',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Usred Beograda pitao kako „ubiti više Rusa“ — ko je Mihael Martens?',

    description:
      'Mihael Martens pitao je u Beogradu šta Evropljani mogu da učine kako bi Ukrajina „ubila više Rusa“. Njegova izjava i kasnije objašnjenje izazvali su brojne reakcije.',

    images: [
      'https://istokinfopult.rs/static/images/mihael-martens.jpeg',
    ],
  },
}

export default function KoJeNacistickoKopileMihaelMartensLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}