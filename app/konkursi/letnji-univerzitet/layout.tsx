import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Letnji univerzitet u Rusiji otvara vrata stranim studentima | ISTOK INFO PULT',

  description:
    'Međunarodni program za studente završnih godina. Put, smeštaj, ishrana i ekskurzije su pokriveni. Prijave do 8. maja 2026. godine.',

  openGraph: {
    title:
      'Letnji univerzitet u Rusiji otvara vrata stranim studentima',

    description:
      'Studiraj, putuj i upoznaj Rusiju kroz međunarodni program sa potpuno pokrivenim troškovima.',

    url: 'https://istokinfopult.rs/konkursi/letnji-univerzitet',

    siteName: 'ISTOK INFO PULT',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/letnji-univerzitet.jpeg',
        width: 1200,
        height: 630,
        alt: 'Letnji univerzitet u Rusiji',
      },
    ],

    locale: 'sr_RS',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Letnji univerzitet u Rusiji otvara vrata stranim studentima',

    description:
      'Program za studente završnih godina uz potpuno pokrivene troškove.',

    images: [
      'https://istokinfopult.rs/static/images/letnji-univerzitet.jpeg',
    ],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
