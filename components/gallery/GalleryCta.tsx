import { ArrowLink, DisplayHeading, Eyebrow, OutlineLink, shell } from '@/components/site/primitives'

export default function GalleryCta() {
  return (
    <section className="border-t border-black/15 bg-white">
      <div className={`${shell} grid gap-12 py-24 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16 md:py-36`}>
        <div>
          <Eyebrow className="mb-10">Ready to start?</Eyebrow>
          <DisplayHeading lines={['Seen something', 'you love?']} className="text-[clamp(2.6rem,5vw,6.2rem)]" />
        </div>
        <div className="md:pb-2">
          <p className="mb-8 max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70">
            Share the project that caught your eye and our team will design something tailored exactly to your site and
            scale.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <OutlineLink href="/contact-us">Request a custom design</OutlineLink>
            <ArrowLink href="/products">Browse all products</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  )
}
