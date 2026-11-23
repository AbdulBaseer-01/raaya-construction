'use client'

import Image from 'next/image'
import { Merriweather, Playfair_Display } from 'next/font/google'

const merri    = Merriweather({ subsets: ['latin'], weight: ['300', '400'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600'] })

export interface AddOnItem {
  id:    number
  name:  string
  image: string
}

export interface AddOnsProps {
  heroImage:     string
  externalItems: AddOnItem[]
  internalItems: AddOnItem[]
}

export default function AddOns({ heroImage, externalItems, internalItems }: AddOnsProps) {
  return (
    <section className="w-full bg-[#faf9f7] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 flex flex-col gap-16">

        {/* Heading */}
        <div>
          <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#886c46] to-[#886c46]/40" />
          <h2 className={`${playfair.className} text-4xl sm:text-5xl font-light text-black`}>
            Optional <span className="font-semibold">Add-ons</span>
          </h2>
        </div>

        {/* Hero image */}
        <div className="relative overflow-hidden flex items-center justify-center rounded-3xl w-full max-w-3xl mx-auto">
          <Image
            src={heroImage}
            alt="Add-ons overview"
            width={600}
            height={400}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* External Add ons */}
        <div>
          <p className={`${merri.className} text-xs uppercase tracking-[0.25em] text-[#886c46] mb-1`}>01</p>
          <h3 className={`${playfair.className} text-2xl sm:text-3xl font-light text-black mb-6`}>
            External <span className="font-semibold">Add ons</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {externalItems.map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm">
                <span className={`${playfair.className} pointer-events-none absolute top-2 right-3 text-5xl font-bold text-black/8 select-none`}>
                  {item.id}
                </span>
                <div className="relative h-70 w-full">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-5" />
                </div>
                <div className="h-0.5 w-full bg-gradient-to-r from-[#886c46] via-[#a8926d] to-[#886c46]" />
                <p className={`${merri.className} px-4 py-3 text-xs font-light text-black/70`}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#886c46]/25 to-transparent" />

        {/* Internal Add ons */}
        <div>
          <p className={`${merri.className} text-xs uppercase tracking-[0.25em] text-[#886c46] mb-1`}>02</p>
          <h3 className={`${playfair.className} text-2xl sm:text-3xl font-light text-black mb-6`}>
            Internal <span className="font-semibold">Add ons</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {internalItems.map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm">
                <span className={`${playfair.className} pointer-events-none absolute top-2 right-3 text-5xl font-bold text-black/8 select-none`}>
                  {item.id}
                </span>
                <div className="relative h-60 w-full">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-5" />
                </div>
                <div className="h-0.5 w-full bg-gradient-to-r from-[#886c46] via-[#a8926d] to-[#886c46]" />
                <p className={`${merri.className} px-4 py-3 text-xs font-light text-black/70`}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}