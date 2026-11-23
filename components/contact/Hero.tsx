"use client";

import { useCallback, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import FallbackImage from "@/components/site/FallbackImage";
import { DisplayHeading, Eyebrow, outlineButton, shell } from "@/components/site/primitives";
import ProjectsPanel from "./ProjectsPanel";

export default function Hero() {
  const [panelOpen, setPanelOpen] = useState(false);
  const close = useCallback(() => setPanelOpen(false), []);

  return (
    <>
      <section className="border-b border-black/15 bg-white">
        <div className={`${shell} pb-16 pt-14 md:pb-24 md:pt-20`}>
          <Eyebrow className="mb-10">Our Footprint Across India</Eyebrow>
          <DisplayHeading
            as="h1"
            lines={["States we have served,", "communities", "we've shaped."]}
            className="text-[clamp(2.3rem,6.2vw,7.4rem)]"
          />

          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
            <div className="min-w-0 md:ml-[10%]">
              <p className="max-w-[28rem] text-[clamp(1.05rem,1.4vw,1.3rem)] leading-[1.5] tracking-[-0.015em]">
                From the Himalayan foothills to the southern coastlines — we have delivered excellence, built lasting
                trust, and grown alongside communities in every corner of India.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <button type="button" onClick={() => setPanelOpen(true)} className={outlineButton}>
                  Explore Our Reach
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </button>
                <span className="text-[0.58rem] uppercase tracking-[0.22em] text-[#886c46]">
                  Rooted in India. Ready for the world.
                </span>
              </div>
            </div>

          {/* Clickable map: opens the same project list as the button. */}
          <div className="mx-auto w-full max-w-[30rem] lg:max-w-none">
            <button
              type="button"
              onClick={() => setPanelOpen(true)}
              aria-label="View our projects across India"
              className="group block w-full border border-black/15 p-[5px] text-left focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]"
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-[#f3ede3]">
                <FallbackImage
                  src="/india-map.svg"
                  alt="Map of India highlighting states served"
                  fill
                  priority
                  sizes="(min-width: 1024px) 36vw, 90vw"
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute right-4 top-4 flex items-center gap-2 border border-black/10 bg-white px-3 py-2 text-[0.55rem] uppercase tracking-[0.2em]">
                  <MapPin className="h-3 w-3 text-[#886c46]" />
                  Pan India
                </span>
              </span>
            </button>
            <p className="mt-3 text-right text-[0.58rem] uppercase tracking-[0.22em] text-black/50">View our projects →</p>
          </div>
          </div>
        </div>
      </section>

      <ProjectsPanel open={panelOpen} onClose={close} />
    </>
  );
}
