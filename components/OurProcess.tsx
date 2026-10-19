"use client";

import { motion } from "framer-motion";
import { Ruler, Factory, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export default function OurProcess() {
  return (
    <section className="overflow-hidden bg-white py-32 text-black">
  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      <motion.h2 className="mb-4 text-[clamp(2.8rem,6.5vw,8rem)] uppercase leading-[0.82] tracking-[-0.065em]">
        Texo’s 4-Step Plug & Play Prefab Process
      </motion.h2>
      <p className="text-[0.85rem] leading-[1.7] text-black/60">
        Texo Prefab World transforms modern living with precision-engineered,  sustainable modular structures. Headquartered in Hyderabad and proudly ISO 9001:2025 certified, we design and deliver prefabricated homes, offices, farmhouses, and specialty units – faster, smarter, and greener.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.7,
          delay: 0,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative h-fit overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-[0_12px_35px_rgba(61,43,24,0.08)] transition duration-300 hover:border-[#886c46]/40 hover:shadow-[0_20px_45px_rgba(61,43,24,0.16)]"
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#886c46]/5 to-[#d7a661]/5 opacity-0 transition duration-300 group-hover:opacity-100" />
        
        <div className="relative flex flex-col  gap-6">
          <div className="rounded-lg border border-[#886c46]/35 bg-white p-8 text-black">
            <div className="mb-4 flex items-start gap-4">
                        <Ruler className="text-[#886c46] shrink-0" size={32} />
                <h2 className="text-xl font-semibold uppercase leading-[0.95] tracking-[-0.03em]">Space Planning & Modular Design</h2>
                    </div>
            <p className="text-sm leading-[1.7] text-black/60">
                        We assess your requirements thoroughly and convert your space into smart, transportable modules.
                    </p>
                </div>
                
                <div className="rounded-lg border border-[#886c46]/35 bg-white p-8 text-black">
                    <div className="mb-4 flex items-start gap-4">
                        <Zap className="text-[#886c46] shrink-0" size={32} />
                        <h2 className="text-xl font-semibold uppercase leading-[0.95] tracking-[-0.03em]">Fast On-Site Installation</h2>
                    </div>
                    <p className="text-sm leading-[1.7] text-black/60">
                        Modules arrive ready to connect - install and move in within 3–7 days.
                    </p>
                </div>
        </div>

        <div className="absolute top-0 right-0 w-1 h-0 bg-linear-to-b from-[#d7a661] to-transparent group-hover:h-full transition-all duration-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.5, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="group relative h-96 overflow-hidden rounded-3xl shadow-2xl shadow-black/20 md:h-130"
      >
        <Image
          src="/texo-4.jpg"
          alt="Texo Prefab site office"
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-transparent transition duration-700 group-hover:from-black/30" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.7,
          delay: 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative h-fit overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-[0_12px_35px_rgba(61,43,24,0.08)] transition duration-300 hover:border-[#886c46]/40 hover:shadow-[0_20px_45px_rgba(61,43,24,0.16)]"
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#886c46]/5 to-[#d7a661]/5 opacity-0 transition duration-300 group-hover:opacity-100" />
        
        <div className="relative flex flex-col gap-6">
         <div className="rounded-lg border border-[#886c46]/35 bg-white p-8 text-black">
                     <div className="mb-4 flex items-start gap-4">
                         <ShieldCheck className="text-[#886c46] shrink-0" size={32} />
                         <h2 className="text-xl font-semibold uppercase leading-[0.95] tracking-[-0.03em]">Quality Testing & Logistics Prep</h2>
                     </div>
                     <p className="text-sm leading-[1.7] text-black/60">
                         Every unit is QC-tested and prepped for smooth transport and on-site assembly.
                     </p>
                 </div>
                 <div className="rounded-lg border border-[#886c46]/35 bg-white p-8 text-black">
                     <div className="mb-4 flex items-start gap-4">
                         <Factory className="text-[#886c46] shrink-0" size={32} />
                         <h2 className="text-xl font-semibold uppercase leading-[0.95] tracking-[-0.03em]">Factory-Built with Smart Engineering</h2>
                     </div>
                     <p className="text-sm leading-[1.7] text-black/60">
                         Modules are built with customized pre-installed plumbing, electricals, and finishes.
                     </p>
                </div>
        </div>

        <div className="absolute top-0 right-0 w-1 h-0 bg-linear-to-b from-[#d7a661] to-transparent group-hover:h-full transition-all duration-500" />
      </motion.div>

    </div>

  </div>
</section>
  );
}
