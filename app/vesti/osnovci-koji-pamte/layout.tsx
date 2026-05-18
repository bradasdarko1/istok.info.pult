import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Deca koja pamte: Osnovci iz Novog Sada u srcu Kosova i Metohije',
  description:
    'Osnovci iz Novog Sada proveli su nezaboravne dane na Kosovu i Metohiji, gde su kroz druženje sa vršnjacima i obilazak svetinja upoznali istoriju, veru i identitet sopstvenog naroda.',

  openGraph: {
    title: 'Deca koja pamte: Osnovci iz Novog Sada u srcu Kosova i Metohije',
    description:
      'Učenici OŠ „Duško Radović“ iz Novog Sada boravili su u višednevnoj poseti Kosovu i Metohiji, gde su obišli Prizren, Visoke Dečane, Pećku patrijaršiju, Gazimestan i Gračanicu.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/osnovci-koji-pamte',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/deca-koja-pamte.jpg',
        width: 1200,
        height: 630,
        alt: 'Deca koja pamte - Kosovo i Metohija',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Deca koja pamte: Osnovci iz Novog Sada u srcu Kosova i Metohije',
    description:
      'Poseta osnovaca iz Novog Sada Kosovu i Metohiji bila je više od ekskurzije — lekcija o korenima, prijateljstvu i pamćenju.',
    images: ['https://istokinfopult.rs/static/images/deca-koja-pamte.jpg'],
  },
}

export default function OsnovciKojiPamteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
