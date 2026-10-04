
'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const reasons = [
    {
        number: '01',
        title: 'FASTER',
        lines: ['Manufactured off-site.', 'Installed on-site.'],
        image: '/products/prefab/house/images/image2.jpg',
    },
    {
        number: '02',
        title: 'SMARTER',
        lines: ['Controlled production.', 'Less material waste.'],
        image: '/products/portable/farmhouse/farmhouse-white-ai.png',
    },
    {
        number: '03',
        title: 'FLEXIBLE',
        lines: ['Adapt. Expand.', 'Reconfigure.'],
        image: '/products/woodenseries/smart/img-1.png',
    },
    {
        number: '04',
        title: 'PRECISE',
        lines: ['Engineered components.', 'Predictable execution.'],
        image: '/products/special/smoking/main.webp',
    },
]

export default function Why() {
    const sectionRef = useRef<HTMLElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        let frameId = 0

        const updateActiveIndex = () => {
            if (!sectionRef.current) return

            const sectionTop = sectionRef.current.offsetTop
            const scrollDistance = sectionRef.current.offsetHeight - window.innerHeight
            const progress = Math.max(0, Math.min(1, (window.scrollY - sectionTop) / scrollDistance))
            setActiveIndex(Math.round(progress * (reasons.length - 1)))
        }

        const handleScroll = () => {
            cancelAnimationFrame(frameId)
            frameId = requestAnimationFrame(updateActiveIndex)
        }

        updateActiveIndex()
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', updateActiveIndex)

        return () => {
            cancelAnimationFrame(frameId)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', updateActiveIndex)
        }
    }, [])

    return (
        <section ref={sectionRef} className="relative h-[250vh] w-full bg-white">
            <div className="sticky top-0 flex h-screen w-full overflow-hidden bg-white">
                <div className="relative flex h-full w-1/2 items-center justify-center border-r border-black/10 px-[7vw]">
                    <div className="w-full max-w-[34rem]">
                        <div className="mb-10 flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.28em] text-black/45">
                            <span className="h-px w-10 bg-[#886c46]" />
                            <span>Why prefab / 01 — 04</span>
                        </div>

                        <h2 className="mb-16 max-w-[30rem] text-[clamp(2.8rem,5.8vw,7rem)] uppercase leading-[0.84] tracking-[-0.06em]">
                            A different way
                            <br />
                            to build.
                        </h2>

                        <div className="relative min-h-[11rem]">
                            {reasons.map((reason, index) => (
                                <div
                                    key={reason.number}
                                    className={`absolute inset-0 transition-all duration-700 ${
                                        activeIndex === index
                                            ? 'translate-y-0 opacity-100'
                                            : index < activeIndex
                                                ? '-translate-y-8 opacity-0'
                                                : 'translate-y-8 opacity-0'
                                    }`}
                                    aria-hidden={activeIndex !== index}
                                >
                                    <div className="flex items-start gap-5">
                                        <span className="pt-1 text-[0.62rem] tracking-[0.2em] text-[#886c46]">{reason.number}</span>
                                        <div>
                                            <h3 className="text-[clamp(1.5rem,2.4vw,2.8rem)] uppercase leading-none tracking-[-0.04em]">
                                                {reason.title}
                                            </h3>
                                            <p className="mt-5 text-[clamp(0.9rem,1.15vw,1.15rem)] leading-[1.6] text-black/55">
                                                {reason.lines[0]}
                                                <br />
                                                {reason.lines[1]}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-14 flex gap-2" aria-label="Why prefab progress">
                            {reasons.map((reason, index) => (
                                <span
                                    key={reason.number}
                                    className={`h-1 transition-all duration-500 ${activeIndex === index ? 'w-12 bg-[#886c46]' : 'w-4 bg-black/15'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative h-full w-1/2 overflow-hidden bg-neutral-200">
                    {reasons.map((reason, index) => (
                        <div
                            key={reason.number}
                            className={`absolute inset-0 transition-all duration-1000 ${
                                activeIndex === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                            }`}
                            aria-hidden={activeIndex !== index}
                        >
                            <Image src={reason.image} alt={`${reason.title} prefab construction`} fill sizes="50vw" className="object-cover" />
                            <div className="absolute inset-0 bg-black/[0.08]" />
                            <span className="absolute bottom-8 right-8 text-[0.58rem] uppercase tracking-[0.25em] text-white/75">
                                Detail / {reason.number}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

