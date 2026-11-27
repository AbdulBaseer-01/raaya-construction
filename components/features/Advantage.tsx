import { ClipboardCheck, Factory, Hammer, Handshake, Move, Plug, Recycle, Timer } from 'lucide-react'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, Rule, pad, shell } from '@/components/site/primitives'

const advantages = [
  {
    icon: Plug,
    title: 'Plug & Play Construction',
    body: 'Modular units arrive fully finished. Just connect and start using them.',
  },
  {
    icon: ClipboardCheck,
    title: 'Complete Turnkey Experience',
    body: 'From design to delivery to handover, it’s all handled by Texo.',
  },
  {
    icon: Factory,
    title: 'Precision-Crafted in Smart Factories',
    body: 'Engineered off-site under controlled conditions for consistent quality.',
  },
  {
    icon: Timer,
    title: 'Speed Meets Your Style',
    body: 'Drawings in 48 hours and about 10 days in the factory, so you move in weeks sooner than with a site-built structure.',
  },
  {
    icon: Move,
    title: 'Scalable. Flexible. Mobile.',
    body: 'Easily relocate, expand, or reconfigure as life evolves.',
  },
  {
    icon: Handshake,
    title: 'Global-Grade Partners, Local Execution',
    // TODO(Texo): name the brands Texo actually uses once confirmed (brief, section 18).
    body: 'We use materials from trusted Indian and global brands, specified in every quote.',
  },
  {
    icon: Hammer,
    title: 'Built to Last. Designed to Impress.',
    body: 'Robust structural integrity paired with refined architectural finishes.',
  },
  {
    icon: Recycle,
    title: 'Sustainable & Reusable',
    body: 'Made from recyclable materials with long-term reuse in mind.',
  },
]

export default function Advantages() {
  return (
    <section className="border-t border-black/15 bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
          <div>
            <Eyebrow className="mb-8">Why choose Texo / 03</Eyebrow>
            <DisplayHeading lines={['The Texo', 'prefab', 'advantage.']} />
          </div>
          <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70 md:pb-2">
            Eight reasons India&apos;s leading developers and businesses choose Texo.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} delay={(i % 4) * 0.06} className="h-full">
              <article className="group flex h-full flex-col border border-black/15 bg-[#f3ede3] p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(49,38,25,0.12)] sm:p-7">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-[0.65rem] tracking-[0.18em] text-black/50">{pad(i + 1)}</span>
                  <adv.icon className="h-5 w-5 shrink-0 text-[#886c46]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <Rule className="mb-5 mt-6" />
                <h3 className="text-[clamp(1.45rem,1.9vw,2.1rem)] uppercase leading-[0.9] tracking-[-0.06em] transition-colors duration-300 group-hover:text-[#886c46]">
                  {adv.title}
                </h3>
                <p className="mt-auto pt-8 text-[0.85rem] leading-[1.65] text-black/65">{adv.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
