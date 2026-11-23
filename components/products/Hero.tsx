'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react'
import Lightbox from './Lightbox'
import FallbackImage from '@/components/site/FallbackImage'
import { ArrowLink, EASE, Eyebrow, OutlineLink, hasLongWord, pad, paragraphs, shell, squareButton } from '@/components/site/primitives'
import type { ProductDetail } from './types'

export default function ProductHero({ product, categoryIndex }: { product: ProductDetail; categoryIndex: number }) {
  const gallery = product.gallery
  const count = gallery.length
  const reduceMotion = useReducedMotion()

  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const dragStart = useRef<number | null>(null)

  const goTo = useCallback(
    (index: number, dir?: 1 | -1) => {
      const next = ((index % count) + count) % count
      setDirection(dir ?? (index > active ? 1 : -1))
      setActive(next)
    },
    [active, count],
  )

  /* Auto-advance, paused while the lightbox is open. */
  useEffect(() => {
    if (lightbox !== null || reduceMotion || count < 2) return
    const timer = setInterval(() => goTo(active + 1, 1), 4800)
    return () => clearInterval(timer)
  }, [active, count, goTo, lightbox, reduceMotion])

  const onDragEnd = (x: number) => {
    if (dragStart.current === null) return
    const delta = dragStart.current - x
    dragStart.current = null
    if (Math.abs(delta) > 40) goTo(active + (delta > 0 ? 1 : -1), delta > 0 ? 1 : -1)
    else setLightbox(active)
  }

  const [first, ...rest] = product.name.split(' ')

  return (
    <section className="bg-white">
      <div className={`${shell} grid gap-12 py-10 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24`}>
        {/* ── Carousel ── */}
        <div className="min-w-0 lg:sticky lg:top-[calc(68px+2rem)] lg:self-start">
          <div className="border border-black/15 p-[5px]">
            <div
              className="relative aspect-[4/3] cursor-grab touch-pan-y select-none overflow-hidden bg-[#f3ede3] active:cursor-grabbing"
              onMouseDown={(e) => (dragStart.current = e.clientX)}
              onMouseUp={(e) => onDragEnd(e.clientX)}
              onTouchStart={(e) => (dragStart.current = e.touches[0].clientX)}
              onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%' }),
                    center: { x: 0 },
                    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%' }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.7, ease: EASE }}
                  className="absolute inset-0"
                >
                  <FallbackImage
                    src={gallery[active]}
                    alt={`${product.name}, view ${active + 1}`}
                    fill
                    priority={active === 0}
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 border border-white/30" />
              <span className="pointer-events-none absolute left-5 top-5 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">
                {pad(active + 1)} / {pad(count)}
              </span>
              <button
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
                onClick={() => setLightbox(active)}
                className="absolute right-4 top-4 flex items-center gap-2 border border-black/10 bg-white px-3 py-2 text-[0.55rem] uppercase tracking-[0.2em] text-black transition-colors hover:text-[#886c46]"
              >
                <Maximize2 className="h-3 w-3" />
                Full view
              </button>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <button type="button" aria-label="Previous image" onClick={() => goTo(active - 1, -1)} className={squareButton}>
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="projects-rail flex min-w-0 flex-1 gap-2 overflow-x-auto">
              {gallery.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => goTo(i)}
                  className={`relative aspect-[4/3] h-10 shrink-0 overflow-hidden border transition-opacity sm:h-12 ${
                    i === active ? 'border-[#886c46] opacity-100' : 'border-black/10 opacity-55 hover:opacity-100'
                  }`}
                >
                  <FallbackImage src={src} alt="" fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
            <button type="button" aria-label="Next image" onClick={() => goTo(active + 1, 1)} className={squareButton}>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── Summary ── */}
        <div className="min-w-0 lg:pt-4">
          <Eyebrow className="mb-10">
            {product.category}
            {categoryIndex >= 0 && ` / ${pad(categoryIndex + 1)}`}
          </Eyebrow>
          <h1 lang="en" className={`break-words uppercase leading-[0.82] tracking-[-0.07em] ${
              hasLongWord(product.name) ? 'text-[clamp(2.1rem,4.2vw,5.2rem)]' : 'text-[clamp(2.6rem,4.8vw,6rem)]'
            }`}>
            <span className="block">{first}</span>
            {rest.length > 0 && <span className="ml-[6vw] block text-[#886c46] lg:ml-[3vw]">{rest.join(' ')}</span>}
          </h1>

          <p className="mt-10 max-w-[34rem] text-[clamp(1.05rem,1.4vw,1.35rem)] leading-[1.45] tracking-[-0.015em] text-black">
            {product.description}
          </p>

          <div className="mt-6 max-w-[34rem] space-y-4 text-[0.85rem] leading-[1.8] text-black/65">
            {paragraphs(product.longDescription).map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <dl className="mt-10 max-w-[34rem] border-b border-black/15">
            {[
              ['Collection', product.category],
              ['Variants', product.variants.length ? product.variants.map((v) => v.variantName).join(' / ') : 'Custom'],
              ['Gallery', `${pad(count)} images`],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-[minmax(5.5rem,0.5fr)_minmax(0,1.5fr)] border-t border-black/15 py-3">
                <dt className="text-[0.58rem] uppercase leading-[1.9] tracking-[0.22em] text-black/45">{label}</dt>
                <dd className="text-[0.85rem]">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <OutlineLink href="/contact-us">Get a quote</OutlineLink>
            <ArrowLink href="/inspiration-gallery">View projects</ArrowLink>
          </div>
        </div>
      </div>

      <Lightbox images={gallery} index={lightbox} title={product.name} onChange={setLightbox} onClose={() => setLightbox(null)} />
    </section>
  )
}
