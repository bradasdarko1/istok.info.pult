import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gavrilo Princip — Metak koji je promenio tok istorije',

  description:
    'Na današnji dan, 25. jula 1894. godine, rođen je Gavrilo Princip, jedna od najznačajnijih i najkontroverznijih ličnosti srpske i evropske istorije.',

  openGraph: {
    title: 'Gavrilo Princip — Metak koji je promenio tok istorije',

    description:
      'Na Vidovdan 1914. godine odjeknuo je pucanj koji je promenio sudbinu Evrope. Priča o Gavrilu Principu, njegovom vremenu i borbi za slobodu.',

    type: 'article',

    url: 'https://istokinfopult.rs/vesti/gavrilo-princip',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/gavrilo-princip.jpg',
        width: 1200,
        height: 630,
        alt: 'Gavrilo Princip — metak koji je promenio tok istorije',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Gavrilo Princip — Metak koji je promenio tok istorije',

    description:
      'Rođen 25. jula 1894. godine u Obljaju, Gavrilo Princip ostao je simbol borbe za slobodu i ličnost koja je obeležila istoriju Evrope.',

    images: [
      'https://istokinfopult.rs/static/images/gavrilo-princip.jpg',
    ],
  },
}

export default function GavriloPrincipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
