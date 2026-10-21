
import type { Metadata } from 'next'

const SITE_URL = 'https://www.istokinfopult.rs'
const SITE_NAME = 'Исток Инфо Пулт'
const DEFAULT_AUTHOR = SITE_NAME

export type ArticleSeoData = {
  slug: string
  title: string
  description: string
  image: string
  publishedAt: string
  modifiedAt?: string
  author?: string
}

export function createArticleSeo(article: ArticleSeoData) {
  const url = `${SITE_URL}/vesti/${article.slug}`

  const imageUrl = new URL(article.image, SITE_URL).toString()

  const author = article.author || DEFAULT_AUTHOR

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
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt,
      images: [
        {
          url: imageUrl,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [imageUrl],
    },
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    image: [imageUrl],
    datePublished: article.publishedAt,
    ...(article.modifiedAt
      ? { dateModified: article.modifiedAt }
      : {}),
    inLanguage: 'sr-RS',
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/static/images/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return { metadata, structuredData }
}
