
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'bukureski-mir'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_PATH = '/static/images/bukureski-mir.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Bukureški mir 1812 – kada su sudbinu Srbije odlučivale velike sile | Istok Info Pult',

  description:
    'Kako je Bukureški mir iz 1812. uticao na Srbiju i Prvi srpski ustanak? Osmi član sporazuma, rusko-osmanski pregovori, Napoleonov pohod na Rusiju i slom ustanka 1813. godine.',

  image: IMAGE_PATH,

  publishedAt: '2026-11-13',

  modifiedAt: '2026-11-13',

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
    'Bukureški mir',
    'Bukureški mir 1812',
    'Bukureški mirovni sporazum',
    'Bukureški ugovor',
    'Bukureški mir i Srbija',
    'Bukureški mir i Prvi srpski ustanak',
    'osmi član Bukureškog mira',
    'Prvi srpski ustanak',
    'Prvi srpski ustanak 1804–1813',
    'slom Prvog srpskog ustanka',
    'pad ustaničke Srbije 1813',
    'Karađorđe Petrović',
    'Karađorđe i Rusija',
    'rusko-osmanski rat',
    'rusko-turski rat 1806–1812',
    'rusko-osmanski pregovori',
    'Rusija i Osmansko carstvo',
    'Aleksandar I Romanov',
    'car Aleksandar I',
    'Napoleon Bonaparta',
    'Napoleonov pohod na Rusiju',
    'Napoleonova invazija 1812',
    'Besarabija 1812',
    'srpska autonomija',
    'srpska samouprava',
    'osmanski garnizoni u Srbiji',
    'istorija Srbije 1812',
    'istorija Srbije 1813',
    'istorija Srbije i Rusije',
    'srpsko-ruski odnosi',
    'ruska pomoć Srbiji',
    'srpsko-rusko savezništvo',
    'Srbija i Rusija kroz istoriju',

    // Srpska ćirilica
    'Букурешки мир',
    'Букурешки мир 1812',
    'Букурешки мировни споразум',
    'Букурешки уговор',
    'Букурешки мир и Србија',
    'осми члан Букурешког мира',
    'Први српски устанак',
    'слом Првог српског устанка',
    'Карађорђе Петровић',
    'Карађорђе и Русија',
    'руско-турски рат',
    'руско-османски преговори',
    'Русија и Османско царство',
    'Александар I Романов',
    'Наполеон Бонапарта',
    'Наполеонов поход на Русију',
    'Бесарабија',
    'српска аутономија',
    'српска самоуправа',
    'османски гарнизони',
    'историја Србије 1812',
    'историја Србије 1813',
    'српско-руски односи',
    'руска помоћ Србији',
    'Србија и Русија кроз историју',

    // Ruski jezik
    'Бухарестский мир',
    'Бухарестский мир 1812 года',
    'Бухарестский мирный договор',
    'Бухарестский договор 1812',
    'Бухарестский мир и Сербия',
    'восьмая статья Бухарестского мира',
    'Первое сербское восстание',
    'Первое сербское восстание 1804–1813',
    'поражение Первого сербского восстания',
    'Карагеоргий Петрович',
    'Карагеоргий и Россия',
    'русско-турецкая война 1806–1812',
    'Россия и Османская империя',
    'Александр I',
    'Наполеон Бонапарт',
    'Отечественная война 1812 года',
    'вторжение Наполеона в Россию',
    'Бессарабия 1812',
    'автономия Сербии',
    'сербское самоуправление',
    'османские гарнизоны',
    'история Сербии 1812',
    'история Сербии 1813',
    'русско-сербские отношения',
    'история России и Сербии',
    'Сербия и Россия в истории',

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
          'Bukureški mir 1812 – rusko-osmanski pregovori, sudbina Srbije i Prvi srpski ustanak',
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
    'BUKUREŠKI MIR — KADA SU SUDBINU SRBIJE ODLUČIVALE VELIKE SILE',

  alternativeHeadline:
    'Bukureški mir 1812, Napoleonov pohod na Rusiju i sudbina Prvog srpskog ustanka',

  description: article.description,

  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,
    },
  ],

  datePublished: '2026-11-13T12:00:00+01:00',

  dateModified: '2026-11-13T12:00:00+01:00',

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

  articleSection: 'Istorija',

  genre: 'Istorijski članak',

  isAccessibleForFree: true,

  about: [
    {
      '@type': 'Event',
      name: 'Bukureški mir 1812',
      alternateName: [
        'Букурешки мир 1812',
        'Бухарестский мир 1812 года',
      ],
      startDate: '1812-05-28',
      location: {
        '@type': 'Place',
        name: 'Bukurešt',
        alternateName: 'Бухарест',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bucharest',
          addressCountry: 'RO',
        },
      },
    },
    {
      '@type': 'Event',
      name: 'Prvi srpski ustanak',
      alternateName: [
        'Први српски устанак',
        'Первое сербское восстание',
      ],
      startDate: '1804',
      endDate: '1813',
    },
    {
      '@type': 'Event',
      name: 'Rusko-turski rat 1806–1812',
      alternateName: [
        'Руско-турски рат 1806–1812',
        'Русско-турецкая война 1806–1812',
      ],
    },
    {
      '@type': 'Event',
      name: 'Napoleonov pohod na Rusiju 1812',
      alternateName: [
        'Наполеонов поход на Русију',
        'Отечественная война 1812 года',
      ],
    },
    {
      '@type': 'Person',
      name: 'Karađorđe Petrović',
      alternateName: [
        'Карађорђе Петровић',
        'Карагеоргий Петрович',
      ],
    },
    {
      '@type': 'Person',
      name: 'Aleksandar I Romanov',
      alternateName: [
        'Александар I Романов',
        'Александр I',
      ],
    },
    {
      '@type': 'Person',
      name: 'Napoleon Bonaparta',
      alternateName: [
        'Наполеон Бонапарта',
        'Наполеон Бонапарт',
      ],
    },
    {
      '@type': 'Place',
      name: 'Srbija',
      alternateName: ['Србија', 'Сербия'],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'RS',
      },
    },
    {
      '@type': 'Place',
      name: 'Rusija',
      alternateName: ['Русија', 'Россия'],
    },
    {
      '@type': 'Thing',
      name: 'Osmansko carstvo',
      alternateName: [
        'Османско царство',
        'Османская империя',
      ],
    },
    {
      '@type': 'Thing',
      name: 'Osmi član Bukureškog mira',
      alternateName: [
        'Осми члан Букурешког мира',
        'Восьмая статья Бухарестского мира',
      ],
    },
    {
      '@type': 'Thing',
      name: 'Srpska autonomija',
      alternateName: [
        'Српска аутономија',
        'Автономия Сербии',
      ],
    },
    {
      '@type': 'Thing',
      name: 'Srpsko-ruski odnosi u XIX veku',
      alternateName: [
        'Српско-руски односи у XIX веку',
        'Русско-сербские отношения в XIX веке',
      ],
    },
  ],

  keywords: [
    'Bukureški mir',
    'Bukureški mir 1812',
    'Prvi srpski ustanak',
    'Karađorđe Petrović',
    'Aleksandar I Romanov',
    'Napoleon Bonaparta',
    'Rusko-turski rat 1806–1812',
    'Osmi član Bukureškog mira',
    'Srpska autonomija',
    'Slom Prvog srpskog ustanka 1813',
    'Rusija i Srbija',
    'Srbija i Rusija kroz istoriju',
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
