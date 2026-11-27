import { Building2, Clock, Factory, IndianRupee, MapPin } from 'lucide-react'
import FramedImage from '@/components/site/FramedImage'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, Rule, pad } from '@/components/site/primitives'

/*
 * Approved facts only (brief, sections 16 and 18). The previous five stats
 * (<1mm tolerance, 24h reassembly, 25+ years / R-25 / 150 km/h, 80% off-site,
 * 30% energy saved) can come back once Texo verifies them.
 */
const features = [
  {
    icon: Clock,
    label: 'Why Texo',
    headline: 'Fast Answers',
    body: 'Custom layout drawings, material specs and a detailed quote within 48 hours of your brief.',
    stat: '48h',
    statLabel: 'Drawings & quote',
  },
  {
    icon: Factory,
    label: 'Why Texo',
    headline: 'Factory-Built',
    body: 'Built under quality control while your site is prepared. Timing depends on our production schedule.',
    stat: '~10 days',
    statLabel: 'In the factory',
  },
  {
    icon: Building2,
    label: 'Why Texo',
    headline: 'Proven at Scale',
    body: 'Site offices, homes, cabins and specialised structures for developers, businesses and institutions.',
    stat: '1,359+',
    statLabel: 'Projects',
  },
  {
    icon: MapPin,
    label: 'Why Texo',
    headline: 'Wide Reach',
    body: 'Manufactured in Hyderabad, transported and installed on your site.',
    stat: '56+',
    statLabel: 'Cities',
  },
  {
    icon: IndianRupee,
    label: 'Why Texo',
    headline: 'Clear Pricing',
    body: 'A detailed quote up front, before production starts.',
    stat: '₹2,500',
    statLabel: 'From / sq.ft',
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
                Since 2018
              </p>
              <p className="mt-3 text-[0.82rem] leading-[1.8] text-black/55">
                1,359+ projects delivered across 56+ cities.
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
