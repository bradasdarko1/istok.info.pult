import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Srpski oficir koji je poginuo kao heroj – ime Aleksandra Bijelića ne sme biti zaboravljeno | Istok Info Pult',
  description:
    'Priča o Aleksandru Bijeliću, srpskom oficiru srpsko-ruskog porekla, čije ime ostaje zapisano u časti, žrtvi i vojničkom zavetu.',
  alternates: {
    canonical: 'https://istokinfopult.rs/vesti/aleksandar-bijelic',
  },
  openGraph: {
    title:
      'Srpski oficir koji je poginuo kao heroj – ime Aleksandra Bijelića ne sme biti zaboravljeno',
    description:
      'Priča o Aleksandru Bijeliću, srpskom oficiru srpsko-ruskog porekla, čije ime ostaje zapisano u časti, žrtvi i vojničkom zavetu.',
    url: 'https://istokinfopult.rs/vesti/aleksandar-bijelic',
    siteName: 'Istok Info Pult',
    locale: 'sr_RS',
    type: 'article',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/aleksandar-bijelic.jpeg',
        width: 1200,
        height: 630,
        alt: 'Aleksandar Bijelić - Istok Info Pult',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Srpski oficir koji je poginuo kao heroj – ime Aleksandra Bijelića ne sme biti zaboravljeno',
    description:
      'Priča o Aleksandru Bijeliću, srpskom oficiru srpsko-ruskog porekla, čije ime ostaje zapisano u časti, žrtvi i vojničkom zavetu.',
    images: ['https://istokinfopult.rs/static/images/aleksandar-bijelic.jpeg'],
  },
}

export default function AleksandarBijelicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
