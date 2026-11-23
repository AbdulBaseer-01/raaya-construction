// 'use client'
// import React, { useState, useEffect, useCallback } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
// import { Merriweather, Playfair_Display } from 'next/font/google'
// import {
//   ArrowUpRight,
//   X,
//   ChevronLeft,
//   ChevronRight,
//   ZoomIn,
// } from 'lucide-react'

// /* ─── Fonts ─────────────────────────────────────────────────────────── */
// const merri = Merriweather({
//   subsets: ['latin'],
//   weight: ['300', '400', '700', '900'],
// })

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800', '900'],
// })

// /* ─── Types ──────────────────────────────────────────────────────────── */
// export interface SubImage {
//   src: string
//   heading: string
//   description: string
//   /** At least 4 detail images for the panel */
//   detailImages: string[]
//   tag?: string
// }

// export interface ContainerProps {
//   mainImage: string
//   mainHeading?: string
//   mainSubtitle?: string
//   subImages: SubImage[]          // expects ≥ 3 items; first 3 are shown
// }

// /* ─── Panel ──────────────────────────────────────────────────────────── */
// interface PanelProps {
//   item: SubImage
//   isOpen: boolean
//   onClose: () => void
// }

// const DetailPanel: React.FC<PanelProps> = ({ item, isOpen, onClose }) => {
//   const [active, setActive] = useState(0)

//   // Reset gallery when panel opens
//   useEffect(() => {
//     if (isOpen) setActive(0)
//   }, [isOpen, item])

//   // Keyboard navigation
//   useEffect(() => {
//     if (!isOpen) return
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onClose()
//       if (e.key === 'ArrowRight')
//         setActive(c => (c + 1) % item.detailImages.length)
//       if (e.key === 'ArrowLeft')
//         setActive(c => (c - 1 + item.detailImages.length) % item.detailImages.length)
//     }
//     window.addEventListener('keydown', onKey)
//     return () => window.removeEventListener('keydown', onKey)
//   }, [isOpen, item.detailImages.length, onClose])

//   // Body scroll lock
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'unset'
//     return () => { document.body.style.overflow = 'unset' }
//   }, [isOpen])

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           key="panel-backdrop"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.35 }}
//           className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
//           onClick={onClose}
//         >
//           {/* Panel card */}
//           <motion.div
//             key="panel-card"
//             initial={{ opacity: 0, y: 40, scale: 0.96 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 40, scale: 0.96 }}
//             transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
//             className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
//             onClick={e => e.stopPropagation()}
//           >
//             {/* ── LEFT: image gallery ── */}
//             <div className="relative md:w-[55%] h-72 md:h-auto flex-shrink-0 bg-black/5">
//               {/* Main active image */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={active}
//                   initial={{ opacity: 0, scale: 1.04 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.97 }}
//                   transition={{ duration: 0.4 }}
//                   className="absolute inset-0"
//                 >
//                   <Image
//                     src={item.detailImages[active]}
//                     alt={`${item.heading} ${active + 1}`}
//                     fill
//                     className="object-cover"
//                   />
//                   {/* Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//                 </motion.div>
//               </AnimatePresence>

//               {/* Tag */}
//               {item.tag && (
//                 <div className="absolute top-5 left-5 z-10">
//                   <span className={`${merri.className} text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 bg-black/60 backdrop-blur-md text-[#886c46] rounded-full border border-[#886c46]/40 font-light`}>
//                     {item.tag}
//                   </span>
//                 </div>
//               )}

//               {/* Counter */}
//               <div className="absolute top-5 right-14 z-10">
//                 <span className={`${merri.className} text-xs text-white/70 font-light tracking-widest`}>
//                   {String(active + 1).padStart(2, '0')} / {String(item.detailImages.length).padStart(2, '0')}
//                 </span>
//               </div>

//               {/* Prev / Next */}
//               <button
//                 onClick={() => setActive(c => (c - 1 + item.detailImages.length) % item.detailImages.length)}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#886c46] hover:border-[#886c46] transition-all duration-300"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setActive(c => (c + 1) % item.detailImages.length)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#886c46] hover:border-[#886c46] transition-all duration-300"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>

