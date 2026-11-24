import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'upokojio-se-mitropolit-backi-irinej'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_PATH = '/static/images/mitropolit-backi-irinej.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`


// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Upokojio se mitropolit bački Irinej – Srpska pravoslavna crkva ostala bez istaknutog arhijereja | Istok Info Pult',

  description:
    'Mitropolit bački Irinej Bulović upokojio se 24. novembra 2026. godine. Srpska pravoslavna crkva ostala je bez jednog od svojih istaknutih arhijereja.',

  image: IMAGE_PATH,

  publishedAt: '2026-11-24',

  modifiedAt: '2026-11-24',

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
    'Mitropolit bački Irinej',
    'Mitropolit backi Irinej',
    'Irinej Bulović',
    'Irinej Bulovic',
    'Mitropolit Irinej',
    'Episkop bački Irinej',
    'Vladika Irinej',
    'Vladika Irinej Bulović',
    'Upokojio se mitropolit Irinej',
    'Upokojio se mitropolit bački Irinej',
    'Preminuo mitropolit Irinej',
    'Smrt mitropolita Irineja',
    'Irinej Bulović preminuo',
    'Irinej Bulović biografija',
    'Irinej Bulović 1947–2026',
    'Mirko Bulović',
    'Arhiepiskop novosadski',
    'Arhiepiskop novosadski i mitropolit bački',
    'Eparhija bačka',
    'Srpska pravoslavna crkva',
    'SPC',
    'Srpska pravoslavna crkva vesti',
    'Eparhija bačka saopštenje',
    'Sahrana mitropolita Irineja',
    'Pomen mitropolitu Irineju',
    'Sveti kralj Stefan Dečanski',
    'Sveti Justin Ćelijski',
    'Justin Popović',
    'Patrijarh Pavle',
    'Pravoslavni bogoslovski fakultet',
    'Pravoslavna vera',
    'Pravoslavlje',
    'Srpsko pravoslavlje',
    'Pravoslavna crkva',
    'Duhovno nasleđe',
    'Pravoslavne vesti',
    'Crkvene vesti',
    'Vesti 24. novembar 2026.',
    'Novi Sad',
    'Sremska Kamenica',
    'Vojvodina',
    'Srbija',
    'Večan mu spomen',
    'Istok Info Pult',

    // Srpska ćirilica
    'Митрополит бачки Иринеј',
    'Иринеј Буловић',
    'Митрополит Иринеј',
    'Епископ бачки Иринеј',
    'Владика Иринеј',
    'Владика Иринеј Буловић',
    'Упокојио се митрополит Иринеј',
    'Упокојио се митрополит бачки Иринеј',
    'Преминуо митрополит Иринеј',
    'Смрт митрополита Иринеја',
    'Иринеј Буловић преминуо',
    'Иринеј Буловић биографија',
    'Иринеј Буловић 1947–2026',
    'Мирко Буловић',
    'Архиепископ новосадски',
    'Архиепископ новосадски и митрополит бачки',
    'Епархија бачка',
    'Српска православна црква',
    'СПЦ',
    'Српска православна црква вести',
    'Епархија бачка саопштење',
    'Сахрана митрополита Иринеја',
    'Помен митрополиту Иринеју',
    'Свети краљ Стефан Дечански',
    'Свети Јустин Ћелијски',
    'Јустин Поповић',
    'Патријарх Павле',
    'Православни богословски факултет',
    'Православна вера',
    'Православље',
    'Српско православље',
    'Православна црква',
    'Духовно наслеђе',
    'Православне вести',
    'Црквене вести',
    'Вести 24. новембар 2026.',
    'Нови Сад',
    'Сремска Каменица',
    'Војводина',
    'Србија',
    'Вечан му спомен',
    'Исток Инфо Пулт',

    // Ruski jezik
    'Митрополит Бачский Ириней',
    'Ириней Булович',
    'Митрополит Ириней',
    'Епископ Бачский Ириней',
    'Владыка Ириней',
    'Владыка Ириней Булович',
    'Почил о Господе митрополит Ириней',
    'Почил митрополит Бачский Ириней',
    'Скончался митрополит Ириней',
    'Кончина митрополита Иринея',
    'Ириней Булович биография',
    'Ириней Булович 1947–2026',
    'Мирко Булович',
    'Архиепископ Новисадский',
    'Архиепископ Новисадский и Митрополит Бачский',
    'Бачская епархия',
    'Сербская православная церковь',
    'СПЦ',
    'Новости Сербской православной церкви',
    'Погребение митрополита Иринея',
    'Память митрополита Иринея',
    'Святой король Стефан Дечанский',
    'Преподобный Иустин Челийский',
    'Иустин Попович',
    'Патриарх Сербский Павел',
    'Православный богословский факультет',
    'Православное богословие',
    'Православная вера',
    'Православие',
    'Сербское православие',
    'Православная церковь',
    'Духовное наследие',
    'Православные новости',
    'Церковные новости',
    'Новости Сербии 24 ноября 2026 года',
    'Нови-Сад',
    'Сремская Каменица',
    'Воеводина',
    'Сербия',
    'Вечная память',
    'Исток Инфо Пулт',

    // Međunarodni pojmovi
    'Metropolitan Irinej of Bačka',
    'Irinej Bulovic',
    'Bishop Irinej of Backa',
    'Serbian Orthodox Church',
    'Orthodox Christianity',
    'Diocese of Backa',
    'Novi Sad Serbia',

    // Brend
    'Istok Info Pult',
    'ISTOK INFO PULT',
    'Исток Инфо Пулт',
    'ИСТОК ИНФО ПУЛТ',
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
          'Crno-beli portret arhiepiskopa novosadskog i mitropolita bačkog Irineja Bulovića',
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
    'UPOKOJIO SE MITROPOLIT BAČKI IRINEJ — SRPSKA PRAVOSLAVNA CRKVA OSTALA BEZ ISTAKNUTOG ARHIJEREJA',

  alternativeHeadline:
    'Upokojio se arhiepiskop novosadski i mitropolit bački Irinej Bulović',

  description: article.description,

  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,

      caption:
        'Arhiepiskop novosadski i mitropolit bački Irinej Bulović',
    },
  ],

  datePublished: '2026-11-24',

  dateModified: '2026-11-24',

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

  genre: 'In memoriam',

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
        'Vladika Irinej',
        'Mirko Bulović',
        'Иринеј Буловић',
        'Митрополит бачки Иринеј',
        'Митрополит Бачский Ириней',
        'Ириней Булович',
        'Irinej Bulovic',
        'Metropolitan Irinej of Bačka',
      ],

      description:
        'Arhiepiskop novosadski i mitropolit bački Srpske pravoslavne crkve, pravoslavni bogoslov i dugogodišnji profesor Pravoslavnog bogoslovskog fakulteta u Beogradu.',

      birthDate: '1947-02-11',

      deathDate: '2026-11-24',

      birthPlace: {
        '@type': 'Place',
        name: 'Stanišić',

        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Stanišić',
          addressRegion: 'Vojvodina',
          addressCountry: 'RS',
        },
      },

      deathPlace: {
        '@type': 'Place',
        name: 'Sremska Kamenica',

        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Sremska Kamenica',
          addressRegion: 'Vojvodina',
          addressCountry: 'RS',
        },
      },

      jobTitle:
        'Arhiepiskop novosadski i mitropolit bački',

      affiliation: {
        '@type': 'Organization',
        name: 'Srpska pravoslavna crkva',
        url: 'https://spc.rs/',
      },
    },

    {
      '@type': 'Organization',

      name: 'Srpska pravoslavna crkva',

      alternateName: [
        'SPC',
        'Српска православна црква',
        'СПЦ',
        'Сербская православная церковь',
        'Serbian Orthodox Church',
      ],

      url: 'https://spc.rs/',

      description:
        'Autokefalna pravoslavna crkva kojoj je mitropolit Irinej posvetio svoj život i arhijerejsku službu.',
    },

    {
      '@type': 'Organization',

      name: 'Eparhija bačka',

      alternateName: [
        'Епархија бачка',
        'Бачская епархия',
        'Diocese of Bačka',
      ],

      description:
        'Eparhija Srpske pravoslavne crkve sa sedištem u Novom Sadu, na čijem se čelu mitropolit Irinej nalazio od 1990. godine.',

      parentOrganization: {
        '@type': 'Organization',
        name: 'Srpska pravoslavna crkva',
      },
    },

    {
      '@type': 'Person',

      name: 'Sveti Justin Ćelijski',

      alternateName: [
        'Justin Popović',
        'Свети Јустин Ћелијски',
        'Јустин Поповић',
        'Преподобный Иустин Челийский',
        'Иустин Попович',
      ],

      description:
        'Srpski pravoslavni svetitelj, bogoslov i duhovni otac mitropolita Irineja Bulovića.',
    },

    {
      '@type': 'Person',

      name: 'Patrijarh Pavle',

      alternateName: [
        'Патријарх Павле',
        'Патриарх Сербский Павел',
        'Patriarch Pavle of Serbia',
      ],

      description:
        'Patrijarh Srpske pravoslavne crkve koji je kao episkop raško-prizrenski rukopoložio Irineja Bulovića u svešteničke činove.',
    },

    {
      '@type': 'Person',

      name: 'Sveti kralj Stefan Dečanski',

      alternateName: [
        'Свети краљ Стефан Дечански',
        'Святой король Стефан Дечанский',
        'Stefan Uroš III Dečanski',
      ],

      description:
        'Srpski srednjovekovni kralj i pravoslavni svetitelj čiji se praznik obeležava 24. novembra po građanskom kalendaru.',
    },

    {
      '@type': 'EducationalOrganization',

      name: 'Pravoslavni bogoslovski fakultet Univerziteta u Beogradu',

      alternateName: [
        'Православни богословски факултет Универзитета у Београду',
        'Православный богословский факультет Белградского университета',
      ],

      description:
        'Visokoškolska ustanova na kojoj je mitropolit Irinej bio dugogodišnji profesor i dekan.',
    },

    {
      '@type': 'Thing',

      name: 'Pravoslavlje',

      alternateName: [
        'Православље',
        'Православие',
        'Orthodox Christianity',
      ],

      description:
        'Pravoslavna hrišćanska vera, duhovnost i crkveno predanje.',
    },

    {
      '@type': 'Thing',

      name: 'Pravoslavno bogoslovlje',

      alternateName: [
        'Православно богословље',
        'Православное богословие',
        'Orthodox theology',
      ],

      description:
        'Bogoslovsko obrazovanje, proučavanje pravoslavne vere i očuvanje crkvenog predanja.',
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

    {
      '@type': 'Place',

      name: 'Vojvodina',

      alternateName: [
        'Војводина',
        'Воеводина',
      ],

      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Vojvodina',
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


  // =====================================
  // STRUCTURED DATA KEYWORDS
  // =====================================

  keywords: [
    'Mitropolit bački Irinej',
    'Irinej Bulović',
    'Upokojio se mitropolit Irinej',
    'Mitropolit Irinej 1947–2026',
    'Vladika Irinej',
    'Arhiepiskop novosadski',
    'Srpska pravoslavna crkva',
    'Eparhija bačka',
    'Sveti Justin Ćelijski',
    'Patrijarh Pavle',
    'Sveti kralj Stefan Dečanski',
    'Pravoslavni bogoslovski fakultet',
    'Pravoslavlje',
    'Pravoslavno bogoslovlje',
    'Duhovno nasleđe',
    'Crkvene vesti',
    'Novi Sad',
    'Vojvodina',
    'Srbija',
    'In memoriam',
    'Večan mu spomen',
    'Митрополит бачки Иринеј',
    'Иринеј Буловић',
    'Српска православна црква',
    'Епархија бачка',
    'Православље',
    'Вечан му спомен',
    'Митрополит Бачский Ириней',
    'Ириней Булович',
    'Сербская православная церковь',
    'Бачская епархия',
    'Православие',
    'Вечная память',
    'Istok Info Pult',
    'Исток Инфо Пулт',
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