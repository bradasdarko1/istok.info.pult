import { NextRequest, NextResponse } from 'next/server'
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { postSlug, authorName, message } = body

    if (!postSlug || !authorName || !message) {
      return NextResponse.json(
        { error: 'Nedostaju obavezna polja.' },
        { status: 400 }
      )
    }

    if (authorName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Ime mora imati bar 2 karaktera.' },
        { status: 400 }
      )
    }

    if (message.trim().length < 3) {
      return NextResponse.json(
        { error: 'Komentar mora imati bar 3 karaktera.' },
        { status: 400 }
      )
    }

    await pool.query(
      `
      INSERT INTO comments (post_slug, author_name, message)
      VALUES ($1, $2, $3)
      `,
      [postSlug, authorName.trim(), message.trim()]
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('POST /api/comments error:', error)
    return NextResponse.json(
      { error: 'Greška prilikom upisa komentara.' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const postSlug = searchParams.get('postSlug')

    if (!postSlug) {
      return NextResponse.json(
        { error: 'Nedostaje postSlug.' },
        { status: 400 }
      )
    }

    const result = await pool.query(
      `
      SELECT id, post_slug, author_name, message, created_at
      FROM comments
      WHERE post_slug = $1
      ORDER BY created_at DESC
      `,
      [postSlug]
    )

    return NextResponse.json({ comments: result.rows })
  } catch (error) {
    console.error('GET /api/comments error:', error)
    return NextResponse.json(
      { error: 'Greška prilikom učitavanja komentara.' },
      { status: 500 }
    )
  }
}
