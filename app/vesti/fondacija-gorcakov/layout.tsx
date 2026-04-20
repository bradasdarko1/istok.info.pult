import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beograd domaćin budućnosti: Otvorene prijave za Balkanski dijalog 2026 | Istok Info Pult',
  description:
    'Fondacija Gorčakov otvara prijave za godišnji obrazovni program „Balkanski Dijalog – 2026“, koji će se održati od 2. do 6. juna u Beogradu.',
  openGraph: {
    title: 'Beograd domaćin budućnosti: Otvorene prijave za Balkanski dijalog 2026',
    description:
      'Fondacija Gorčakov otvara prijave za godišnji obrazovni program „Balkanski Dijalog – 2026“, koji će se održati od 2. do 6. juna u Beogradu.',
    url: 'https://istokinfopult.com/vesti/fondacija-gorcakov',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.com/static/images/dijalog.jpeg',
        width: 1200,
        height: 630,
        alt: 'Balkanski dijalog 2026',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beograd domaćin budućnosti: Otvorene prijave za Balkanski dijalog 2026',
    description:
      'Fondacija Gorčakov otvara prijave za godišnji obrazovni program „Balkanski Dijalog – 2026“, koji će se održati od 2. do 6. juna u Beogradu.',
    images: ['https://istokinfopult.com/static/images/dijalog.jpeg'],
  },
}

export default function FondacijaGorcakovLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
