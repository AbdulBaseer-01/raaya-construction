import { Eyebrow, OutlineLink, shell } from '@/components/site/primitives'

/** Closing enquiry band shared by the landing, collection and product pages. */
export default function CustomCta({
  eyebrow,
  lines,
  body,
}: {
  eyebrow: string
  lines: [string, string, string]
  body: string
}) {
  return (
    <section className="bg-white">
      <div className={`${shell} grid gap-12 py-24 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16 md:py-36`}>
        <div>
          <Eyebrow className="mb-10">{eyebrow}</Eyebrow>
          <h2 className="text-[clamp(2.6rem,5vw,6.2rem)] uppercase leading-[0.82] tracking-[-0.035em]">
            <span className="block">{lines[0]}</span>
            <span className="ml-[10vw] block text-[#886c46]">{lines[1]}</span>
            <span className="ml-[4vw] block">{lines[2]}</span>
          </h2>
        </div>
        <div className="md:pb-2">
          <p className="mb-8 max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/70">{body}</p>
          <OutlineLink href="/contact-us">Contact our experts</OutlineLink>
        </div>
      </div>
    </section>
  )
}
