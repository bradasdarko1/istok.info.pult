'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type ShareButtonProps = {
  title?: string
  text?: string
}

export default function ShareButton({
  title = 'Istok Info Pult',
  text = 'Pogledaj ovu vest',
}: ShareButtonProps) {
  const pathname = usePathname()
  const [copied, setCopied] = useState(false)
  const [fullUrl, setFullUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(`${window.location.origin}${pathname}`)
    }
  }, [pathname])

  const handleShare = async () => {
    if (!fullUrl) return

    const shareData = {
      title,
      text,
      url: fullUrl,
    }

    try {
      if (
        typeof navigator !== 'undefined' &&
        navigator.share &&
        (!navigator.canShare || navigator.canShare(shareData))
      ) {
        await navigator.share(shareData)
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(fullUrl)
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

      {copied && <span className="text-sm text-yellow-300">Link je kopiran</span>}
    </div>
  )
}
