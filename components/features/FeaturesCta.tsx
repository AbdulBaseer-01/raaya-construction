import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { shell } from '@/components/site/primitives'

const darkButton =
  'group inline-flex min-h-12 items-center justify-between gap-6 border px-5 py-3 text-[0.62rem] uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]'

const arrow = <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />

export default function FeaturesCta() {
  return (
    <section className="border-t border-white/10 bg-[#080808] text-white">
      <div className={`${shell} grid gap-12 py-24 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16 md:py-36`}>
        <div>
          <p className="mb-10 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-white/60">
            <span className="h-px w-10 shrink-0 bg-[#886c46]" />
            Ready to build?
          </p>
          <h2 lang="en" className="break-words text-[clamp(2.2rem,5.4vw,6.4rem)] uppercase leading-[0.82] tracking-[-0.07em]">
            <span className="block">Your site deserves</span>
            <span className="ml-[10vw] block text-[#886c46]">a structure that works</span>
            <span className="ml-[4vw] block">as hard as you do.</span>
          </h2>
        </div>
        <div className="md:pb-2">
          <p className="mb-8 max-w-[23rem] text-[0.82rem] leading-[1.8] text-white/60">
            Get a custom quote in 48 hours. No obligation, no boilerplate — just engineering that fits your project.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link href="/contact-us" className={`${darkButton} border-[#886c46] bg-[#886c46] text-white hover:bg-transparent`}>
              Request a quote
              {arrow}
            </Link>
            <Link href="/products" className={`${darkButton} border-white/25 text-white/80 hover:border-[#886c46] hover:text-[#886c46]`}>
              Browse our portfolio
              {arrow}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
