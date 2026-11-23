import { Crosshair, Eye, Sparkles } from 'lucide-react'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, Rule, shell } from '@/components/site/primitives'

const pillars = [
  {
    icon: Eye,
    label: 'Vision',
    headline: 'Driven by Vision',
    body: 'Every structure begins as an idea — a clearer way to build, a smarter use of space. We start with your ambitions and engineer toward them without compromise.',
    number: '01',
  },
  {
    icon: Crosshair,
    label: 'Precision',
    headline: 'Delivered with Precision',
    body: 'From factory floor to final bolt, tolerances are measured in millimetres. Our ISO 9001:2025-certified process ensures every module arrives flawless and on schedule.',
    number: '02',
  },
  {
    icon: Sparkles,
    label: 'Impact',
    headline: 'Designed for Impact',
    body: 'Lasting structures leave a mark — on communities, environments, and the people who inhabit them. We design with that responsibility at the forefront.',
    number: '03',
  },
]

export default function Vision() {
  return (
    <section className="bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        <Eyebrow className="mb-10">Our philosophy / 01</Eyebrow>
        <DisplayHeading
          lines={['Driven by vision.', 'Delivered with precision.', 'Designed for impact.']}
          className="text-[clamp(2.2rem,5.6vw,6.8rem)]"
        />

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col bg-[#f3ede3] p-6 sm:p-8">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-[0.58rem] uppercase tracking-[0.22em] text-black/45">
                    {pillar.label} / {pillar.number}
                  </span>
                  <pillar.icon className="h-5 w-5 shrink-0 text-[#886c46]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <Rule className="mb-5 mt-1" />
                <h3 className="text-[clamp(1.8rem,2.6vw,3rem)] uppercase leading-[0.86] tracking-[-0.065em] transition-colors duration-300 group-hover:text-[#886c46]">
                  {pillar.headline}
                </h3>
                <div className="mt-auto pt-8">
                  <p className="border-t border-black/70 pt-5 text-[0.85rem] leading-[1.7] text-black/65">{pillar.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
