
import type { Metadata } from 'next'
import VestiDanas from '@/components/VestiDanas'

const SITE_URL = 'https://www.istokinfopult.rs'

const PAGE_URL = `${SITE_URL}/vesti`

const TITLE = 'Vesti'

const DESCRIPTION =
  'Najnovije vesti, istorijske priče, kulturni događaji, podkasti i analize o Srbiji, Rusiji i međunarodnim odnosima na portalu Istok Info Pult.'

const IMAGE_URL =
  `${SITE_URL}/static/images/logo.jpg`

export const metadata: Metadata = {
  title: TITLE,

  description: DESCRIPTION,

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Исток Инфо Пулт',
    locale: 'sr_RS',
    title: 'Vesti | Istok Info Pult',
    description: DESCRIPTION,
    images: [
      {
        url: IMAGE_URL,
        alt: 'Istok Info Pult - Vesti',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vesti | Istok Info Pult',
    description: DESCRIPTION,
    images: [IMAGE_URL],
  },
}

export default function VestiPage() {
  return <VestiDanas />
}
