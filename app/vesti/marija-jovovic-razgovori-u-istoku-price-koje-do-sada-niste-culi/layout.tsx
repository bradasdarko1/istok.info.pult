
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG =
  'marija-jovovic-razgovori-u-istoku-price-koje-do-sada-niste-culi'

const YOUTUBE_VIDEO_ID = 'IZ9_u2N6dek'

const article = {
  slug: SLUG,

  title:
    'Marija Jovović o Blagoju Jovoviću – neispričane priče | Istok Info Pult',

  description:
    'Marija Jovović, ćerka Blagoja Jovovića, u podkastu Razgovori u Istoku otkriva neispričane priče o svom ocu, porodičnoj istoriji i nasleđu koje nosi.',

  image:
    '/static/images/istina-o-blagoju-jovovicu.jpg',

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
    'Marija Jovović o Blagoju Jovoviću – Razgovori u Istoku',

  description:
    'Marija Jovović, ćerka Blagoja Jovovića, govori o svom ocu, porodičnoj istoriji i nasleđu u podkastu Razgovori u Istoku.',

  thumbnailUrl:
    `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`,

  embedUrl:
    `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,

  url:
    `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`,

  publisher: {
    '@type': 'Organization',
    name: 'Istok Info Pult',
    url: SITE_URL,
  },

  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/vesti/${SLUG}`,
  },
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
