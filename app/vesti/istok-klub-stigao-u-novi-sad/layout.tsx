
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'istok-klub-stigao-u-novi-sad'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_URL =
  `${SITE_URL}/static/images/istok-klub-stigao-u-novi-sad.jpg`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Otvoren Istok klub u Novom Sadu – novo mesto za kafu i druženje',

  description:
    'U Novom Sadu, na adresi Maksima Gorkog 2a, otvoren je Istok klub – novo mesto za dobru kafu, prijatnu atmosferu, druženje i razgovore.',

  image:
    '/static/images/istok-klub-stigao-u-novi-sad.jpg',

  publishedAt: '2026-11-05',

  modifiedAt: '2026-11-05',

  author: 'Istok Info Pult',
}

// =====================================
// METADATA
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,

  keywords: [
    'Istok klub',
    'Istok klub Novi Sad',
    'Istok klub Maksima Gorkog',
    'Istok klub otvaranje',
    'novi kafić Novi Sad',
    'kafići Novi Sad',
    'kafić Maksima Gorkog',
    'gde popiti kafu u Novom Sadu',
    'nova mesta za druženje Novi Sad',
    'Istok Info Pult',
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
}

// =====================================
// NEWS ARTICLE JSON-LD
// =====================================

const jsonLd = {
  '@context': 'https://schema.org',

  '@type': 'NewsArticle',

  '@id': `${ARTICLE_URL}#article`,

  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
  },

  headline:
    'Novi Sad bogatiji za novo mesto susreta – otvoren Istok klub',

  description: article.description,

  image: [
    IMAGE_URL,
  ],

  datePublished: '2026-11-05T09:00:00+01:00',

  dateModified: '2026-11-05T09:00:00+01:00',

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

  inLanguage: 'sr',

  articleSection: 'Vesti',

  keywords: [
    'Istok klub',
    'Istok klub Novi Sad',
    'Otvaranje Istok kluba',
    'Kafići Novi Sad',
    'Maksima Gorkog 2a',
    'Novi Sad',
  ],

  isAccessibleForFree: true,

  url: ARTICLE_URL,
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
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {children}
    </>
  )
}
