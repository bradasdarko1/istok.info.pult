
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'karadjordjev-poziv-ruskom-caru'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_PATH =
  '/static/images/karadjordjev-poziv-ruskom-caru.jpg'

const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Karađorđev poziv ruskom caru – Srbija u potrazi za saveznikom | Istok Info Pult',

  description:
    'Kako je Karađorđe tražio pomoć ruskog cara Aleksandra I? Srpske diplomatske misije, Konstantin Rodofinikin, bitka kod Varvarina i Bukureški mir 1812. godine.',

  image: IMAGE_PATH,

  publishedAt: '2026-11-12',

  modifiedAt: '2026-11-12',

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
    'Karađorđev poziv ruskom caru',
    'Karađorđe Petrović',
    'Karađorđe i Rusija',
    'Karađorđe i ruski car',
    'Karađorđe Aleksandar I',
    'Prvi srpski ustanak',
    'Prvi srpski ustanak 1804',
    'Prvi srpski ustanak 1813',
    'Rusija i Prvi srpski ustanak',
    'ruska pomoć srpskim ustanicima',
    'srpsko-ruski odnosi',
    'srpsko-rusko savezništvo',
    'srpsko-ruske diplomatske veze',
    'srpska diplomatska misija 1804',
    'ruski car Aleksandar I',
    'Aleksandar I Romanov',
    'prota Mateja Nenadović',
    'Petar Novaković Čardaklija',
    'Jovan Protić',
    'Konstantin Rodofinikin',
    'ruska diplomatija u Srbiji',
    'rusko-turski rat 1806',
    'rusko-turski rat 1806–1812',
    'bitka kod Varvarina',
    'bitka kod Varvarina 1810',
    'Josif O Rurk',
    'Bukureški mir',
    'Bukureški mir 1812',
    'Bukureški ugovor',
    'osma tačka Bukureškog mira',
    'slom Prvog srpskog ustanka',
    'srpska istorija 19. vek',
    'istorija Srbije i Rusije',
    'Srbija i Rusija kroz istoriju',

    // Srpska ćirilica
    'Карађорђев позив руском цару',
    'Карађорђе Петровић',
    'Карађорђе и Русија',
    'Карађорђе и руски цар',
    'Први српски устанак',
    'Русија и Први српски устанак',
    'руска помоћ српским устаницима',
    'српско-руски односи',
    'српско-руско савезништво',
    'српска дипломатска мисија 1804',
    'руски цар Александар I',
    'прота Матеја Ненадовић',
    'Петар Новаковић Чардаклија',
    'Јован Протић',
    'Константин Родофиникин',
    'руско-турски рат',
    'битка код Варварина',
    'Букурешки мир 1812',
    'слом Првог српског устанка',
    'историја Србије и Русије',
    'Србија и Русија кроз историју',

    // Ruski jezik
    'обращение Карагеоргия к русскому императору',
    'Карагеоргий Петрович',
    'Карагеоргий и Россия',
    'Карагеоргий и Александр I',
    'Первое сербское восстание',
    'Первое сербское восстание 1804',
    'Россия и Первое сербское восстание',
    'русская помощь сербским повстанцам',
    'сербско-российские отношения',
    'сербско-русский союз',
    'сербская дипломатическая миссия 1804',
    'император Александр I',
    'Александр I Романов',
    'Матей Ненадович',
    'Пётр Новакович Чардаклия',
    'Йован Протич',
    'Константин Родофиникин',
    'русская дипломатия в Сербии',
    'русско-турецкая война 1806–1812',
    'сражение при Варварине',
    'сражение при Варварине 1810',
    'Иосиф О Рурк',
    'Бухарестский мир',
    'Бухарестский мирный договор 1812',
    'восьмая статья Бухарестского договора',
    'история Сербии и России',
    'Сербия и Россия сквозь историю',

    // Brend
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
          'Karađorđe Petrović i srpska diplomatska misija Rusiji tokom Prvog srpskog ustanka',
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
    'KARAĐORĐEV POZIV RUSKOM CARU — SRBIJA U POTRAZI ZA SAVEZNIKOM',

  alternativeHeadline:
    'Prvi srpski ustanak, ruska pomoć Karađorđu i diplomatski odnosi Srbije i Rusije od 1804. do 1813. godine',

  description: article.description,

  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,
    },
  ],

  datePublished: '2026-11-12T12:00:00+01:00',

  dateModified: '2026-11-12T12:00:00+01:00',

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
      '@type': 'Thing',
      name: 'Prvi srpski ustanak',
      alternateName: [
        'Први српски устанак',
        'Первое сербское восстание',
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
        'Александр I Павлович',
      ],
    },
    {
      '@type': 'Person',
      name: 'Prota Mateja Nenadović',
      alternateName: [
        'Прота Матеја Ненадовић',
        'Матей Ненадович',
      ],
    },
    {
      '@type': 'Person',
      name: 'Petar Novaković Čardaklija',
      alternateName: [
        'Петар Новаковић Чардаклија',
        'Пётр Новакович Чардаклия',
      ],
    },
    {
      '@type': 'Person',
      name: 'Jovan Protić',
      alternateName: [
        'Јован Протић',
        'Йован Протич',
      ],
    },
    {
      '@type': 'Person',
      name: 'Konstantin Rodofinikin',
      alternateName: [
        'Константин Родофиникин',
        'Константин Константинович Родофиникин',
      ],
    },
    {
      '@type': 'Person',
      name: 'Josif Kornelije O Rurk',
      alternateName: [
        'Јосиф Корнелије О Рурк',
        'Иосиф Корнилович О Рурк',
      ],
    },
    {
      '@type': 'Event',
      name: 'Bitka kod Varvarina',
      alternateName: [
        'Битка код Варварина',
        'Сражение при Варварине',
      ],
      startDate: '1810',
      location: {
        '@type': 'Place',
        name: 'Varvarin',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'RS',
        },
      },
    },
    {
      '@type': 'Event',
      name: 'Rusko-turski rat 1806–1812',
      alternateName:
        'Русско-турецкая война 1806–1812',
      startDate: '1806',
      endDate: '1812',
    },
    {
      '@type': 'Thing',
      name: 'Bukureški mir 1812',
      alternateName: [
        'Букурешки мир 1812',
        'Бухарестский мирный договор 1812 года',
      ],
    },
    {
      '@type': 'Thing',
      name: 'Srpsko-ruski diplomatski odnosi',
      alternateName: [
        'Српско-руски дипломатски односи',
        'Сербско-российские дипломатические отношения',
      ],
    },
    {
      '@type': 'Thing',
      name: 'Srbija i Rusija kroz istoriju',
      alternateName: [
        'Србија и Русија кроз историју',
        'Сербия и Россия сквозь историю',
      ],
    },
  ],

  keywords: [
    'Karađorđe Petrović',
    'Aleksandar I Romanov',
    'Prvi srpski ustanak',
    'Srpska diplomatska misija 1804',
    'Prota Mateja Nenadović',
    'Konstantin Rodofinikin',
    'Bitka kod Varvarina',
    'Bukureški mir 1812',
    'Rusko-turski rat',
    'Ruska pomoć Srbiji',
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
