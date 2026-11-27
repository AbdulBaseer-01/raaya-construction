'use client'

import { useMemo, useRef, useState, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { LayoutGrid, Rows3, Search, X } from 'lucide-react'
import { CATEGORIES, SIZES, galleryItems } from '@/lib/galleryItems'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, outlineButton, pad, shell } from '@/components/site/primitives'
import { QUOTE_ANCHOR } from '@/lib/siteFacts'
import GalleryCard, { type GalleryLayout } from './GalleryCard'
import GalleryLightbox from './GalleryLightbox'

const tab = (active: boolean) =>
  `relative shrink-0 whitespace-nowrap py-4 text-left text-[0.62rem] uppercase tracking-[0.2em] transition-colors focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46] ${
    active ? 'text-black' : 'text-black/45 hover:text-black'
  }`

const Underline = ({ active }: { active: boolean }) => (
  <span className={`absolute bottom-0 left-0 h-px bg-[#886c46] transition-all duration-300 ${active ? 'w-full' : 'w-0'}`} />
)

const chip =
  'inline-flex items-center gap-2 border border-[#886c46]/40 px-3 py-1.5 text-[0.55rem] uppercase tracking-[0.18em] text-[#886c46] transition-colors hover:border-[#886c46] hover:bg-[#886c46]/10'

/* Masonry columns match the grid breakpoints: 1 / 2 (sm) / 3 (lg) / 4 (xl). */
const COLUMN_QUERIES: [string, number][] = [
  ['(min-width: 1280px)', 4],
  ['(min-width: 1024px)', 3],
  ['(min-width: 640px)', 2],
]
const subscribeColumns = (onChange: () => void) => {
  const lists = COLUMN_QUERIES.map(([query]) => window.matchMedia(query))
  lists.forEach((list) => list.addEventListener('change', onChange))
  return () => lists.forEach((list) => list.removeEventListener('change', onChange))
}
const currentColumns = () => COLUMN_QUERIES.find(([query]) => window.matchMedia(query).matches)?.[1] ?? 1

const categoryCount = (category: string) => galleryItems.filter((g) => g.category === category).length

