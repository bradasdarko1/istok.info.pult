
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'ruski-oficir-koji-je-poginuo-za-srbiju'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_PATH = '/static/images/ruski-oficir.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Ruski oficir koji je poginuo za Srbiju – Nikolaj Rajevski 1876 | Istok Info Pult',

  description:
    'Priča o Nikolaju Rajevskom, ruskom pukovniku koji je 1876. poginuo kod Gornjeg Adrovca boreći se za Srbiju. Ruski dobrovoljci, spomen-crkva i veza sa Tolstojevim Vronskim.',

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
    'Nikolaj Rajevski',
    'Nikolaj Nikolajevič Rajevski',
    'pukovnik Nikolaj Rajevski',
    'ruski oficir Nikolaj Rajevski',
    'ruski oficir koji je poginuo za Srbiju',
    'Nikolaj Rajevski 1876',
    'Rajevski i Srbija',
    'pogibija Nikolaja Rajevskog',
    'Gornji Adrovac',
    'bitka kod Gornjeg Adrovca',
    'Gornji Adrovac 1876',
    'Ruska crkva Gornji Adrovac',
    'crkva Svete Trojice Gornji Adrovac',
    'spomen-crkva Nikolaja Rajevskog',
    'Prvi srpsko-turski rat',
    'Prvi srpsko-turski rat 1876',
    'srpsko-turski rat 1876',
    'srpsko-osmanski rat',
    'ruski dobrovoljci u Srbiji',
    'ruski dobrovoljci 1876',
    'ruska pomoć Srbiji',
    'ruski oficiri u srpskoj vojsci',
    'Mihail Černjajev',
    'general Mihail Černjajev',
    'Moravski front 1876',
    'bitka kod Aleksinca',
    'Aleksinac 1876',
    'manastir Sveti Roman',
    'Lav Tolstoj',
    'Ana Karenjina',
    'Aleksej Vronski',
    'grof Vronski',
    'Nikolaj Rajevski i Vronski',
    'Vronski i Srbija',
    'Tolstoj i Srbija',
    'rusko-srpsko prijateljstvo',
    'srpsko-ruski odnosi',
    'istorija Srbije i Rusije',
    'Srbija i Rusija kroz istoriju',
    'istorija Srbije 19. vek',
    'istorija Srbije 1876',

    // Srpska ćirilica
    'Николај Рајевски',
    'Николај Николајевич Рајевски',
    'пуковник Николај Рајевски',
    'руски официр Николај Рајевски',
    'руски официр који је погинуо за Србију',
    'Николај Рајевски 1876',
    'Раjевски и Србија',
    'погибија Николаја Рајевског',
    'Горњи Адровац',
    'битка код Горњег Адровца',
    'Горњи Адровац 1876',
    'Руска црква Горњи Адровац',
    'црква Свете Тројице',
    'спомен-црква Николаја Рајевског',
    'Први српско-турски рат',
    'српско-турски рат 1876',
    'руски добровољци у Србији',
    'руски добровољци 1876',
    'руска помоћ Србији',
    'руски официри у српској војсци',
    'Михаил Черњајев',
    'генерал Михаил Черњајев',
    'Моравски фронт',
    'битка код Алексинца',
    'Алексинац 1876',
    'манастир Свети Роман',
    'Лав Толстој',
    'Ана Карењина',
    'Алексеј Вронски',
    'гроф Вронски',
    'Николај Рајевски и Вронски',
    'Вронски и Србија',
    'Толстој и Србија',
    'српско-руско пријатељство',
    'српско-руски односи',
    'историја Србије и Русије',
    'Србија и Русија кроз историју',

    // Ruski jezik
    'Николай Раевский',
    'Николай Николаевич Раевский',
    'полковник Николай Раевский',
    'Николай Раевский 1876',
    'русский офицер погибший за Сербию',
    'Раевский и Сербия',
    'гибель Николая Раевского',
    'Горни Адровац',
    'сражение при Горни Адроваце',
    'Русская церковь в Сербии',
    'церковь Святой Троицы',
    'мемориальная церковь Раевского',
    'Первая сербско-турецкая война',
    'Сербско-турецкая война 1876',
    'русские добровольцы в Сербии',
    'русские добровольцы 1876',
    'русская помощь Сербии',
    'русские офицеры в сербской армии',
    'Михаил Черняев',
    'генерал Михаил Черняев',
    'Моравский фронт',
    'сражение под Алексинцем',
    'Алексинац 1876',
    'монастырь Святого Романа',
    'Лев Толстой',
    'Анна Каренина',
    'Алексей Вронский',
    'граф Вронский',
    'Николай Раевский и Вронский',
    'прототип Вронского',
    'Вронский и Сербия',
    'Толстой и Сербия',
    'русско-сербская дружба',
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
          'Nikolaj Rajevski – ruski oficir koji je poginuo za Srbiju 1876. kod Gornjeg Adrovca',
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
    'RUSKI OFICIR KOJI JE POGINUO ZA SRBIJU — NIKOLAJ RAJEVSKI',

  alternativeHeadline:
    'Nikolaj Rajevski, ruski dobrovoljci 1876, bitka kod Gornjeg Adrovca i Tolstojev Vronski',

  description: article.description,

  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,
    },
  ],

  datePublished: '2026-11-17T12:00:00+01:00',

  dateModified: '2026-11-17T12:00:00+01:00',

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
      '@type': 'Person',
      name: 'Nikolaj Nikolajevič Rajevski',
      alternateName: [
        'Николај Николајевич Рајевски',
        'Николай Николаевич Раевский',
        'Nikolai Raevsky',
        'Nikolay Rayevsky',
      ],
      description:
        'Ruski pukovnik i dobrovoljac koji je poginuo 1876. godine boreći se na strani Srbije.',
      deathDate: '1876-09-01',
      deathPlace: {
        '@type': 'Place',
        name: 'Gornji Adrovac',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gornji Adrovac',
          addressCountry: 'RS',
        },
      },
    },
    {
      '@type': 'Event',
      name: 'Prvi srpsko-turski rat 1876',
      alternateName: [
        'Први српско-турски рат',
        'Первая сербско-турецкая война',
      ],
      startDate: '1876',
      endDate: '1877',
      location: {
        '@type': 'Place',
        name: 'Srbija',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'RS',
        },
      },
    },
    {
      '@type': 'Event',
      name: 'Bitka kod Gornjeg Adrovca',
      alternateName: [
        'Битка код Горњег Адровца',
        'Сражение у Горни-Адроваца',
      ],
      startDate: '1876-09-01',
      location: {
        '@type': 'Place',
        name: 'Gornji Adrovac',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gornji Adrovac',
          addressCountry: 'RS',
        },
      },
    },
    {
      '@type': 'Person',
      name: 'Mihail Černjajev',
      alternateName: [
        'Михаил Черњајев',
        'Михаил Черняев',
        'Mikhail Chernyayev',
      ],
    },
    {
      '@type': 'Person',
      name: 'Lav Tolstoj',
      alternateName: [
        'Лав Толстој',
        'Лев Николаевич Толстой',
        'Leo Tolstoy',
      ],
    },
    {
      '@type': 'Book',
      name: 'Ana Karenjina',
      alternateName: [
        'Ана Карењина',
        'Анна Каренина',
        'Anna Karenina',
      ],
      author: {
        '@type': 'Person',
        name: 'Lav Tolstoj',
      },
    },
    {
      '@type': 'Thing',
      name: 'Aleksej Vronski',
      alternateName: [
        'Алексеј Вронски',
        'Алексей Вронский',
        'Alexei Vronsky',
      ],
      description:
        'Književni lik iz romana Ana Karenjina čija se sudbina dovodi u vezu sa Nikolajem Rajevskim.',
    },
    {
      '@type': 'LandmarksOrHistoricalBuildings',
      name: 'Spomen-crkva Svete Trojice u Gornjem Adrovcu',
      alternateName: [
        'Руска црква у Горњем Адровцу',
        'Церковь Святой Троицы в Горни-Адроваце',
      ],
      description:
        'Spomen-crkva podignuta 1903. godine na mestu pogibije Nikolaja Rajevskog.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gornji Adrovac',
        addressCountry: 'RS',
      },
    },
    {
      '@type': 'Place',
      name: 'Manastir Sveti Roman',
      alternateName: [
        'Манастир Свети Роман',
        'Монастырь Святого Романа',
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'RS',
      },
    },
    {
      '@type': 'Place',
      name: 'Aleksinac',
      alternateName: [
        'Алексинац',
        'Алексинац, Сербия',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Aleksinac',
        addressCountry: 'RS',
      },
    },
    {
      '@type': 'Thing',
      name: 'Ruski dobrovoljci u Srbiji 1876',
      alternateName: [
        'Руски добровољци у Србији',
        'Русские добровольцы в Сербии',
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
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'RU',
      },
    },
  ],

  keywords: [
    'Nikolaj Rajevski',
    'Nikolaj Nikolajevič Rajevski',
    'Ruski oficir koji je poginuo za Srbiju',
    'Nikolaj Rajevski 1876',
    'Gornji Adrovac',
    'Bitka kod Gornjeg Adrovca',
    'Prvi srpsko-turski rat',
    'Ruski dobrovoljci 1876',
    'Mihail Černjajev',
    'Aleksinac 1876',
    'Spomen-crkva Svete Trojice',
    'Manastir Sveti Roman',
    'Lav Tolstoj',
    'Ana Karenjina',
    'Aleksej Vronski',
    'Rusija i Srbija',
    'Srpsko-ruski odnosi',
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
