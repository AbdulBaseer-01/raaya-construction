import FramedImage from '@/components/site/FramedImage'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, shell } from '@/components/site/primitives'

export default function History() {
  return (
    <section className="bg-white">
      <div className={`${shell} grid gap-14 py-24 md:py-36 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
        <Reveal className="min-w-0 lg:[@media(min-height:800px)]:sticky lg:top-[calc(68px+3rem)] lg:self-start">
          <FramedImage
            src="/texo-4.jpg"
            alt="Inside the Texo Prefab World studio in Hyderabad"
            sizes="(min-width: 1024px) 42vw, 90vw"
            aspect="aspect-[4/3] lg:aspect-[4/5]"
          />
          <dl className="mt-3 grid grid-cols-[minmax(4rem,0.5fr)_minmax(0,1.5fr)] border-t border-black/70 pt-5">
            <dt className="sr-only">Established</dt>
            <dd className="text-[clamp(2.4rem,3.6vw,4rem)] uppercase leading-[0.85] tracking-[-0.035em]">2018</dd>
            <dd className="self-end border-l border-black/70 pl-5 text-[0.58rem] uppercase tracking-[0.22em] text-black/50">
              Est. Hyderabad
            </dd>
          </dl>
        </Reveal>

        <div className="min-w-0 lg:pt-6">
          <Eyebrow className="mb-10">Our story / 01</Eyebrow>
          <DisplayHeading lines={['Built in Hyderabad.', 'Delivered across', '56+ cities.']} accent={1} />

          <div className="mt-12 grid gap-8 md:ml-[10%]">
            <p className="max-w-[34rem] text-[clamp(1.05rem,1.4vw,1.35rem)] leading-[1.45] tracking-[-0.015em]">
              Texo Prefab World was founded in 2018 by a team that had been building prefab since 2016. From
              Jeedimetla, Hyderabad, we design, manufacture and install premium modular buildings for homes, businesses
              and large-scale projects: 1,359+ projects across 56+ cities so far.
            </p>
            <p className="max-w-[30rem] border-t border-black/15 pt-8 text-[0.85rem] leading-[1.8] text-black/65">
              From signature A-Frame homes and sleek cottages to high-performance control rooms, warehouses, and
              container offices, our modular systems are built for speed, sustainability, and standout design. Whether
              you’re envisioning a minimalist getaway or a functional operations hub, Texo’s plug-and-play approach
              redefines how space is imagined—crafted to move with you and built to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
