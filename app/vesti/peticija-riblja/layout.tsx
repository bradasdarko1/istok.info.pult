import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'POTPISIVANJE PETICIJE NA RIBLJOJ PIJACI U NOVOM SADU',
  description:
    'Istok Info Pult poziva građane da 16. aprila od 9 časova na Ribljoj pijaci u Novom Sadu podrže inicijativu za podizanje spomenika žrtvama NATO agresije.',
  openGraph: {
    title: 'POTPISIVANJE PETICIJE NA RIBLJOJ PIJACI U NOVOM SADU',
    description:
      'Istok Info Pult poziva građane da 16. aprila od 9 časova na Ribljoj pijaci u Novom Sadu podrže inicijativu za podizanje spomenika žrtvama NATO agresije.',
    type: 'article',
    url: 'https://www.istokinfopult.rs/vesti/peticija-riblja',
    siteName: 'Istok Info Pult',
    locale: 'sr_RS',
    images: [
      {
        url: 'https://www.istokinfopult.rs/static/images/riblja-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Potpisivanje peticije na Ribljoj pijaci u Novom Sadu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POTPISIVANJE PETICIJE NA RIBLJOJ PIJACI U NOVOM SADU',
    description:
      'Istok Info Pult poziva građane da 16. aprila od 9 časova na Ribljoj pijaci u Novom Sadu podrže inicijativu za podizanje spomenika žrtvama NATO agresije.',
    images: ['https://www.istokinfopult.rs/static/images/riblja-share.jpg'],
  },
}

export default function PeticijaRibljaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
