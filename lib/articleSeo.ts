import type { Metadata } from 'next'

const SITE_URL = 'https://www.istokinfopult.rs'
const SITE_NAME = 'Исток Инфо Пулт'

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
  const url = `${SITE_URL}/vesti/${encodeURIComponent(article.slug)}`
  const imageUrl = article.image ? new URL(article.image, SITE_URL).toString() : undefined
  const authorName = article.author || SITE_NAME
  const authorUrl = article.authorUrl || (article.author ? undefined : SITE_URL)

  const metadata: Metadata = {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article', locale: 'sr_RS', siteName: SITE_NAME,
      url, title: article.title, description: article.description,
      ...(article.publishedAt ? { publishedTime: article.publishedAt } : {}),
      ...(article.modifiedAt ? { modifiedTime: article.modifiedAt } : {}),
      ...(imageUrl ? { images: [{ url: imageUrl, alt: article.title }] } : {}),
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title: article.title, description: article.description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    ...(imageUrl ? { image: [imageUrl] } : {}),
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
    ...(article.modifiedAt ? { dateModified: article.modifiedAt } : {}),
    inLanguage: 'sr-RS',
    author: {
      '@type': 'Organization', name: authorName,
      ...(authorUrl ? { url: authorUrl } : {}),
    },
    publisher: {
      '@type': 'Organization', name: SITE_NAME, url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/static/images/logo.jpg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
  }
  return { metadata, structuredData }
}
