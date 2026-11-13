import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'
const SLUG = 'duhovni-razgovori-sa-ocem-simeonom'
const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`
const IMAGE_PATH = '/static/images/otac-simeon.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

const YOUTUBE_VIDEO_ID = '1jtLoQ7-Z5s'
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`
const YOUTUBE_THUMBNAIL = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,
  title:
    'Duhovni razgovor sa ocem Simeonom Rukumijskim: Reči koje svaki pravoslavni hrišćanin mora da čuje | Duhovni razgovori 001',
  description:
    'U prvoj epizodi serijala Duhovni razgovori Nebojša Živojinović razgovara sa arhimandritom ocem Simeonom u manastiru Rukumija o pravoslavnoj veri, postu, pričešću, Blagodatnom ognju, Časnom krstu i duhovnom miru.',
  image: IMAGE_PATH,
  publishedAt: '2026-11-13',
  modifiedAt: '2026-11-13',
  author: 'Istok Info Pult',
}

// =====================================
// METADATA
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,

  keywords: [
    'Duhovni razgovori',
    'Духовни разговори',
    'Духовные беседы',
    'Duhovni razgovori 001',
    'otac Simeon Rukumijski',
    'Отац Симеон Рукумијски',
    'Отец Симеон Рукумийский',
    'arhimandrit Simeon',
    'архимандрит Симеон',
    'manastir Rukumija',
    'манастир Рукумија',
    'монастырь Рукумия',
    'Nebojša Živojinović',
    'Небојша Живојиновић',
    'pravoslavlje',
    'pravoslavna vera',
    'pravoslavno hrišćanstvo',
    'православље',
    'православная вера',
    'post u pravoslavlju',
    'priprema za pričešće',
    'Sveta tajna pričešća',
    'Blagodatni oganj',
    'Благодатни огањ',
    'Благодатный огонь',
    'Časni krst',
    'Часни крст',
    'duhovni život',
    'duhovni mir',
    'porodica i vera',
    'Duh Sveti',
    'православные беседы',
    'pravoslavni podkast',
    'duhovni podkast',
    'Istok Info Pult',
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
    images: [
      {
        url: IMAGE_URL,
        width: 1600,
        height: 900,
        alt: 'Otac Simeon Rukumijski — Duhovni razgovori, epizoda 001',
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
// NEWS ARTICLE JSON-LD
// =====================================

const newsArticleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  '@id': `${ARTICLE_URL}#article`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
  },
  headline: article.title,
  description: article.description,
  image: [IMAGE_URL],
  datePublished: article.publishedAt,
  dateModified: article.modifiedAt,
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
  inLanguage: ['sr', 'ru'],
  articleSection: 'Duhovni razgovori',
  about: [
    {
      '@type': 'Person',
      name: 'Otac Simeon Rukumijski',
      alternateName: ['Отац Симеон Рукумијски', 'Отец Симеон Рукумийский'],
    },
    {
      '@type': 'Person',
      name: 'Nebojša Živojinović',
      alternateName: ['Небојша Живојиновић'],
    },
    {
      '@type': 'Place',
      name: 'Manastir Rukumija',
    },
    { '@type': 'Thing', name: 'Pravoslavna vera' },
    { '@type': 'Thing', name: 'Post i priprema za Sveto pričešće' },
    { '@type': 'Thing', name: 'Blagodatni oganj' },
    { '@type': 'Thing', name: 'Časni krst' },
    { '@type': 'Thing', name: 'Duhovni mir i porodica' },
  ],
  keywords: [
    'Duhovni razgovori',
    'Otac Simeon Rukumijski',
    'Manastir Rukumija',
    'Pravoslavna vera',
    'Sveto pričešće',
    'Blagodatni oganj',
    'Časni krst',
    'Duh Sveti',
    'Istok Info Pult',
  ],
  isAccessibleForFree: true,
  url: ARTICLE_URL,
  video: {
    '@id': `${ARTICLE_URL}#video`,
  },
}

// =====================================
// VIDEO OBJECT JSON-LD
// =====================================

const videoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  '@id': `${ARTICLE_URL}#video`,
  name:
    'Duhovni razgovor sa ocem Simeonom Rukumijskim | Duhovni razgovori 001',
  description: article.description,
  thumbnailUrl: [IMAGE_URL, YOUTUBE_THUMBNAIL],
  // Dodati uploadDate tek nakon provere stvarnog datuma objave videa na YouTube-u.
  contentUrl: YOUTUBE_URL,
  embedUrl: `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,
  inLanguage: 'sr',
  isAccessibleForFree: true,
  publisher: {
    '@type': 'Organization',
    name: 'Istok Info Pult',
    url: SITE_URL,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
  },
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
