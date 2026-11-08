
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'srbin-koji-je-sluzio-petru-velikom'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_URL =
  `${SITE_URL}/static/images/srbin-koji-je-sluzio-petru-velikom.jpg`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Sava Vladislavić – Srbin koji je služio Petru Velikom i menjao granice Rusije',

  description:
    'Sava Vladislavić Raguzinski, Srbin iz Hercegovine, bio je diplomata Petra Velikog i ključni učesnik rusko-kineskog sporazuma iz 1727. godine. Otkrijte njegovu priču.',

  image:
    '/static/images/srbin-koji-je-sluzio-petru-velikom.jpg',

  publishedAt: '2026-11-08',

  modifiedAt: '2026-11-08',

  author: 'Istok Info Pult',
}

// =====================================
// METADATA
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,

  keywords: [
    'Sava Vladislavić',
    'Sava Vladislavić Raguzinski',
    'Sava Vladislavic',
    'Sava Raguzinski',
    'Savva Vladislavich',
    'Savva Raguzinsky',
    'Сава Владиславић',
    'Савва Владиславич Рагузинский',
    'Petar Veliki',
    'Petar I Romanov',
    'Petar Veliki i Sava Vladislavić',
    'Srbin na dvoru Petra Velikog',
    'srpski diplomata u Rusiji',
    'ruska diplomatija',
    'Ruska imperija',
    'rusko-kineski odnosi',
    'Kjahtinski sporazum 1727',
    'Kjahtinski ugovor',
    'granica Rusije i Kine',
    'Trojickosavsk',
    'Sankt Peterburg',
    'Hercegovina',
    'srpsko-ruski odnosi',
    'istorija Srbije i Rusije',
    'Srbija i Rusija kroz istoriju',
    'Srbija i Rusija vekovi zajedničke istorije',
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
          'Sava Vladislavić Raguzinski – srpski diplomata u službi Petra Velikog',
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

const jsonLd = {
  '@context': 'https://schema.org',

  '@type': 'NewsArticle',

  '@id': `${ARTICLE_URL}#article`,

  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
  },

  headline:
    'Srbin koji je služio Petru Velikom – Sava Vladislavić i tajne ruske diplomatije',

  description: article.description,

  image: [
    IMAGE_URL,
  ],

  datePublished: '2026-11-08T09:00:00+01:00',

  dateModified: '2026-11-08T09:00:00+01:00',

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

  articleSection: 'Istorija',

  about: [
    {
      '@type': 'Person',
      name: 'Sava Vladislavić Raguzinski',
      alternateName: [
        'Savva Vladislavich Raguzinsky',
        'Савва Владиславич Рагузинский',
      ],
    },
    {
      '@type': 'Person',
      name: 'Petar Veliki',
    },
    {
      '@type': 'Thing',
      name: 'Kjahtinski sporazum iz 1727. godine',
    },
  ],

  keywords: [
    'Sava Vladislavić',
    'Sava Vladislavić Raguzinski',
    'Petar Veliki',
    'Ruska imperija',
    'Ruska diplomatija',
    'Kjahtinski sporazum',
    'Rusija i Kina',
    'Srpsko-ruski odnosi',
    'Istorija Srbije i Rusije',
    'Srbija i Rusija – vekovi zajedničke istorije',
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
