import ProductCard from './ProductCard'
import Reveal from '@/components/site/Reveal'
import { ArrowLink, Eyebrow, hasLongWord, shell } from '@/components/site/primitives'
import type { ProductDetail } from './types'

export default function RelatedProducts({
  category,
  categoryHref,
  products,
}: {
  category: string
  categoryHref: string
  products: ProductDetail[]
}) {
  if (products.length === 0) return null

  return (
    <section className="border-t border-black/15 bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
          <div>
            <Eyebrow className="mb-8">More like this</Eyebrow>
            <h2
              className={`break-words uppercase leading-[0.78] tracking-[-0.075em] ${
                hasLongWord(category) ? 'text-[clamp(2.3rem,5.6vw,6.5rem)]' : 'text-[clamp(2.8rem,6.4vw,7.5rem)]'
              }`}
            >
              <span className="block">Other</span>
              <span className="ml-[10vw] block text-[#886c46]">{category}</span>
            </h2>
          </div>
          <div className="md:pb-2">
            <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70">
              Explore more from our {category.toLowerCase()} collection.
            </p>
            <ArrowLink href={categoryHref} className="mt-8">
              View all {category}
            </ArrowLink>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product, i) => (
            <Reveal key={product.name} delay={i * 0.06} className="h-full">
              <ProductCard name={product.name} image={product.gallery[0]} category={product.category} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
