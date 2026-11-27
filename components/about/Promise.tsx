import FallbackImage from '@/components/site/FallbackImage'
import Reveal from '@/components/site/Reveal'
import { shell } from '@/components/site/primitives'

/* Full-bleed image band, the same treatment as the Home hero's second slide. */
export default function Promise() {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-white">
      <FallbackImage src="/main.webp" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/60" />

      <div className={`${shell} relative flex min-h-[90vh] flex-col justify-end gap-14 py-24 md:py-32`}>
        <Reveal>
          <p className="mb-10 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-white/65">
            <span className="h-px w-10 shrink-0 bg-[#886c46]" />
            Our commitment / 02
          </p>
          <h2 className="text-[clamp(2.6rem,5vw,6.2rem)] uppercase leading-[0.82] tracking-[-0.035em]">
            <span className="block">Our</span>
            <span className="ml-[10vw] block text-[#886c46]">promise.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-6 border-t border-white/25 pt-8 md:ml-[10%] md:grid-cols-[minmax(4rem,0.25fr)_minmax(0,1.75fr)]">
          <span className="text-[0.85rem] text-white/70">02</span>
          <p className="max-w-[46rem] text-[clamp(1rem,1.3vw,1.25rem)] leading-[1.6] tracking-[-0.01em] text-white/85 md:border-l md:border-white/25 md:pl-8">
            At TEXO PREFAB WORLD, our promise is simple — to deliver structures that stand strong, age beautifully, and
            exceed expectations. Every site office, modular home, cabin and custom-built space we create is engineered
            with precision, built using high-quality materials, and designed for long-term durability. We commit to
            transparent processes, timely delivery, and uncompromising craftsmanship, ensuring that what we build for you
            is not just a structure, but a space you can truly rely on for years to come.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