//               {/* Thumbnail strip */}
//               <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2 max-w-xs md:max-w-sm overflow-x-auto px-2">
//                 {item.detailImages.map((img, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setActive(i)}
//                     className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 shrink-0 transition-all duration-300 ${
//                       i === active
//                         ? 'border-[#886c46] opacity-100 scale-105'
//                         : 'border-white/25 opacity-55 hover:opacity-80'
//                     }`}
//                   >
//                     <Image src={img} alt="" fill className="object-cover" />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* ── RIGHT: text content ── */}
//             <div className="flex-1 flex flex-col overflow-y-auto">
//               {/* Gold top bar */}
//               <div className="h-1 w-full bg-gradient-to-r from-[#886c46] via-[#c9a97a] to-[#886c46] flex-shrink-0" />

//               <div className="p-8 md:p-10 flex flex-col gap-6 flex-1">
//                 {/* Eyebrow */}
//                 <div className="flex items-center gap-3">
//                   <div className="h-px w-12 bg-gradient-to-r from-[#886c46] to-[#886c46]/30" />
//                   <span className={`${merri.className} text-[10px] uppercase tracking-[0.3em] text-[#886c46] font-light`}>
//                     Detail View
//                   </span>
//                 </div>

//                 {/* Heading */}
//                 <div>
//                   <h2 className={`${playfair.className} text-3xl md:text-4xl font-semibold text-black leading-tight mb-3`}>
//                     {item.heading}
//                   </h2>
//                   <div className="w-10 h-0.5 rounded-full bg-[#886c46]/40" />
//                 </div>

//                 {/* Description */}
//                 <p className={`${merri.className} text-black/60 font-light leading-relaxed text-[15px]`}>
//                   {item.description}
//                 </p>

//                 {/* Image dots quick-nav */}
//                 <div className="flex items-center gap-2 mt-auto pt-4 border-t border-black/6">
//                   <span className={`${merri.className} text-[11px] text-black/40 font-light uppercase tracking-widest mr-1`}>
//                     Images
//                   </span>
//                   {item.detailImages.map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setActive(i)}
//                       className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                         i === active ? 'bg-[#886c46] scale-125' : 'bg-black/20 hover:bg-[#886c46]/50'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Close */}
//             <button
//               onClick={onClose}
//               className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/10 backdrop-blur-sm border border-black/10 flex items-center justify-center text-black/60 hover:bg-[#886c46] hover:text-white hover:border-[#886c46] transition-all duration-300"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// /* ─── Container ──────────────────────────────────────────────────────── */
// const Container: React.FC<ContainerProps> = ({
//   mainImage,
//   mainHeading = 'Crafted to Perfection',
//   mainSubtitle = 'Explore our curated collection',
//   subImages,
// }) => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null)
//   const [hoveredSub, setHoveredSub] = useState<number | null>(null)

//   const visibleSubs = subImages.slice(0, 3)

//   const openPanel = useCallback((i: number) => setOpenIndex(i), [])
//   const closePanel = useCallback(() => setOpenIndex(null), [])

//   return (
//     <section className="relative py-24 px-6 md:px-12 bg-white">
//       <div className="max-w-7xl mx-auto space-y-6">

//         {/* ── MAIN IMAGE ────────────────────────────────────────────── */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative w-full overflow-hidden rounded-3xl"
//           style={{ aspectRatio: '16/7' }}
//         >
//           <Image
//             src={mainImage}
//             alt={mainHeading}
//             fill
//             priority
//             className="object-cover"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//           {/* Corner accent lines */}
//           <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-[#886c46]/70 rounded-tl-lg" />
//           <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-[#886c46]/70 rounded-tr-lg" />
//           <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-[#886c46]/70 rounded-bl-lg" />
//           <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-[#886c46]/70 rounded-br-lg" />

//           {/* Bottom text */}
//           <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="h-px w-12 bg-gradient-to-r from-[#886c46] to-[#886c46]/30" />
//               <span className={`${merri.className} text-[10px] uppercase tracking-[0.35em] text-[#886c46] font-light`}>
//                 Featured
//               </span>
//             </div>
//             <h2 className={`${playfair.className} text-3xl md:text-5xl font-semibold text-white leading-tight`}>
//               {mainHeading}
//             </h2>
//             <p className={`${merri.className} text-white/60 font-light mt-2 text-sm md:text-base`}>
//               {mainSubtitle}
//             </p>
//           </div>
//         </motion.div>

