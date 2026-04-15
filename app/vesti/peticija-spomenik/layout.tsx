import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'POTPISIVANJE PETICIJE NA PIJACAMA U NOVOM SADU | Istok Info Pult',
  description:
    'Istok Info Pult nastavlja građansku inicijativu i poziva građane da podrže podizanje spomenika žrtvama NATO agresije.',
  openGraph: {
    title: 'POTPISIVANJE PETICIJE NA PIJACAMA U NOVOM SADU',
    description:
      'Istok Info Pult nastavlja građansku inicijativu i poziva građane da podrže podizanje spomenika žrtvama NATO agresije.',
    url: 'https://istokinfopult.rs/vesti/peticija-spomenik',
    siteName: 'Istok Info Pult',
    locale: 'sr_RS',
    type: 'article',
    images: [
      {
        url: 'https://istokinfopult.rs/vesti/peticija-spomenik/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Potpisivanje peticije na pijacama u Novom Sadu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POTPISIVANJE PETICIJE NA PIJACAMA U NOVOM SADU',
    description:
      'Istok Info Pult nastavlja građansku inicijativu i poziva građane da podrže podizanje spomenika žrtvama NATO agresije.',
    images: ['https://istokinfopult.rs/vesti/peticija-spomenik/opengraph-image.jpg'],
  },
}

export default function PeticijaSpomenikLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
