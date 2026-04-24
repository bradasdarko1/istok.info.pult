'use client'

import { useEffect, useState } from 'react'

type Comment = {
  id: number
  author_name: string
  message: string
  created_at: string
}

export default function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [authorName, setAuthorName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState('')

  const loadComments = async () => {
    try {
      setLoading(true)

      const res = await fetch(`/api/comments?postSlug=${slug}`, {
        cache: 'no-store',
      })

      const data = await res.json()
      setComments(data.comments || [])
    } catch {
      setComments([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadComments()
  }, [slug])

  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (authorName.trim().length < 2) return
    if (message.trim().length < 3) return

    try {
      setSending(true)
      setSuccess('')

      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postSlug: slug,
          authorName,
          message,
        }),
      })

      if (!res.ok) return

      setAuthorName('')
      setMessage('')
      setSuccess('Komentar je uspešno objavljen.')
      await loadComments()
    } catch {
      setComments([])
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="mt-14 rounded-3xl border border-yellow-500/20 bg-black/40 p-6 shadow-2xl backdrop-blur">
      <h2 className="mb-6 text-3xl font-bold text-yellow-400">
        Komentari
      </h2>

      <form onSubmit={submitComment} className="space-y-4">
        <div>
          <label className="mb-2 block font-semibold text-white">Ime</label>
          <input
            type="text"
            placeholder="Unesite ime"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-white">
            Komentar
          </label>
          <textarea
            rows={5}
            placeholder="Unesite komentar"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-400"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="rounded-2xl bg-yellow-500 px-6 py-3 font-bold text-black transition hover:bg-yellow-400 disabled:opacity-50"
        >
          {sending ? 'Slanje...' : 'Pošalji komentar'}
        </button>
      </form>

      {success && (
        <p className="mt-4 text-center text-green-400">{success}</p>
      )}

      <div className="mt-8 space-y-4">
        {loading ? (
          <p className="text-white/60">Učitavanje komentara...</p>
        ) : comments.length === 0 ? (
          <p className="text-white/60">
            Još nema komentara za ovu vest.
          </p>
        ) : (
          comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-2xl border border-yellow-500/20 bg-black/30 p-5"
            >
              <p className="font-bold text-yellow-400">
                {comment.author_name}
              </p>

              <p className="mt-3 whitespace-pre-line text-white/80">
                {comment.message}
              </p>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
