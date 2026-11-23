'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import type { GalleryItem } from '@/lib/galleryItems'
import FallbackImage from '@/components/site/FallbackImage'
import { EASE, OutlineLink, pad } from '@/components/site/primitives'

const darkSquare =
  'flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-white transition-colors hover:border-[#886c46] hover:bg-[#886c46]/15 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]'

/** Project viewer: image beside its details, stepping through the current (filtered) results. */
export default function GalleryLightbox({
  items,
  index,
  onChange,
  onClose,
}: {
  items: GalleryItem[]
  index: number | null
  onChange: (index: number) => void
  onClose: () => void
}) {
  const item = index !== null ? (items[index] ?? null) : null
  const open = item !== null
  const count = items.length

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
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-1100 flex items-center justify-center bg-[#080808]/85 p-3 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="grid max-h-[94vh] w-full max-w-6xl grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-white text-black lg:grid-cols-[minmax(0,1.5fr)_minmax(20rem,0.9fr)] lg:grid-rows-1"
            onClick={(event) => event.stopPropagation()}
          >
            {/* ── Image ── */}
            <div className="relative aspect-[4/3] bg-[#080808] lg:aspect-auto lg:min-h-[560px]">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <FallbackImage src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 60vw, 95vw" className="object-cover" />
                </motion.div>
              </AnimatePresence>
              <span className="pointer-events-none absolute left-5 top-5 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">
                {pad((index ?? 0) + 1)} / {pad(count)}
              </span>
              {count > 1 && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button type="button" aria-label="Previous project" onClick={() => onChange(((index ?? 0) - 1 + count) % count)} className={`${darkSquare} bg-[#080808]/60`}>
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button type="button" aria-label="Next project" onClick={() => onChange(((index ?? 0) + 1) % count)} className={`${darkSquare} bg-[#080808]/60`}>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* ── Details ── */}
            <div className="flex min-h-0 flex-col overflow-y-auto p-6 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <p className="text-[0.58rem] uppercase tracking-[0.24em] text-[#886c46]">{item.category}</p>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close project"
                  className="group -mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-black/20 transition-colors hover:border-[#886c46]"
                >
                  <X className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>

              <h2 className="mt-5 text-[clamp(2rem,3.2vw,3.4rem)] uppercase leading-[0.86] tracking-[-0.065em] [overflow-wrap:anywhere]">
                {item.title}
              </h2>
              {item.highlight && <p className="mt-5 text-[0.85rem] text-[#886c46]">{item.highlight}</p>}

              <dl className="mt-8 border-b border-black/15">
                {[
                  ['Location', item.location],
                  ['Size Class', item.size],
                  ['Floor Area', item.sqft],
                  ['Use Case', item.tag],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[minmax(6rem,0.6fr)_minmax(0,1.4fr)] border-t border-black/15 py-3">
                    <dt className="text-[0.58rem] uppercase leading-[1.9] tracking-[0.22em] text-black/45">{label}</dt>
                    <dd className="text-[0.85rem]">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto pt-8">
                <OutlineLink href="/contact-us">Enquire about this design</OutlineLink>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
