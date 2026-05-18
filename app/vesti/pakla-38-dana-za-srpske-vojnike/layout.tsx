import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    '38 dana pakla: dvojica srpskih vojnika preživela torturu od Košara do tajnih zatvora u Nemačkoj',
  description:
    'Priča o Šefku Tairoviću iz Niša i Bobanu Milenkoviću iz Vranja, srpskim vojnicima zarobljenim 1999. godine kod Junika, koji su prošli kroz 38 dana torture u logorima na Kosmetu, Albaniji i zatvorima u Nemačkoj.',

  openGraph: {
    title:
      '38 dana pakla: dvojica srpskih vojnika preživela torturu od Košara do tajnih zatvora u Nemačkoj',
    description:
      'Šefko Tairović i Boban Milenković zarobljeni su 13. aprila 1999. kod Junika tokom redovne patrole, a oslobođeni 21. maja posredstvom Crvenog krsta.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/pakla-38-dana-za-srpske-vojnike',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/dvojica-srpskih-vojnika.jpg',
        width: 1200,
        height: 630,
        alt: 'Dvojica srpskih vojnika zarobljenih tokom NATO agresije 1999. godine',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      '38 dana pakla: dvojica srpskih vojnika preživela torturu od Košara do tajnih zatvora u Nemačkoj',
    description:
      'Priča o Šefku Tairoviću i Bobanu Milenkoviću, srpskim vojnicima zarobljenim 1999. godine kod Junika.',
    images: ['https://istokinfopult.rs/static/images/dvojica-srpskih-vojnika.jpg'],
  },
}

export default function Pakla38DanaZaSrpskeVojnikeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
