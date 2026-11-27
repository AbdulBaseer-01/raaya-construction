import { productCategories, type ProductCategory } from '@/lib/productCategories'
import ProductCard from './ProductCard'
import FallbackImage from '@/components/site/FallbackImage'
import Reveal from '@/components/site/Reveal'
import CustomCta from './CustomCta'
import Breadcrumb from '@/components/site/Breadcrumb'
import { ArrowLink, Eyebrow, hasLongWord, pad, shell } from '@/components/site/primitives'

export default function CategoryView({ category }: { category: ProductCategory }) {
  const index = productCategories.findIndex((c) => c.slug === category.slug)
  const [first, ...rest] = category.name.split(' ')

  const stats = [
    { value: pad(category.products.length), label: 'Products' },
    { value: '100%', label: 'Customizable' },
    { value: 'Pan India', label: 'Delivery' },
    { value: '5 Years', label: 'Warranty' },
  ]

  return (
    <>
      <Breadcrumb trail={[{ label: 'Products', href: '/products' }, { label: category.name }]} />

      {/* ── Header ── */}
      <section className="bg-white">
        <div className={`${shell} grid gap-10 pb-12 pt-14 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16 md:pb-16 md:pt-20`}>
          <div>
            <Eyebrow className="mb-10">
              Collection / {pad(index + 1)} of {pad(productCategories.length)}
            </Eyebrow>
            <h1
              lang="en"
              className={`break-words uppercase leading-[0.82] tracking-[-0.035em] ${
                hasLongWord(category.name) ? 'text-[clamp(2.1rem,6.4vw,7.2rem)]' : 'text-[clamp(3.2rem,8vw,9rem)]'
              }`}
            >
              <span className="block">{first}</span>
              {rest.length > 0 && <span className="ml-[10vw] block text-[#886c46]">{rest.join(' ')}</span>}
            </h1>
          </div>
          <div className="md:pb-2">
            <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70">{category.description}</p>
            <ArrowLink href="#range" className="mt-8">
              View {pad(category.products.length)} products
            </ArrowLink>
          </div>
        </div>

        <div className={shell}>
          <Reveal>
            <div className="relative aspect-[4/3] border border-black/15 p-[5px] sm:aspect-[16/8] lg:aspect-[16/7]">
              <div className="relative h-full w-full overflow-hidden bg-[#f3ede3]">
                <FallbackImage src={category.cover} alt={category.name} fill priority sizes="90vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/[0.035]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── About the series ── */}
      <section className="bg-white">
        <div className={`${shell} grid gap-12 py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-32`}>
          <div>
            <Eyebrow className="mb-8">{category.name}</Eyebrow>
            <h2 className="text-[clamp(2.6rem,5vw,6.2rem)] uppercase leading-[0.8] tracking-[-0.035em]">
              <span className="block">About</span>
              <span className="ml-[6vw] block text-[#886c46]">this series.</span>
            </h2>
          </div>
          <div>
            <Reveal>
              <p className="text-[clamp(1.05rem,1.5vw,1.45rem)] leading-[1.55] tracking-[-0.015em] text-black/80">
                {category.longDescription}
              </p>
            </Reveal>
            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-black/70 pt-5">
                  <dt className="text-[0.58rem] uppercase tracking-[0.22em] text-black/45">{stat.label}</dt>
                  <dd className="mt-3 text-[clamp(1.6rem,2.4vw,2.4rem)] uppercase leading-[0.9] tracking-[-0.06em]">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="range" className="scroll-mt-[68px] border-t border-black/15 bg-white">
        <div className={`${shell} py-20 md:py-28`}>
          <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end md:mb-16">
            <div>
              <Eyebrow className="mb-8">{pad(category.products.length)} products in this series</Eyebrow>
              <h2 className="text-[clamp(2.6rem,5vw,6.2rem)] uppercase leading-[0.8] tracking-[-0.035em]">
                <span className="block">Explore</span>
                <span className="ml-[6vw] block text-[#886c46]">the series.</span>
              </h2>
            </div>
            <ArrowLink href="/products">All collections</ArrowLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product, i) => (
              <Reveal key={product.name} delay={Math.min(i, 5) * 0.05} className="h-full min-w-0">
                <ProductCard name={product.name} image={product.image} category={category.name} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CustomCta
        eyebrow="Bespoke / tailored"
        lines={['Need a', 'custom', 'solution?']}
        body="Every structure can be tailored to your exact specifications and site requirements."
      />
    </>
  )
}
