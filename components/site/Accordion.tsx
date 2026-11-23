'use client'

import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { EASE, pad } from './primitives'

export type AccordionItem = { question: string; answer: string }

/** Numbered question list with one panel open at a time (FAQ sections). */
export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const id = useId()

  return (
    <div className="border-t border-black/15">
      {items.map((item, i) => {
        const expanded = open === i
        const panelId = `${id}-panel-${i}`
        return (
          <div key={item.question} className="border-b border-black/15">
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : i)}
                className="group grid w-full grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-3 py-6 text-left focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46] sm:grid-cols-[3.5rem_minmax(0,1fr)_auto]"
              >
                <span className="pt-1 text-[0.62rem] tracking-[0.18em] text-black/40">{pad(i + 1)}</span>
                <span
                  className={`text-[clamp(1.05rem,1.4vw,1.4rem)] leading-[1.3] tracking-[-0.02em] transition-colors ${
                    expanded ? 'text-[#886c46]' : 'group-hover:text-[#886c46]'
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 items-center justify-center border transition-colors ${
                    expanded ? 'border-[#886c46] text-[#886c46]' : 'border-black/20 group-hover:border-[#886c46]'
                  }`}
                >
                  <Plus className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-45' : ''}`} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 pl-[2.75rem] pr-11 text-[0.85rem] leading-[1.8] text-black/65 sm:pl-[3.75rem]">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
