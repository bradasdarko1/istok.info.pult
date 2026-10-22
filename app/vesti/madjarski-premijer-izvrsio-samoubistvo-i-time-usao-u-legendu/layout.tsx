import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'
import { getArticleSeo } from '@/data/articlesSeo'

const seo = createArticleSeo(getArticleSeo("madjarski-premijer-izvrsio-samoubistvo-i-time-usao-u-legendu"))

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
