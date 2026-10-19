
// 'use client'

// import Image from 'next/image'
// import { useEffect, useRef, useState } from 'react'

// const reasons = [
//     {
//         number: '01',
//         title: 'FASTER',
//         lines: ['Manufactured off-site.', 'Installed on-site.'],
//         image: '/products/prefab/house/images/image2.jpg',
//     },
//     {
//         number: '02',
//         title: 'SMARTER',
//         lines: ['Controlled production.', 'Less material waste.'],
//         image: '/products/portable/farmhouse/farmhouse-white-ai.png',
//     },
//     {
//         number: '03',
//         title: 'FLEXIBLE',
//         lines: ['Adapt. Expand.', 'Reconfigure.'],
//         image: '/products/woodenseries/smart/img-1.png',
//     },
//     {
//         number: '04',
//         title: 'PRECISE',
//         lines: ['Engineered components.', 'Predictable execution.'],
//         image: '/products/special/smoking/main.webp',
//     },
// ]

// export default function Why() {
//     const sectionRef = useRef<HTMLElement>(null)
//     const [activeIndex, setActiveIndex] = useState(0)

//     useEffect(() => {
//         let frameId = 0

//         const updateActiveIndex = () => {
//             if (!sectionRef.current) return

//             const sectionTop = sectionRef.current.offsetTop
//             const scrollDistance = sectionRef.current.offsetHeight - window.innerHeight
//             const progress = Math.max(0, Math.min(1, (window.scrollY - sectionTop) / scrollDistance))
//             setActiveIndex(Math.round(progress * (reasons.length - 1)))
//         }

//         const handleScroll = () => {
//             cancelAnimationFrame(frameId)
//             frameId = requestAnimationFrame(updateActiveIndex)
//         }

//         updateActiveIndex()
//         window.addEventListener('scroll', handleScroll, { passive: true })
//         window.addEventListener('resize', updateActiveIndex)

//         return () => {
//             cancelAnimationFrame(frameId)
//             window.removeEventListener('scroll', handleScroll)
//             window.removeEventListener('resize', updateActiveIndex)
//         }
//     }, [])

//     return (
//         <section ref={sectionRef} className="relative h-[250vh] w-full bg-white">
//             <div className="sticky top-0 flex h-screen w-full overflow-hidden bg-white">
//                 <div className="relative flex h-full w-1/2 items-center justify-center border-r border-black/10 px-[7vw]">
//                     <div className="w-full max-w-[34rem]">
//                         <div className="mb-10 flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.28em] text-black/45">
//                             <span className="h-px w-10 bg-[#886c46]" />
//                             <span>Why prefab / 01 — 04</span>
//                         </div>

//                         <h2 className="mb-16 max-w-[30rem] text-[clamp(2.8rem,5.8vw,7rem)] uppercase leading-[0.84] tracking-[-0.06em]">
//                             A different way
//                             <br />
//                             to build.
//                         </h2>

//                         <div className="relative min-h-[11rem]">
//                             {reasons.map((reason, index) => (
//                                 <div
//                                     key={reason.number}
//                                     className={`absolute inset-0 transition-all duration-700 ${
//                                         activeIndex === index
//                                             ? 'translate-y-0 opacity-100'
//                                             : index < activeIndex
//                                                 ? '-translate-y-8 opacity-0'
//                                                 : 'translate-y-8 opacity-0'
//                                     }`}
//                                     aria-hidden={activeIndex !== index}
//                                 >
//                                     <div className="flex items-start gap-5">
//                                         <span className="pt-1 text-[0.62rem] tracking-[0.2em] text-[#886c46]">{reason.number}</span>
//                                         <div>
//                                             <h3 className="text-[clamp(1.5rem,2.4vw,2.8rem)] uppercase leading-none tracking-[-0.04em]">
//                                                 {reason.title}
//                                             </h3>
//                                             <p className="mt-5 text-[clamp(0.9rem,1.15vw,1.15rem)] leading-[1.6] text-black/55">
//                                                 {reason.lines[0]}
//                                                 <br />
//                                                 {reason.lines[1]}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="mt-14 flex gap-2" aria-label="Why prefab progress">
//                             {reasons.map((reason, index) => (
//                                 <span
//                                     key={reason.number}
//                                     className={`h-1 transition-all duration-500 ${activeIndex === index ? 'w-12 bg-[#886c46]' : 'w-4 bg-black/15'}`}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="relative h-full w-1/2 overflow-hidden bg-neutral-200">
//                     {reasons.map((reason, index) => (
//                         <div
//                             key={reason.number}
//                             className={`absolute inset-0 transition-all duration-1000 ${
//                                 activeIndex === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
//                             }`}
//                             aria-hidden={activeIndex !== index}
//                         >
//                             <Image src={reason.image} alt={`${reason.title} prefab construction`} fill sizes="50vw" className="object-cover" />
//                             <div className="absolute inset-0 bg-black/[0.08]" />
//                             <span className="absolute bottom-8 right-8 text-[0.58rem] uppercase tracking-[0.25em] text-white/75">
//                                 Detail / {reason.number}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }




