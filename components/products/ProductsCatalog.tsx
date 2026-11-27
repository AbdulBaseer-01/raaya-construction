'use client'

import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { productCategories, totalProductCount } from '@/lib/productCategories'
import ProductCard from './ProductCard'
import FallbackImage from '@/components/site/FallbackImage'
import Reveal from '@/components/site/Reveal'
import CustomCta from './CustomCta'
import { ArrowLink, Eyebrow, hasLongWord, pad, shell } from '@/components/site/primitives'

const ALL = 'All Products'

export default function ProductsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState(ALL)
  const [searchQuery, setSearchQuery] = useState('')

  const query = searchQuery.trim().toLowerCase()

  const visible = useMemo(
    () =>
      productCategories
        .filter((category) => selectedCategory === ALL || category.name === selectedCategory)
        .map((category) => ({
          category,
          index: productCategories.indexOf(category),
          products: category.products.filter((p) => p.name.toLowerCase().includes(query)),
        }))
        .filter((entry) => entry.products.length > 0),
    [selectedCategory, query],
  )

  const resultCount = visible.reduce((sum, entry) => sum + entry.products.length, 0)

  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-black/15 bg-white">
        <div className={`${shell} grid gap-14 pb-16 pt-14 md:pb-24 md:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20`}>
          <div>
            <Eyebrow className="mb-10">The collection / {pad(productCategories.length)} categories</Eyebrow>
            <h1 className="text-[clamp(3.2rem,8.2vw,9rem)] uppercase leading-[0.82] tracking-[-0.035em]">
              <span className="block">Premium</span>
              <span className="ml-[10vw] block text-[#886c46]">Prefab</span>
              <span className="ml-[4vw] block">Solutions.</span>
            </h1>

            <div className="mt-12 grid gap-10 md:ml-[10%] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
              <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70">
                Explore our comprehensive range of modular structures, engineered for excellence and designed to exceed
                expectations in every environment.
              </p>

              <div>
                <label htmlFor="product-search" className="text-[0.58rem] uppercase tracking-[0.25em] text-black/55">
                  Search products
                </label>
                <div className="relative mt-1 flex items-center border-b border-black/25 transition-colors focus-within:border-[#886c46]">
                  <Search className="h-4 w-4 shrink-0 text-black/40" aria-hidden="true" />
                  <input
                    id="product-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Cabin, office, toilet…"
                    className="w-full min-w-0 bg-transparent px-3 py-4 text-[0.9rem] outline-none placeholder:text-black/30 [&::-webkit-search-cancel-button]:hidden"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                      className="flex h-7 w-7 shrink-0 items-center justify-center border border-black/20 transition-colors hover:border-[#886c46]"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[26rem] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] border border-black/15 p-[5px]">
              <div className="relative h-full w-full overflow-hidden bg-[#f3ede3]">
                <FallbackImage
                  src="/products/woodenseries/arcpod/arc-pod-main.webp"
                  alt="Arc Pods from the Resorts &amp; Getaways range"
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 border border-white/30" />
              </div>
            </div>
            <div className="mt-3 flex items-start justify-between gap-5 text-[0.58rem] uppercase tracking-[0.22em] text-black/50">
              <span>Resorts &amp; Getaways / Arc Pods</span>
              <span>
                {totalProductCount} products / {pad(productCategories.length)} categories
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category filter ── */}
      <nav aria-label="Filter products by category" className="sticky top-[68px] z-30 border-b border-black/15 bg-white">
        <div className={`${shell} flex items-center gap-6`}>
          <div className="projects-rail -mx-6 flex min-w-0 flex-1 gap-7 overflow-x-auto px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0">
            {[ALL, ...productCategories.map((c) => c.name)].map((name) => {
              const active = selectedCategory === name
              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedCategory(name)}
                  className={`relative shrink-0 whitespace-nowrap py-5 text-[0.62rem] uppercase tracking-[0.2em] transition-colors focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46] ${
                    active ? 'text-black' : 'text-black/45 hover:text-black'
                  }`}
                >
                  {name}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#886c46] transition-all duration-300 ${active ? 'w-full' : 'w-0'}`}
                  />
                </button>
              )
            })}
          </div>
          <span className="hidden shrink-0 text-[0.58rem] uppercase tracking-[0.22em] text-black/45 lg:block" aria-live="polite">
            {pad(resultCount)} shown
          </span>
        </div>
      </nav>

      {/* ── Collections ── */}
      <div className="bg-white">
        {visible.length === 0 && (
          <div className={`${shell} py-24 md:py-32`}>
            <p className="text-[clamp(2.2rem,4vw,4.5rem)] uppercase leading-[0.86] tracking-[-0.065em]">
              No products match <span className="text-[#886c46]">&ldquo;{searchQuery.trim()}&rdquo;</span>
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory(ALL)
              }}
              className="mt-8 border-b border-black/35 pb-2 text-[0.62rem] uppercase tracking-[0.2em] transition-colors hover:border-[#886c46] hover:text-[#886c46]"
            >
              Reset filters
            </button>
          </div>
        )}

        {visible.map(({ category, index, products }) => (
          <section key={category.slug} id={category.slug} aria-labelledby={`${category.slug}-title`} className="border-b border-black/15">
            <div className={`${shell} py-20 md:py-28`}>
              <Reveal className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)] md:items-end md:gap-16">
                <div>
                  <Eyebrow className="mb-8">Collection / {pad(index + 1)}</Eyebrow>
                  <h2
                    id={`${category.slug}-title`}
                    lang="en"
                    // Long words ("Accommodation", "Pre-Engineered") get a smaller size so they fit a phone screen.
                    className={`break-words uppercase leading-[0.8] tracking-[-0.035em] ${
                      hasLongWord(category.name) ? 'text-[clamp(1.9rem,4.8vw,5.6rem)]' : 'text-[clamp(2.6rem,5.6vw,6.5rem)]'
                    }`}
                  >
                    {category.name}
                  </h2>
                </div>
                <div className="md:pb-1">
                  <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70">{category.description}</p>
                  <div className="mt-6 flex max-w-[23rem] items-center justify-between gap-4 border-t border-black/15 pt-4">
                    <span className="text-[0.58rem] uppercase tracking-[0.22em] text-black/45">
                      {pad(category.products.length)} products
                    </span>
                    <ArrowLink href={`/products/${category.slug}`}>View all</ArrowLink>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, i) => (
                  <Reveal key={product.name} delay={Math.min(i, 5) * 0.05} className="h-full min-w-0">
                    <ProductCard name={product.name} image={product.image} category={category.name} index={i} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <CustomCta
        eyebrow="Bespoke / 07"
        lines={['Can’t find', 'what you’re', 'looking for?']}
        body="Our team specializes in custom solutions tailored to your specific requirements."
      />
    </>
  )
}
