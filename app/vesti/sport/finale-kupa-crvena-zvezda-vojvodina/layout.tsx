import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finale koje pali Srbiju: Zvezda i Vojvodina u borbi za trofej!',
  description:
    'Crvena zvezda i Vojvodina večeras igraju veliko finale Kupa Srbije u Loznici. Jedan meč, jedan trofej, jedna istorija.',

  openGraph: {
    title: 'Finale koje pali Srbiju: Zvezda i Vojvodina u borbi za trofej!',
    description:
      'Večeras se igra utakmica sezone — sudar tradicije, ponosa i šampionskog mentaliteta.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/finale-kupa-crvena-zvezda-vojvodina',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/finale-kupa.jpg',
        width: 1200,
        height: 630,
        alt: 'Finale Kupa Srbije: Crvena zvezda protiv Vojvodine',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Finale koje pali Srbiju: Zvezda i Vojvodina u borbi za trofej!',
    description:
      'Jedan meč, jedan trofej, jedna istorija — ko će izaći kao pobednik?',
    images: ['https://istokinfopult.rs/static/images/finale-kupa.jpg'],
  },
}

export default function FinaleKupaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
