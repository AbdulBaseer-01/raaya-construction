import { Eyebrow, pad, shell } from '@/components/site/primitives'
import { FACTS } from '@/lib/siteFacts'

/* Approved facts only (brief, sections 16 and 21); the per-product trustBand numbers in the data are not used. */
const stats = [
  { value: FACTS.cities, label: 'Cities' },
  { value: FACTS.projects, label: 'Projects completed' },
  { value: FACTS.googleRating, label: `Google rating (${FACTS.googleReviews} reviews)` },
]

export default function TrustBand() {

  return (
    <section className="border-t border-black/15 bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
          <div>
            <Eyebrow className="mb-8">Our track record</Eyebrow>
            <h2 className="text-[clamp(2.6rem,5vw,6.2rem)] uppercase leading-[0.82] tracking-[-0.035em]">
              <span className="block">Trusted across</span>
              <span className="ml-[10vw] block text-[#886c46]">{FACTS.cities} cities.</span>
            </h2>
          </div>
          <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70 md:pb-2">
            Our commitment to excellence speaks for itself.
          </p>
        </div>

        <dl className="grid gap-10 md:grid-cols-3 md:gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="grid grid-cols-[minmax(3rem,0.35fr)_minmax(0,1.65fr)] border-t border-black/70 pt-5">
              <span className="text-[0.85rem]">{pad(i + 1)}</span>
              <div className="flex flex-col-reverse border-l border-black/70 pl-5">
                <dt className="mt-4 text-[0.58rem] uppercase tracking-[0.22em] text-black/50">{stat.label}</dt>
                <dd className="text-[clamp(3.2rem,5.4vw,6.5rem)] uppercase leading-[0.85] tracking-[-0.035em]">
                  {stat.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
