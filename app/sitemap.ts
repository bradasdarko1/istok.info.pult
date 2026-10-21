
import type { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'

export const dynamic = 'force-static'

const SITE_URL = 'https://www.istokinfopult.rs'

export default function sitemap(): MetadataRoute.Sitemap {
  const newsDirectory = path.join(
    process.cwd(),
    'app',
    'vesti'
  )

  // Osnovne stranice sajta
  const staticPages = [
    '/',
    '/vesti',
  ]

  const staticRoutes: MetadataRoute.Sitemap =
    staticPages.map((page) => ({
      url: `${SITE_URL}${page}`,
      changeFrequency: 'weekly',
      priority: page === '/' ? 1 : 0.9,
    }))

  // Automatsko pronalaženje svih vesti
  let newsRoutes: MetadataRoute.Sitemap = []

  if (fs.existsSync(newsDirectory)) {
    const folders = fs.readdirSync(
      newsDirectory,
      { withFileTypes: true }
    )

    newsRoutes = folders
      .filter((folder) => folder.isDirectory())
      .filter((folder) => {
        const folderPath = path.join(
          newsDirectory,
          folder.name
        )

        return (
          fs.existsSync(
            path.join(folderPath, 'page.tsx')
          ) ||
          fs.existsSync(
            path.join(folderPath, 'page.jsx')
          ) ||
          fs.existsSync(
            path.join(folderPath, 'page.js')
          )
        )
      })
      .map((folder) => ({
        url: `${SITE_URL}/vesti/${encodeURIComponent(folder.name)}`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
  }

  return [...staticRoutes, ...newsRoutes]
}
