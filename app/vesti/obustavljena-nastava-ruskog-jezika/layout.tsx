import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Da li je ruski jezik devedesetih bio sistemski potisnut i zašto?”',

  description:
    'Tokom perioda 1993–1996. godine u brojnim školama došlo je do naglog smanjenja zastupljenosti ruskog jezika u nastavi. Pozivamo bivše učenike, profesore i istraživače da podele svoja svedočenja i dokumenta.',

  openGraph: {
    title:
      'Da li je ruski jezik devedesetih bio sistemski potisnut i zašto?”',

    description:
      'Tri decenije kasnije postavlja se pitanje da li je smanjenje nastave ruskog jezika bilo posledica promena obrazovne politike ili sistematskog potiskivanja. Podelite svoja iskustva i dokumenta iz perioda 1993–1996. godine.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/obustavljena-nastava-ruskog-jezika',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/obustavljena-nastava-ruskog-jezika.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ruski jezik u Srbiji devedesetih godina',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Da li je ruski jezik devedesetih bio sistemski potisnut i zašto?”',

    description:
      'Pozivamo bivše učenike, profesore i istraživače da podele svedočenja i dokumenta o položaju ruskog jezika u srpskim školama tokom perioda 1993–1996. godine.',

    images: [
      'https://istokinfopult.rs/static/images/obustavljena-nastava-ruskog-jezika.jpeg',
    ],
  },
}

export default function ObustavljenaNastavaRuskogJezikaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}