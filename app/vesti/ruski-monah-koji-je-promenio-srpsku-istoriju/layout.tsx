
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'ruski-monah-koji-je-promenio-srpsku-istoriju'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_URL =
  `${SITE_URL}/static/images/ruski-monah-koji-je-promenio-srpsku-istoriju.jpg`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Ruski monah i Sveti Sava – kako su počele srpsko-ruske veze',

  description:
    'Kako je susret Rastka Nemanjića sa svetogorskim monahom uticao na njegov odlazak na Svetu Goru? Priča o Svetom Savi i počecima srpsko-ruskih duhovnih veza.',

  image:
    '/static/images/ruski-monah-koji-je-promenio-srpsku-istoriju.jpg',

  publishedAt: '2026-11-07',

  modifiedAt: '2026-11-07',

  author: 'Istok Info Pult',
}

// =====================================
// METADATA
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,

  keywords: [
    'Sveti Sava',
    'Rastko Nemanjić',
    'ruski monah',
    'Sveti Sava i ruski monah',
    'Sveti Sava Rusija',
    'srpsko-ruski odnosi',
    'istorija Srbije i Rusije',
    'Srbija i Rusija kroz istoriju',
    'srpsko-ruske duhovne veze',
    'manastir Svetog Pantelejmona',
    'Sveta Gora',
    'Hilandar',
    'Stefan Nemanja',
    'Srpska pravoslavna crkva',
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
    'Ruski monah koji je promenio srpsku istoriju – kako je počela veza dva naroda',

  description: article.description,

  image: [
    IMAGE_URL,
  ],

  datePublished: '2026-11-07T09:00:00+01:00',

  dateModified: '2026-11-07T09:00:00+01:00',

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

  articleSection: 'Istorija',

  keywords: [
    'Sveti Sava',
    'Rastko Nemanjić',
    'Ruski monah',
    'Srpsko-ruski odnosi',
    'Istorija Srbije i Rusije',
    'Sveta Gora',
    'Hilandar',
    'Manastir Svetog Pantelejmona',
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
