import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const siteUrl = 'https://istokinfopult.rs'
const articlePath = '/vesti/razgovori-u-istoku-002'
const articleUrl = `${siteUrl}${articlePath}`
const imageUrl = `${siteUrl}/static/images/razgovori-u-istoku-002.jpeg`
const videoUrl = 'https://www.youtube.com/watch?v=ZsMvT9v3FgU'
const videoEmbedUrl = 'https://www.youtube.com/embed/ZsMvT9v3FgU'
const publishedAt = '2026-10-21T00:00:00+02:00'

const title =
  'Razgovori u Istoku 002 – Karlo Dulović i Milan Glamočanin | Istok Info Pult'
const description =
  'Karlo Dulović i Milan Glamočanin govore o obaveštajnoj operaciji u Švajcarskoj 1987. godine, tajnim dokumentima i svedočenjima o raspadu Jugoslavije.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    type: 'article',
    url: articleUrl,
    siteName: 'Istok Info Pult',
    locale: 'sr_RS',
    title,
    description,
    publishedTime: publishedAt,
    images: [
      {
        url: imageUrl,
        alt: 'Razgovori u Istoku 002 – Karlo Dulović i Milan Glamočanin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'NewsArticle',
      '@id': `${articleUrl}#article`,
      headline: 'Razgovori u Istoku 002 – Karlo Dulović i Milan Glamočanin',
      description,
      inLanguage: 'sr-RS',
      datePublished: publishedAt,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': articleUrl,
      },
      image: [imageUrl],
      author: {
        '@type': 'Organization',
        name: 'Istok Info Pult',
        url: siteUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Istok Info Pult',
        url: siteUrl,
      },
      video: { '@id': `${articleUrl}#video` },
    },
    {
      '@type': 'VideoObject',
      '@id': `${articleUrl}#video`,
      name: 'Razgovori u Istoku | Epizoda 002 – Karlo Dulović i Milan Glamočanin',
      description,
      thumbnailUrl: [imageUrl],
      uploadDate: publishedAt,
      contentUrl: videoUrl,
      embedUrl: videoEmbedUrl,
      inLanguage: 'sr-RS',
      publisher: {
        '@type': 'Organization',
        name: 'Istok Info Pult',
        url: siteUrl,
      },
    },
  ],
}

export default function RazgovoriUIstoku002Layout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  )
}
