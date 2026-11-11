
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG =
  'kome-i-zasto-smeta-ruska-federacija-i-drzavljani-rusije-u-srbiji'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_PATH = '/static/images/ruska-federacija.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Kome i zašto smetaju Ruska Federacija i ruski državljani u Srbiji? | Istok Info Pult',

  description:
    'Kome i zašto smetaju Rusija i ruski državljani u Srbiji? Istok Info Pult otvara javnu debatu o odnosima Srbije i Rusije, geopolitici, predrasudama i iskustvima ruskih građana. Uključite se u diskusiju.',

  image: IMAGE_PATH,

  publishedAt: '2026-11-11',

  modifiedAt: '2026-11-11',

  author: 'Istok Info Pult',
}

// =====================================
// METADATA
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,

  keywords: [
    'Ruska Federacija',
    'Rusija',
    'Rusi u Srbiji',
    'ruski državljani u Srbiji',
    'ruski građani u Srbiji',
    'odnosi Srbije i Rusije',
    'Srbija i Rusija',
    'srpsko-ruski odnosi',
    'odnos prema Rusiji',
    'odnos prema Rusima',
    'ruska zajednica u Srbiji',
    'Rusi u Beogradu',
    'Rusi u Novom Sadu',
    'ruski državljani',
    'Rusija i Srbija 2026',
    'geopolitika',
    'političke podele',
    'politički odnosi Srbije i Rusije',
    'javno mnjenje u Srbiji',
    'međunarodni odnosi',
    'predrasude prema Rusima',
    'diskriminacija po nacionalnoj osnovi',
    'ruska dijaspora',
    'debata o Rusiji',
    'javna debata',
    'otvorena diskusija',
    'komentari čitalaca',

    // Srpska ćirilica
    'Руска Федерација',
    'Русија',
    'Руси у Србији',
    'руски држављани у Србији',
    'Србија и Русија',
    'српско-руски односи',
    'односи Србије и Русије',
    'руска заједница у Србији',
    'јавна дебата',

    // Ruski jezik
    'Российская Федерация',
    'Россия',
    'россияне в Сербии',
    'русские в Сербии',
    'граждане России в Сербии',
    'российские граждане в Сербии',
    'Сербия и Россия',
    'сербско-российские отношения',
    'отношение к России в Сербии',
    'российская диаспора в Сербии',
    'общественная дискуссия',
    'отношение к россиянам',

    'Istok Info Pult',
    'Исток Инфо Пулт',
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

    locale: 'sr_RS',

    alternateLocale: ['ru_RU'],

    images: [
      {
        url: IMAGE_URL,
        width: 1600,
        height: 900,
        alt:
          'Javna debata Istok Info Pulta o Ruskoj Federaciji, ruskim državljanima u Srbiji i srpsko-ruskim odnosima',
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
// DISCUSSION JSON-LD
// =====================================

const jsonLd = {
  '@context': 'https://schema.org',

  '@type': 'DiscussionForumPosting',

  '@id': `${ARTICLE_URL}#discussion`,

  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
  },

  headline:
    'KOME I ZAŠTO SMETAJU RUSKA FEDERACIJA I RUSKI DRŽAVLJANI U SRBIJI?',

  alternativeHeadline:
    'Javna debata o odnosima Srbije i Rusije i položaju ruskih državljana u Srbiji',

  description: article.description,

  image: [IMAGE_URL],

  datePublished: '2026-11-11T12:00:00+01:00',

  dateModified: '2026-11-11T12:00:00+01:00',

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

  inLanguage: ['sr-Latn', 'sr-Cyrl', 'ru'],

  articleSection: 'Javna debata',

  about: [
    {
      '@type': 'Country',
      name: 'Ruska Federacija',
      alternateName: [
        'Руска Федерација',
        'Российская Федерация',
        'Russia',
      ],
    },
    {
      '@type': 'Country',
      name: 'Republika Srbija',
      alternateName: [
        'Република Србија',
        'Республика Сербия',
        'Serbia',
      ],
    },
    {
      '@type': 'Thing',
      name: 'Odnosi Srbije i Rusije',
      alternateName: [
        'Српско-руски односи',
        'Сербско-российские отношения',
      ],
    },
    {
      '@type': 'Thing',
      name: 'Ruski državljani u Srbiji',
      alternateName: [
        'Руски држављани у Србији',
        'Граждане России в Сербии',
      ],
    },
    {
      '@type': 'Thing',
      name: 'Ruska zajednica u Srbiji',
      alternateName: [
        'Руска заједница у Србији',
        'Российская община в Сербии',
      ],
    },
    {
      '@type': 'Thing',
      name: 'Javno mnjenje i geopolitika',
    },
    {
      '@type': 'Thing',
      name: 'Predrasude i nacionalna diskriminacija',
    },
    {
      '@type': 'Thing',
      name: 'Političke podele i međunarodni odnosi',
    },
  ],

  keywords: [
    'Ruska Federacija',
    'Rusija',
    'Ruski državljani u Srbiji',
    'Srbija i Rusija',
    'Srpsko-ruski odnosi',
    'Ruska zajednica',
    'Geopolitika',
    'Javna debata',
    'Iskustva ruskih građana',
    'Komentari čitalaca',
    'Istok Info Pult',
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
  children: ReactNode
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
