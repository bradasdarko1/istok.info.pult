import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'
import { getArticleSeo } from '@/data/articlesSeo'

const seo = createArticleSeo(getArticleSeo("intervju-sa-ocem-aleksandra-bijelica"))

export const metadata = seo.metadata

export default function ArticleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seo.structuredData).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  )
}
