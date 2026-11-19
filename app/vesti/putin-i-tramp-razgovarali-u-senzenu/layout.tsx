import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'
const SLUG = 'putin-i-tramp-razgovarali-u-senzenu'
const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`
const IMAGE_PATH = '/static/images/putin-i-tramp-razgovarali-u-senzenu.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

// =====================================
// ARTICLE SEO
// =====================================
const article = {
  slug: SLUG,
  title:
    'Putin i Tramp razgovarali u Šenženu pred samit sa Si Đinpingom | Istok Info Pult',
  description:
    'Vladimir Putin i Donald Tramp razgovarali su 19. novembra u Šenženu na marginama samita APEK-a. Kremlj: susret je bio pripremni, pred trilateralni samit sa Si Đinpingom.',
  image: IMAGE_PATH,
  publishedAt: '2026-11-19',
  modifiedAt: '2026-11-19',
  author: 'Istok Info Pult',
}

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,
  keywords: [
    // Srpski – latinica
    'Putin',
    'Tramp',
    'Putin i Tramp',
    'Si Đinping',
    'Šenžen',
    'samit APEK',
    'APEK 2026',
    'trilateralni samit',
    'Rusija SAD Kina',
    'Jurij Ušakov',
    'Dmitrij Peskov',
    'Ukrajina',
    // Srpski – ćirilica
    'Путин и Трамп',
    'Си Ђинпинг',
    'Шенжен',
    'самит АПЕК',
    'трилатерални самит',
    'Русија САД Кина',
    'Јуриј Ушаков',
    // Ruski
    'Путин',
    'Трамп',
    'Си Цзиньпин',
    'Шэньчжэнь',
    'саммит АТЭС',
    'трехсторонний саммит',
    'Россия США Китай',
    'Юрий Ушаков',
    'Дмитрий Песков',
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
        alt: 'AI ilustracija: pregovarački sto sa zastavama Rusije, SAD i Kine u Šenženu',
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
  headline: 'PUTIN I TRAMP RAZGOVARALI U ŠENŽENU PRED TRILATERALNI SAMIT SA SI ĐINPINGOM',
  alternativeHeadline:
    'Susret predsednika Rusije i SAD na marginama samita APEK-a u Šenženu imao je pripremni karakter pred trilateralni sastanak sa predsednikom Kine',
  description: article.description,
  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,
    },
  ],
  datePublished: '2026-11-19',
  dateModified: '2026-11-19',
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
  about: [
    {
      '@type': 'Person',
      name: 'Vladimir Putin',
      alternateName: ['Владимир Путин'],
    },
    {
      '@type': 'Person',
      name: 'Donald Trump',
      alternateName: ['Donald Tramp', 'Доналд Трамп', 'Дональд Трамп'],
    },
    {
      '@type': 'Person',
      name: 'Xi Jinping',
      alternateName: ['Si Đinping', 'Си Ђинпинг', 'Си Цзиньпин'],
    },
    {
      '@type': 'Event',
      name: '33. samit APEK u Šenženu',
      alternateName: '33-й саммит АТЭС в Шэньчжэне',
      location: {
        '@type': 'Place',
        name: 'Šenžen, Kina',
      },
    },
  ],
  keywords: [
    'Putin',
    'Tramp',
    'Si Đinping',
    'Šenžen',
    'APEK',
    'Trilateralni samit',
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
