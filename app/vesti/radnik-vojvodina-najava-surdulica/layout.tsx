import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'
const SLUG = 'radnik-vojvodina-najava-surdulica'
const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`
const IMAGE_PATH = '/static/images/radnik-vojvodina-najava-surdulica.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

// =====================================
// ARTICLE SEO
// =====================================
const article = {
  slug: SLUG,
  title: 'Radnik – Vojvodina u Surdulici: najava 17. kola Superlige | Istok Info Pult',
  description:
    'Vojvodina, druga na tabeli sa 35 bodova, u subotu 28. novembra od 14 časova gostuje Radniku na Gradskom stadionu u Surdulici u 17. kolu Superlige Srbije.',
  image: IMAGE_PATH,
  publishedAt: '2026-11-27',
  modifiedAt: '2026-11-27',
  author: 'Istok Info Pult',
}

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,
  keywords: [
    // Srpski – latinica
    'Radnik Vojvodina',
    'Radnik Surdulica',
    'FK Vojvodina',
    'Surdulica',
    'Superliga Srbije',
    '17. kolo Superlige',
    'Slobodan Medojević',
    'najava utakmice',
    // Srpski – ćirilica
    'Радник Војводина',
    'Радник Сурдулица',
    'ФК Војводина',
    'Сурдулица',
    'Суперлига Србије',
    'Слободан Медојевић',
    // Ruski
    'Радник Войводина',
    'Радник Сурдулица',
    'ФК Войводина',
    'Сурдулица',
    'Суперлига Сербии',
    'Слободан Медоевич',
    // Izdavač
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
        alt: 'AI ilustracija: fudbalski stadion u Surdulici pred utakmicu',
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
// NEWSARTICLE JSON-LD
// =====================================
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  '@id': `${ARTICLE_URL}#article`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
  },
  headline: 'Vojvodina gostuje Radniku u Surdulici: „Pravi test je pred nama“',
  alternativeHeadline: 'Radnik – Vojvodina, 17. kolo Superlige Srbije, subota 28. novembar 2026. u 14 časova',
  description: article.description,
  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,
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
  genre: 'Najava',
  isAccessibleForFree: true,
  about: [
    {
      '@type': 'SportsEvent',
      name: 'Radnik – Vojvodina, 17. kolo Superlige Srbije',
      alternateName: '«Радник» — «Войводина», 17-й тур Суперлиги Сербии',
      startDate: '2026-11-28T14:00:00+01:00',
      location: {
        '@type': 'Place',
        name: 'Gradski stadion, Surdulica',
      },
      homeTeam: {
        '@type': 'SportsTeam',
        name: 'FK Radnik Surdulica',
      },
      awayTeam: {
        '@type': 'SportsTeam',
        name: 'FK Vojvodina',
      },
    },
    {
      '@type': 'Person',
      name: 'Slobodan Medojević',
      alternateName: ['Слободан Медојевић', 'Слободан Медоевич'],
    },
  ],
  keywords: [
    'Radnik Vojvodina',
    'Surdulica',
    'Superliga Srbije',
    'FK Vojvodina',
    'Slobodan Medojević',
    'Istok Info Pult',
  ],
  url: ARTICLE_URL,
}

// =====================================
// LAYOUT
// =====================================
export default function Layout({ children }: { children: ReactNode }) {
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
