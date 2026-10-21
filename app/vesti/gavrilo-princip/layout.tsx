
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const SITE_URL = 'https://www.istokinfopult.rs'
const ARTICLE_PATH = '/vesti/gavrilo-princip'

const ARTICLE_URL = `${SITE_URL}${ARTICLE_PATH}`
const IMAGE_URL = `${SITE_URL}/static/images/gavrilo-princip.jpg`

const TITLE =
  'Гаврило Принцип – метак који је променио ток историје'

const DESCRIPTION =
  'Гаврило Принцип, Сарајевски атентат 1914. године и догађаји који су претходили Првом светском рату. Прочитајте историјску причу на Исток Инфо Пулту.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,

  applicationName: 'Исток Инфо Пулт',

  keywords: [
    'Гаврило Принцип',
    'Gavrilo Princip',
    'Сарајевски атентат',
    'Sarajevski atentat',
    'Млада Босна',
    'Први светски рат',
    '1914',
    'српска историја',
  ],

  alternates: {
    canonical: ARTICLE_URL,
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
    url: ARTICLE_URL,
    siteName: 'Исток Инфо Пулт',

    title: TITLE,
    description: DESCRIPTION,

    publishedTime: '2026-07-25',

    authors: ['Исток Инфо Пулт'],

    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Гаврило Принцип',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE_URL],
  },
}

export default function GavriloPrincipLayout({
  children,
}: {
  children: ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',

    headline: TITLE,
    description: DESCRIPTION,

    image: [IMAGE_URL],

    datePublished: '2026-07-25',

    inLanguage: 'sr-RS',

    author: {
      '@type': 'Organization',
      name: 'Исток Инфо Пулт',
      url: SITE_URL,
    },

    publisher: {
      '@type': 'Organization',
      name: 'Исток Инфо Пулт',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/static/images/logo.jpg`,
      },
    },

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': ARTICLE_URL,
    },

    url: ARTICLE_URL,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />
      {children}
    </>
  )
}
