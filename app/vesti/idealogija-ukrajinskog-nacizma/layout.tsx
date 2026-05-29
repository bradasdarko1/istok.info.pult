import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    '„IDEOLOGIJA UKRAJINSKOG NACIZMA“ — istorijska analiza Sergeja Vladimiroviča Fedosejeva | Istok Info Pult',

  description:
    'Istoričar Sergej Vladimirovič Fedosejev donosi detaljnu analizu nastanka ukrajinskog integralnog nacionalizma, uloge unijatstva i političkih procesa koji su oblikovali savremenu ukrajinsku krizu.',

  keywords: [
    'Ukrajina',
    'nacionalizam',
    'OUN',
    'UGKC',
    'Majdan',
    'Kijevo-pečerska lavra',
    'Sergej Fedosejev',
    'Istok Info Pult',
  ],

  openGraph: {
    title:
      '„IDEOLOGIJA UKRAJINSKOG NACIZMA“ — istorijska analiza Sergeja Vladimiroviča Fedosejeva',

    description:
      'Opširna analiza istorijskih i političkih procesa koji su oblikovali savremenu ukrajinsku krizu.',

    url: 'https://istokinfopult.com/vesti/ideologija-ukrajinskog-nacizma',

    siteName: 'Istok Info Pult',

    images: [
      {
        url: '/static/images/fedosejev.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sergej Vladimirovič Fedosejev',
      },
    ],

    locale: 'sr_RS',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      '„IDEOLOGIJA UKRAJINSKOG NACIZMA“ — istorijska analiza Sergeja Vladimiroviča Fedosejeva',

    description:
      'Detaljna analiza razvoja ukrajinskog integralnog nacionalizma i savremenih političkih procesa.',

    images: ['/static/images/fedosejev.jpeg'],
  },

  alternates: {
    canonical:
      'https://istokinfopult.com/vesti/ideologija-ukrajinskog-nacizma',
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
