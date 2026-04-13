'use client'

import { useMemo, useState } from 'react'

type ShareButtonProps = {
  title?: string
  text?: string
}

export default function ShareButton({
  title = 'Istok Info Pult',
  text = 'Pogledaj ovu vest',
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const currentUrl = useMemo(() => {
    if (typeof window === 'undefined') return ''
    return window.location.href
  }, [])

  const handleShare = async () => {
    const shareData = {
      title,
      text,
      url: currentUrl,
    }

    try {
      if (
        typeof navigator !== 'undefined' &&
        navigator.share &&
        (!navigator.canShare || navigator.canShare(shareData))
      ) {
        await navigator.share(shareData)
      } else if (navigator.clipboard && currentUrl) {
        await navigator.clipboard.writeText(currentUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (error) {
      console.error('Greška pri deljenju:', error)
    }
  }

  return (
    <div className="mt-4 flex items-center gap-3">
      <button
        onClick={handleShare}
        aria-label="Podeli vest"
        title="Podeli vest"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/25 bg-white/5 text-yellow-300 transition hover:bg-yellow-400/10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 12v7a1 1 0 001 1h8a1 1 0 001-1v-7"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16V3"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.5 6.5L12 3l3.5 3.5"
          />
        </svg>
      </button>

      {copied && (
        <span className="text-sm text-yellow-300">
          Link je kopiran
        </span>
      )}
    </div>
  )
}
