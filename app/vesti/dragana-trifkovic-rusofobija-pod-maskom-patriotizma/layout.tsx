import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'
const SLUG = 'dragana-trifkovic-rusofobija-pod-maskom-patriotizma'
const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`
const IMAGE_PATH = '/static/images/dragana-trifkovic-rusofobija-pod-maskom-patriotizma.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`
const PUBLISHED_AT = '2026-11-19'

// =====================================
// ARTICLE SEO
// =====================================
const article = {
  slug: SLUG,
  title:
    'Dragana Trifković: Rusofobija pod maskom patriotizma – Ko pokušava da okrene Srbe protiv Rusije? | Istok Info Pult',
  description:
    'Dragana Trifković za Istok Info Pult analizira antiruske narative u Srbiji, finansiranje istraživanja ruskog uticaja, medije i pitanje srpskog suvereniteta.',
  image: IMAGE_PATH,
  publishedAt: PUBLISHED_AT,
  modifiedAt: PUBLISHED_AT,
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
    'Dragana Trifković',
    'Dragana Trifkovic',
    'Dragana Trifković rusofobija',
    'Centar za geostrateške studije',
    'rusofobija u Srbiji',
    'rusofobija pod maskom patriotizma',
    'Rusija i Srbija',
    'srpsko-ruski odnosi',
    'Rusi u Srbiji',
    'ruski državljani u Srbiji',
    'antiruski narativi',
    'ruski uticaj na Balkanu',
    'medijski narativi',
    'finansiranje istraživanja',
    'javno mnjenje u Srbiji',
    'srpski suverenitet',
    'spoljna politika Srbije',
    'Beogradski centar za bezbednosnu politiku',
    'MEDIWEB',
    'Institute for Strategic Dialogue',
    'Srbija Global',
    'Aleksandar Šargić',
    'Istok Info Pult',
    // Srpska ćirilica
    'Драгана Трифковић',
    'Центар за геостратешке студије',
    'русофобија у Србији',
    'русофобија под маском патриотизма',
    'Русија и Србија',
    'српско-руски односи',
    'Руси у Србији',
    'руски држављани у Србији',
    'антируски наративи',
    'медијски наративи',
    'јавно мњење',
    'суверенитет Србије',
    'спољна политика Србије',
    'Исток Инфо Пулт',
    // Ruski jezik
    'Драгана Трифкович',
    'Центр геостратегических исследований',
    'русофобия в Сербии',
    'русофобия под маской патриотизма',
    'Россия и Сербия',
    'сербско-российские отношения',
    'русские в Сербии',
    'российские граждане в Сербии',
    'антироссийские нарративы',
    'российское влияние на Балканах',
    'общественное мнение Сербии',
    'суверенитет Сербии',
    'внешняя политика Сербии',
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
        alt: 'Dragana Trifković o rusofobiji, patriotizmu i srpsko-ruskim odnosima',
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
    'DRAGANA TRIFKOVIĆ: RUSOFOBIJA POD MASKOM PATRIOTIZMA — KO POKUŠAVA DA OKRENE SRBE PROTIV RUSIJE?',
  alternativeHeadline:
    'Dragana Trifković o antiruskim narativima, medijima i srpskom suverenitetu',
  description: article.description,
  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,
    },
  ],
  datePublished: PUBLISHED_AT,
  dateModified: PUBLISHED_AT,
  author: {
    '@type': 'Organization',
    name: 'Istok Info Pult',
    url: SITE_URL,
  },
  contributor: {
    '@type': 'Person',
    name: 'Dragana Trifković',
    alternateName: ['Драгана Трифковић', 'Драгана Трифкович'],
    description: 'Generalna direktorka Centra za geostrateške studije; autorka analize na kojoj je vest zasnovana.',
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
  genre: 'Analiza',
  isAccessibleForFree: true,
  about: [
    {
      '@type': 'Person',
      name: 'Dragana Trifković',
      alternateName: ['Драгана Трифковић', 'Драгана Трифкович'],
    },
    {
      '@type': 'Organization',
      name: 'Centar za geostrateške studije',
    },
    {
      '@type': 'Thing',
      name: 'Rusofobija u Srbiji',
      alternateName: ['Русофобија у Србији', 'Русофобия в Сербии'],
    },
    {
      '@type': 'Thing',
      name: 'Srpsko-ruski odnosi',
      alternateName: ['Српско-руски односи', 'Сербско-российские отношения'],
    },
    {
      '@type': 'Thing',
      name: 'Javno mnjenje i medijski narativi',
    },
    {
      '@type': 'Thing',
      name: 'Suverenitet Srbije',
    },
    {
      '@type': 'Country',
      name: 'Serbia',
      alternateName: ['Srbija', 'Србија', 'Сербия'],
    },
    {
      '@type': 'Country',
      name: 'Russia',
      alternateName: ['Rusija', 'Русија', 'Россия'],
    },
  ],
  keywords: [
    'Dragana Trifković',
    'Rusofobija u Srbiji',
    'Rusofobija pod maskom patriotizma',
    'Srpsko-ruski odnosi',
    'Rusi u Srbiji',
    'Ruski državljani u Srbiji',
    'Antiruski narativi',
    'Mediji i javno mnjenje',
    'Suverenitet Srbije',
    'Centar za geostrateške studije',
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
