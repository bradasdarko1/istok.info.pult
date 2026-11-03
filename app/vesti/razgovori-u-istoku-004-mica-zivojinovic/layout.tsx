
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG =
  'razgovori-u-istoku-004'

const YOUTUBE_VIDEO_ID = '' // Unesi ID epizode 004

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_URL =
  `${SITE_URL}/static/images/razgovori-u-istoku-004-mica-zivojinovic.jpg`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Mića Živojinović o Draži Mihailoviću, Staljinu i tajnama Drugog svetskog rata | Razgovori u Istoku 004',

  description:
    'Pukovnik prof. dr Mića Živojinović u četvrtoj epizodi Razgovora u Istoku govori o Draži Mihailoviću, prepisci sa Staljinom, Nikoli Kalabiću, britanskim službama, suđenju 1946. godine i istorijskim arhivima.',

  image:
    '/static/images/razgovori-u-istoku-004-mica-zivojinovic.jpg',

  publishedAt:
    '2026-11-03T11:00:00+01:00',

  author:
    'Istok Info Pult',
}

// =====================================
// POSTOJEĆI ARTICLE SEO
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = seo.metadata

// =====================================
// YOUTUBE VIDEO STRUCTURED DATA
// =====================================

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',

  name:
    'Mića Živojinović o Draži Mihailoviću – Razgovori u Istoku | Epizoda 004',

  description:
    'Pukovnik prof. dr Mića Živojinović govori o generalu Draži Mihailoviću, Jugoslaviji 1941. godine, odnosima sa Sovjetskim Savezom, Nikoli Kalabiću, britanskim službama i suđenju 1946. godine. Razgovori u Istoku, epizoda 004.',

  thumbnailUrl: [
    IMAGE_URL,
    ...(YOUTUBE_VIDEO_ID
      ? [`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`]
      : []),
  ],

  uploadDate:
    '2026-11-03T11:00:00+01:00',

  embedUrl:
    `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,

  contentUrl:
    undefined,

  url:
    `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`,

  publisher: {
    '@type': 'Organization',
    name: 'Istok Info Pult',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/static/images/logo.jpg`,
    },
  },

  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
  },

  isPartOf: {
    '@type': 'CreativeWorkSeries',
    name: 'Razgovori u Istoku',
  },

  inLanguage: 'sr',
}

// =====================================
// LAYOUT
// =====================================

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {YOUTUBE_VIDEO_ID && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoSchema).replace(
              /</g,
              '\\u003c'
            ),
          }}
        />
      )}

      {children}
    </>
  )
}
