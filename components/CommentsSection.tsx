'use client'

import { useEffect, useState } from 'react'

type Comment = {
  id: number
  post_slug: string
  author_name: string
  message: string
  created_at: string
}

type CommentsSectionProps = {
  postSlug: string
}

export default function CommentsSection({
  postSlug,
}: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [authorName, setAuthorName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const loadComments = async () => {
    try {
      setFetching(true)
      const res = await fetch(`/api/comments?postSlug=${encodeURIComponent(postSlug)}`)
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Greška pri učitavanju komentara.')
      }

      setComments(data.comments || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Greška.')
    } finally {
      setFetching(false)
    }
  }

  useEffect(() => {
    loadComments()
  }, [postSlug])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (authorName.trim().length < 2) {
      setError('Ime mora imati bar 2 karaktera.')
      return
    }

    if (message.trim().length < 3) {
      setError('Komentar mora imati bar 3 karaktera.')
      return
    }

    try {
      setLoading(true)

      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postSlug,
          authorName,
          message,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Greška prilikom slanja komentara.')
      }

      setAuthorName('')
      setMessage('')
      setSuccess('Komentar je uspešno dodat.')
      await loadComments()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Greška.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mt-16 rounded-2xl border border-yellow-500/20 bg-black/40 p-6 backdrop-blur-sm">
      <h2 className="mb-6 text-2xl font-bold text-yellow-400">Komentari</h2>

      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Ime
          </label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Unesite ime"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Komentar
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Unesite komentar"
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}
        {success && <p className="text-sm text-green-400">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Slanje...' : 'Pošalji komentar'}
        </button>
      </form>

      <div className="space-y-4">
        {fetching ? (
          <p className="text-white/70">Učitavanje komentara...</p>
        ) : comments.length === 0 ? (
          <p className="text-white/70">Još nema komentara za ovu vest.</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div className="mb-2 flex items-center justify-between gap-4">
                <p className="font-semibold text-yellow-300">
                  {comment.author_name}
                </p>
                <p className="text-xs text-white/50">
                  {new Date(comment.created_at).toLocaleString('sr-RS')}
                </p>
              </div>
              <p className="whitespace-pre-line text-white/90">
                {comment.message}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
