import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RUSIJA OTVARA VRATA STRANIM STRUČNJACIMA | Istok Info Pult',
  description:
    'Otvorena je nova digitalna usluga za privlačenje stranih stručnjaka koji žele da žive i rade u Rusiji.',
  openGraph: {
    title: 'RUSIJA OTVARA VRATA STRANIM STRUČNJACIMA',
    description:
      'Otvorena je nova digitalna usluga za privlačenje stranih stručnjaka koji žele da žive i rade u Rusiji.',
    url: 'https://istokinfopult.rs/vesti/rusija-otvara-vrata',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/rusija-otvara-vrata.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rusija otvara vrata stranim stručnjacima',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RUSIJA OTVARA VRATA STRANIM STRUČNJACIMA',
    description:
      'Otvorena je nova digitalna usluga za privlačenje stranih stručnjaka koji žele da žive i rade u Rusiji.',
    images: ['https://istokinfopult.rs/static/images/rusija-otvara-vrata.jpeg'],
  },
  alternates: {
    canonical: 'https://istokinfopult.rs/vesti/rusija-otvara-vrata',
  },
}

export default function RusijaOtvaraVrataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
