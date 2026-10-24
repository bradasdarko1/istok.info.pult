
import type { Metadata } from 'next'

const SITE_URL = 'https://www.istokinfopult.rs'
const SITE_NAME = 'Исток Инфо Пулт'

const ORGANIZATION_ID = `${SITE_URL}/#organization`

const PUBLISHER_LOGO =
  `${SITE_URL}/static/images/logo.jpg`

export type ArticleSeoData = {
  slug: string
  title: string
  description: string
  image?: string
  publishedAt?: string
  modifiedAt?: string
  author?: string
  authorUrl?: string
}

// =====================================
// POMOĆNE FUNKCIJE
// =====================================

function getAbsoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString()
}

function getArticleUrl(slug: string): string {
  const safeSlug = slug
    .split('/')
    .filter(Boolean)
    .map(encodeURIComponent)
    .join('/')

  return `${SITE_URL}/vesti/${safeSlug}`
}

// =====================================
// ARTICLE SEO
// =====================================

export function createArticleSeo(article: ArticleSeoData) {
  const title = article.title.trim()
  const description = article.description.trim()

  const url = getArticleUrl(article.slug)

  const imageUrl = article.image
    ? getAbsoluteUrl(article.image)
    : undefined

  // Autor članka, kada je poznat.
  // U suprotnom koristimo organizaciju.
  const author = article.author
    ? {
        '@type': 'Person',
        name: article.author,
        ...(article.authorUrl
          ? {
              url: getAbsoluteUrl(article.authorUrl),
            }
          : {}),
      }
    : {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
      }

  // =====================================
  // NEXT.JS METADATA
  // =====================================

  const metadata: Metadata = {
    title,
    description,

    authors: article.author
      ? [
          {
            name: article.author,
            ...(article.authorUrl
              ? { url: getAbsoluteUrl(article.authorUrl) }
              : {}),
          },
        ]
      : [{ name: SITE_NAME }],

    publisher: SITE_NAME,

    category: 'news',

    alternates: {
      canonical: url,
    },

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

    openGraph: {
      type: 'article',
      locale: 'sr_RS',
      siteName: SITE_NAME,

      url,
      title,
      description,

      ...(article.publishedAt
        ? {
            publishedTime: article.publishedAt,
          }
        : {}),

      ...(article.modifiedAt
        ? {
            modifiedTime: article.modifiedAt,
          }
        : {}),

      authors: [
        article.authorUrl
          ? getAbsoluteUrl(article.authorUrl)
          : SITE_URL,
      ],

      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                alt: title,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: imageUrl
        ? 'summary_large_image'
        : 'summary',

      title,
      description,

      ...(imageUrl
        ? {
            images: [imageUrl],
          }
        : {}),
    },
  }

  // =====================================
  // GOOGLE NEWS ARTICLE JSON-LD
  // =====================================

  const structuredData = {
    '@context': 'https://schema.org',

    '@type': 'NewsArticle',

    '@id': `${url}#article`,

    headline: title,
    description,

    url,

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },

    inLanguage: 'sr-RS',

    ...(imageUrl
      ? {
          image: [imageUrl],
        }
      : {}),

    ...(article.publishedAt
      ? {
          datePublished: article.publishedAt,
        }
      : {}),

    ...(article.modifiedAt
      ? {
          dateModified: article.modifiedAt,
        }
      : {}),

    author,

    publisher: {
      '@type': 'Organization',

      '@id': ORGANIZATION_ID,

      name: SITE_NAME,
      url: SITE_URL,

      logo: {
        '@type': 'ImageObject',
        url: PUBLISHER_LOGO,
      },
    },

    isAccessibleForFree: true,
  }

  return {
    metadata,
    structuredData,
  }
}
