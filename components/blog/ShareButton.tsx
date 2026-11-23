'use client'

import { useState } from 'react'
import { Check, Share2 } from 'lucide-react'

/** Native share sheet where available, otherwise copies the article link. */
export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        /* dismissed by the reader */
      }
      return
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className="group inline-flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em] text-black/70 transition-colors hover:text-[#886c46]"
    >
      <span className="flex h-9 w-9 items-center justify-center border border-black/20 transition-colors group-hover:border-[#886c46]">
        {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
      </span>
      <span aria-live="polite">{copied ? 'Link copied' : 'Share article'}</span>
    </button>
  )
}
