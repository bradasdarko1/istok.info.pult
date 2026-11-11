
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG =
  'dan-kada-je-utihnulo-oruzje-a-srbija-ostala-na-nogama'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_URL = `${SITE_URL}/static/images/11-novembar.jpg`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    '11. novembar – Dan primirja u Prvom svetskom ratu | Srbija 1918',

  description:
    'Dan primirja 11. novembra 1918. Srbija, srpski junaci, proboj Solunskog fronta, oslobođenje Beograda i Natalijina ramonda – simbol stradanja i pobede.',

  image: '/static/images/11-novembar.jpg',

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
    '11. novembar',
    '11 novembar 1918',
    '11 novembar 2026',
    'Dan primirja',
    'Dan primirja u Prvom svetskom ratu',
    'Дан примирја',
    '11. новембар',
    'День перемирия',
    '11 ноября 1918 года',
    'Armistice Day',
    'Prvi svetski rat',
    'Први светски рат',
    'Первая мировая война',
    'World War I',
    'Veliki rat',
    'Велики рат',
    'Srbija u Prvom svetskom ratu',
    'Srbija 1918',
    'Србија 1918',
    'Serbia 1918',
    'srpska vojska 1918',
    'srpski junaci',
    'srpski vojnici',
    'stradanje Srbije',
    'srpske žrtve Prvog svetskog rata',
    'pobeda Srbije 1918',
    'oslobođenje Srbije 1918',
    'oslobođenje Beograda 1918',
    'oslobođenje Novog Sada 1918',
    'Solunski front',
    'proboj Solunskog fronta',
    'Солунски фронт',
    'Салоникский фронт',
    'Kajmakčalan',
    'Кајмакчалан',
    'Bitka na Ceru',
    'Kolubarska bitka',
    'Albanska golgota',
    'Krf 1916',
    'Natalijina ramonda',
    'Наталијина рамонда',
    'рамонда Наталии',
    'simbol Dana primirja',
    'srpska istorija',
    'istorija Srbije',
    'srpska sloboda',
    'srpska vojska u Velikom ratu',
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

    locale: 'sr_RS',

    alternateLocale: ['ru_RU'],

    images: [
      {
        url: IMAGE_URL,
        width: 1600,
        height: 900,
        alt:
          '11. novembar – Dan primirja u Prvom svetskom ratu, srpska vojska 1918. godine i simbol Natalijine ramonde',
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
    '11. NOVEMBAR — DAN KADA JE UTIHNULO ORUŽJE, A SRBIJA OSTALA NA NOGAMA',

  alternativeHeadline:
    'Dan primirja u Prvom svetskom ratu – Srbija i pobeda 1918. godine',

  description: article.description,

  image: [
    IMAGE_URL,
  ],

  datePublished: '2026-11-11T11:00:00+01:00',

  dateModified: '2026-11-11T11:00:00+01:00',

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

  about: [
    {
      '@type': 'Event',
      name: 'Dan primirja u Prvom svetskom ratu',
      alternateName: [
        'Дан примирја у Првом светском рату',
        'День перемирия в Первой мировой войне',
        'Armistice Day',
      ],
      startDate: '1918-11-11',
      location: {
        '@type': 'Place',
        name: 'Evropa',
      },
    },
    {
      '@type': 'Event',
      name: 'Prvi svetski rat',
      alternateName: [
        'Први светски рат',
        'Первая мировая война',
        'World War I',
        'Veliki rat',
      ],
      startDate: '1914-07-28',
      endDate: '1918-11-11',
    },
    {
      '@type': 'Event',
      name: 'Proboj Solunskog fronta',
      alternateName: [
        'Пробој Солунског фронта',
        'Прорыв Салоникского фронта',
        'Vardar Offensive',
      ],
      startDate: '1918-09-15',
      location: {
        '@type': 'Place',
        name: 'Solunski front',
      },
    },
    {
      '@type': 'Event',
      name: 'Oslobođenje Beograda 1918',
      startDate: '1918-11-01',
      location: {
        '@type': 'Place',
        name: 'Beograd, Srbija',
      },
    },
    {
      '@type': 'Event',
      name: 'Oslobođenje Novog Sada 1918',
      startDate: '1918-11-09',
      location: {
        '@type': 'Place',
        name: 'Novi Sad, Srbija',
      },
    },
    {
      '@type': 'Thing',
      name: 'Natalijina ramonda',
      alternateName: [
        'Наталијина рамонда',
        'рамонда Наталии',
        'Ramonda nathaliae',
      ],
      description:
        'Cvet koji simbolizuje sećanje na stradanje i obnovu Srbije u Prvom svetskom ratu.',
    },
    {
      '@type': 'Thing',
      name: 'Srpska vojska u Prvom svetskom ratu',
    },
    {
      '@type': 'Thing',
      name: 'Albanska golgota',
    },
    {
      '@type': 'Thing',
      name: 'Pobeda Srbije u Prvom svetskom ratu',
    },
  ],

  keywords: [
    '11. novembar',
    'Dan primirja',
    'Prvi svetski rat',
    'Srbija 1918',
    'Srpska vojska',
    'Veliki rat',
    'Proboj Solunskog fronta',
    'Oslobođenje Beograda',
    'Oslobođenje Novog Sada',
    'Natalijina ramonda',
    'Albanska golgota',
    'Srpski junaci',
    'Dan primirja 2026',
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
