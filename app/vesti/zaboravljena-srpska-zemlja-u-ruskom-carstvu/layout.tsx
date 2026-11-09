
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'zaboravljena-srpska-zemlja-u-ruskom-carstvu'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_URL =
  `${SITE_URL}/static/images/zaboravljena-srpska-zemlja.jpg`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Nova Srbija i Slavenosrbija – zaboravljena srpska zemlja u Ruskom carstvu',

  description:
    'Otkrijte istoriju Nove Srbije i Slavenosrbije (1751–1764), srpskih vojnih naselja u Ruskom carstvu. Seobe Srba, Jovan Horvat i zaboravljeno srpsko nasleđe.',

  image:
    '/static/images/zaboravljena-srpska-zemlja.jpg',

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
    'Nova Srbija',
    'Slavenosrbija',
    'Nova Srbija i Slavenosrbija',
    'Нова Србија',
    'Славеносрбија',
    'Новая Сербия',
    'Славяносербия',
    'New Serbia',
    'Slavo-Serbia',
    'zaboravljena srpska zemlja',
    'Srbi u Ruskom carstvu',
    'Srbi u Rusiji',
    'seobe Srba u Rusiju',
    'srpska naselja u Rusiji',
    'srpski graničari',
    'srpska vojna naselja',
    'Jovan Horvat',
    'Ivan Horvat',
    'Иван Хорват',
    'Jovan Šević',
    'Иван Шевич',
    'Rajko Preradović',
    'Райко Прерадович',
    'Jelisaveta Petrovna',
    'Katarina Velika',
    'Rusko carstvo',
    'Ruska imperija',
    'Российская империя',
    'Novomirgorod',
    'Новоархангельск',
    'Novоarhangelsk',
    'srpska istorija',
    'istorija Srba u Rusiji',
    'istorija Srbije i Rusije',
    'srpsko-ruski odnosi',
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
          'Nova Srbija i Slavenosrbija – seobe Srba i vojna naselja u Ruskom carstvu u XVIII veku',
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
    'Zaboravljena srpska zemlja u Ruskom carstvu – Nova Srbija i Slavenosrbija',

  description: article.description,

  image: [
    IMAGE_URL,
  ],

  datePublished: '2026-11-09T09:00:00+01:00',

  dateModified: '2026-11-09T09:00:00+01:00',

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
      '@type': 'Place',
      name: 'Nova Srbija',
      alternateName: [
        'Нова Србија',
        'Новая Сербия',
        'New Serbia',
      ],
    },
    {
      '@type': 'Place',
      name: 'Slavenosrbija',
      alternateName: [
        'Славеносрбија',
        'Славяносербия',
        'Slavo-Serbia',
      ],
    },
    {
      '@type': 'Person',
      name: 'Jovan Horvat',
      alternateName: [
        'Ivan Horvat',
        'Иван Хорват',
      ],
    },
    {
      '@type': 'Person',
      name: 'Jovan Šević',
      alternateName: 'Иван Шевич',
    },
    {
      '@type': 'Person',
      name: 'Rajko Preradović',
      alternateName: 'Райко Прерадович',
    },
    {
      '@type': 'Thing',
      name: 'Seobe Srba u Rusko carstvo tokom XVIII veka',
    },
  ],

  keywords: [
    'Nova Srbija',
    'Slavenosrbija',
    'Seobe Srba u Rusiju',
    'Srpska vojna naselja',
    'Jovan Horvat',
    'Jovan Šević',
    'Rajko Preradović',
    'Rusko carstvo',
    'Srpsko-ruski odnosi',
    'Istorija Srbije i Rusije',
    'Srbija i Rusija kroz istoriju',
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
