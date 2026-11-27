import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, Rule, shell } from '@/components/site/primitives'

const process = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Site visit or detailed brief. We understand your exact requirements, timeline, and budget constraints.',
  },
  {
    step: '02',
    title: 'Design & Quote',
    desc: 'Custom layout drawings, material spec, and a detailed quote delivered within 48 hours.',
  },
  {
    step: '03',
    title: 'Manufacturing',
    desc: 'Factory-controlled production, typically about 10 days depending on our schedule, with progress updates and quality checks at every milestone.',
  },
  {
    step: '04',
    title: 'Installation',
    desc: 'Our crew delivers, installs, and commissions your structure. You receive keys — not worries.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 grid gap-10 md:mb-24 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
          <div>
            <Eyebrow className="mb-8">How it works / 04</Eyebrow>
            <DisplayHeading lines={['From enquiry', 'to handover.']} />
          </div>
          <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70 md:pb-2">
            A clear, four-step process so you always know exactly where your project stands.
          </p>
        </div>

        <ol className="grid gap-12 md:grid-cols-2 md:gap-x-6 xl:grid-cols-4">
          {process.map((item, i) => (
            <li key={item.step} className="group">
              <Reveal delay={i * 0.08} className="grid grid-cols-[minmax(3rem,0.3fr)_minmax(0,1.7fr)] border-t border-black/70 pt-5">
                <span className="text-[0.85rem]">{item.step}</span>
                <div className="border-l border-black/70 pl-5">
                  <h3 className="text-[clamp(1.5rem,1.75vw,2.1rem)] uppercase leading-[0.9] tracking-[-0.065em] transition-colors duration-300 group-hover:text-[#886c46]">
                    {item.title}
                  </h3>
                  <Rule className="my-5" />
                  <p className="text-[0.85rem] leading-[1.7] text-black/65">{item.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
