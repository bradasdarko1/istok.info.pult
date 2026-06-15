import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Premijera novog dokumentarnog filma „Rat za nezavisnost Srbije 1876“ u Ruskom domu',

  description:
    'U Ruskom domu biće održana premijera dokumentarnog filma „Rat za nezavisnost Srbije 1876“, povodom 150 godina od izbijanja Prvog srpsko-turskog rata.',

  openGraph: {
    title:
      'Premijera novog dokumentarnog filma „Rat za nezavisnost Srbije 1876“ u Ruskom domu',

    description:
      'Dokumentarni film o Prvom srpsko-turskom ratu donosi svedočenja srpskih i ruskih istoričara, autentične lokacije i AI animacije zasnovane na originalnim fotografijama iz 1876. godine.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/premijera-filma-rat-za-nezavisnost-srbije',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/rat-za-nezavisnost-srbije.jpeg',
        width: 1200,
        height: 630,
        alt: 'Premijera dokumentarnog filma Rat za nezavisnost Srbije 1876',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Premijera novog dokumentarnog filma „Rat za nezavisnost Srbije 1876“ u Ruskom domu',

    description:
      'Povodom 150 godina od izbijanja Prvog srpsko-turskog rata, u Ruskom domu biće održana premijera dokumentarnog filma „Rat za nezavisnost Srbije 1876“.',

    images: [
      'https://istokinfopult.rs/static/images/rat-za-nezavisnost-srbije.jpeg',
    ],
  },
}

export default function PremijeraFilmaRatZaNezavisnostSrbijeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