/** Hero search, filters, results, category index and project viewer (they share one filter state). */
export default function GalleryExplorer() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeSize, setActiveSize] = useState('all')
  const [search, setSearch] = useState('')
  const [layout, setLayout] = useState<GalleryLayout>('masonry')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const columnCount = useSyncExternalStore(subscribeColumns, currentColumns, () => 1)

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return galleryItems.filter((item) => {
      const catMatch = activeCategory === 'All' || item.category === activeCategory
      const sizeMatch = activeSize === 'all' || item.size === activeSize
      const searchMatch =
        !search || item.title.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q) || item.location.toLowerCase().includes(q)
      return catMatch && sizeMatch && searchMatch
    })
  }, [activeCategory, activeSize, search])

  const filtersActive = activeCategory !== 'All' || activeSize !== 'all' || search !== ''
  const clearAll = () => {
    setActiveCategory('All')
    setActiveSize('all')
    setSearch('')
  }

  const jumpToCategory = (category: string) => {
    setActiveCategory(category)
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-black/15 bg-white">
        <div className={`${shell} grid gap-14 pb-16 pt-14 md:pb-24 md:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20`}>
          <div>
            <Eyebrow className="mb-10">Real projects · Real sites</Eyebrow>
            <DisplayHeading as="h1" lines={['Inspiration', 'gallery.']} className="text-[clamp(3rem,8.4vw,9.5rem)]" />
          </div>

          <div className="lg:pb-3">
            <p className="max-w-[26rem] text-[clamp(1.05rem,1.4vw,1.35rem)] leading-[1.45] tracking-[-0.015em]">
              Browse completed installations across India. Filter by structure type and size to find the exact match for
              your project vision.
            </p>
            <label htmlFor="gallery-search" className="mt-10 block text-[0.58rem] uppercase tracking-[0.25em] text-black/55">
              Search projects
            </label>
            <div className="relative mt-1 flex max-w-[26rem] items-center border-b border-black/25 transition-colors focus-within:border-[#886c46]">
              <Search className="h-4 w-4 shrink-0 text-black/40" aria-hidden="true" />
              <input
                id="gallery-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by name, use case, location..."
                className="w-full min-w-0 bg-transparent px-3 py-4 text-[0.9rem] outline-none placeholder:text-black/30 [&::-webkit-search-cancel-button]:hidden"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="flex h-7 w-7 shrink-0 items-center justify-center border border-black/20 transition-colors hover:border-[#886c46]"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
            <p className="mt-6 text-[0.58rem] uppercase tracking-[0.22em] text-black/50">
              {pad(galleryItems.length)} projects / {pad(CATEGORIES.length - 1)} categories
            </p>
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      <div ref={resultsRef} className="scroll-mt-[68px]" />
      <nav aria-label="Filter projects" className="z-30 border-b border-black/15 bg-white md:sticky md:top-[68px]">
        <div className={shell}>
          <div className="flex items-center gap-6 border-b border-black/10">
            <span className="hidden shrink-0 text-[0.55rem] uppercase tracking-[0.22em] text-black/40 xl:block">Category</span>
            <div className="projects-rail -mx-6 flex min-w-0 flex-1 gap-7 overflow-x-auto px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0">
              {CATEGORIES.map((cat) => (
                <button key={cat} type="button" aria-pressed={activeCategory === cat} onClick={() => setActiveCategory(cat)} className={tab(activeCategory === cat)}>
                  {cat}
                  <Underline active={activeCategory === cat} />
                </button>
              ))}
            </div>
            <div className="flex shrink-0 gap-1" role="group" aria-label="Layout">
              {([
                ['masonry', LayoutGrid, 'Masonry layout'],
                ['grid', Rows3, 'Grid layout'],
              ] as const).map(([value, Icon, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-label={label}
                  aria-pressed={layout === value}
                  onClick={() => setLayout(value)}
                  className={`flex h-9 w-9 items-center justify-center border transition-colors ${
                    layout === value ? 'border-[#886c46] text-[#886c46]' : 'border-black/15 text-black/45 hover:text-black'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden shrink-0 text-[0.55rem] uppercase tracking-[0.22em] text-black/40 xl:block">Size</span>
            <div className="projects-rail -mx-6 flex min-w-0 flex-1 gap-8 overflow-x-auto px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0">
              {SIZES.map((s) => (
                <button key={s.value} type="button" aria-pressed={activeSize === s.value} onClick={() => setActiveSize(s.value)} className={tab(activeSize === s.value)}>
                  {s.label}
                  {s.sub && <span className="mt-1 block text-[0.5rem] tracking-[0.16em] text-black/35">{s.sub}</span>}
                  <Underline active={activeSize === s.value} />
                </button>
              ))}
            </div>
            <span className="shrink-0 text-[0.58rem] uppercase tracking-[0.22em] text-black/45" aria-live="polite">
              <span className="text-[#886c46]">{pad(filtered.length)}</span> result{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </nav>

      {/* ── Results ── */}
      <section className="bg-white">
        <div className={`${shell} pb-24 pt-8 md:pb-36`}>
          {filtersActive && (
            <div className="mb-8 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[0.55rem] uppercase tracking-[0.22em] text-black/40">Active:</span>
              {activeCategory !== 'All' && (
                <button type="button" onClick={() => setActiveCategory('All')} className={chip}>
                  {activeCategory} <X className="h-3 w-3" />
                </button>
              )}
              {activeSize !== 'all' && (
                <button type="button" onClick={() => setActiveSize('all')} className={chip}>
                  {activeSize} <X className="h-3 w-3" />
                </button>
              )}
              {search && (
                <button type="button" onClick={() => setSearch('')} className={chip}>
                  &quot;{search}&quot; <X className="h-3 w-3" />
                </button>
              )}
              <button
                type="button"
                onClick={clearAll}
                className="ml-2 text-[0.55rem] uppercase tracking-[0.22em] text-black/45 underline underline-offset-4 transition-colors hover:text-[#886c46]"
              >
                Clear all
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="grid gap-8 py-16 md:grid-cols-[1fr_0.7fr] md:items-end md:py-24">
              <div>
                <Eyebrow className="mb-8">00 projects</Eyebrow>
                <h2 className="text-[clamp(2.4rem,5vw,5.5rem)] uppercase leading-[0.82] tracking-[-0.035em]">No projects in this category yet.</h2>
              </div>
              <div className="flex flex-col items-start gap-6">
                <Link href={QUOTE_ANCHOR} className={outlineButton}>
                  Tell us what you need → Get a quote
                </Link>
                {filtersActive && (
                  <button type="button" onClick={clearAll} className="text-[0.58rem] uppercase tracking-[0.22em] text-black/45 underline underline-offset-4 transition-colors hover:text-[#886c46]">
                    Clear filters
                  </button>
                )}
              </div>
            </div>
          ) : layout === 'masonry' ? (
            // Cards are dealt into columns left to right, so numbers read row by row (01, 02, 03…).
            <div className="flex items-start gap-4">
              {Array.from({ length: columnCount }, (_, column) => (
                <div key={column} className="flex min-w-0 flex-1 flex-col gap-4">
                  {filtered.map((item, i) =>
                    i % columnCount === column ? (
                      <Reveal key={item.id} delay={Math.min(i, 8) * 0.04}>
                        <GalleryCard item={item} index={i} layout={layout} onOpen={() => setLightboxIndex(i)} />
                      </Reveal>
                    ) : null,
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((item, i) => (
                <Reveal key={item.id} delay={Math.min(i, 8) * 0.04} className="h-full">
                  <GalleryCard item={item} index={i} layout={layout} onOpen={() => setLightboxIndex(i)} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Category index ── */}
      <section className="border-t border-black/15 bg-[#f5f2ec]">
        <div className={`${shell} py-24 md:py-36`}>
          <div className="mb-16">
            <Eyebrow className="mb-8">Browse by type / {pad(CATEGORIES.length - 1)}</Eyebrow>
            <DisplayHeading lines={['Jump to a', 'category.']} />
          </div>
          <div className="grid border-t border-black/70 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.filter((c) => c !== 'All').map((cat, i) => {
              const count = categoryCount(cat)
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => jumpToCategory(cat)}
                  className="group grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-3 border-b border-black/15 py-6 text-left focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46] sm:pr-8"
                >
                  <span className={`pt-1 text-[0.65rem] tracking-[0.18em] ${isActive ? 'text-[#886c46]' : 'text-black/40'}`}>{pad(i + 1)}</span>
                  <span>
                    <span
                      className={`block text-[clamp(1.5rem,2.2vw,2.4rem)] uppercase leading-[0.9] tracking-[-0.06em] transition-colors ${
                        isActive ? 'text-[#886c46]' : 'group-hover:text-[#886c46]'
                      }`}
                    >
                      {cat}
                    </span>
                    <span className="mt-3 block text-[0.58rem] uppercase tracking-[0.2em] text-black/45">
                      {count} project{count !== 1 ? 's' : ''}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <GalleryLightbox items={filtered} index={lightboxIndex} onChange={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
    </>
  )
}
