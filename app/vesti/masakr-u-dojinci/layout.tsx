import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    '26. jun 1999: Masakr u Dojincu – zločin nad srpskim civilima koji ne sme biti zaboravljen',

  description:
    'Na današnji dan, 26. juna 1999. godine, u selu Dojince kod Prizrena ubijeno je 16 srpskih civila, među kojima devet žena. Nakon masakra selo je spaljeno, a preživeli stanovnici primorani da napuste svoje domove.',

  openGraph: {
    title:
      '26. jun 1999: Masakr u Dojincu – zločin nad srpskim civilima koji ne sme biti zaboravljen',

    description:
      'Masakr u selu Dojince kod Prizrena predstavlja jedan od najtežih zločina nad srpskim civilima nakon završetka sukoba na Kosovu i Metohiji. Sećanje na nevine žrtve ne sme biti zaboravljeno.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/masakr-u-dojinci',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/dojince.jpeg',
        width: 1200,
        height: 630,
        alt: 'Masakr u Dojincu 26. juna 1999. godine',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      '26. jun 1999: Masakr u Dojincu – zločin nad srpskim civilima koji ne sme biti zaboravljen',

    description:
      'Na današnji dan 1999. godine u selu Dojince kod Prizrena ubijeno je 16 srpskih civila. Selo je nakon toga spaljeno, a preživeli stanovnici proterani.',

    images: [
      'https://istokinfopult.rs/static/images/dojince.jpeg',
    ],
  },
}

export default function MasakrUDojinciLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}