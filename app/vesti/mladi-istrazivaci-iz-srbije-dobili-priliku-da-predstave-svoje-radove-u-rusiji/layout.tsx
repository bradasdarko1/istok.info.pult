
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG =
  'mladi-istrazivaci-iz-srbije-dobili-priliku-da-predstave-svoje-radove-u-rusiji'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_URL =
  `${SITE_URL}/static/images/mladi-istrazivaci.jpg`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Mladi istraživači iz Srbije – međunarodni naučni konkurs u Rusiji 2026 | Istok Info Pult',

  description:
    'Otvoren međunarodni naučni konkurs za mlade politikologe i istraživače iz Srbije do 35 godina. Prijave od 10. novembra do 10. decembra 2026. godine. Saznajte uslove učešća.',

  image:
    '/static/images/mladi-istrazivaci.jpg',

  publishedAt:
    '2026-11-04T12:00:00+01:00',

  author:
    'Istok Info Pult',
}

// =====================================
// POSTOJEĆI ARTICLE SEO
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = seo.metadata

// =====================================
// NEWS ARTICLE STRUCTURED DATA
// =====================================

const newsSchema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',

  headline:
    'Mladi istraživači iz Srbije dobili priliku da predstave svoje radove u Rusiji – otvoren međunarodni naučni konkurs',

  description: article.description,

  image: [
    IMAGE_URL,
  ],

  datePublished:
    article.publishedAt,

  dateModified:
    article.publishedAt,

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

  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
  },

  url: ARTICLE_URL,

  inLanguage: 'sr',

  articleSection: 'Nauka i obrazovanje',

  keywords: [
    'mladi istraživači',
    'mladi politikolozi',
    'naučni konkurs 2026',
    'Rusija',
    'Srbija',
    'Centar za geostrateške studije',
    'Dragana Trifković',
    'Russian Political Science',
    'međunarodna naučna saradnja',
  ],

  isAccessibleForFree: true,
}

// =====================================
// LAYOUT
// =====================================

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsSchema).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />

      {children}
    </>
  )
}
