
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

export function createArticleSeo(article: ArticleSeoData) {
  const url = `${SITE_URL}/vesti/${encodeURIComponent(
    article.slug
  )}`

  const imageUrl = article.image
    ? new URL(article.image, SITE_URL).toString()
    : undefined

  const author = article.author
    ? {
        '@type': 'Person',
        name: article.author,
        ...(article.authorUrl
          ? { url: article.authorUrl }
          : {}),
      }
    : {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
      }

  const metadata: Metadata = {
    title: article.title,

    description: article.description,

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
      },
    },

    openGraph: {
      type: 'article',
      locale: 'sr_RS',
      siteName: SITE_NAME,
      url,
      title: article.title,
      description: article.description,

      ...(article.publishedAt
        ? { publishedTime: article.publishedAt }
        : {}),

      ...(article.modifiedAt
        ? { modifiedTime: article.modifiedAt }
        : {}),

      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                alt: article.title,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: imageUrl
        ? 'summary_large_image'
        : 'summary',

      title: article.title,
      description: article.description,

      ...(imageUrl
        ? { images: [imageUrl] }
        : {}),
    },
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',

    '@id': `${url}#article`,

    headline: article.title,
    description: article.description,

    url,

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },

    inLanguage: 'sr-RS',

    ...(imageUrl
      ? { image: [imageUrl] }
      : {}),

    ...(article.publishedAt
      ? { datePublished: article.publishedAt }
      : {}),

    ...(article.modifiedAt
      ? { dateModified: article.modifiedAt }
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
  }

  return {
    metadata,
    structuredData,
  }
}
