
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'istorija-uz-kafu-knjige-blagoja-jovovica'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_PATH = '/static/images/knjige-blagoja-jovovica.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Istorija uz kafu – Tri knjige o Blagoju Jovoviću u Istok Klubu u Novom Sadu | Istok Info Pult',

  description:
    'U Istok Klubu u Novom Sadu, Maksima Gorkog 2a, posetioci mogu besplatno da pročitaju sva tri izdanja knjiga o Blagoju Jovoviću, uz kafu i priču o istoriji.',

  image: IMAGE_PATH,

  publishedAt: '2026-11-17',

  modifiedAt: '2026-11-17',

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
    'Blagoje Jovović',
    'Blagoje Jovovic',
    'Blagoje Jovović knjiga',
    'Blagoje Jovović knjige',
    'knjige o Blagoju Jovoviću',
    'Marija Jovović',
    'Marija Jovovic',
    'Marija Jovović knjige',
    'Blagoje Jovović srpski heroj',
    'Blagoje Jovović život srpskog junaka',
    'Srpski heroj u vučjoj jazbini',
    'Blagoje Jovović prvi deo',
    'Blagoje Jovović drugi deo',
    'Blagoje Jovović atentat',
    'Blagoje Jovović Ante Pavelić',
    'Blagoje Jovović Argentina',
    'Blagoje Jovović 1957',
    'srpska emigracija',
    'srpska istorija',
    'istorija srpskog naroda',
    'istorija uz kafu',
    'knjige uz kafu',
    'čitanje knjiga uz kafu',
    'knjige u kafiću',
    'kafić sa knjigama',
    'knjige Novi Sad',
    'čitanje knjiga Novi Sad',
    'besplatno čitanje knjiga',
    'kultura sećanja',
    'istorijsko pamćenje',
    'srpski junaci',
    'srpska istorijska literatura',
    'knjige o srpskoj istoriji',
    'Istok Klub',
    'Istok Klub Novi Sad',
    'Istok Klub knjige',
    'Istok Klub Blagoje Jovović',
    'Istok Info Pult',
    'Istok Info Pult Novi Sad',
    'Maksima Gorkog 2a',
    'Maksima Gorkog 2a Novi Sad',
    'Novi Sad',

    // Srpska ćirilica
    'Благоје Јововић',
    'Благоје Јововић књига',
    'Благоје Јововић књиге',
    'књиге о Благоју Јововићу',
    'Марија Јововић',
    'Марија Јововић књиге',
    'Благоје Јововић српски херој',
    'Благоје Јововић живот српског јунака',
    'Српски херој у вучјој јазбини',
    'Благоје Јововић први део',
    'Благоје Јововић други део',
    'Благоје Јововић атентат',
    'Благоје Јововић Анте Павелић',
    'Благоје Јововић Аргентина',
    'Благоје Јововић 1957',
    'српска емиграција',
    'српска историја',
    'историја српског народа',
    'историја уз кафу',
    'књиге уз кафу',
    'читање књига уз кафу',
    'књиге у кафићу',
    'кафић са књигама',
    'књиге Нови Сад',
    'бесплатно читање књига',
    'култура сећања',
    'историјско памћење',
    'српски јунаци',
    'историјска литература',
    'Исток Клуб',
    'Исток Клуб Нови Сад',
    'Исток Инфо Пулт',
    'Максима Горког 2а',
    'Нови Сад',

    // Ruski jezik
    'Благое Йовович',
    'Благое Йовович книги',
    'книги о Благое Йововиче',
    'Мария Йовович',
    'Мария Йовович книги',
    'Благое Йовович сербский герой',
    'Благое Йовович биография',
    'Благое Йовович Анте Павелич',
    'Благое Йовович Аргентина',
    'Благое Йовович 1957',
    'история сербского народа',
    'сербская история',
    'сербская эмиграция',
    'историческая память',
    'культура памяти',
    'сохранение исторической памяти',
    'история за чашкой кофе',
    'книги за чашкой кофе',
    'чтение книг в кафе',
    'книги в Нови-Саде',
    'бесплатное чтение книг',
    'сербские исторические книги',
    'сербские герои',
    'Исток Клуб',
    'Исток Клуб Нови-Сад',
    'Исток Инфо Пулт',
    'Максима Горького 2а',
    'Нови-Сад Сербия',

    // Brend
    'Istok Info Pult',
    'Исток Инфо Пулт',
    'Istok Klub',
    'Исток Клуб',
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
          'Tri knjige Marije Jovović o Blagoju Jovoviću dostupne za čitanje uz kafu u Istok Klubu u Novom Sadu',
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
    'ISTORIJA UZ KAFU — SVA TRI IZDANJA KNJIGE O BLAGOJU JOVOVIĆU DOSTUPNA U ISTOK KLUBU',

  alternativeHeadline:
    'Knjige Marije Jovović o Blagoju Jovoviću dostupne za besplatno čitanje u Istok Klubu u Novom Sadu',

  description: article.description,

  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,
    },
  ],

  datePublished: '2026-11-17T17:00:00+01:00',

  dateModified: '2026-11-17T17:00:00+01:00',

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

  articleSection: 'Kultura',

  genre: 'Vest',

  isAccessibleForFree: true,

  // =====================================
  // GLAVNE TEME ČLANKA
  // =====================================

  about: [
    {
      '@type': 'Person',
      name: 'Blagoje Jovović',

      alternateName: [
        'Благоје Јововић',
        'Благое Йовович',
        'Blagoje Jovovic',
      ],

      description:
        'Srpski emigrant poznat po atentatu na Antu Pavelića u Argentini 1957. godine.',
    },
    {
      '@type': 'Person',
      name: 'Marija Jovović',

      alternateName: [
        'Марија Јововић',
        'Мария Йовович',
      ],

      description:
        'Autorka knjiga o životu Blagoja Jovovića i njegovom istorijskom nasleđu.',
    },
    {
      '@type': 'Book',
      name:
        'Blagoje Jovović – Srpski heroj u vučjoj jazbini, prvi deo',

      alternateName:
        'Благоје Јововић – Српски херој у вучјој јазбини, први део',

      author: {
        '@type': 'Person',
        name: 'Marija Jovović',
      },

      inLanguage: 'sr',
    },
    {
      '@type': 'Book',
      name:
        'Blagoje Jovović – Srpski heroj u vučjoj jazbini, drugi deo',

      alternateName:
        'Благоје Јововић – Српски херој у вучјој јазбини, други део',

      author: {
        '@type': 'Person',
        name: 'Marija Jovović',
      },

      inLanguage: 'sr',
    },
    {
      '@type': 'Book',
      name:
        'Blagoje Jovović – Život srpskog junaka',

      alternateName:
        'Благоје Јововић – Живот српског јунака',

      author: {
        '@type': 'Person',
        name: 'Marija Jovović',
      },

      inLanguage: 'sr',
    },
    {
      '@type': 'Place',
      name: 'Istok Klub',

      alternateName: [
        'Исток Клуб',
        'ISTOK KLUB',
      ],

      description:
        'Kulturno i društveno mesto u Novom Sadu u kojem posetioci mogu uz kafu besplatno da čitaju knjige o Blagoju Jovoviću.',

      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Maksima Gorkog 2a',
        addressLocality: 'Novi Sad',
        addressRegion: 'Vojvodina',
        addressCountry: 'RS',
      },
    },
    {
      '@type': 'Thing',
      name: 'Istorija uz kafu',

      alternateName: [
        'Историја уз кафу',
        'История за чашкой кофе',
      ],

      description:
        'Čitanje istorijskih knjiga i upoznavanje srpske istorije u prijatnoj atmosferi Istok Kluba.',
    },
    {
      '@type': 'Thing',
      name: 'Kultura sećanja',

      alternateName: [
        'Култура сећања',
        'Культура памяти',
        'Historical remembrance',
      ],
    },
    {
      '@type': 'Thing',
      name: 'Srpska emigracija',

      alternateName: [
        'Српска емиграција',
        'Сербская эмиграция',
      ],

      description:
        'Istorija srpske emigracije i ličnosti koje su obeležile njen razvoj u 20. veku.',
    },
    {
      '@type': 'Person',
      name: 'Ante Pavelić',

      alternateName: [
        'Анте Павелић',
        'Анте Павелич',
      ],

      description:
        'Poglavnik Nezavisne Države Hrvatske tokom Drugog svetskog rata.',
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
        addressCountry: 'RS',
      },
    },
    {
      '@type': 'Place',
      name: 'Srbija',

      alternateName: [
        'Србија',
        'Сербия',
        'Serbia',
      ],

      address: {
        '@type': 'PostalAddress',
        addressCountry: 'RS',
      },
    },
  ],

  keywords: [
    'Blagoje Jovović',
    'Marija Jovović',
    'Blagoje Jovović knjige',
    'Srpski heroj u vučjoj jazbini',
    'Život srpskog junaka',
    'Istorija uz kafu',
    'Knjige uz kafu',
    'Besplatno čitanje knjiga',
    'Istok Klub',
    'Istok Klub Novi Sad',
    'Maksima Gorkog 2a',
    'Novi Sad',
    'Srpska istorija',
    'Srpska emigracija',
    'Kultura sećanja',
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