//         {/* ── SUB IMAGES (3 columns) ────────────────────────────────── */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {visibleSubs.map((sub, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.12 }}
//               onMouseEnter={() => setHoveredSub(i)}
//               onMouseLeave={() => setHoveredSub(null)}
//               className="group relative overflow-hidden rounded-2xl bg-black/4 border border-black/8 hover:border-[#886c46]/40 hover:shadow-xl hover:shadow-[#886c46]/8 transition-all duration-500 cursor-pointer"
//               onClick={() => openPanel(i)}
//             >
//               {/* Image area */}
//               <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
//                 <Image
//                   src={sub.src}
//                   alt={sub.heading}
//                   fill
//                   className={`object-cover transition-transform duration-700 ${
//                     hoveredSub === i ? 'scale-110' : 'scale-100'
//                   }`}
//                 />
//                 {/* Gradient */}
//                 <div className={`absolute inset-0 transition-all duration-500 ${
//                   hoveredSub === i
//                     ? 'bg-gradient-to-t from-black/75 via-black/30 to-black/5'
//                     : 'bg-gradient-to-t from-black/50 via-transparent to-transparent'
//                 }`} />

//                 {/* Tag */}
//                 {sub.tag && (
//                   <div className="absolute top-4 left-4">
//                     <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 bg-black/60 backdrop-blur-md text-[#886c46] rounded-full border border-[#886c46]/30 font-light`}>
//                       {sub.tag}
//                     </span>
//                   </div>
//                 )}

//                 {/* Index number */}
//                 <div className="absolute top-4 right-4">
//                   <span className={`${playfair.className} text-4xl font-bold text-white/20 group-hover:text-white/40 transition-colors`}>
//                     {String(i + 1).padStart(2, '0')}
//                   </span>
//                 </div>

//                 {/* Hover zoom icon */}
//                 <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${
//                   hoveredSub === i ? 'opacity-100' : 'opacity-0'
//                 }`}>
//                   <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
//                     <ZoomIn className="w-5 h-5 text-white" />
//                   </div>
//                 </div>

//                 {/* Bottom accent line */}
//                 <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#886c46] via-[#c9a97a] to-[#886c46] transition-opacity duration-300 ${
//                   hoveredSub === i ? 'opacity-100' : 'opacity-0'
//                 }`} />
//               </div>

//               {/* Text + button */}
//               <div className="p-5 bg-white">
//                 <h3 className={`${playfair.className} text-lg font-semibold text-black mb-1.5 group-hover:text-[#886c46] transition-colors line-clamp-1`}>
//                   {sub.heading}
//                 </h3>
//                 <p className={`${merri.className} text-black/50 font-light text-xs leading-relaxed mb-4 line-clamp-2`}>
//                   {sub.description}
//                 </p>

//                 {/* View Details button */}
//                 <button
//                   onClick={(e) => { e.stopPropagation(); openPanel(i) }}
//                   className={`${merri.className} group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-light tracking-wide border transition-all duration-300 ${
//                     hoveredSub === i
//                       ? 'bg-[#886c46] border-[#886c46] text-white shadow-lg shadow-[#886c46]/20'
//                       : 'bg-transparent border-[#886c46]/40 text-[#886c46] hover:bg-[#886c46] hover:border-[#886c46] hover:text-white hover:shadow-lg hover:shadow-[#886c46]/20'
//                   }`}
//                 >
//                   View Details
//                   <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── DETAIL PANEL ─────────────────────────────────────────────── */}
//       {visibleSubs.map((sub, i) => (
//         <DetailPanel
//           key={i}
//           item={sub}
//           isOpen={openIndex === i}
//           onClose={closePanel}
//         />
//       ))}
//     </section>
//   )
// }

// export default Container

'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Merriweather, Playfair_Display } from 'next/font/google'
import {
  ArrowUpRight,
  X,
  ZoomIn,
} from 'lucide-react'

/* ─── Fonts ─────────────────────────────────────────────────────────── */
const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

