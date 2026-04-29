import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    '„Hvala ti, sine“ — Otac heroja Aleksandra Bijelića | Istok Info Pult',
  description:
    'Potresan intervju sa ocem Aleksandra Bijelića o sinu, hrabrosti, vojničkoj časti, bolu koji ne prolazi i rečenici koju bi mu danas rekao.',
  openGraph: {
    title:
      '„Hvala ti, sine“ — Otac heroja Aleksandra Bijelića',
    description:
      '„Četvrta je godina, a kao da je juče bilo.“ Emotivan razgovor sa ocem Aleksandra Bijelića za Istok Info Pult.',
    url: 'https://istokinfopult.rs/vesti/intervju-sa-ocem-aleksandra-bijelica',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: '/static/images/otac-aleksandra-bijelica.jpeg',
        width: 1200,
        height: 630,
        alt: 'Intervju sa ocem Aleksandra Bijelića',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      '„Hvala ti, sine“ — Otac heroja Aleksandra Bijelića',
    description:
      'Potresan intervju za Istok Info Pult o sinu, časti, bolu i ponosu.',
    images: ['/static/images/otac-aleksandra-bijelica.jpeg'],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
