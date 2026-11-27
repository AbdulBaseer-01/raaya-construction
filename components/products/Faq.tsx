import Accordion from '@/components/site/Accordion'
import { Eyebrow, pad, shell } from '@/components/site/primitives'
import type { ProductDetail } from './types'

export default function Faq({ product }: { product: ProductDetail }) {
  if (product.faq.length === 0) return null

  return (
    <section className="border-t border-black/15 bg-white">
      <div className={`${shell} grid gap-14 py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-36`}>
        <div className="md:sticky md:top-[calc(68px+4rem)] md:self-start">
          <Eyebrow className="mb-8">FAQ / {pad(product.faq.length)}</Eyebrow>
          <h2 className="text-[clamp(2.6rem,5vw,6.2rem)] uppercase leading-[0.8] tracking-[-0.035em]">
            <span className="block">Frequently</span>
            <span className="ml-[6vw] block text-[#886c46]">asked</span>
            <span className="ml-[2vw] block">questions.</span>
          </h2>
          <p className="mt-10 max-w-[21rem] text-[0.82rem] leading-[1.8] text-black/55">
            Everything you need to know about our {product.name}.
          </p>
        </div>

        <Accordion items={product.faq} />
      </div>
    </section>
  )
}