/* ─── Types ──────────────────────────────────────────────────────────── */
export interface SubImage {
  src: string
  heading: string
  description: string
  /** At least 4 detail images for the panel */
  detailImages: string[]
  tag?: string
}

export interface ContainerProps {
  mainImage: string
  mainHeading?: string
  mainSubtitle?: string
  subImages: SubImage[]
}

/* ─── Panel ──────────────────────────────────────────────────────────── */
interface PanelProps {
  item: SubImage
  isOpen: boolean
  onClose: () => void
}

const DetailPanel: React.FC<PanelProps> = ({ item, isOpen, onClose }) => {
  // Keyboard / scroll-lock
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="panel-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-99999 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Panel card */}
          <motion.div
            key="panel-card"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Gold top bar */}
            <div className="h-1 w-full bg-linear-to-r from-[#886c46] via-[#c9a97a] to-[#886c46] shrink-0" />

            {/* Header */}
            <div className="px-8 md:px-10 pt-8 pb-5 shrink-0 border-b border-black/6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-12 bg-linear-to-r from-[#886c46] to-[#886c46]/30" />
                <span className={`${merri.className} text-[10px] uppercase tracking-[0.3em] text-[#886c46] font-light`}>
                  Detail View
                </span>
              </div>
              <h2 className={`${playfair.className} text-2xl md:text-3xl font-semibold text-black leading-tight`}>
                {item.heading}
              </h2>
              {item.tag && (
                <span className={`${merri.className} inline-block mt-2 text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-[#886c46]/10 text-[#886c46] rounded-full border border-[#886c46]/30 font-light`}>
                  {item.tag}
                </span>
              )}
            </div>

            <div className="overflow-y-auto flex-1 px-8 md:px-10 py-6">
              <div className="flex flex-col divide-y divide-black/6">
                {item.detailImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="group flex items-start gap-6 py-5 first:pt-0 last:pb-0"
                  >
                    {/* Left: image */}
                    <div className="relative w-28 h-20 md:w-86 md:h-64 shrink-0 rounded-xl overflow-hidden border border-black/8 group-hover:border-[#886c46]/40 transition-colors duration-300">
                      <Image
                        src={img}
                        alt={`${item.heading} ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* subtle gradient */}
                      <div className="absolute inset-0 bg-linear-to-br from-transparent to-black/20 group-hover:to-[#886c46]/20 transition-colors duration-300" />
                      {/* index badge */}
                      <span className={`${playfair.className} absolute top-1.5 left-2 text-lg font-bold text-white/50 group-hover:text-white/70 leading-none transition-colors`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Right: heading + description */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="h-px w-6 bg-[#886c46]/50 shrink-0" />
                        <h3 className={`${playfair.className} text-base md:text-lg font-semibold text-black group-hover:text-[#886c46] transition-colors duration-300 leading-snug`}>
                          {item.heading} — Image {i + 1}
                        </h3>
                      </div>
                      <p className={`${merri.className} text-black/50 font-light text-xs md:text-sm leading-relaxed line-clamp-2`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Right arrow indicator */}
                    <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-7 h-7 rounded-full bg-[#886c46]/10 border border-[#886c46]/30 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#886c46]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom spacer */}
              <div className="h-2" />
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full cursor-pointer bg-black/10 backdrop-blur-sm border border-black/10 flex items-center justify-center text-black/60 hover:bg-[#886c46] hover:text-white hover:border-[#886c46] transition-all duration-300"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─── Container ──────────────────────────────────────────────────────── */
const Container: React.FC<ContainerProps> = ({
  mainImage,
  mainHeading = 'Crafted to Perfection',
  // mainSubtitle = 'Explore our curated collection',
  subImages,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [hoveredSub, setHoveredSub] = useState<number | null>(null)

  const visibleSubs = subImages.slice(0, 3)

  const openPanel = useCallback((i: number) => setOpenIndex(i), [])
  const closePanel = useCallback(() => setOpenIndex(null), [])

  return (
    <section className="relative py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden rounded-3xl"
        >
          <Image
            src={mainImage}
            alt={mainHeading}
            width={1200}
            height={600}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleSubs.map((sub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              onMouseEnter={() => setHoveredSub(i)}
              onMouseLeave={() => setHoveredSub(null)}
              className="group relative overflow-hidden rounded-2xl bg-black/4 border border-black/8 hover:border-[#886c46]/40 hover:shadow-xl hover:shadow-[#886c46]/8 transition-all duration-500 cursor-pointer"
              onClick={() => openPanel(i)}
            >
              <div className="relative overflow-hidden w-full h-75 flex items-center justify-center">
                <Image
                  src={sub.src}
                  alt={sub.heading}
                  width={500}
                  height={500}
                  className={`max-h-full w-auto object-contain transition-transform duration-700 ${
                    hoveredSub === i ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 transition-all duration-500 ${
                  hoveredSub === i
                    ? 'bg-linear-to-t from-black/75 via-black/30 to-black/5'
                    : 'bg-linear-to-t from-black/50 via-transparent to-transparent'
                }`} />

                {sub.tag && (
                  <div className="absolute top-4 left-4">
                    <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 bg-black/80 backdrop-blur-md text-[#ffffff] rounded-full border border-[#886c46]/30 font-light`}>
                      {sub.tag} 
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4">
                  <span className={`${playfair.className} text-4xl font-bold text-white/20 group-hover:text-white/40 transition-colors`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${
                  hoveredSub === i ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-[#886c46] via-[#c9a97a] to-[#886c46] transition-opacity duration-300 ${
                  hoveredSub === i ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>

              <div className="p-5 bg-white">
                <h3 className={`${playfair.className} text-lg font-semibold text-black mb-1.5 group-hover:text-[#886c46] transition-colors line-clamp-1`}>
                  {sub.heading}
                </h3>
                <p className={`${merri.className} text-black/50 font-light text-xs leading-relaxed mb-4 line-clamp-2`}>
                  {sub.description}
                </p>

                <button
                  onClick={(e) => { e.stopPropagation(); openPanel(i) }}
                  className={`${merri.className} group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-light tracking-wide border transition-all duration-300 ${
                    hoveredSub === i
                      ? 'bg-[#886c46] border-[#886c46] text-white shadow-lg shadow-[#886c46]/20'
                      : 'bg-transparent border-[#886c46]/40 text-[#886c46] hover:bg-[#886c46] hover:border-[#886c46] hover:text-white hover:shadow-lg hover:shadow-[#886c46]/20'
                  }`}
                >
                  View Details
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {visibleSubs.map((sub, i) => (
        <DetailPanel
          key={i}
          item={sub}
          isOpen={openIndex === i}
          onClose={closePanel}
        />
      ))}
    </section>
  )
}

export default Container


/* ─── USAGE EXAMPLE (delete before shipping) ─────────────────────────
import Container from '@/components/Container'

<Container
  mainImage="/images/hero-main.jpg"
  mainHeading="Crafted to Perfection"
  mainSubtitle="Explore our curated collection of premium products"
  subImages={[
    {
      src: '/images/sub-1.jpg',
      heading: 'Teak Wood Panels',
      description: 'Natural teak with a rich grain texture, perfect for accent walls and statement furniture.',
      tag: 'Wood',
      detailImages: [
        '/images/sub-1.jpg',
        '/images/sub-1-detail-2.jpg',
        '/images/sub-1-detail-3.jpg',
        '/images/sub-1-detail-4.jpg',
      ],
    },
    {
      src: '/images/sub-2.jpg',
      heading: 'Stone Veneer',
      description: 'Lightweight stone veneer slabs that bring the beauty of natural rock indoors.',
      tag: 'Stone',
      detailImages: [
        '/images/sub-2.jpg',
        '/images/sub-2-detail-2.jpg',
        '/images/sub-2-detail-3.jpg',
        '/images/sub-2-detail-4.jpg',
      ],
    },
    {
      src: '/images/sub-3.jpg',
      heading: 'Marble Finish',
      description: 'Premium marble-effect surfaces that are durable, low-maintenance, and breathtaking.',
      tag: 'Marble',
      detailImages: [
        '/images/sub-3.jpg',
        '/images/sub-3-detail-2.jpg',
        '/images/sub-3-detail-3.jpg',
        '/images/sub-3-detail-4.jpg',
      ],
    },
  ]}
/>
─────────────────────────────────────────────────────────────────────── */