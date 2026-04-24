import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'U Moskvi predstavljen spomenik ruskom heroju koji će biti podignut u Srbiji | Istok Info Pult',
  description:
    'Sećanje na pukovnika Nikolaja Rajevskog, ruskog heroja koji je položio život za Srbiju, dobija novo obeležje kroz spomenik predstavljen u Moskvi.',

  openGraph: {
    title:
      'U Moskvi predstavljen spomenik ruskom heroju koji će biti podignut u Srbiji',
    description:
      'Sećanje na pukovnika Nikolaja Rajevskog, ruskog heroja koji je položio život za Srbiju, dobija novo obeležje kroz spomenik predstavljen u Moskvi.',
    url: 'https://istokinfopult.rs/vesti/spomenik-nikolaju',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/spomenik-nikolaju.jpeg',
        width: 1200,
        height: 630,
        alt: 'Spomenik Nikolaju Rajevskom',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'U Moskvi predstavljen spomenik ruskom heroju koji će biti podignut u Srbiji',
    description:
      'Sećanje na pukovnika Nikolaja Rajevskog, ruskog heroja koji je položio život za Srbiju, dobija novo obeležje kroz spomenik predstavljen u Moskvi.',
    images: ['https://istokinfopult.rs/static/images/spomenik-nikolaju.jpeg'],
  },
}

export default function SpomenikNikolajuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
