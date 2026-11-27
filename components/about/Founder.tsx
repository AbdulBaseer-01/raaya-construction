import FramedImage from '@/components/site/FramedImage'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, Rule, hasLongWord, pad, shell } from '@/components/site/primitives'

const founders = [
  {
    role: 'Chief Executive Officer & Director',
    roleShort: 'CEO',
    name: 'Faiz Ahmed',
    image: '/products-hero.png',
    side: 'left',
    message:
      'With 30+ years leading top-tier operations across India, GCC, and Europe, Faiz Ahmed is the visionary propelling Texo Prefab World forward. A seasoned executive in the portable and prefab space, he builds powerhouse teams and delivers standout projects fast. His mission? Set new standards in prefab by combining unmatched speed, premium quality, and personalized service. At Texo, he doesn’t just meet expectations — he redefines them.',
    signature: 'Faiz Ahmed',
  },
  {
    role: 'Managing Partner',
    roleShort: 'MP',
    // TODO(Texo): confirm one spelling with him and use it here, in `signature` and in the bio (brief, section 17).
    name: 'Mohammad ZaheerUddin',
    image: '/products-hero.png',
    side: 'right',
    message:
      'With 15+ years of hands-on prefab expertise, Mohammad Zaheer Uddin is the operational engine of Texo Prefab World. Known for sharp execution, he leads a 25+ member team, delivering projects that consistently exceed client expectations. Rooted in precision, innovation, and service-first thinking, Mohammad ensures Texo delivers quality that speaks for itself — on time, every time.',
    signature: 'Mohammad ZaheerUddin',
  },
]

export default function Founders() {
  return (
    <section className="border-t border-black/15 bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 grid gap-10 md:mb-24 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
          <div>
            <Eyebrow className="mb-8">The people behind Texo / 03</Eyebrow>
            <DisplayHeading lines={['Visionaries who', 'built it', 'from zero.']} className="text-[clamp(2.6rem,5vw,6.2rem)]" />
          </div>
          <p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70 md:pb-2">
            Texo was not built by capital alone — it was built by conviction. Meet the two founders whose decisions,
            values, and relentless standards shaped every module we have ever made.
          </p>
        </div>

        <div className="grid gap-5">
          {founders.map((founder, i) => (
            <Reveal key={founder.name}>
              <article className="group grid gap-8 bg-[#f3ede3] p-6 sm:p-8 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] md:gap-12 lg:p-10">
                <FramedImage
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  sizes="(min-width: 768px) 30vw, 90vw"
                  aspect="aspect-[4/5]"
                  imageClassName="object-cover transition duration-700 ease-out group-hover:scale-105"
                  className={`w-full max-w-[22rem] ${founder.side === 'right' ? 'md:order-last md:justify-self-end' : ''}`}
                />

                <div className="flex min-w-0 flex-col">
                  <span className="text-[0.58rem] uppercase tracking-[0.22em] text-black/45">
                    Founder / {pad(i + 1)}
                  </span>
                  <Rule className="mb-5 mt-1" />
                  <h3 className={`${hasLongWord(founder.name) ? 'text-[clamp(1.8rem,3vw,3.6rem)]' : 'text-[clamp(2rem,3.6vw,4.2rem)]'} break-words uppercase leading-[0.84] tracking-[-0.065em] transition-colors duration-300 group-hover:text-[#886c46]`}>
                    {founder.name}
                  </h3>
                  <p className="mt-4 text-[0.62rem] uppercase tracking-[0.2em] text-[#886c46]">{founder.role}</p>

                  <blockquote className="mt-8 max-w-[38rem] text-[0.95rem] leading-[1.75] text-black/70">
                    {founder.message}
                  </blockquote>

                  <div className="mt-auto pt-10">
                  <footer className="grid grid-cols-[minmax(3rem,0.35fr)_minmax(0,1.65fr)] border-t border-black/70 pt-5">
                    <span className="text-[0.85rem]">{founder.roleShort}</span>
                    <p className="border-l border-black/70 pl-5 text-[0.85rem] leading-[1.5]">
                      {founder.signature}
                      <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.2em] text-black/45">
                        {founder.roleShort} · Texo Prefab World
                      </span>
                    </p>
                  </footer>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
