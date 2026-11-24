import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'
const SLUG = 'zaharova-srbija-ne-uvodi-sankcije-rusiji'
const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`
const IMAGE_PATH = '/static/images/zaharova-srbija-ne-uvodi-sankcije-rusiji.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`
const IMAGE_ALT =
  'AI ilustracija: zastave Srbije i Rusije ispred visoke zgrade u Moskvi u sumrak, sa krugom zvezda EU na nebu'

// =====================================
// ARTICLE SEO
// =====================================
const article = {
  slug: SLUG,
  title: 'Zaharova: EU pokušava da natera Srbiju na antiruski kurs | Istok Info Pult',
  description:
    'Marija Zaharova tvrdi da EU pokušava da „zabije klin“ između Rusije i Srbije. Prema njenim rečima, Srbija ne uvodi sankcije jer ne želi da izda zemlju koja se uvek zalagala za srpske interese.',
  image: IMAGE_PATH,
  publishedAt: '2026-11-20',
  modifiedAt: '2026-11-20',
  author: 'Istok Info Pult',
}

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,
  keywords: [
    // Srpski – latinica
    'Marija Zaharova',
    'Zaharova o Srbiji',
    'Srbija sankcije Rusiji',
    'antiruske sankcije',
    'Srbija i Rusija',
    'EU i Srbija',
    'proširenje EU',
    'MSP Rusije',
    // Srpski – ćirilica
    'Марија Захарова',
    'Захарова о Србији',
    'Србија санкције Русији',
    'антируске санкције',
    'Србија и Русија',
    'ЕУ и Србија',
    // Ruski
    'Мария Захарова',
    'Сербия санкции против России',
    'антироссийские санкции',
    'Россия и Сербия',
    'расширение ЕС',
    'МИД России',
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
        width: 1672,
        height: 941,
        alt: IMAGE_ALT,
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
  headline: 'ZAHAROVA: SRBIJA NE ŽELI DA IZDA ZEMLJU KOJA SE UVEK ZALAGALA ZA NJENE INTERESE',
  alternativeHeadline:
    'Zaharova: EU pokušava da „zabije klin“ između Rusije i Srbije i primora Beograd na antiruski kurs',
  description: article.description,
  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1672,
      height: 941,
    },
  ],
  datePublished: '2026-11-20',
  dateModified: '2026-11-20',
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
  genre: 'Vest',
  isAccessibleForFree: true,
  about: [
    {
      '@type': 'Person',
      name: 'Marija Zaharova',
      alternateName: ['Марија Захарова', 'Мария Захарова'],
    },
    {
      '@type': 'Organization',
      name: 'Ministarstvo spoljnih poslova Rusije',
      alternateName: 'МИД России',
    },
    {
      '@type': 'Country',
      name: 'Srbija',
      alternateName: ['Србија', 'Сербия'],
    },
    {
      '@type': 'Organization',
      name: 'Evropska unija',
      alternateName: ['Европска унија', 'Европейский союз'],
    },
  ],
  keywords: [
    'Marija Zaharova',
    'Srbija sankcije Rusiji',
    'antiruske sankcije',
    'Srbija i Rusija',
    'EU i Srbija',
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
