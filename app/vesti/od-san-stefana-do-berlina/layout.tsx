import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'
const SLUG = 'od-san-stefana-do-berlina'
const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`
const IMAGE_PATH = '/static/images/od-san-stefana-do-berlina.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

// =====================================
// ARTICLE SEO
// =====================================
const article = {
  slug: SLUG,
  title:
    'Od San Stefana do Berlina – Rusija, Srbija i granice Balkana 1878. | Istok Info Pult',
  description:
    'Sanstefanski mir, Berlinski kongres i nezavisnost Srbije 1878. godine: kako su rat Rusije i Osmanskog carstva i interesi velikih sila oblikovali granice Balkana.',
  image: IMAGE_PATH,
  publishedAt: '2026-11-18',
  modifiedAt: '2026-11-18',
  author: 'Istok Info Pult',
}

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,
  keywords: [
    // Srpski – latinica
    'Sanstefanski mir',
    'San Stefano 1878',
    'Berlinski kongres',
    'Berlinski kongres 1878',
    'Rusko-osmanski rat 1877–1878',
    'Rusko-turski rat 1877–1878',
    'nezavisnost Srbije 1878',
    'međunarodno priznanje Srbije',
    'granice Balkana',
    'Srbija i Rusija kroz istoriju',
    'istorija Srbije i Rusije',
    'Niš Pirot Vranje Toplica 1878',
    'velike sile i Balkan',
    'Otto fon Bizmark',
    // Srpski – ćirilica
    'Санстефански мир',
    'Берлински конгрес',
    'Берлински конгрес 1878',
    'Руско-турски рат 1877–1878',
    'независност Србије 1878',
    'границе Балкана',
    'Србија и Русија кроз историју',
    'историја Србије и Русије',
    'Ниш Пирот Врање Топлица',
    'велике силе и Балкан',
    // Ruski
    'Сан-Стефанский мир',
    'Сан-Стефанский мирный договор 1878',
    'Берлинский конгресс 1878',
    'Русско-турецкая война 1877–1878',
    'независимость Сербии 1878',
    'Россия и Сербия история',
    'границы Балкан',
    'великие державы и Балканы',
    'Отто фон Бисмарк',
    'Сербия и Россия сквозь историю',
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
        alt: 'Od San Stefana do Berlina – Rusija, Srbija i granice Balkana 1878. godine',
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
  headline: 'OD SAN STEFANA DO BERLINA — RUSIJA, SRBIJA I GRANICE BALKANA',
  alternativeHeadline:
    'Sanstefanski mir, Berlinski kongres i međunarodno priznanje nezavisnosti Srbije 1878. godine',
  description: article.description,
  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,
    },
  ],
  datePublished: '2026-11-18T11:00:00+01:00',
  dateModified: '2026-11-18T11:00:00+01:00',
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
      name: 'Rusko-turski rat 1877–1878',
      alternateName: 'Русско-турецкая война 1877–1878',
      startDate: '1877-04-24',
      endDate: '1878-03-03',
    },
    {
      '@type': 'Event',
      name: 'Potpisivanje Sanstefanskog mira',
      alternateName: 'Подписание Сан-Стефанского мирного договора',
      startDate: '1878-03-03',
      location: {
        '@type': 'Place',
        name: 'San Stefano (današnji Yeşilköy, Istanbul)',
      },
    },
    {
      '@type': 'Event',
      name: 'Berlinski kongres',
      alternateName: 'Берлинский конгресс',
      startDate: '1878-06-13',
      endDate: '1878-07-13',
      location: {
        '@type': 'Place',
        name: 'Berlin',
      },
    },
    {
      '@type': 'Thing',
      name: 'Međunarodno priznanje nezavisnosti Srbije 1878. godine',
      alternateName: 'Международное признание независимости Сербии в 1878 году',
    },
    {
      '@type': 'Person',
      name: 'Otto von Bismarck',
      alternateName: ['Oto fon Bizmark', 'Отто фон Бисмарк'],
    },
    {
      '@type': 'Thing',
      name: 'Srbija i Rusija kroz istoriju',
      alternateName: 'Сербия и Россия сквозь историю',
    },
  ],
  keywords: [
    'Sanstefanski mir',
    'Berlinski kongres 1878',
    'Rusko-turski rat 1877–1878',
    'Nezavisnost Srbije',
    'Granice Balkana',
    'Srbija i Rusija kroz istoriju',
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
