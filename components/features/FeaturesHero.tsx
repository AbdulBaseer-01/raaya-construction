import FallbackImage from '@/components/site/FallbackImage'
import Reveal from '@/components/site/Reveal'
import { shell } from '@/components/site/primitives'

/* Full-bleed photographic opener, the same treatment as the Home hero's second slide. */
export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-white">
      <FallbackImage
        src="/products/prefab/structures/main.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className={`${shell} relative flex min-h-[calc(100svh-68px)] flex-col justify-end gap-12 pb-16 pt-28 md:pb-24`}>
        <Reveal>
          <p className="mb-10 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-white/70">
            <span className="h-px w-10 shrink-0 bg-[#886c46]" />
            Features
          </p>
          <h1 className="text-[clamp(3.2rem,9vw,10rem)] uppercase leading-[0.78] tracking-[-0.075em]">
            <span className="block">Built</span>
            <span className="ml-[10vw] block">different.</span>
            <span className="ml-[4vw] block text-[#886c46]">Engineered</span>
            <span className="ml-[14vw] block text-[#886c46]">to last.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-6 border-t border-white/25 pt-8 md:ml-[10%] md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p className="max-w-[34rem] text-[clamp(1.05rem,1.4vw,1.35rem)] leading-[1.45] tracking-[-0.015em] text-white/85">
            Build premium, sustainable, modular structures in just days. Designed for performance, built for the future.
          </p>
          <span className="text-[0.58rem] uppercase tracking-[0.22em] text-white/55">Scroll to explore</span>
        </Reveal>
      </div>
    </section>
  )
}
