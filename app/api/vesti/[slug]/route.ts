import { NextResponse } from 'next/server'
import { vesti } from '@/data/vesti'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const vest = vesti.find((item) => item.slug === params.slug)

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
