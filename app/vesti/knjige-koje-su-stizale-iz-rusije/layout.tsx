
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const SITE_URL = 'https://www.istokinfopult.rs'

const SLUG = 'knjige-koje-su-stizale-iz-rusije'

const ARTICLE_URL = `${SITE_URL}/vesti/${SLUG}`

const IMAGE_PATH = '/static/images/knjige-koje-su-iz-rusije.jpg'
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`

// =====================================
// ARTICLE SEO
// =====================================

const article = {
  slug: SLUG,

  title:
    'Knjige koje su stizale iz Rusije – kako su ruski učitelji menjali srpsko školstvo | Istok Info Pult',

  description:
    'Kako su ruski učitelji Maksim Suvorov i Emanuil Kozačinski u XVIII veku menjali srpsko školstvo? Istorija ruskih knjiga, Slavjanske škole i prosvete u Sremskim Karlovcima.',

  image: IMAGE_PATH,

  publishedAt: '2026-11-11',

  modifiedAt: '2026-11-11',

  author: 'Istok Info Pult',
}

// =====================================
// METADATA
// =====================================

const seo = createArticleSeo(article)

export const metadata: Metadata = {
  ...seo.metadata,

  keywords: [
    'Knjige koje su stizale iz Rusije',
    'ruski učitelji',
    'ruski učitelji u Srbiji',
    'istorija srpskog školstva',
    'razvoj srpskog školstva',
    'srpsko školstvo u 18. veku',
    'srpsko školstvo u XVIII veku',
    'Rusija i srpsko obrazovanje',
    'ruske knjige u Srbiji',
    'ruske knjige kod Srba',
    'ruski uticaj na srpsku kulturu',
    'Sremski Karlovci',
    'istorija Sremskih Karlovaca',
    'školstvo u Sremskim Karlovcima',
    'Slavjanska škola',
    'Slavjanska škola 1726',
    'Maksim Suvorov',
    'Emanuil Kozačinski',
    'Mojsije Petrović',
    'Petar Veliki',
    'Latinska škola',
    'Karlovačka mitropolija',
    'srpska prosveta',
    'srpska kultura u XVIII veku',
    'Srbi u Habzburškoj monarhiji',
    'ruskoslovenski jezik',
    'slavenosrpski jezik',
    'srpsko-ruske kulturne veze',
    'istorija Srbije i Rusije',
    'Srbija i Rusija kroz istoriju',

    // Srpska ćirilica
    'Књиге које су стизале из Русије',
    'руски учитељи',
    'историја српског школства',
    'српско школство у XVIII веку',
    'Сремски Карловци',
    'Славјанска школа',
    'Максим Суворов',
    'Емануил Козачински',
    'Мојсије Петровић',
    'Петар Велики',
    'Карловачка митрополија',
    'српска просвета',
    'рускословенски језик',
    'славеносрпски језик',
    'Србија и Русија кроз историју',

    // Ruski jezik
    'русские учителя в Сербии',
    'русские книги в Сербии',
    'сербское образование',
    'история сербского образования',
    'сербское образование XVIII века',
    'Максим Суворов',
    'Эммануил Козачинский',
    'Моисей Петрович',
    'Пётр Велики',
    'Сремски-Карловци',
    'Славянская школа',
    'русскославянский язык',
    'славяносербский язык',
    'сербское просвещение',
    'сербы в Габсбургской монархии',
    'культурные связи России и Сербии',
    'история России и Сербии',
    'Сербия и Россия в истории',

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
        alt:
          'Ruski učitelji i knjige u Sremskim Karlovcima – razvoj srpskog školstva u XVIII veku',
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

const jsonLd = {
  '@context': 'https://schema.org',

  '@type': 'NewsArticle',

  '@id': `${ARTICLE_URL}#article`,

  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
  },

  headline:
    'KNJIGE KOJE SU STIZALE IZ RUSIJE — KAKO SU RUSKI UČITELJI MENJALI SRPSKO ŠKOLSTVO',

  alternativeHeadline:
    'Ruski učitelji, Slavjanska škola i razvoj srpske prosvete u Sremskim Karlovcima tokom XVIII veka',

  description: article.description,

  image: [
    {
      '@type': 'ImageObject',
      url: IMAGE_URL,
      width: 1600,
      height: 900,
    },
  ],

  datePublished: '2026-11-11T12:00:00+01:00',

  dateModified: '2026-11-11T12:00:00+01:00',

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

  articleSection: 'Istorija',

  genre: 'Istorijski članak',

  isAccessibleForFree: true,

  about: [
    {
      '@type': 'Thing',
      name: 'Istorija srpskog školstva',
      alternateName: [
        'Историја српског школства',
        'История сербского образования',
      ],
    },
    {
      '@type': 'Thing',
      name: 'Ruski uticaj na srpsko obrazovanje',
      alternateName: [
        'Руски утицај на српско образовање',
        'Русское влияние на сербское образование',
      ],
    },
    {
      '@type': 'Place',
      name: 'Sremski Karlovci',
      alternateName: [
        'Сремски Карловци',
        'Сремски-Карловци',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sremski Karlovci',
        addressCountry: 'RS',
      },
    },
    {
      '@type': 'Person',
      name: 'Maksim Suvorov',
      alternateName: 'Максим Суворов',
    },
    {
      '@type': 'Person',
      name: 'Emanuil Kozačinski',
      alternateName: 'Эммануил Козачинский',
    },
    {
      '@type': 'Person',
      name: 'Mojsije Petrović',
      alternateName: 'Мојсије Петровић',
    },
    {
      '@type': 'Thing',
      name: 'Slavjanska škola',
      alternateName: 'Славјанска школа',
    },
    {
      '@type': 'Thing',
      name: 'Karlovačka mitropolija',
    },
    {
      '@type': 'Thing',
      name: 'Ruskoslovenski jezik',
    },
    {
      '@type': 'Thing',
      name: 'Srpsko-ruske kulturne i prosvetne veze',
    },
  ],

  keywords: [
    'Ruski učitelji',
    'Maksim Suvorov',
    'Emanuil Kozačinski',
    'Sremski Karlovci',
    'Slavjanska škola',
    'Istorija srpskog školstva',
    'Srpska prosveta',
    'Ruske knjige',
    'XVIII vek',
    'Srbija i Rusija kroz istoriju',
    'Istok Info Pult',
  ],

  url: ARTICLE_URL,
}

// =====================================
// LAYOUT
// =====================================

export default function Layout({
  children,
}: {
  children: ReactNode
}) {
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
