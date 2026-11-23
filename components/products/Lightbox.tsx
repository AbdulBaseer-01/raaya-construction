'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import FallbackImage from '@/components/site/FallbackImage'
import { pad } from '@/components/site/primitives'

const squareButton =
  'flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-white transition-colors hover:border-[#886c46] hover:bg-[#886c46]/15 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]'

/** Full-screen image viewer shared by the product hero and gallery. */
export default function Lightbox({
  images,
  index,
  title,
  onChange,
  onClose,
}: {
  images: string[]
  index: number | null
  title: string
  onChange: (index: number) => void
  onClose: () => void
}) {
  const open = index !== null
  const count = images.length

  useEffect(() => {
    if (!open) return
    const go = (step: number) => onChange(((index ?? 0) + step + count) % count)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, index, count, onChange, onClose])

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-1100 flex flex-col bg-[#080808]/95 text-white"
          onClick={onClose}
        >
          <div
            className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-[4vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="min-w-0 truncate text-[0.58rem] uppercase tracking-[0.24em] text-white/60">
              {title} / {pad(index + 1)} — {pad(count)}
            </p>
            <button type="button" onClick={onClose} aria-label="Close gallery" className={`group ${squareButton}`}>
              <X className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          <div className="relative min-h-0 flex-1 px-5 py-6 sm:px-[4vw]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative h-full w-full"
              >
                <FallbackImage src={images[index]} alt={`${title}, image ${index + 1}`} fill sizes="100vw" className="object-contain" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="flex items-center gap-4 border-t border-white/10 px-5 py-4 sm:px-[4vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" aria-label="Previous image" onClick={() => onChange((index - 1 + count) % count)} className={squareButton}>
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="projects-rail flex min-w-0 flex-1 justify-start gap-2 overflow-x-auto sm:justify-center">
              {images.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => onChange(i)}
                  className={`relative h-11 w-16 shrink-0 overflow-hidden border transition-opacity ${
                    i === index ? 'border-[#886c46] opacity-100' : 'border-white/15 opacity-50 hover:opacity-90'
                  }`}
                >
                  <FallbackImage src={src} alt="" fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
            <button type="button" aria-label="Next image" onClick={() => onChange((index + 1) % count)} className={squareButton}>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
