import { ArrowUpRight } from 'lucide-react'
import { CAREERS_EMAIL } from '@/lib/careers'
import { shell } from '@/components/site/primitives'

export default function CareersCta() {
  return (
    <section className="bg-[#080808] text-white">
      <div className={`${shell} grid gap-12 py-24 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16 md:py-32`}>
        <div>
          <p className="mb-10 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-white/60">
            <span className="h-px w-10 shrink-0 bg-[#886c46]" />
            Don&apos;t see a fit?
          </p>
          <h2 className="text-[clamp(2.6rem,5vw,6.2rem)] uppercase leading-[0.8] tracking-[-0.035em]">
            <span className="block">Send us your</span>
            <span className="ml-[10vw] block text-[#886c46]">resume anyway.</span>
          </h2>
        </div>
        <div className="md:pb-2">
          <p className="mb-8 max-w-[24rem] text-[0.82rem] leading-[1.8] text-white/60">
            Send your resume + brief profile summary to the email below. Salary is commensurate with skill &amp; experience.
          </p>
          <a
            href={`mailto:${CAREERS_EMAIL}`}
            className="group inline-flex min-h-12 items-center justify-between gap-6 border border-[#886c46] bg-[#886c46] px-5 py-3 text-[0.68rem] tracking-[0.12em] text-white transition-colors duration-300 hover:bg-transparent focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]"
          >
            {CAREERS_EMAIL}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
