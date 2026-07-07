import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Srpska pravoslavna crkva danas proslavlja Ivanjdan – Rođenje Svetog Jovana Preteče',

  description:
    'Srpska pravoslavna crkva i vernici danas proslavljaju Ivanjdan, praznik posvećen Rođenju Svetog Jovana Preteče i Krstitelja, jednog od najpoštovanijih svetitelja u hrišćanstvu.',

  openGraph: {
    title:
      'Srpska pravoslavna crkva danas proslavlja Ivanjdan – Rođenje Svetog Jovana Preteče',

    description:
      'Ivanjdan je praznik posvećen Rođenju Svetog Jovana Preteče, proroka koji je krstio Isusa Hrista u reci Jordan i najavio dolazak Mesije.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/srpska-pravoslavna-crkva-danas-proslavlja-ivanjdan',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/sveti-jovan.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ikona Svetog Jovana Preteče',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Srpska pravoslavna crkva danas proslavlja Ivanjdan – Rođenje Svetog Jovana Preteče',

    description:
      'Sveti Jovan Preteča, poslednji veliki prorok Starog zaveta, svojim životom, propoveđu i krštenjem Isusa Hrista zauzima posebno mesto u hrišćanskoj tradiciji.',

    images: [
      'https://istokinfopult.rs/static/images/sveti-jovan.jpeg',
    ],
  },
}

export default function SrpskaPravoslavnaCrkvaDanasProslavljaIvanjdanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}