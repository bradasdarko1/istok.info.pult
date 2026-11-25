import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'
const SLUG = 'razgovori-u-istoku-006-mile-bosnic-drugi-deo'
const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`
const IMAGE_PATH = '/static/images/mile-bosnic-drugi-deo.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`
const YOUTUBE_VIDEO_ID = 'D_FGX9S51II'
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`
const YOUTUBE_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`
const YOUTUBE_THUMBNAIL = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`
const PUBLISHED_AT = '2026-11-25'
// Proveriti stvarni datum objave videa na YouTube-u.
const VIDEO_UPLOAD_DATE = '2026-11-22'

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,
  title: 'Mile Bosnić: Razmere genocida nad Srbima u NDH i kultura sećanja | Razgovori u Istoku 006 – drugi deo',
  description: 'U drugom delu razgovora sa Miletom Bosnićem govorimo o razmerama genocida nad Srbima u NDH, broju žrtava, Jasenovcu, posleratnim komisijama i kulturi sećanja.',
  image: IMAGE_PATH,
  publishedAt: PUBLISHED_AT,
  modifiedAt: PUBLISHED_AT,
  author: 'Istok Info Pult',
}

const keywords = [
  'Mile Bosnić', 'Mile Bosnic', 'Миле Боснић', 'Миле Боснич',
  'Mile Bosnić intervju', 'Mile Bosnić podkast', 'Mile Bosnić drugi deo',
  'Миле Боснић други део', 'Миле Боснич вторая часть',
  'Razgovori u Istoku', 'Razgovori u Istoku 006', 'Razgovori u Istoku 006 drugi deo',
  'Разговори у Истоку', 'Разговоры в Истоке', 'Исток Инфо Пулт', 'Istok Info Pult',
  'genocid nad Srbima u NDH', 'геноцид над Србима у НДХ', 'геноцид сербов в НГХ',
  'Nezavisna Država Hrvatska', 'Независна Држава Хрватска', 'Независимое государство Хорватия',
  'NDH', 'НДХ', 'НГХ', 'Jasenovac', 'Јасеновац', 'Ясеновац',
  'broj žrtava NDH', 'број жртава НДХ', 'число жертв НГХ',
  'popis žrtava', 'попис жртава', 'учёт жертв',
  'posleratne komisije', 'послератне комисије', 'послевоенные комиссии',
  'bratstvo i jedinstvo', 'братство и јединство', 'братство и единство',
  'kultura sećanja', 'култура сећања', 'культура памяти',
  'istorijska istina', 'историјска истина', 'историческая правда',
  'Drugi svetski rat', 'Други светски рат', 'Вторая мировая война',
  'stradanje srpskog naroda', 'ustaški zločini', 'istorijski podkast',
]

// =====================================
// METADATA
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,
  keywords,
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
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    ...seo.metadata.openGraph,
    url: ARTICLE_URL,
    type: 'article',
    title: article.title,
    description: article.description,
    images: [{
      url: IMAGE_URL,
      width: 1600,
      height: 900,
      alt: 'Mile Bosnić — Razgovori u Istoku, epizoda 006, drugi deo',
    }],
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

const newsArticleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  '@id': `${ARTICLE_URL}#article`,
  mainEntityOfPage: { '@type': 'WebPage', '@id': ARTICLE_URL },
  headline: article.title,
  description: article.description,
  image: [IMAGE_URL],
  datePublished: PUBLISHED_AT,
  dateModified: PUBLISHED_AT,
  author: { '@type': 'Organization', name: 'Istok Info Pult', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'Istok Info Pult',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/static/images/logo.jpg` },
  },
  inLanguage: ['sr', 'ru'],
  articleSection: 'Razgovori u Istoku',
  about: [
    {
      '@type': 'Person',
      name: 'Mile Bosnić',
      alternateName: ['Миле Боснић', 'Миле Боснич', 'Mile Bosnic'],
      description: 'Politikolog, predsednik Pokreta Srba Krajišnika i nekadašnji ministar u Vladi Republike Srpske Krajine.',
    },
    { '@type': 'Place', name: 'Nezavisna Država Hrvatska', alternateName: ['NDH', 'НДХ', 'НГХ'] },
    { '@type': 'Thing', name: 'Genocid nad Srbima u NDH' },
    { '@type': 'Place', name: 'Jasenovac' },
    { '@type': 'Event', name: 'Drugi svetski rat' },
    { '@type': 'Thing', name: 'Utvrđivanje broja i identiteta žrtava' },
    { '@type': 'Thing', name: 'Rad posleratnih komisija' },
    { '@type': 'Thing', name: 'Politika bratstva i jedinstva' },
    { '@type': 'Thing', name: 'Istorijsko pamćenje i kultura sećanja' },
  ],
  keywords,
  isAccessibleForFree: true,
  url: ARTICLE_URL,
  video: { '@id': `${ARTICLE_URL}#video` },
}

// =====================================
// VIDEO OBJECT JSON-LD
// =====================================

const videoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  '@id': `${ARTICLE_URL}#video`,
  name: 'Mile Bosnić — Razmere genocida nad Srbima u NDH i kultura sećanja | Razgovori u Istoku 006 – drugi deo',
  description: article.description,
  thumbnailUrl: [IMAGE_URL, YOUTUBE_THUMBNAIL],
  uploadDate: VIDEO_UPLOAD_DATE,
  url: YOUTUBE_URL,
  embedUrl: YOUTUBE_EMBED_URL,
  inLanguage: 'sr',
  isAccessibleForFree: true,
  publisher: { '@type': 'Organization', name: 'Istok Info Pult', url: SITE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': ARTICLE_URL },
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
          __html: JSON.stringify(newsArticleJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  )
}
