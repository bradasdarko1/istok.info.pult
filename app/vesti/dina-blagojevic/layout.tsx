import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'DINA BLAGOJEVIĆ: SRPSKA FUDBALERKA U TIMU RUSKOG SPARTAKA | Istok Info Pult',
  description:
    'Srpska reprezentativka Dina Blagojević zasijala u Moskvi sa Spartakom. Priča o uspehu, hrabrosti i novom životu u Rusiji.',
  
  openGraph: {
    title:
      'DINA BLAGOJEVIĆ: SRPSKA FUDBALERKA U TIMU RUSKOG SPARTAKA',
    description:
      'Dina Blagojević osvaja Rusiju sa Spartakom – priča o uspehu, veri i novom početku.',
    url: 'https://istokinfopult.rs/vesti/dina-blagojevic',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: '/static/images/dina-blagojevic.jpg',
        width: 1200,
        height: 630,
        alt: 'Dina Blagojević Spartak Moskva',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'DINA BLAGOJEVIĆ: SRPSKA FUDBALERKA U TIMU RUSKOG SPARTAKA',
    description:
      'Srpska reprezentativka zasijala u Moskvi – nova priča o uspehu.',
    images: ['/static/images/dina-blagojevic.jpg'],
  },

  alternates: {
    canonical: 'https://istokinfopult.rs/vesti/dina-blagojevic',
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
