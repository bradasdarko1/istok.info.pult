
import type { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import { articlesSeo } from '@/data/articlesSeo'

export const dynamic = 'force-static'

const SITE_URL = 'https://www.istokinfopult.rs'

// =====================================
// OSNOVNE STRANICE
// =====================================

const staticPages: MetadataRoute.Sitemap = [
  {
    url: SITE_URL,
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: `${SITE_URL}/vesti`,
    changeFrequency: 'daily',
    priority: 0.9,
  },
]

// =====================================
// PROVERA POSTOJANJA STRANICE
// =====================================

function hasPage(folderPath: string): boolean {
  return [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
  ].some((filename) =>
    fs.existsSync(path.join(folderPath, filename))
  )
}

// =====================================
// SITEMAP GENERATOR
// =====================================

export default function sitemap(): MetadataRoute.Sitemap {
  const newsDirectory = path.join(
    process.cwd(),
    'app',
    'vesti'
  )

  if (!fs.existsSync(newsDirectory)) {
    return staticPages
  }

  const folders = fs.readdirSync(newsDirectory, {
    withFileTypes: true,
  })

  const newsRoutes: MetadataRoute.Sitemap = folders
    .filter((folder) => folder.isDirectory())
    .filter((folder) => {
      const folderPath = path.join(
        newsDirectory,
        folder.name
      )

      return hasPage(folderPath)
    })
    .map((folder) => {
      const slug = folder.name
      const seo = articlesSeo[slug]

      const url =
        `${SITE_URL}/vesti/${encodeURIComponent(slug)}`

      const lastModified =
        seo?.modifiedAt || seo?.publishedAt

      const imageUrl = seo?.image
        ? new URL(seo.image, SITE_URL).toString()
        : undefined

      return {
        url,

        ...(lastModified
          ? { lastModified }
          : {}),

        changeFrequency: 'monthly' as const,

        priority: 0.7,

        ...(imageUrl
          ? { images: [imageUrl] }
          : {}),
      }
    })

  return [...staticPages, ...newsRoutes]
}
