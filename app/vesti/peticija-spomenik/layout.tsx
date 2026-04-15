import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'POTPISIVANJE PETICIJE NA PIJACAMA U NOVOM SADU',
  description:
    'Istok Info Pult nastavlja građansku inicijativu i poziva građane da podrže podizanje spomenika žrtvama NATO agresije.',
  openGraph: {
    title: 'POTPISIVANJE PETICIJE NA PIJACAMA U NOVOM SADU',
    description:
      'Istok Info Pult nastavlja građansku inicijativu i poziva građane da podrže podizanje spomenika žrtvama NATO agresije.',
    type: 'article',
    url: 'https://www.istokinfopult.rs/vesti/peticija-spomenik',
    siteName: 'Istok Info Pult',
    locale: 'sr_RS',
    images: [
      {
        url: 'https://www.istokinfopult.rs/static/og/peticija-spomenik.jpg',
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
    images: ['https://www.istokinfopult.rs/static/og/peticija-spomenik.jpg'],
  },
}

export default function PeticijaSpomenikLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
