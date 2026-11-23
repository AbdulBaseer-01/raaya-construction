'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import FallbackImage from '@/components/site/FallbackImage'
import { EASE, Eyebrow, pad, shell, squareButton } from '@/components/site/primitives'

const slides = [
  {
    src: '/products-hero.png',
    alt: 'Texo Prefab World – Products',
    label: '01',
    title: 'Built to Last',
    caption: 'Our team bringing precision to every prefab structure.',
  },
  {
    src: '/siteoffice-2.webp',
    alt: 'Texo Prefab World – Site Office',
    label: '02',
    title: 'On The Ground',
    caption: 'Where planning meets execution — our site office team.',
  },
]

const AUTOPLAY_DELAY = 5000

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  const go = useCallback((index: number, dir: number) => {
    setDirection(dir)
    setCurrent((index + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused || reduceMotion) return
    const timer = setTimeout(() => go(current + 1, 1), AUTOPLAY_DELAY)
    return () => clearTimeout(timer)
  }, [current, paused, reduceMotion, go])

  const slide = slides[current]

  return (
    <section className="border-t border-black/15 bg-white">
      <div
        className={`${shell} py-24 md:py-36`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div aria-live="polite">
          <Eyebrow className="mb-8">
            <span className="text-[#886c46]">{slide.label}</span> / {pad(slides.length)}
          </Eyebrow>
        </div>

        <div className="border border-black/15 p-[5px]">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#f3ede3] md:aspect-[16/9] lg:aspect-[21/9]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%' }),
                  center: { x: 0 },
                  exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%' }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: EASE }}
                className="absolute inset-0"
              >
                <FallbackImage src={slide.src} alt={slide.alt} fill sizes="(min-width: 1600px) 1440px, 90vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 border border-white/30" />
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid grid-cols-[minmax(3rem,0.2fr)_minmax(0,1.8fr)] border-t border-black/70 pt-5"
            >
              <span className="text-[0.85rem]">{slide.label}</span>
              <div className="border-l border-black/70 pl-5">
                <h3 className="text-[clamp(2rem,3.6vw,4.2rem)] uppercase leading-[0.84] tracking-[-0.065em]">{slide.title}</h3>
                <p className="mt-4 max-w-[30rem] text-[0.85rem] leading-[1.6] text-black/65">{slide.caption}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-3">
            <div className="mr-3 flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => go(i, i > current ? 1 : -1)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === current}
                  className="relative flex h-10 w-12 items-center"
                >
                  <span className="absolute inset-x-0 top-1/2 h-px bg-black/15" />
                  {i === current && !paused && !reduceMotion ? (
                    <motion.span
                      key={current}
                      className="absolute left-0 top-1/2 h-px bg-[#886c46]"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: AUTOPLAY_DELAY / 1000, ease: 'linear' }}
                    />
                  ) : (
                    <span className={`absolute left-0 top-1/2 h-px bg-[#886c46] ${i === current ? 'w-full' : 'w-0'}`} />
                  )}
                </button>
              ))}
            </div>
            <button type="button" aria-label="Previous slide" onClick={() => go(current - 1, -1)} className={squareButton}>
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button type="button" aria-label="Next slide" onClick={() => go(current + 1, 1)} className={squareButton}>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
