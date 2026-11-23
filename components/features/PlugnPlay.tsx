import { Factory, Ruler, ShieldCheck, Zap } from 'lucide-react'
import FramedImage from '@/components/site/FramedImage'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, shell } from '@/components/site/primitives'

/* Same items and positions as before: two on each side of the photo. */
const left = [
  {
    icon: Ruler,
    title: 'Space Planning & Modular Design',
    body: 'We assess your requirements thoroughly and convert your space into smart, transportable modules.',
  },
  {
    icon: Zap,
    title: 'Fast On-Site Installation',
    body: 'Modules arrive ready to connect - install and move in within 3–7 days.',
  },
]

const right = [
  {
    icon: ShieldCheck,
    title: 'Quality Testing & Logistics Prep',
    body: 'Every unit is QC-tested and prepped for smooth transport and on-site assembly.',
  },
  {
    icon: Factory,
    title: 'Factory-Built with Smart Engineering',
    body: 'Modules are built with customized pre-installed plumbing, electricals, and finishes.',
  },
]

function Step({ icon: Icon, title, body }: (typeof left)[number]) {
  return (
    <div className="group border-t border-black/70 pt-5">
      <Icon className="h-5 w-5 text-[#886c46]" strokeWidth={1.5} aria-hidden="true" />
      <h3 className="mt-5 text-[clamp(1.5rem,2vw,2.2rem)] uppercase leading-[0.88] tracking-[-0.06em] transition-colors duration-300 group-hover:text-[#886c46]">
        {title}
      </h3>
      <p className="mt-4 max-w-[24rem] text-[0.85rem] leading-[1.7] text-black/65">{body}</p>
    </div>
  )
}

export default function PlugnPlay() {
  return (
    <section className="border-t border-black/15 bg-[#f5f2ec]">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 grid gap-10 md:mb-24 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
          <div>
            <Eyebrow className="mb-8">Plug &amp; play / 03</Eyebrow>
            <DisplayHeading lines={['Texo’s 4-step', 'plug & play', 'prefab process']} className="text-[clamp(2.4rem,6vw,7rem)]" />
          </div>
          <p className="max-w-[26rem] text-[0.85rem] leading-[1.8] text-black/70 md:pb-2">
            Texo Prefab World transforms modern living with precision-engineered, sustainable modular structures.
            Headquartered in Hyderabad and proudly ISO 9001:2025 certified, we design and deliver prefabricated homes,
            offices, farmhouses, and specialty units – faster, smarter, and greener.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1fr_1.15fr_1fr] lg:items-center lg:gap-14">
          <Reveal className="grid gap-12 md:order-1">
            {left.map((step) => (
              <Step key={step.title} {...step} />
            ))}
          </Reveal>

          <Reveal delay={0.08} className="md:order-3 md:col-span-2 lg:order-2 lg:col-span-1">
            <FramedImage
              src="/texo-4.jpg"
              alt="Texo Prefab construction"
              sizes="(min-width: 1024px) 36vw, 90vw"
              aspect="aspect-[4/3] lg:aspect-[4/5]"
              imageClassName="object-cover transition duration-700 hover:scale-105"
            />
          </Reveal>

          <Reveal delay={0.16} className="grid gap-12 md:order-2 lg:order-3">
            {right.map((step) => (
              <Step key={step.title} {...step} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
