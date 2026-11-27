'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Lightbox from './Lightbox'
import FallbackImage from '@/components/site/FallbackImage'
import Reveal from '@/components/site/Reveal'
import { Eyebrow, pad, shell } from '@/components/site/primitives'
import type { ProductDetail } from './types'

export default function Gallery({ product }: { product: ProductDetail }) {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const images = product.gallery
  if (images.length === 0) return null

  return (
    <section className="border-t border-black/15 bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow className="mb-8">Gallery / {pad(images.length)} images</Eyebrow>
            <h2 className="text-[clamp(2.6rem,5vw,6.2rem)] uppercase leading-[0.82] tracking-[-0.035em]">
              <span className="block">Explore</span>
              <span className="ml-[10vw] block text-[#886c46]">in detail.</span>
            </h2>
          </div>
          <p className="text-[0.58rem] uppercase tracking-[0.22em] text-black/50 md:pb-2">
            {pad(images.length)} images / {product.name}
          </p>
        </div>

        <Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {images.slice(0, 5).map((image, i) => (
              <button
                key={`${image}-${i}`}
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Open ${product.name} image ${i + 1}`}
                className={`group relative aspect-square overflow-hidden bg-[#f3ede3] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46] ${
                  i === 0 ? 'col-span-2 md:row-span-2' : ''
                }`}
              >
                <FallbackImage
                  src={image}
                  alt={`${product.name} ${i + 1}`}
                  fill
                  sizes={i === 0 ? '(min-width: 768px) 45vw, 100vw' : '(min-width: 768px) 22vw, 50vw'}
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                <span className="absolute left-4 top-4 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">
                  {pad(i + 1)}
                </span>
                <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white mix-blend-difference transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                {i === 0 && (
                  <span className="absolute bottom-4 left-4 bg-white px-3 py-2 text-[0.55rem] uppercase tracking-[0.2em] text-black">
                    {product.category}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <Lightbox
        images={images}
        index={lightbox}
        title={product.name}
        onChange={setLightbox}
        onClose={() => setLightbox(null)}
      />
    </section>
  )
}
