
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'razgovori-u-istoku-007-mile-bosnic'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_URL =
  `${SITE_URL}/static/images/mile-bosnic.jpg`

const YOUTUBE_VIDEO_ID = 'F2alFCjiJUY'

const YOUTUBE_URL =
  `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`

const YOUTUBE_THUMBNAIL =
  `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`

const PUBLISHED_AT = '2026-11-16'

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Mile Bosnić o genocidu nad Srbima u NDH, tajnim arhivama i istorijskoj istini | Razgovori u Istoku 007',

  description:
    'Mile Bosnić u sedmoj epizodi Razgovora u Istoku predstavlja rezultate 40 godina istraživanja genocida nad Srbima u NDH, arhivska dokumenta, fotografije i istorijska svedočanstva.',

  image:
    '/static/images/mile-bosnic.jpg',

  publishedAt: PUBLISHED_AT,

  modifiedAt: PUBLISHED_AT,

  author: 'Istok Info Pult',
}

// =====================================
// METADATA
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,

  keywords: [
    'Mile Bosnić',
    'Mile Bosnic',
    'Миле Боснић',
    'Миле Боснич',
    'Mile Bosnić intervju',
    'Mile Bosnić podkast',
    'Mile Bosnić NDH',
    'Mile Bosnić genocid',
    'Mile Bosnić istraživanje',
    'Razgovori u Istoku',
    'Razgovori u Istoku 007',
    'Razgovori u Istoku Mile Bosnić',
    'Istok Info Pult',
    'genocid nad Srbima u NDH',
    'геноцид над Србима у НДХ',
    'геноцид сербов в НГХ',
    'Nezavisna Država Hrvatska',
    'NDH',
    'НДХ',
    'Независимое государство Хорватия',
    'Drugi svetski rat',
    'Вторая мировая война',
    'stradanje srpskog naroda',
    'srpske žrtve Drugog svetskog rata',
    'istorija NDH',
    'zločini u NDH',
    'ustaški zločini',
    'istorijski dokumenti',
    'arhivska dokumenta NDH',
    'istorijski arhivi',
    'istorijska svedočanstva',
    'istorijsko pamćenje',
    'kultura sećanja',
    'istorijska istina',
    '40 godina istraživanja',
    'deset tomova',
    'Pokret Srba Krajišnika',
    'Republika Srpska Krajina',
    'Република Српска Крајина',
    'raspad Jugoslavije',
    'ratovi devedesetih',
    'srpski narod',
    'srpska istorija',
    'istorijski podkast',
    'srpski podkast',
    'razgovori o istoriji',
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: ARTICLE_URL,
  },

  openGraph: {
    ...seo.metadata.openGraph,
    url: ARTICLE_URL,
    type: 'article',
    title: article.title,
    description: article.description,
    images: [
      {
        url: IMAGE_URL,
        width: 1600,
        height: 900,
        alt:
          'Mile Bosnić – Razgovori u Istoku, epizoda 007',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: article.description,
    images: [IMAGE_URL],
  },
}

// =====================================
// NEWS ARTICLE JSON-LD
// =====================================

const newsArticleJsonLd = {
  '@context': 'https://schema.org',

  '@type': 'NewsArticle',

  '@id': `${ARTICLE_URL}#article`,

  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
  },

  headline: article.title,

  description: article.description,

  image: [IMAGE_URL],

  datePublished: PUBLISHED_AT,

  dateModified: PUBLISHED_AT,

  author: {
    '@type': 'Organization',
    name: 'Istok Info Pult',
    url: SITE_URL,
  },

  publisher: {
    '@type': 'Organization',
    name: 'Istok Info Pult',
    url: SITE_URL,

    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/static/images/logo.jpg`,
    },
  },

  inLanguage: ['sr', 'ru'],

  articleSection: 'Razgovori u Istoku',

  about: [
    {
      '@type': 'Person',
      name: 'Mile Bosnić',
      alternateName: [
        'Миле Боснић',
        'Миле Боснич',
        'Mile Bosnic',
      ],
      description:
        'Politikolog, predsednik Pokreta Srba Krajišnika i nekadašnji ministar u Vladi Republike Srpske Krajine.',
    },
    {
      '@type': 'Organization',
      name: 'Pokret Srba Krajišnika',
    },
    {
      '@type': 'Place',
      name: 'Nezavisna Država Hrvatska',
      alternateName: ['NDH', 'НДХ'],
    },
    {
      '@type': 'Thing',
      name: 'Genocid nad Srbima u NDH',
    },
    {
      '@type': 'Event',
      name: 'Drugi svetski rat',
    },
    {
      '@type': 'Thing',
      name: 'Stradanje srpskog naroda tokom Drugog svetskog rata',
    },
    {
      '@type': 'Thing',
      name: 'Arhivska dokumenta i istorijska svedočanstva',
    },
    {
      '@type': 'Thing',
      name: 'Istorijsko pamćenje i kultura sećanja',
    },
    {
      '@type': 'Place',
      name: 'Republika Srpska Krajina',
    },
    {
      '@type': 'Event',
      name: 'Raspad Jugoslavije',
    },
  ],

  keywords: [
    'Mile Bosnić',
    'Razgovori u Istoku 007',
    'Genocid nad Srbima u NDH',
    'Nezavisna Država Hrvatska',
    'Drugi svetski rat',
    'Istorijski arhivi',
    'Istorijska dokumenta',
    'Srpske žrtve',
    'Kultura sećanja',
    'Istorijska istina',
    'Pokret Srba Krajišnika',
    'Republika Srpska Krajina',
    'Raspad Jugoslavije',
    'Istok Info Pult',
  ],

  isAccessibleForFree: true,

  url: ARTICLE_URL,

  video: {
    '@id': `${ARTICLE_URL}#video`,
  },
}

// =====================================
// VIDEO OBJECT JSON-LD
// =====================================

const videoJsonLd = {
  '@context': 'https://schema.org',

  '@type': 'VideoObject',

  '@id': `${ARTICLE_URL}#video`,

  name:
    'Mile Bosnić – Genocid nad Srbima u NDH, arhivska dokumenta i istorijska istina | Razgovori u Istoku 007',

  description: article.description,

  thumbnailUrl: [
    IMAGE_URL,
    YOUTUBE_THUMBNAIL,
  ],

  uploadDate: PUBLISHED_AT,

  contentUrl: YOUTUBE_URL,

  embedUrl:
    `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,

  inLanguage: 'sr',

  isAccessibleForFree: true,

  publisher: {
    '@type': 'Organization',
    name: 'Istok Info Pult',
    url: SITE_URL,
  },

  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
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
          __html: JSON.stringify(newsArticleJsonLd).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoJsonLd).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />

      {children}
    </>
  )
}
