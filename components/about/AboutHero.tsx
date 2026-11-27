import FramedImage from '@/components/site/FramedImage'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, shell } from '@/components/site/primitives'

export default function AboutHero() {
  return (
    <section className="border-b border-black/15 bg-white">
      <div className={`${shell} pb-16 pt-14 md:pb-24 md:pt-20`}>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow className="mb-10">About us / Texo Prefab World</Eyebrow>
            <DisplayHeading as="h1" lines={['About', 'us.']} className="text-[clamp(3.6rem,10vw,11rem)]" />
          </div>
          <p className="max-w-[26rem] text-[clamp(1.05rem,1.4vw,1.35rem)] leading-[1.45] tracking-[-0.015em] lg:pb-3">
            Premium prefab and modular buildings, designed and manufactured in Hyderabad since 2018.
          </p>
        </div>

        <Reveal className="mt-14 md:mt-20">
          <FramedImage
            src="/why.jpg"
            alt="Reception at the Texo Prefab World studio"
            priority
            sizes="(min-width: 1600px) 1440px, 90vw"
            aspect="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
            imageClassName="object-cover object-[center_42%]"
          />
          <div className="mt-3 flex items-start justify-between gap-5 text-[0.58rem] uppercase tracking-[0.22em] text-black/50">
            <span>Texo Prefab World / Hyderabad, India</span>
            <span>Est. 2018</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
