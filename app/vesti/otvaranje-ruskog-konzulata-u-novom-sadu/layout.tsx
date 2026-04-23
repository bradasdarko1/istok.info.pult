import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Novi Sad dobio Počasni konzulat Rusije: svečano otvaranje uz prisustvo crkvenih velikodostojnika | Istok Info Pult',
  description:
    'U Novom Sadu svečano je otvoren Počasni konzulat Ruske Federacije za teritoriju Vojvodine, u Bobar zgradi u ulici Branka Bajića, uz prisustvo zvaničnika, sveštenstva i brojnih zvanica.',
  openGraph: {
    title:
      'Novi Sad dobio Počasni konzulat Rusije: svečano otvaranje uz prisustvo crkvenih velikodostojnika',
    description:
      'U Novom Sadu svečano je otvoren Počasni konzulat Ruske Federacije za teritoriju Vojvodine, u Bobar zgradi u ulici Branka Bajića, uz prisustvo zvaničnika, sveštenstva i brojnih zvanica.',
    url: 'https://istokinfopult.rs/vesti/otvaranje-ruskog-konzulata',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/otvaranje-ruskog-konzulata.jpeg',
        width: 1200,
        height: 630,
        alt: 'Otvaranje Počasnog konzulata Ruske Federacije u Novom Sadu',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Novi Sad dobio Počasni konzulat Rusije: svečano otvaranje uz prisustvo crkvenih velikodostojnika',
    description:
      'U Novom Sadu svečano je otvoren Počasni konzulat Ruske Federacije za teritoriju Vojvodine, u Bobar zgradi u ulici Branka Bajića, uz prisustvo zvaničnika, sveštenstva i brojnih zvanica.',
    images: ['https://istokinfopult.rs/static/images/otvaranje-ruskog-konzulata.jpeg'],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
