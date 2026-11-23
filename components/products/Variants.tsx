'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react'
import FallbackImage from '@/components/site/FallbackImage'
import Reveal from '@/components/site/Reveal'
import { EASE, Eyebrow, OutlineLink, Rule, pad, shell, squareButton } from '@/components/site/primitives'
import type { ProductDetail } from './types'

type Variant = ProductDetail['variants'][number]
type ViewTab = '2d' | 'gallery' | 'interior'

const TABS: { key: ViewTab; label: string }[] = [
  { key: '2d', label: '2D Layout' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'interior', label: 'Interior View' },
]

function VariantPanel({
  variant,
  index,
  gallery,
  onClose,
}: {
  variant: Variant
  index: number
  gallery: string[]
  onClose: () => void
}) {
  const [tab, setTab] = useState<ViewTab>('2d')
  const [imageIndex, setImageIndex] = useState(0)

  const images =
    tab === '2d' ? [variant.variantImage] : tab === 'interior' ? [variant.variantInterior] : [variant.variantImage, ...gallery]
  const step = (dir: 1 | -1) => setImageIndex((i) => (i + dir + images.length) % images.length)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-1100 flex items-center justify-center bg-[#080808]/80 p-3 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${variant.variantName} variant details`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden bg-white text-black"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 border-b border-black/15 px-5 py-5 sm:px-8">
          <div className="min-w-0">
            <p className="text-[0.58rem] uppercase tracking-[0.24em] text-[#886c46]">Variant details / {pad(index + 1)}</p>
            <h3 className="mt-3 truncate text-[clamp(1.8rem,3.4vw,3.4rem)] uppercase leading-[0.85] tracking-[-0.065em]">
              {variant.variantName}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close variant details"
            className="group flex shrink-0 items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em]"
          >
            <span className="hidden sm:inline">Close</span>
            <span className="flex h-8 w-8 items-center justify-center border border-black/20 transition-colors group-hover:border-[#886c46]">
              <X className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
            </span>
          </button>
        </div>

        <div role="tablist" className="projects-rail flex gap-7 overflow-x-auto border-b border-black/15 px-5 sm:px-8">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => {
                setTab(t.key)
                setImageIndex(0)
              }}
              className={`relative shrink-0 whitespace-nowrap py-4 text-[0.62rem] uppercase tracking-[0.2em] transition-colors ${
                tab === t.key ? 'text-black' : 'text-black/45 hover:text-black'
              }`}
            >
              {t.label}
              <span className={`absolute bottom-0 left-0 h-px bg-[#886c46] transition-all duration-300 ${tab === t.key ? 'w-full' : 'w-0'}`} />
            </button>
          ))}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-8">
          <div className="border border-black/15 p-[5px]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#f3ede3] sm:aspect-[16/9]">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={`${tab}-${imageIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <FallbackImage
                    src={images[imageIndex]}
                    alt={`${variant.variantName}, ${TABS.find((t) => t.key === tab)?.label} ${imageIndex + 1}`}
                    fill
                    sizes="(min-width: 1152px) 1100px, 95vw"
                    className={tab === '2d' ? 'object-contain' : 'object-cover'}
                  />
                </motion.div>
              </AnimatePresence>
              <span className="pointer-events-none absolute left-5 top-5 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">
                {pad(imageIndex + 1)} / {pad(images.length)}
              </span>
            </div>
          </div>
          {images.length > 1 && (
            <div className="mt-3 flex items-center gap-3">
              <button type="button" aria-label="Previous image" onClick={() => step(-1)} className={squareButton}>
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="projects-rail flex min-w-0 flex-1 gap-2 overflow-x-auto">
                {images.map((src, i) => (
                  <button
                    key={`${src}-${i}`}
                    type="button"
                    aria-label={`Show image ${i + 1}`}
                    onClick={() => setImageIndex(i)}
                    className={`relative aspect-[4/3] h-10 shrink-0 overflow-hidden border transition-opacity ${
                      i === imageIndex ? 'border-[#886c46]' : 'border-black/10 opacity-55 hover:opacity-100'
                    }`}
                  >
                    <FallbackImage src={src} alt="" fill sizes="56px" className="object-cover" />
                  </button>
                ))}
              </div>
              <button type="button" aria-label="Next image" onClick={() => step(1)} className={squareButton}>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-black/15 px-5 py-5 sm:flex-row sm:items-center sm:px-8">
          <p className="text-[0.7rem] leading-[1.6] text-black/50">All views are representative. Actual finishes may vary.</p>
          <OutlineLink href="/contact-us">Enquire about this variant</OutlineLink>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Variants({ product }: { product: ProductDetail }) {
  const [active, setActive] = useState<number | null>(null)
  const variants = product.variants

  return (
    <section className="border-t border-black/15 bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        {variants.length > 0 && (
          <>
            <div className="mb-16 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
              <div>
                <Eyebrow className="mb-8">Variants / {pad(variants.length)}</Eyebrow>
                <h2 className="text-[clamp(2.8rem,6.4vw,7.5rem)] uppercase leading-[0.78] tracking-[-0.075em]">
                  <span className="block">Available</span>
                  <span className="ml-[10vw] block text-[#886c46]">variants.</span>
                </h2>
              </div>
              <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70 md:pb-2">
                Choose from our carefully curated range of {product.name} variants, each tailored to different needs and
                preferences.
              </p>
            </div>

            <div className={`grid gap-4 sm:grid-cols-2 ${variants.length % 4 === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
              {variants.map((variant, i) => (
                <Reveal key={`${variant.variantName}-${i}`} delay={Math.min(i, 4) * 0.06} className="h-full">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex h-full w-full flex-col overflow-hidden border border-black/15 bg-[#f3ede3] text-left transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(49,38,25,0.12)] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <FallbackImage
                        src={variant.variantImage}
                        alt={variant.variantName}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                      <span className="absolute left-5 top-5 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">
                        {pad(i + 1)}
                      </span>
                    </div>
                    <div className="flex w-full flex-1 flex-col p-6 sm:p-7">
                      <Rule className="mb-5" />
                      <span className="text-[clamp(1.8rem,2.8vw,3rem)] uppercase leading-[0.85] tracking-[-0.065em]">
                        {variant.variantName}
                      </span>
                      <span className="mt-6 flex items-center justify-between border-t border-black/15 pt-4 text-[0.58rem] uppercase tracking-[0.2em] text-black/45 transition-colors group-hover:text-[#886c46]">
                        View details
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </>
        )}

        <div className={`${variants.length > 0 ? 'mt-16 border-t border-black/15 pt-8' : ''} flex flex-col items-start justify-between gap-6 md:flex-row md:items-center`}>
          <p className="max-w-[40rem] text-[0.95rem] leading-[1.6] text-black/70">
            Don&apos;t see what you&apos;re looking for?{' '}
            <em className="text-[#886c46]">Every variant above is fully customisable</em> — reach out and we&apos;ll craft
            something built precisely around your requirements.
          </p>
          <OutlineLink href="/contact-us">Get a quote</OutlineLink>
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <VariantPanel
            key={active}
            variant={variants[active]}
            index={active}
            gallery={product.gallery}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
