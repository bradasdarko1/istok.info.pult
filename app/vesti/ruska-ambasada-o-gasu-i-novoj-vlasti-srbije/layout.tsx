import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'
const SLUG = 'ruska-ambasada-o-gasu-i-novoj-vlasti-srbije'
const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`
const IMAGE_PATH = '/static/images/ruska-ambasada-o-gasu-i-novoj-vlasti-srbije.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

// =====================================
// ARTICLE SEO
// =====================================
const article = {
  slug: SLUG,
  title:
    'Ruska ambasada: razgovori o gasu posle formiranja nove vlasti | Istok Info Pult',
  description:
    'Ambasada Rusije: o isporukama gasa Srbiji konkretno posle formiranja nove vlasti. Aranžman ističe 31. decembra, a Studentska lista traži dugoročni ugovor.',
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
    'ruski gas Srbija',
    'gasni ugovor Srbija Rusija',
    'isporuke gasa Srbiji',
    'dugoročni ugovor o gasu',
    'Ambasada Rusije u Beogradu',
    'Aleksandar Bocan-Harčenko',
    'Studentska lista',
    'Dejan Šoškić',
    'Miodrag Krmar',
    'nova vlada Srbije',
    'Marija Zaharova gas Srbija',
    'Sergej Lavrov Srbija gas',
    'Srbijagas',
    'srpsko-ruski odnosi',
    // Srpski – ćirilica
    'руски гас Србија',
    'гасни уговор Србија Русија',
    'испоруке гаса Србији',
    'Амбасада Русије у Београду',
    'Александар Боцан-Харченко',
    'Студентска листа',
    'нова влада Србије',
    'српско-руски односи',
    // Ruski
    'российский газ Сербия',
    'газовый контракт Сербия',
    'поставки газа в Сербию',
    'посольство России в Белграде',
    'Александр Боцан-Харченко',
    'Студенческий список',
    'новое правительство Сербии',
    'российско-сербские отношения',
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
        alt: 'AI ilustracija: gasovod i industrijsko postrojenje sa zastavama Srbije i Rusije',
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
  headline: 'RUSKA AMBASADA: KONKRETNI RAZGOVORI O GASU POSLE FORMIRANJA NOVE VLASTI',
  alternativeHeadline:
    'Ambasada Rusije u Beogradu: konkretna pitanja, uključujući isporuke gasa, biće razmatrana posle formiranja organa vlasti u Srbiji',
  description: article.description,
  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,
    },
  ],
  // Vreme objave nije potvrđeno, zato se navodi samo datum.
  datePublished: '2026-11-18',
  dateModified: '2026-11-18',
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
      '@type': 'Organization',
      name: 'Ambasada Ruske Federacije u Srbiji',
      alternateName: 'Посольство России в Сербии',
    },
    {
      '@type': 'Person',
      name: 'Aleksandar Bocan-Harčenko',
      alternateName: ['Александар Боцан-Харченко', 'Александр Боцан-Харченко'],
    },
    {
      '@type': 'Organization',
      name: 'Studentska lista',
      alternateName: 'Студенческий список',
    },
    {
      '@type': 'Thing',
      name: 'Isporuke ruskog gasa Srbiji',
      alternateName: 'Поставки российского газа в Сербию',
    },
  ],
  keywords: [
    'Ruski gas',
    'Gasni ugovor',
    'Ambasada Rusije',
    'Studentska lista',
    'Nova vlada Srbije',
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
