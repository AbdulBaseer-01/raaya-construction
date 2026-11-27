import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import FallbackImage from "@/components/site/FallbackImage";
import { DisplayHeading, Eyebrow, outlineButton, shell } from "@/components/site/primitives";
import { FACTS } from "@/lib/siteFacts";

/*
 * "Our footprint" (brief, section 20). It now sits below the enquiry block, and
 * both links go to the Projects page instead of opening the old landmark-projects drawer.
 *
 * TODO(Texo): supply the list of states served for the India map (/public/india-map.svg).
 */
export default function Hero() {
  return (
    <section className="border-y border-black/15 bg-white">
      <div className={`${shell} py-24 md:py-32`}>
        <Eyebrow className="mb-10">Our Footprint Across India</Eyebrow>
        <DisplayHeading
          lines={["States we have served,", "communities", "we've shaped."]}
          className="text-[clamp(2.6rem,5vw,6.2rem)]"
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <div className="min-w-0 md:ml-[10%]">
            <p className="max-w-[28rem] text-[clamp(1.05rem,1.4vw,1.3rem)] leading-[1.5] tracking-[-0.015em]">
              {FACTS.projects} projects across {FACTS.cities} cities, all manufactured in our Hyderabad factory and
              installed on site.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link href="/inspiration-gallery" className={outlineButton}>
                Explore Our Reach
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
              <span className="text-[0.58rem] uppercase tracking-[0.22em] text-[#886c46]">
                Rooted in Hyderabad. Building across India.
              </span>
            </div>
          </div>

          {/* The map links to the Projects page, like the button. */}
          <div className="mx-auto w-full max-w-[30rem] lg:max-w-none">
            <Link
              href="/inspiration-gallery"
              aria-label="View our projects across India"
              className="group block w-full border border-black/15 p-[5px] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]"
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-[#f3ede3]">
                <FallbackImage
                  src="/india-map.svg"
                  alt="Map of India highlighting states served"
                  fill
                  sizes="(min-width: 1024px) 36vw, 90vw"
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute right-4 top-4 flex items-center gap-2 border border-black/10 bg-white px-3 py-2 text-[0.55rem] uppercase tracking-[0.2em]">
                  <MapPin className="h-3 w-3 text-[#886c46]" />
                  Pan India
                </span>
              </span>
            </Link>
            <Link
              href="/inspiration-gallery"
              className="mt-3 block text-right text-[0.58rem] uppercase tracking-[0.22em] text-black/50 transition-colors hover:text-[#886c46]"
            >
              View our projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
