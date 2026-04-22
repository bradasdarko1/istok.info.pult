import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novi Sad dobija Počasni konzulat Rusije | Istok Info Pult',
  description:
    'U četvrtak 23.04. u Novom Sadu se otvara, po nalogu Ministarstva spoljnih poslova Ruske Federacije, Počasni konzulat Rusije.',
  openGraph: {
    title: 'Novi Sad dobija Počasni konzulat Rusije',
    description:
      'U četvrtak 23.04. u Novom Sadu se otvara, po nalogu Ministarstva spoljnih poslova Ruske Federacije, Počasni konzulat Rusije.',
    url: 'https://istokinfopult.rs/vesti/ruski-konzulat',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/ruski-konzulat.jpeg',
        width: 1200,
        height: 630,
        alt: 'Novi Sad dobija Počasni konzulat Rusije',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novi Sad dobija Počasni konzulat Rusije',
    description:
      'U četvrtak 23.04. u Novom Sadu se otvara, po nalogu Ministarstva spoljnih poslova Ruske Federacije, Počasni konzulat Rusije.',
    images: ['https://istokinfopult.rs/static/images/ruski-konzulat.jpeg'],
  },
}

export default function RuskiKonzulatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
