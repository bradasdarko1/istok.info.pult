
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'peticija-za-osudu-genocida-nad-srbima-u-ndh'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_PATH = '/static/images/peticija-za-genocid.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Peticija za osudu genocida nad Srbima u NDH – Potpisivanje u Novom Sadu | Istok Info Pult',

  description:
    'Pokret Srba Krajišnika pokrenuo je peticiju za usvajanje deklaracije o osudi genocida nad Srbima u NDH od 1941. do 1945. godine. Potpišite peticiju u Istok Klubu, Maksima Gorkog 2a, Novi Sad.',

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
    'peticija za osudu genocida nad Srbima',
    'peticija za osudu genocida nad Srbima u NDH',
    'peticija NDH',
    'peticija Novi Sad',
    'potpisivanje peticije Novi Sad',
    'Pokret Srba Krajišnika',
    'Pokret Srba Krajisnika',
    'genocid nad Srbima u NDH',
    'genocid nad Srbima 1941 1945',
    'Nezavisna Država Hrvatska',
    'NDH 1941 1945',
    'stradanje Srba u NDH',
    'žrtve genocida u NDH',
    'srpske žrtve Drugog svetskog rata',
    'Drugi svetski rat',
    'istorijsko pamćenje',
    'kultura sećanja',
    'sećanje na srpske žrtve',
    'deklaracija o osudi genocida',
    'deklaracija o genocidu nad Srbima',
    'Narodna skupština Republike Srbije',
    'Skupština Srbije deklaracija',
    'inicijativa Pokreta Srba Krajišnika',
    'podrška peticiji',
    'gde potpisati peticiju',
    'potpisivanje peticije u Novom Sadu',
    'Istok Klub',
    'Istok Klub Novi Sad',
    'Istok Info Pult Novi Sad',
    'Maksima Gorkog 2a',
    'Maksima Gorkog 2a Novi Sad',
    'Novi Sad peticija',
    'Istok Info Pult peticija',

    // Srpska ćirilica
    'петиција за осуду геноцида над Србима',
    'петиција за осуду геноцида над Србима у НДХ',
    'петиција НДХ',
    'петиција Нови Сад',
    'потписивање петиције',
    'Покрет Срба Крајишника',
    'геноцид над Србима у НДХ',
    'геноцид над Србима 1941 1945',
    'Независна Држава Хрватска',
    'НДХ 1941 1945',
    'страдање Срба у НДХ',
    'жртве геноцида у НДХ',
    'српске жртве Другог светског рата',
    'Други светски рат',
    'историјско памћење',
    'култура сећања',
    'сећање на српске жртве',
    'декларација о осуди геноцида',
    'декларација о геноциду над Србима',
    'Народна скупштина Републике Србије',
    'Скупштина Србије',
    'иницијатива Покрета Срба Крајишника',
    'подршка петицији',
    'где потписати петицију',
    'потписивање петиције у Новом Саду',
    'Исток Клуб',
    'Исток Клуб Нови Сад',
    'Исток Инфо Пулт',
    'Максима Горког 2а',
    'Нови Сад',

    // Ruski jezik
    'петиция об осуждении геноцида сербов',
    'петиция геноцид сербов НГХ',
    'сбор подписей Сербия',
    'сбор подписей Нови-Сад',
    'Движение сербов Краины',
    'Покрет Срба Крајишника',
    'геноцид сербов в НГХ',
    'геноцид сербов 1941 1945',
    'Независимое государство Хорватия',
    'НГХ 1941 1945',
    'жертвы геноцида сербов',
    'сербы во Второй мировой войне',
    'Вторая мировая война',
    'историческая память',
    'сохранение исторической памяти',
    'декларация об осуждении геноцида',
    'декларация о геноциде сербов',
    'Народная скупщина Сербии',
    'парламент Сербии',
    'поддержка петиции',
    'подписание петиции',
    'где подписать петицию',
    'Исток Клуб Нови-Сад',
    'Исток Инфо Пулт',
    'улица Максима Горького 2а',
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
          'Peticija Pokreta Srba Krajišnika za osudu genocida nad Srbima u NDH – potpisivanje u Istok Klubu u Novom Sadu',
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
    'POKRENUTA PETICIJA ZA USVAJANJE DEKLARACIJE O OSUDI GENOCIDA NAD SRBIMA U NDH',

  alternativeHeadline:
    'Pokret Srba Krajišnika pokrenuo peticiju – potpisivanje u Istok Klubu u Novom Sadu',

  description: article.description,

  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,
    },
  ],

  datePublished: '2026-11-17T15:00:00+01:00',

  dateModified: '2026-11-17T15:00:00+01:00',

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

  articleSection: 'Društvo',

  genre: 'Vest',

  isAccessibleForFree: true,

  // =====================================
  // GLAVNE TEME ČLANKA
  // =====================================

  about: [
    {
      '@type': 'Event',
      name:
        'Potpisivanje peticije za usvajanje deklaracije o osudi genocida nad Srbima u NDH',

      alternateName: [
        'Петиција за осуду геноцида над Србима у НДХ',
        'Сбор подписей за осуждение геноцида сербов в НГХ',
      ],

      description:
        'Prikupljanje potpisa podrške inicijativi Pokreta Srba Krajišnika da Narodna skupština Republike Srbije usvoji deklaraciju o osudi genocida nad Srbima u NDH od 1941. do 1945. godine.',

      location: {
        '@type': 'Place',
        name: 'Istok Klub',

        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Maksima Gorkog 2a',
          addressLocality: 'Novi Sad',
          addressRegion: 'Vojvodina',
          addressCountry: 'RS',
        },
      },

      organizer: {
        '@type': 'Organization',
        name: 'Pokret Srba Krajišnika',
        alternateName: 'Покрет Срба Крајишника',
      },
    },
    {
      '@type': 'Organization',
      name: 'Pokret Srba Krajišnika',

      alternateName: [
        'Покрет Срба Крајишника',
        'Движение сербов Краины',
      ],

      description:
        'Inicijator peticije za usvajanje deklaracije o osudi genocida nad Srbima u NDH.',
    },
    {
      '@type': 'Organization',
      name: 'Narodna skupština Republike Srbije',

      alternateName: [
        'Народна скупштина Републике Србије',
        'Народная скупщина Республики Сербии',
        'National Assembly of Serbia',
      ],

      description:
        'Zakonodavno telo Republike Srbije kojem je upućena inicijativa za usvajanje deklaracije.',
    },
    {
      '@type': 'Place',
      name: 'Istok Klub',

      alternateName: [
        'Исток Клуб',
        'ISTOK KLUB',
      ],

      description:
        'Mesto u Novom Sadu na kojem zainteresovani građani mogu potpisati peticiju.',

      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Maksima Gorkog 2a',
        addressLocality: 'Novi Sad',
        addressRegion: 'Vojvodina',
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
        addressCountry: 'RS',
      },
    },
    {
      '@type': 'Thing',
      name: 'Genocid nad Srbima u NDH 1941–1945',

      alternateName: [
        'Геноцид над Србима у НДХ',
        'Геноцид сербов в НГХ',
        'Genocide of Serbs in the Independent State of Croatia',
      ],

      description:
        'Genocid nad Srbima tokom Drugog svetskog rata na teritoriji Nezavisne Države Hrvatske.',
    },
    {
      '@type': 'Thing',
      name: 'Nezavisna Država Hrvatska',

      alternateName: [
        'Независна Држава Хрватска',
        'Независимое государство Хорватия',
        'Independent State of Croatia',
        'NDH',
        'НДХ',
        'НГХ',
      ],

      description:
        'Državna tvorevina iz perioda Drugog svetskog rata, od 1941. do 1945. godine.',
    },
    {
      '@type': 'Thing',
      name: 'Deklaracija o osudi genocida nad Srbima u NDH',

      alternateName: [
        'Декларација о осуди геноцида над Србима у НДХ',
        'Декларация об осуждении геноцида сербов в НГХ',
      ],

      description:
        'Predmet inicijative za koju Pokret Srba Krajišnika prikuplja potpise podrške.',
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
      name: 'Drugi svetski rat',

      alternateName: [
        'Други светски рат',
        'Вторая мировая война',
        'World War II',
      ],
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
    'Peticija za osudu genocida nad Srbima',
    'Pokret Srba Krajišnika',
    'Genocid nad Srbima u NDH',
    'NDH 1941–1945',
    'Deklaracija o osudi genocida',
    'Narodna skupština Republike Srbije',
    'Potpisivanje peticije u Novom Sadu',
    'Istok Klub',
    'Maksima Gorkog 2a',
    'Novi Sad',
    'Kultura sećanja',
    'Drugi svetski rat',
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
