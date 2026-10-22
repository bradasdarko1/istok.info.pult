
'use client'

import { usePathname } from 'next/navigation'
import RelatedArticles from '@/components/RelatedArticles'

const excludedSlugs = new Set([
  'srbija',
  'sport',
  'politika',
  'vesti-istok',
])

export default function AutoRelatedArticles() {
  const pathname = usePathname()

  const segments = pathname
    .split('/')
    .filter(Boolean)

  if (segments.length !== 2 || segments[0] !== 'vesti') {
    return null
  }

  const slug = decodeURIComponent(segments[1])

  if (excludedSlugs.has(slug)) {
    return null
  }

  return <RelatedArticles slug={slug} />
}
