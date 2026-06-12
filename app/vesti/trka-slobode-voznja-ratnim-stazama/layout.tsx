import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Trka slobode – vožnja ratnim stazama 3. raketnog diviziona PVO',

  description:
    'U subotu, 13. juna, biće održana biciklistička manifestacija „Trka slobode – vožnja ratnim stazama 3. raketnog diviziona PVO“ sa startom ispred kasarne u Jakovu.',

  openGraph: {
    title:
      'Trka slobode – vožnja ratnim stazama 3. raketnog diviziona PVO',

    description:
      'Biciklistička manifestacija koja prolazi trasom Jakovo – Bečmen – Petrovčić, u znak sećanja na pripadnike 3. raketnog diviziona PVO.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/trka-slobode-voznja-ratnim-stazama',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/trka-slobode.jpeg',
        width: 1200,
        height: 630,
        alt: 'Trka slobode – vožnja ratnim stazama 3. raketnog diviziona PVO',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Trka slobode – vožnja ratnim stazama 3. raketnog diviziona PVO',

    description:
      'Biciklistička vožnja kroz Jakovo, Bečmen i Petrovčić u znak sećanja na pripadnike 3. raketnog diviziona PVO.',

    images: [
      'https://istokinfopult.rs/static/images/trka-slobode.jpeg',
    ],
  },
}

export default function TrkaSlobodeVoznjaRatnimStazamaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
