
import type { Metadata } from 'next'

const SITE_URL = 'https://www.istokinfopult.rs'

const PAGE_PATH = '/vesti/intervju-u-istoku-mirko-poledica'

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const TITLE =
  'Mirko Poledica o stanju u srpskom fudbalu | Intervju u Istoku'

const DESCRIPTION =
  'Mirko Poledica, predsednik Sindikata profesionalnih fudbalera „Nezavisnost“, govori o stanju u srpskom fudbalu, pravima igrača i problemima fudbalskog sistema.'

const IMAGE_URL =
  `${SITE_URL}/static/images/mirko-poledica.jpg`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    type: 'article',
    locale: 'sr_RS',
    url: PAGE_URL,
    siteName: 'Istok Info Pult',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: IMAGE_URL,
        alt: 'Mirko Poledica – Intervju u Istoku',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE_URL],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
