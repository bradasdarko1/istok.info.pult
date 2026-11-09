
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'razgovori-u-istoku-005'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_URL =
  `${SITE_URL}/static/images/razgovori-u-istoku-005-dane-cankovic.jpg`

const YOUTUBE_VIDEO_ID = '-SO7Ilg4LpM'

const YOUTUBE_URL =
  `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`

const YOUTUBE_THUMBNAIL =
  `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Dane Čanković o Republici Srpskoj, suverenitetu i srpskom jedinstvu | Razgovori u Istoku 005',

  description:
    'Dane Čanković u petoj epizodi Razgovora u Istoku govori o Republici Srpskoj, Dejtonskom sporazumu, referendumu, odnosima Srbije i Srpske, suverenizmu i globalizmu.',

  image:
    '/static/images/razgovori-u-istoku-005-dane-cankovic.jpg',

  publishedAt: '2026-11-09',

  modifiedAt: '2026-11-09',

  author: 'Istok Info Pult',
}

// =====================================
// METADATA
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,

  keywords: [
    'Dane Čanković',
    'Dane Cankovic',
    'Дане Чанковић',
    'Дане Чанкович',
    'Dane Čanković intervju',
    'Dane Čanković podkast',
    'Dane Čanković Republika Srpska',
    'Razgovori u Istoku',
    'Razgovori u Istoku 005',
    'Razgovori u Istoku Dane Čanković',
    'Istok Info Pult',
    'Nikola Knežević',
    'Republika Srpska',
    'Република Српска',
    'Республика Сербская',
    'Srpski narodni pokret Izbor je naš',
    'Izbor je naš',
    'Vojska Republike Srpske',
    'Dejtonski sporazum',
    'Dejtonski mirovni sporazum',
    'suverenitet Republike Srpske',
    'referendum Republika Srpska',
    'Srbija i Republika Srpska',
    'odnosi Beograda i Banjaluke',
    'srpsko jedinstvo',
    'suverenizam',
    'globalizam',
    'suverenisti i globalisti',
    'Milorad Dodik',
    'Banjaluka treći Rim',
    'srpski nacionalni identitet',
    'srpske integracije',
    'srpski narod',
    'geopolitika Balkana',
    'politički podkast',
    'srpski podkast',
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
    images: [
      {
        url: IMAGE_URL,
        width: 1600,
        height: 900,
        alt:
          'Dane Čanković – Razgovori u Istoku, epizoda 005',
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

  datePublished: '2026-11-09',

  dateModified: '2026-11-09',

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
      name: 'Dane Čanković',
      alternateName: [
        'Дане Чанковић',
        'Дане Чанкович',
        'Dane Cankovic',
      ],
    },
    {
      '@type': 'Organization',
      name: 'Srpski narodni pokret Izbor je naš',
    },
    {
      '@type': 'Place',
      name: 'Republika Srpska',
    },
    {
      '@type': 'Thing',
      name: 'Dejtonski mirovni sporazum',
    },
    {
      '@type': 'Thing',
      name: 'Suverenitet Republike Srpske',
    },
    {
      '@type': 'Thing',
      name: 'Odnosi Srbije i Republike Srpske',
    },
    {
      '@type': 'Thing',
      name: 'Suverenizam i globalizam',
    },
  ],

  keywords: [
    'Dane Čanković',
    'Razgovori u Istoku',
    'Republika Srpska',
    'Dejtonski sporazum',
    'Srpsko jedinstvo',
    'Suverenitet',
    'Referendum',
    'Banjaluka',
    'Beograd',
    'Milorad Dodik',
    'Suverenizam',
    'Globalizam',
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
    'Dane Čanković – Republika Srpska, suverenitet i srpsko jedinstvo | Razgovori u Istoku 005',

  description: article.description,

  thumbnailUrl: [
    IMAGE_URL,
    YOUTUBE_THUMBNAIL,
  ],

  uploadDate: '2026-11-09',

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
