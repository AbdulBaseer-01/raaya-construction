import { Cog, LayoutGrid, Leaf, Rocket, Shield } from 'lucide-react'
import FramedImage from '@/components/site/FramedImage'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, Rule, pad } from '@/components/site/primitives'

const features = [
  {
    icon: Cog,
    label: 'Engineering',
    headline: 'Precision Engineering',
    body: 'CNC and robotic fabrication ensures <1 mm tolerance for consistent, high-quality builds with 30% fewer on-site errors.',
    stat: '<1mm',
    statLabel: 'Tolerance',
  },
  {
    icon: LayoutGrid,
    label: 'Scalability',
    headline: 'Modular Scalability',
    body: 'Plug-and-play modular design allows seamless expansion, relocation, or reassembly — completed in under 24 hours.',
    stat: '24h',
    statLabel: 'Reassembly',
  },
  {
    icon: Shield,
    label: 'Materials',
    headline: 'Smart Material Usage',
    body: 'Galvanized steel and R-25 insulation deliver 25+ years durability and withstand wind loads up to 150 km/h.',
    stat: '25+',
    statLabel: 'Years Life',
  },
  {
    icon: Rocket,
    label: 'Deployment',
    headline: 'Rapid Deployment',
    body: '80% off-site manufacturing slashes project timelines, enabling setup and delivery in record time.',
    stat: '80%',
    statLabel: 'Off-Site Built',
  },
  {
    icon: Leaf,
    label: 'Sustainability',
    headline: 'Eco-Conscious Design',
    body: 'Thermally optimized builds reduce material waste and cut energy consumption by up to 30%.',
    stat: '30%',
    statLabel: 'Energy Saved',
  },
]

/* Sticky heading + stacked cards, the layout of the Home "Why" section. */
export default function KeyFeatures() {
  return (
    // overflow-clip (not hidden) keeps the sticky column working.
    <section className="overflow-clip border-t border-black/15 bg-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start md:grid-cols-[0.8fr_1.2fr]">
        {/* Left column stays pinned while the cards scroll. It is exactly one screen tall, and the
            heading and image scale with the screen height so nothing is cut off on short laptops. */}
        <div className="self-start md:sticky md:top-[68px] md:h-[calc(100svh-68px)]">
          <div className="flex h-full flex-col justify-center px-6 pb-12 pt-24 sm:px-10 md:px-[5vw] md:py-10">
            <Eyebrow className="mb-8 md:mb-[min(2.5rem,4vh)]">What sets us apart / 02</Eyebrow>
            <DisplayHeading
              lines={['Built-in', 'advantages,', 'by design.']}
              className="text-[clamp(2.6rem,min(5vw,8.5vh),6rem)]"
            />

            <div className="mt-12 max-w-[26rem] md:ml-[10%] md:mt-[min(3rem,5vh)]">
              <FramedImage
                src="/why.jpg"
                alt="Reception at the Texo Prefab World studio"
                sizes="(min-width: 768px) 26vw, 90vw"
                aspect="aspect-[3/2] md:aspect-auto md:h-[clamp(6rem,26vh,17rem)]"
              />
              <p className="mt-4 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.22em] text-black/55">
                <span className="h-1.5 w-1.5 shrink-0 bg-[#886c46]" />
                ISO 9001:2025 Certified
              </p>
              <p className="mt-3 text-[0.82rem] leading-[1.8] text-black/55">
                18+ years of engineering excellence, delivering precision-built modular structures across India.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 pb-24 sm:px-10 md:px-8 md:py-24 lg:pr-[5vw]">
          <div className="grid gap-5">
            {features.map((feature, i) => (
              <Reveal key={feature.headline}>
                <article className="group bg-[#f3ede3] p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-[0.58rem] uppercase tracking-[0.22em] text-black/45">
                      {feature.label} / {pad(i + 1)}
                    </span>
                    <feature.icon className="h-5 w-5 shrink-0 text-[#886c46]" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <Rule className="mb-5 mt-1" />
                  <h3 className="max-w-[28rem] text-[clamp(1.9rem,3.2vw,3.6rem)] uppercase leading-[0.84] tracking-[-0.065em] transition-colors duration-300 group-hover:text-[#886c46]">
                    {feature.headline}
                  </h3>
                  <div className="mt-6 grid grid-cols-[minmax(5.5rem,0.45fr)_minmax(0,1.55fr)] border-t border-black/70 pt-5">
                    <div>
                      <span className="block text-[clamp(1.6rem,2.2vw,2.4rem)] leading-none tracking-[-0.06em]">{feature.stat}</span>
                      <span className="mt-2 block text-[0.55rem] uppercase tracking-[0.2em] text-black/45">{feature.statLabel}</span>
                    </div>
                    <p className="border-l border-black/70 pl-5 text-[0.85rem] leading-[1.6] text-black/65">{feature.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
