import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Osnovan Klub mladih Ruskog istorijskog društva u Srbiji | Istok Info Pult',
  description:
    'U Beogradu je održana osnivačka konvencija Kluba mladih predstavništva Ruskog istorijskog društva u Srbiji.',
  openGraph: {
    title:
      'OSNOVAN KLUB MLADIH RUSKOG ISTORIJSKOG DRUŠTVA U SRBIJI',
    description:
      'Nova snaga za čuvanje istorijske istine, zajedničkog nasleđa i rusko-srpskog partnerstva.',
    url: 'https://istokinfopult.rs/vesti/osnovan-klub-mladih-ruskog-istorijskog-drustva',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/izlozba-7.jpeg',
        width: 1200,
        height: 630,
        alt: 'Osnovan Klub mladih Ruskog istorijskog društva u Srbiji',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'OSNOVAN KLUB MLADIH RUSKOG ISTORIJSKOG DRUŠTVA U SRBIJI',
    description:
      'Nova snaga za čuvanje istorijske istine i zajedničkog rusko-srpskog nasleđa.',
    images: ['https://istokinfopult.rs/static/images/izlozba-7.jpeg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
