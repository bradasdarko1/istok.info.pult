
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG =
  'razgovori-u-istoku-003-marija-jovovic'

const YOUTUBE_VIDEO_ID = 'IZ9_u2N6dek'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_URL =
  `${SITE_URL}/static/images/razgovori-u-istoku-003-marija-jovovic.jpg`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Marija Jovović o Blagoju Jovoviću, atentatu na Pavelića i životu u Argentini | Razgovori u Istoku 003',

  description:
    'Marija Jovović, ćerka Blagoja Jovovića, u trećoj epizodi podkasta Razgovori u Istoku govori o atentatu na Antu Pavelića, životu porodice u Argentini, porodičnim tajnama i istorijskom nasleđu svog oca.',

  image:
    '/static/images/razgovori-u-istoku-003-marija-jovovic.jpg',

  publishedAt:
    '2026-10-26T11:00:00+01:00',

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
    'Marija Jovović o Blagoju Jovoviću – Razgovori u Istoku | Epizoda 003',

  description:
    'Marija Jovović govori o životu svog oca Blagoja Jovovića, atentatu na Antu Pavelića, životu u Argentini i porodičnoj istoriji. Razgovori u Istoku, epizoda 003.',

  thumbnailUrl: [
    IMAGE_URL,
    `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`,
  ],

  uploadDate:
    '2026-10-26T11:00:00+01:00',

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />

      {children}
    </>
  )
}
