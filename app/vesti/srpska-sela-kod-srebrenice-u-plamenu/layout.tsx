import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Srpska sela kod Srebrenice u plamenu: 34 godine od „Majskih lomača”',
  description:
    'Na dan Svetog Vasilija Ostroškog, 12. maja 1992. godine, srpska sela Međe, Osredak, Viogor i Orahovica kod Srebrenice pretrpela su jedan od najtežih napada nad srpskim stanovništvom u Podrinju.',

  openGraph: {
    title:
      'Srpska sela kod Srebrenice u plamenu: 34 godine od „Majskih lomača”',
    description:
      'Na dan Svetog Vasilija Ostroškog, 12. maja 1992. godine, srpska sela Međe, Osredak, Viogor i Orahovica kod Srebrenice pretrpela su jedan od najtežih napada nad srpskim stanovništvom u Podrinju.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/srpska-sela-kod-srebrenice-u-plamenu',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/srpska-sela-kod-srebrenice.jpg',
        width: 1200,
        height: 630,
        alt: 'Srpska sela kod Srebrenice u plamenu',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Srpska sela kod Srebrenice u plamenu: 34 godine od „Majskih lomača”',
    description:
      'Na dan Svetog Vasilija Ostroškog, 12. maja 1992. godine, srpska sela Međe, Osredak, Viogor i Orahovica kod Srebrenice pretrpela su jedan od najtežih napada nad srpskim stanovništvom u Podrinju.',
    images: [
      'https://istokinfopult.rs/static/images/srpska-sela-kod-srebrenice.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://istokinfopult.rs/vesti/srpska-sela-kod-srebrenice-u-plamenu',
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
