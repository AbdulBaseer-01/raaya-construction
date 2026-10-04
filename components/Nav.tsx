'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowUpRight, ChevronDown, X } from 'lucide-react'

const productCategories = [
  { label: 'Wooden Series', items: ['A-Frame Cabin', 'Arc Pod', 'Wooden House', 'Smart House'] },
  { label: 'Portable Solutions', items: ['Porta Cabin', 'Farmhouse', 'Portable Office', 'Bunk House Cabin', 'Containers House', 'Modular Toilet', 'Mobile Toilet', 'Portable Toilet Cabin'] },
  { label: 'Prefab Solutions', items: ['Prefab Site Offices', 'Prefab Structures', 'Prefabricated Accommodation', 'Prefab House', 'Prefab Cottages', 'IOT Pods', 'Prefab Schools'] },
  { label: 'Specialized Structures', items: ['Clinic Cabin', 'Restaurant Cabin', 'Smoking Room', 'Electrical Room'] },
  { label: 'Security Solutions', items: ['Security Cabins', 'Toll Booth', 'ATM Cabin'] },
  { label: 'PUF Insulated Cabin', items: ['Control Room', 'Solar Control Room', 'Clean Room'] },
]

const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Features', href: '/features' },
  { label: 'Inspiration Gallery', href: '/inspiration-gallery' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Journal', href: '/blogs' },
  { label: 'Career', href: '/career' },
]

const menuEase = [0.22, 1, 0.36, 1] as const

export default function Nav() {
  const [heroComplete, setHeroComplete] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setHeroComplete(scrollY > window.innerHeight * 1.05)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen || !panelRef.current) return

    gsap.fromTo(
      panelRef.current,
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power4.inOut' },
    )
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
          heroComplete
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-full opacity-0'
        }`}
      >
        <div className="flex h-[68px] items-center justify-between border-b border-black/10 bg-white px-[3vw]">
          <Link href="/" className="shrink-0" aria-label="Prefab Construction home">
            <Image src="/black-logo.png" width={176} height={40} sizes="176px" quality={100} alt="Prefab Construction Company Logo" className="h-10 w-auto object-contain" />
          </Link>

          <button type="button" aria-label="Open full-screen navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)} className="group flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-black">
            <span className="relative">Menu<span className="absolute -bottom-1 left-0 h-px w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full" /></span>
            <span className="flex h-7 w-7 flex-col items-center justify-center gap-1 border border-black/20 transition-colors group-hover:border-[#886c46]">
              <span className="h-px w-3 bg-black" />
              <span className="h-px w-3 bg-black" />
            </span>
          </button>
        </div>
      </header>

      <motion.div
        className={`fixed inset-0 z-[1000] overflow-y-auto bg-[#f5f2ec] text-black ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: menuOpen ? 0.35 : 0.2 }}
        aria-hidden={!menuOpen}
      >
            <div ref={panelRef} className="min-h-screen lg:h-screen lg:overflow-hidden">
              <div className="flex items-center justify-between border-b border-black/15 px-[4vw] py-5 lg:py-3">
                <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Prefab Construction home">
                  <Image src="/logo-2.png" width={56} height={56} alt="Prefab Construction Company Logo" className="h-11 w-auto" />
                </Link>

                <button type="button" aria-label="Close full-screen navigation" onClick={() => setMenuOpen(false)} className="group flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.2em]">
                  Close
                  <span className="flex h-8 w-8 items-center justify-center border border-black/20 transition-colors group-hover:border-[#886c46]">
                    <X className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                  </span>
                </button>
              </div>

              <div className="mx-auto grid max-w-[1600px] gap-12 px-[4vw] pb-16 pt-12 lg:grid-cols-[0.8fr_1.5fr_0.9fr] lg:gap-10 lg:pb-8 lg:pt-8">
                <div>
                  <p className="mb-8 text-[0.58rem] uppercase tracking-[0.25em] text-[#886c46]">Navigate / 01</p>
                  <nav aria-label="Primary navigation" className="border-t border-black/15">
                    {primaryLinks.map((item, index) => (
                      <motion.div key={item.label} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.35 + index * 0.045, duration: 0.5, ease: menuEase } }} exit={{ opacity: 0, x: -10, transition: { duration: 0.15 } }} className="border-b border-black/15">
                        <Link href={item.href} onClick={() => setMenuOpen(false)} className="group flex items-center justify-between py-4 text-[clamp(1.05rem,1.2vw,1.7rem)] uppercase tracking-[-0.02em] transition-colors hover:text-[#886c46]">
                          {item.label}
                          <ArrowUpRight className="h-4 w-4 opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div>
                  <p className="mb-8 text-[0.58rem] uppercase tracking-[0.25em] text-[#886c46]">Products / 02</p>
                  <div className="grid gap-x-5 border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
                    {productCategories.map((category, categoryIndex) => (
                      <motion.div key={category.label} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.45 + categoryIndex * 0.06, duration: 0.55, ease: menuEase } }} exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }} className="border-b border-black/15 py-5 lg:py-3">
                        <Link href="/products" onClick={() => setMenuOpen(false)} className="group mb-3 flex items-center font-bold justify-between text-[0.82rem] uppercase tracking-[0.16em] transition-colors hover:text-[#886c46]">
                          {category.label}
                          <ChevronDown className="h-3 w-3 -rotate-90 opacity-35 transition-transform group-hover:translate-x-1 group-hover:text-[#886c46]" />
                        </Link>
                        <ul className="space-y-2 lg:space-y-1">
                          {category.items.map((item) => (
                            <li key={item}>
                              <Link href={`/products/${encodeURIComponent(item)}`} onClick={() => setMenuOpen(false)} className="text-[0.9rem] text-black/60 transition-colors hover:text-black">
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative hidden min-h-[500px] overflow-hidden bg-[#171716] lg:block">
                  <Image src="/products/prefab/cottage/images/image2.png" alt="Prefab architecture" fill sizes="360px" className="object-cover opacity-70 transition-transform duration-700 hover:scale-105" />
                  <div className="absolute right-5 top-5 h-28 w-24 overflow-hidden border border-white/30">
                    <Image src="/products/prefab/iot-pod/ext-2.png" alt="Prefab construction detail" fill sizes="96px" className="object-cover opacity-75" />
                  </div>
                  <div className="absolute inset-x-5 bottom-5 border-l border-white/50 pl-4 text-white">
                    <p className="text-[0.55rem] uppercase tracking-[0.22em] text-white/60">Prefab / 01</p>
                    <p className="mt-2 max-w-[12rem] text-lg leading-tight">Built for the next way of living.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/15 px-[4vw] py-5 text-[0.58rem] uppercase tracking-[0.2em] text-black/45 lg:py-3">
                <span>Manufacture / Install / Deliver</span>
                <Link href="/contact-us" onClick={() => setMenuOpen(false)} className="text-[#886c46] transition-colors hover:text-black px-4 py-2 rounded-2xl border">Start a conversation <ArrowUpRight className="ml-1 inline h-3 w-3" /></Link>
              </div>
            </div>
      </motion.div>
    </>
  )
}
