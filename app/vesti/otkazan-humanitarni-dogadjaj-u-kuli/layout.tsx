import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Otkazan humanitarni događaj u Kuli za Kosovo i Metohiju — policija odobrila, opština zabranila',

  description:
    'Humanitarni kulturno-umetnički događaj za prikupljanje pomoći za srpsku decu na Kosovu i Metohiji, koji je trebalo da bude održan 29. avgusta 2026. godine u Kuli, otkazan je svega nekoliko dana pre održavanja.',

  openGraph: {
    title:
      'Otkazan humanitarni događaj u Kuli za Kosovo i Metohiju — policija odobrila, opština zabranila',

    description:
      'Događaj organizacije Istok Info Pult, namenjen prikupljanju pomoći za srpsku decu na Kosovu i Metohiji, bio je uredno prijavljen policiji, ali je četiri dana pre održavanja otkazan od strane opštinske vlasti u Kuli.',

    type: 'article',

    url: 'https://istokinfopult.rs/vesti/otkazan-humanitarni-dogadjaj-u-kuli',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/saopstenje.jpg',
        width: 1200,
        height: 630,
        alt: 'Otkazan humanitarni događaj u Kuli za Kosovo i Metohiju',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Otkazan humanitarni događaj u Kuli — policija odobrila, opština zabranila',

    description:
      'Humanitarni događaj za pomoć srpskoj deci na Kosovu i Metohiji otkazan je četiri dana pre održavanja, iako je prethodno bio uredno prijavljen policiji.',

    images: [
      'https://istokinfopult.rs/static/images/saopstenje.jpg',
    ],
  },
}

export default function OtkazanHumanitarniDogadjajUKuliLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}