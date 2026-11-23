'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import FallbackImage from '@/components/site/FallbackImage'
import { EASE, Eyebrow, pad, shell } from '@/components/site/primitives'

/* ─────────────────────────────────────────────
   TYPES (imported by lib/productsData.ts)
───────────────────────────────────────────── */
export interface TechSpecRow {
  label: string
  value: string
}

export interface TechSpecSection {
  /** Display images for this tab */
  images: string[]
  /** Spec rows shown beside the image */
  specs: TechSpecRow[]
}

export type TechSpecsData = {
  architecture: TechSpecSection
  exteriorWallRoof: TechSpecSection
  interiorWallCeiling: TechSpecSection
  interiorExteriorFloor: TechSpecSection
  doorsSanitaryElectrical: TechSpecSection
  transitPaymentWarranty: TechSpecSection
  layout2D: TechSpecSection
}

const TABS: { key: keyof TechSpecsData; label: string }[] = [
  { key: 'architecture', label: 'Architecture' },
  { key: 'exteriorWallRoof', label: 'Exterior Wall & Roof' },
  { key: 'interiorWallCeiling', label: 'Interior Wall & Ceiling' },
  { key: 'interiorExteriorFloor', label: 'Interior & Exterior Floor' },
  { key: 'doorsSanitaryElectrical', label: 'Doors, Sanitary & Electrical' },
  { key: 'transitPaymentWarranty', label: 'Transit, Payment & Warranty' },
  { key: 'layout2D', label: '2D Layout' },
]

const squareButton =
  'flex h-10 w-10 shrink-0 items-center justify-center border border-black/20 transition-colors hover:border-[#886c46] hover:text-[#886c46]'

export default function TechSpecs({ name, techSpecs }: { name: string; techSpecs: TechSpecsData }) {
  const [activeTab, setActiveTab] = useState<keyof TechSpecsData>('architecture')
  const [imgIndex, setImgIndex] = useState(0)

  const tabIndex = TABS.findIndex((t) => t.key === activeTab)
  const { images, specs } = techSpecs[activeTab]
  const label = TABS[tabIndex].label

  const switchTab = (key: keyof TechSpecsData) => {
    setActiveTab(key)
    setImgIndex(0)
  }
  const step = (dir: 1 | -1) => setImgIndex((i) => (i + dir + images.length) % images.length)

  return (
    <section className="border-t border-black/15 bg-[#f5f2ec]">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
          <div>
            <Eyebrow className="mb-8">Specifications / {pad(TABS.length)}</Eyebrow>
            <h2 className="text-[clamp(2.8rem,6.4vw,7.5rem)] uppercase leading-[0.78] tracking-[-0.075em]">
              <span className="block">Technical</span>
              <span className="ml-[10vw] block text-[#886c46]">specifications.</span>
            </h2>
          </div>
          <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70 md:pb-2">
            Explore detailed material, structural, and layout specifications across every aspect of the project.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2.2fr)] lg:gap-14">
          {/* ── Tabs ── */}
          <div role="tablist" aria-label={`${name} specification categories`} className="projects-rail -mx-6 flex overflow-x-auto px-6 sm:-mx-10 sm:px-10 md:-mx-[5vw] md:px-[5vw] lg:mx-0 lg:block lg:overflow-visible lg:border-t lg:border-black/15 lg:px-0">
            {TABS.map((tab, i) => {
              const active = tab.key === activeTab
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => switchTab(tab.key)}
                  className={`group relative flex shrink-0 items-center gap-4 whitespace-nowrap border-b py-4 pr-6 text-left transition-colors lg:w-full lg:justify-between lg:whitespace-normal lg:pr-0 ${
                    active ? 'border-[#886c46] text-[#886c46] lg:border-black/15' : 'border-black/15 text-black/55 hover:text-black'
                  }`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-[0.58rem] tracking-[0.18em] text-black/40">{pad(i + 1)}</span>
                    <span className="text-[0.82rem] uppercase tracking-[0.06em] lg:text-[0.95rem]">{tab.label}</span>
                  </span>
                  <ArrowUpRight
                    className={`hidden h-4 w-4 shrink-0 transition-all duration-300 lg:block ${
                      active ? 'translate-x-0 opacity-100' : 'opacity-30 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* ── Panel ── */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              role="tabpanel"
              aria-label={label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid min-w-0 gap-10 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]"
            >
              {images.length > 0 && (
                <div className="min-w-0">
                  <div className="border border-black/15 bg-white p-[5px]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#ebe4d8]">
                      <AnimatePresence initial={false} mode="popLayout">
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0"
                        >
                          <FallbackImage
                            src={images[imgIndex]}
                            alt={`${name}, ${label} ${imgIndex + 1}`}
                            fill
                            sizes="(min-width: 1280px) 38vw, (min-width: 1024px) 60vw, 100vw"
                            className="object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                      <span className="pointer-events-none absolute left-5 top-5 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">
                        {pad(imgIndex + 1)} / {pad(images.length)}
                      </span>
                    </div>
                  </div>
                  {images.length > 1 && (
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <span className="text-[0.58rem] uppercase tracking-[0.22em] text-black/50">{label}</span>
                      <div className="flex gap-2">
                        <button type="button" aria-label="Previous image" onClick={() => step(-1)} className={squareButton}>
                          <ArrowLeft className="h-4 w-4" />
                        </button>
                        <button type="button" aria-label="Next image" onClick={() => step(1)} className={squareButton}>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {specs.length > 0 && (
                <div className="min-w-0">
                  <p className="mb-4 text-[0.58rem] uppercase tracking-[0.22em] text-[#886c46]">
                    {pad(tabIndex + 1)} / {label}
                  </p>
                  <dl className="border-b border-black/15">
                    {specs.map((row) => (
                      <div
                        key={row.label}
                        className="grid grid-cols-[minmax(6.5rem,0.8fr)_minmax(0,1.2fr)] gap-4 border-t border-black/15 py-3.5"
                      >
                        <dt className="text-[0.58rem] uppercase leading-[1.9] tracking-[0.2em] text-black/50">{row.label}</dt>
                        <dd className="text-[0.85rem] leading-[1.55]">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
