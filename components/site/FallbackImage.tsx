'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'

/* Paths that already failed this session, so remounts (carousel slides) don't request them again.
   Only filled by onError in the browser, so the first client render still matches the server. */
const failedSources = new Set<string>()

/**
 * next/image with a quiet placeholder when the file is missing, so gaps in
 * the data never show a broken-image icon.
 */
export default function FallbackImage({ alt, src, ...props }: ImageProps) {
  const [failedSrc, setFailedSrc] = useState<ImageProps['src'] | null>(null)

  if (failedSrc === src || (typeof src === 'string' && failedSources.has(src))) {
    return (
      <span role="img" aria-label={alt} className="absolute inset-0 flex items-end bg-[#ebe4d8] p-4">
        <span className="text-[0.52rem] uppercase tracking-[0.22em] text-black/40">Image to follow</span>
      </span>
    )
  }

  const onError = () => {
    if (typeof src === 'string') failedSources.add(src)
    setFailedSrc(src)
  }

  return <Image alt={alt} src={src} onError={onError} {...props} />
}