'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Move, Palette, Plug, Zap } from 'lucide-react'

export default function Why() {
    return (
        <section className="py-32 bg-linear-to-b from-white via-[#faf8f4] to-white text-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mb-22 grid max-w-[1600px] gap-10 px-[5vw] md:grid-cols-[1.25fr_0.75fr] md:items-end md:gap-16"
      >
        <div className="md:col-start-2 md:row-start-1">
          <p className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[#886c46]">
            <span className="h-px w-10 bg-[#886c46]" />
            Why prefab / 02
          </p>
        </div>
        <div className="max-w-[48rem] md:col-start-1 md:row-start-1">
          <h2 className="text-[clamp(2.8rem,6.5vw,8rem)] uppercase leading-[0.82] tracking-[-0.065em]">
            <span className="block">Why choose</span>
            <span className="ml-0 block text-[#886c46] md:ml-[15%]">Texo</span>
            <span className="ml-0 block md:ml-[6%]">Prefab.</span>
          </h2>
          <p className="mt-8 max-w-[28rem] text-[0.85rem] leading-[1.7] text-black/60 md:ml-[12%]">
            Discover the key advantages that set us apart in the prefab construction industry.
          </p>
        </div>
      </motion.div>
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-12">

    <div className="space-y-12">

      

      <div className="flex flex-col gap-4">

  {[
    {
      title: "Rapid Installation",
      desc: "Factory-built structures installed on-site in weeks, not months.",
      Icon: Zap,
    },
    {
      title: "Custom Designs",
      desc: "Tailored layouts, finishes, colors, and interior designs. Our design team works closely with you.",
      Icon: Palette,
    },
    {
      title: "Plug & Play",
      desc: "Electrical, plumbing, interiors — everything ready on delivery.",
      Icon: Plug,
    },
    {
      title: "Relocatable & Scalable",
      desc: "Expand, relocate, or reconfigure structures as your needs grow.",
      Icon: Move,
    },
  ].map((item, index) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative p-6 rounded-2xl bg-linear-to-br from-white to-[#f8f5f0] border border-[#886c46]/20 hover:border-[#886c46]/40 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#886c46]/5 to-[#d7a661]/5 opacity-0 group-hover:opacity-100 transition duration-300" />
      
      <div className="relative flex gap-4">
        <div className="shrink-0">
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.6,
              delay: index * 0.12 + 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#886c46] to-[#d7a661] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition duration-300"
          >
            <item.Icon className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        <div className="grow">
          <h4 className="mb-2 text-xl font-semibold text-black transition duration-300 group-hover:text-[#886c46]">{item.title}</h4>
          <p className="text-sm leading-relaxed text-black/70 transition group-hover:text-black/80">
            {item.desc}
          </p>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1 h-0 bg-linear-to-b from-[#d7a661] to-transparent group-hover:h-full transition-all duration-500" />
    </motion.div>
  ))}

</div>

    </div>

    <motion.div
      initial={{ opacity: 0.5, scale: 0.95, x: 40 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-130 md:h-130 overflow-hidden rounded-3xl shadow-2xl shadow-black/20 group"
    >
      <Image
        src="/why.jpg"
        alt="Why Choose Texo Prefab"
        fill
        className="object-fill group-hover:scale-105 transition duration-700"
      />
      <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-transparent group-hover:from-black/30 transition duration-700" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-xl"
      >
        <p className="text-sm font-semibold text-[#886c46]">Industry Leading</p>
        <p className="mt-1 text-2xl font-bold text-black">9+ Years</p>
      </motion.div>
    </motion.div>

  </div>
</section>
    )
}
