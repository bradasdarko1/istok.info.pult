import { NextResponse } from 'next/server'
import { vesti } from '@/data/vesti'

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params

  const vest = vesti.find((item) => item.slug === slug)

  if (!vest) {
    return NextResponse.json(
      {
        success: false,
        message: 'Vest nije pronađena.',
      },
      { status: 404 }
    )
  }

  return NextResponse.json({
    success: true,
    data: vest,
  })
}
