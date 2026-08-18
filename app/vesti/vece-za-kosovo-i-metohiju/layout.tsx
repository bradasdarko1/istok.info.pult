import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Veče za Kosovo i Metohiju u Kuli — pesma, istorija i humanost na jednom mestu',

  description:
    'Na otvorenim bazenima u Kuli 29. avgusta 2026. godine biće održano posebno veče posvećeno Kosovu i Metohiji, srpskoj istoriji, kulturi i humanosti. Početak programa je u 15 časova, a događaj ima i humanitarni karakter.',

  openGraph: {
    title:
      'Veče za Kosovo i Metohiju u Kuli — pesma, istorija i humanost na jednom mestu',

    description:
      'Dođite 29. avgusta 2026. godine na otvorene bazene u Kuli. Kroz muziku, istorijske priče, kulturni program i humanitarnu akciju zajedno ćemo pokazati da Kosovo i Metohija nisu zaboravljeni.',

    type: 'article',

    url: 'https://istokinfopult.rs/vesti/vece-za-kosovo-i-metohiju',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/kosovo-i-metohija.jpg',
        width: 1200,
        height: 630,
        alt: 'Veče za Kosovo i Metohiju u Kuli 29. avgusta 2026. godine',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Veče za Kosovo i Metohiju u Kuli — pesma, istorija i humanost',

    description:
      'Posebno veče posvećeno Kosovu i Metohiji biće održano 29. avgusta 2026. godine na otvorenim bazenima u Kuli, sa početkom u 15 časova.',

    images: [
      'https://istokinfopult.rs/static/images/kosovo-i-metohija.jpg',
    ],
  },
}

export default function VeceZaKosovoIMetohijuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}