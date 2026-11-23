import { Check } from 'lucide-react'
import { shell } from '@/components/site/primitives'

const certs = ['BIS Certified', 'ISO 9001', 'MSME Registered', 'Green Build Compliant']

export default function TrustStrip() {
  return (
    <section className="bg-[#080808] text-white">
      <div className={`${shell} grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16`}>
        <p className="max-w-[30rem] text-[clamp(1.5rem,2.4vw,2.6rem)] uppercase leading-[0.95] tracking-[-0.05em]">
          Trusted by <span className="text-[#886c46]">infrastructure giants, MSMEs</span> and everything in between.
        </p>
        <ul className="grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-4">
          {certs.map((cert) => (
            <li key={cert} className="flex flex-col gap-5 bg-[#080808] p-5">
              <span className="flex h-8 w-8 items-center justify-center border border-[#886c46]/60">
                <Check className="h-4 w-4 text-[#886c46]" aria-hidden="true" />
              </span>
              <span className="text-[0.58rem] uppercase leading-[1.6] tracking-[0.2em] text-[#A5A5A5]">{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
