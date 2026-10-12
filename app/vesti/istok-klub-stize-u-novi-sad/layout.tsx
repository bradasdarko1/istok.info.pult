
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'ISTOK KLUB stiže u Novi Sad – Više od kafe, više od druženja!',

  description:
    'Novi Sad uskoro dobija novo mesto susreta, kulture i druženja! ISTOK KLUB na adresi Maksima Gorkog 2A donosi vrhunsku kafu, prijatan ambijent, podkaste, kvizove znanja, karaoke večeri i bogat kulturno-zabavni program.',

  keywords: [
    'Istok Klub',
    'Istok Klub Novi Sad',
    'Istok Info Pult',
    'kafić Novi Sad',
    'Maksima Gorkog 2A',
    'kafić Istok',
    'podkast Novi Sad',
    'karaoke Novi Sad',
    'kvizovi znanja Novi Sad',
    'kulturni događaji Novi Sad',
    'novo mesto za druženje Novi Sad',
  ],

  alternates: {
    canonical:
      'https://istokinfopult.rs/vesti/istok-klub-stize-u-novi-sad',
  },

  openGraph: {
    title:
      'ISTOK KLUB STIŽE U NOVI SAD – Više od kafe, više od druženja!',

    description:
      'Uskoro se na adresi Maksima Gorkog 2A otvara ISTOK KLUB! Vrhunska kafa, literatura, podkasti, zanimljivi gosti, kvizovi i karaoke. Mesto gde se dolazi zbog kafe, a ostaje zbog ljudi.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/istok-klub-stize-u-novi-sad',

    siteName: 'Istok Info Pult',

    locale: 'sr_RS',

    publishedTime: '2026-10-12T10:00:00+02:00',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/istok-klub.jpg',
        width: 1200,
        height: 630,
        alt:
          'ISTOK KLUB – novo mesto susreta, kulture i druženja u Novom Sadu',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'ISTOK KLUB STIŽE U NOVI SAD – Više od kafe, više od druženja!',

    description:
      'Novi Sad dobija novo mesto susreta! ISTOK KLUB uskoro otvara vrata na adresi Maksima Gorkog 2A. Kafa, podkasti, kvizovi, karaoke i druženje koje se pamti.',

    images: [
      'https://istokinfopult.rs/static/images/istok-klub.jpg',
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function IstokKlubStizeUNoviSadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
