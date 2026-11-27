import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'sahrana-mitropolita-backog-irineja'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_PATH = '/static/images/mitropolit-backi-irinej-sahrana.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`


// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Novi Sad: sahrana mitropolita Irineja, opelo služi patrijarh Porfirije | Istok Info Pult',

  description:
    'Mitropolit bački Irinej biće sahranjen 27. novembra 2026. u kripti Sabornog hrama u Novom Sadu. Liturgija je u 9, a opelo u 12 časova u Almaškom hramu.',

  image: IMAGE_PATH,

  publishedAt: '2026-11-27',

  modifiedAt: '2026-11-27',

  author: 'Istok Info Pult',
}


// =====================================
// METADATA
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,

  keywords: [
    // Srpska latinica
    'Mitropolit Irinej',
    'Mitropolit bački Irinej',
    'Irinej Bulović',
    'Sahrana mitropolita Irineja',
    'Opelo mitropolitu Irineju',
    'Eparhija bačka',
    'Patrijarh Porfirije',
    'Almaški hram',
    'Hram Sveta Tri Jerarha',
    'Saborni hram Svetog Georgija',
    'Srpska pravoslavna crkva',
    'Novi Sad',
    'Istok Info Pult',

    // Srpska ćirilica
    'Митрополит Иринеј',
    'Митрополит бачки Иринеј',
    'Иринеј Буловић',
    'Сахрана митрополита Иринеја',
    'Опело митрополиту Иринеју',
    'Епархија бачка',
    'Патријарх Порфирије',
    'Алмашки храм',
    'Саборни храм Светог Георгија',
    'Српска православна црква',
    'Нови Сад',
    'Исток Инфо Пулт',

    // Ruski jezik
    'Митрополит Ириней',
    'Митрополит Бачский Ириней',
    'Ириней Булович',
    'Погребение митрополита Иринея',
    'Отпевание митрополита Иринея',
    'Бачская епархия',
    'Патриарх Порфирий',
    'Алмашский храм',
    'Сербская православная церковь',
    'Нови-Сад',
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
          'AI ilustracija: pravoslavni hram u Novom Sadu u jutarnjoj izmaglici, sa upaljenim svećama',
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
    'SAHRANA MITROPOLITA BAČKOG IRINEJA U NOVOM SADU — OPELO SLUŽI PATRIJARH PORFIRIJE',

  alternativeHeadline:
    'Sahrana arhiepiskopa novosadskog i mitropolita bačkog Irineja u Novom Sadu',

  description: article.description,

  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,

      caption:
        'AI ilustracija: pravoslavni hram u Novom Sadu u jutarnjoj izmaglici, sa upaljenim svećama',
    },
  ],

  datePublished: '2026-11-27',

  dateModified: '2026-11-27',

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

  articleSection: 'Vesti',

  isAccessibleForFree: true,


  // =====================================
  // GLAVNE TEME ČLANKA
  // =====================================

  about: [
    {
      '@type': 'Person',

      name: 'Irinej Bulović',

      alternateName: [
        'Mitropolit bački Irinej',
        'Arhiepiskop novosadski i mitropolit bački Irinej',
        'Иринеј Буловић',
        'Митрополит бачки Иринеј',
        'Митрополит Бачский Ириней',
        'Ириней Булович',
      ],

      deathDate: '2026-11-24',

      jobTitle:
        'Arhiepiskop novosadski i mitropolit bački',
    },

    {
      '@type': 'Person',

      name: 'Patrijarh Porfirije',

      alternateName: [
        'Патријарх Порфирије',
        'Патриарх Сербский Порфирий',
      ],

      jobTitle: 'Patrijarh srpski',
    },

    {
      '@type': 'Organization',

      name: 'Eparhija bačka',

      alternateName: [
        'Епархија бачка',
        'Бачская епархия',
      ],

      parentOrganization: {
        '@type': 'Organization',
        name: 'Srpska pravoslavna crkva',
      },
    },

    {
      '@type': 'Organization',

      name: 'Srpska pravoslavna crkva',

      alternateName: [
        'SPC',
        'Српска православна црква',
        'Сербская православная церковь',
      ],
    },

    {
      '@type': 'Church',

      name: 'Hram Sveta Tri Jerarha (Almaški hram)',

      alternateName: [
        'Алмашки храм',
        'Храм Света Три Јерарха',
        'Храм Трёх Святителей',
      ],

      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Novi Sad',
        addressCountry: 'RS',
      },
    },

    {
      '@type': 'Church',

      name: 'Saborni hram Svetog velikomučenika Georgija',

      alternateName: [
        'Саборни храм Светог великомученика Георгија',
        'Кафедральный собор святого великомученика Георгия',
      ],

      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Novi Sad',
        addressCountry: 'RS',
      },
    },

    {
      '@type': 'Place',

      name: 'Novi Sad',

      alternateName: [
        'Нови Сад',
        'Нови-Сад',
      ],

      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Novi Sad',
        addressRegion: 'Vojvodina',
        addressCountry: 'RS',
      },
    },
  ],


  // =====================================
  // STRUCTURED DATA KEYWORDS
  // =====================================

  keywords: [
    'Mitropolit bački Irinej',
    'Sahrana mitropolita Irineja',
    'Patrijarh Porfirije',
    'Eparhija bačka',
    'Almaški hram',
    'Novi Sad',
    'Сахрана митрополита Иринеја',
    'Погребение митрополита Иринея',
    'Istok Info Pult',
  ],

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
