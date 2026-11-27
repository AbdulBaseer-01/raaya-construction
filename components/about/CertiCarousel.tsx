'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import FramedImage from '@/components/site/FramedImage'
import { DisplayHeading, EASE, Eyebrow, pad, shell, squareButton } from '@/components/site/primitives'

const certificates = [
  {
    id: 1,
    title: 'ISO 9001:2025',
    subtitle: 'Quality Management System',
    image: '/products-hero.png',
    issuer: 'Bureau Veritas',
    year: '2025',
  },
  {
    id: 2,
    title: 'ISO 14001:2015',
    subtitle: 'Environmental Management',
    image: '/products-hero.png',
    issuer: 'DNV GL',
    year: '2023',
  },
  {
    id: 3,
    title: 'OHSAS 18001',
    subtitle: 'Occupational Health & Safety',
    image: '/products-hero.png',
    issuer: 'TÜV SÜD',
    year: '2022',
  },
  {
    id: 4,
    title: 'CE Marking',
    subtitle: 'European Conformity Standard',
    image: '/products-hero.png',
    issuer: 'SGS Group',
    year: '2024',
  },
  {
    id: 5,
    title: 'BIS Certification',
    subtitle: 'Bureau of Indian Standards',
    image: '/products-hero.png',
    issuer: 'BIS India',
    year: '2021',
  },
]

const AUTOPLAY_DELAY = 4000

export default function CertiCarousel() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir)
    setActive((index + certificates.length) % certificates.length)
  }, [])

  /* Autoplay, paused on hover or focus inside the carousel. */
  useEffect(() => {
    if (paused || reduceMotion) return
    const timer = setTimeout(() => goTo(active + 1, 1), AUTOPLAY_DELAY)
    return () => clearTimeout(timer)
  }, [active, paused, reduceMotion, goTo])

  const cert = certificates[active]

  return (
    <section className="border-t border-black/15 bg-[#f5f2ec]">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
          <div>
            <Eyebrow className="mb-8">Certifications / 04</Eyebrow>
            <DisplayHeading lines={['Certified for', 'excellence.']} className="text-[clamp(2.6rem,5vw,6.2rem)]" />
          </div>
          <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70 md:pb-2">
            Every certificate we hold is a promise kept — to our clients, our craft, and the industry.
          </p>
        </div>

        <div
          className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* ── Active certificate ── */}
          <div className="min-w-0">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={cert.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <FramedImage
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    aspect="aspect-[4/3]"
                    imageClassName="object-contain p-6"
                    className="bg-white"
                  >
                    <span className="pointer-events-none absolute left-5 top-5 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">
                      {pad(active + 1)} / {pad(certificates.length)}
                    </span>
                  </FramedImage>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <button type="button" aria-label="Previous certificate" onClick={() => goTo(active - 1, -1)} className={squareButton}>
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="relative h-px flex-1 bg-black/15">
                {!paused && !reduceMotion && (
                  <motion.span
                    key={active}
                    className="absolute inset-y-0 left-0 bg-[#886c46]"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: AUTOPLAY_DELAY / 1000, ease: 'linear' }}
                  />
                )}
              </div>
              <button type="button" aria-label="Next certificate" onClick={() => goTo(active + 1, 1)} className={squareButton}>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ── Index of all certificates ── */}
          <ol className="min-w-0 border-t border-black/70 self-start">
            {certificates.map((c, i) => {
              const current = i === active
              return (
                <li key={c.id} className="border-b border-black/15">
                  <button
                    type="button"
                    aria-current={current}
                    onClick={() => goTo(i, i > active ? 1 : -1)}
                    className="group grid w-full grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-3 py-5 text-left focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46] sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:items-center"
                  >
                    <span className={`pt-1 text-[0.62rem] tracking-[0.18em] sm:pt-0 ${current ? 'text-[#886c46]' : 'text-black/40'}`}>
                      {pad(i + 1)}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block text-[clamp(1.4rem,2.2vw,2.3rem)] uppercase leading-[0.9] tracking-[-0.06em] transition-colors ${
                          current ? 'text-[#886c46]' : 'group-hover:text-[#886c46]'
                        }`}
                      >
                        {c.title}
                      </span>
                      <span className="mt-2 block text-[0.8rem] leading-[1.5] text-black/60">{c.subtitle}</span>
                    </span>
                    <span className="col-start-2 text-[0.58rem] uppercase tracking-[0.2em] text-black/45 sm:col-start-auto sm:text-right">
                      {c.issuer} · {c.year}
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
