'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { CAREERS_EMAIL, type Job } from '@/lib/careers'
import { EASE } from '@/components/site/primitives'

/** How-to-apply panel pinned to the bottom of the screen; the page stays usable behind it. */
export default function ApplyPanel({ job, onClose }: { job: Job | null; onClose: () => void }) {
  useEffect(() => {
    if (!job) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [job, onClose])

  const mailto = job ? `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${job.title}`)}` : `mailto:${CAREERS_EMAIL}`

  return (
    <AnimatePresence>
      {job && (
        <motion.div
          role="dialog"
          aria-label={`Apply for ${job.title}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed inset-x-3 bottom-3 z-1000 border border-black/15 bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[30rem]"
        >
          <div className="flex items-start justify-between gap-6 border-b border-black/15 px-6 py-4">
            <p className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.24em] text-[#886c46]">
              <span className="h-px w-8 bg-[#886c46]" />
              Apply now
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close apply panel"
              className="group -my-1 flex h-8 w-8 shrink-0 items-center justify-center border border-black/20 transition-colors hover:border-[#886c46]"
            >
              <X className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          <div className="px-6 py-6">
            <p className="text-[0.55rem] uppercase tracking-[0.22em] text-black/45">Applying for</p>
            <p className="mt-2 text-[clamp(1.5rem,2vw,2rem)] uppercase leading-[0.9] tracking-[-0.06em]">{job.title}</p>
            <p className="mt-5 text-[0.85rem] leading-[1.7] text-black/65">
              To apply, send your resume + brief profile summary to:
            </p>
            <a
              href={mailto}
              className="group mt-4 inline-flex items-center gap-3 border-b border-[#886c46] pb-1 text-[0.95rem] text-[#886c46] transition-colors hover:text-black"
            >
              {CAREERS_EMAIL}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
