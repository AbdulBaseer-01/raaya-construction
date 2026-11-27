import FramedImage from '@/components/site/FramedImage'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, shell } from '@/components/site/primitives'

export default function OurTeam() {
  return (
    <section className="border-t border-black/15 bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-16">
          <div>
            <Eyebrow className="mb-8">The people behind every build / 05</Eyebrow>
            <DisplayHeading lines={['One team.', 'One standard.']} className="text-[clamp(2.6rem,5vw,6.2rem)]" />
          </div>
          <div className="max-w-[28rem] space-y-4 text-[0.85rem] leading-[1.8] text-black/70 md:pb-2">
            <p>
              Behind every precision-cut panel, every on-time delivery, and every client who moves in ahead of schedule —
              there is a team that refuses to cut corners. At Texo, our people are our product.
            </p>
            <p>
              Engineers, fabricators, logistics specialists, and client partners — united by a single obsession: building
              things that last. We hire for character, train for craft, and measure ourselves by the structures we leave
              behind.
            </p>
          </div>
        </div>

        <Reveal className="group">
          <FramedImage
            src="/products-hero.png"
            alt="Texo Prefab team"
            sizes="(min-width: 1600px) 1440px, 90vw"
            aspect="aspect-[4/3] md:aspect-[16/9]"
            imageClassName="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="mt-3 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.22em] text-black/50">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#886c46]" />
            Team Texo · Hyderabad, India
          </div>
        </Reveal>
      </div>
    </section>
  )
}
