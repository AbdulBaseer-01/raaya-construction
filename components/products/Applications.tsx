import FallbackImage from '@/components/site/FallbackImage'
import Reveal from '@/components/site/Reveal'
import { Eyebrow, Rule, pad, shell } from '@/components/site/primitives'
import type { ProductDetail } from './types'
import { stripListNumber } from '@/lib/claims'

export default function Applications({ product }: { product: ProductDetail }) {
  const applications = product.applications ?? []
  if (applications.length === 0) return null

  const columns =
    applications.length % 4 === 0 ? 'lg:grid-cols-4' : applications.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'

  return (
    <section className="border-t border-black/15 bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
          <div>
            <Eyebrow className="mb-8">Applications / {pad(applications.length)}</Eyebrow>
            <h2 className="text-[clamp(2.6rem,5vw,6.2rem)] uppercase leading-[0.82] tracking-[-0.035em]">
              <span className="block">Operational</span>
              <span className="ml-[10vw] block text-[#886c46]">applications.</span>
            </h2>
          </div>
          <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70 md:pb-2">
            Discover how the {product.name} transforms diverse environments and use cases with innovative solutions.
          </p>
        </div>

        <div className={`grid gap-4 sm:grid-cols-2 ${columns}`}>
          {applications.map((app, i) => (
            <Reveal key={`${app.heading}-${i}`} delay={Math.min(i, 4) * 0.06} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden border border-black/15 bg-[#f3ede3]">
                <div className="relative aspect-[1.5] overflow-hidden">
                  <FallbackImage
                    src={app.image}
                    alt={stripListNumber(app.heading)}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                  <span className="absolute left-5 top-5 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">
                    {pad(i + 1)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <Rule className="mb-5" />
                  <h3 className="text-[clamp(1.5rem,2vw,2.2rem)] uppercase leading-[0.88] tracking-[-0.06em]">{stripListNumber(app.heading)}</h3>
                  <p className="mt-5 text-[0.82rem] leading-[1.7] text-black/65">{app.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
