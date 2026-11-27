"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, FACTS, QUOTE_ANCHOR } from "@/lib/siteFacts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMAGE_2 = "/products/prefab/iot-pod/image-night-full-int.png";
const IMAGE_1 = "/products/prefab/iot-pod/ext-2.png";

const DETAIL_IMAGES = [
  "/products/woodenseries/arcpod/arc-pod-main.webp",
  "/products/special/electric/main-1.webp",
  "/products/special/electric/main-1.webp",
];
// export default function Hero() {
//   const root = useRef<HTMLElement>(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { ease: "none" },
//         scrollTrigger: {
//           trigger: root.current,
//           start: "top top",
//           end: "+=250%",
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//       });

//       // Phase 1: the 25% image expands to fill the whole screen
//       tl.fromTo(
//         ".hero-img-1",
//         { clipPath: "inset(0% 0% 0% 75%)" },
//         { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power2.inOut" },
//         0
//       )
//         .fromTo(
//           ".hero-img-1-inner",
//           { scale: 1.2 },
//           { scale: 1, duration: 1, ease: "power2.inOut" },
//           0
//         )
//         .to(
//           ".hero-text-1",
//           { xPercent: -15, opacity: 0, duration: 0.7, ease: "power2.in" },
//           0
//         )

//         // Phase 2: image-2 slides in horizontally with centered text
//         .fromTo(
//           ".hero-slide-2",
//           { xPercent: 100 },
//           { xPercent: 0, duration: 1, ease: "power2.inOut" },
//           1.2
//         )
//         .fromTo(
//           ".hero-img-2-inner",
//           { scale: 1.25 },
//           { scale: 1, duration: 1, ease: "power2.out" },
//           1.2
//         )
//         .fromTo(
//           ".hero-text-2 span",
//           { yPercent: 110, opacity: 0 },
//           { yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" },
//           1.9
//         );
//     }, root);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={root}
//       className="relative h-screen w-screen overflow-hidden bg-white text-black"
//     >
//       {/* 75% white panel with text */}
//       <div className="absolute inset-y-0 left-0 z-0 w-[75%] overflow-hidden">

//   {/* Top metadata */}
//   <span className="absolute left-[3vw] top-[2.5rem] text-[0.58rem] uppercase tracking-[0.28em] text-black/45">
//     Field notes / 01
//   </span>

//   <span className="absolute right-[2.5rem] top-[2.5rem] text-[0.58rem] uppercase tracking-[0.22em] text-black/40">
//     2026 / On site
//   </span>

//   {/* Small vertical index */}
//   <span className="absolute left-[1.25rem] top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[0.55rem] uppercase tracking-[0.28em] text-[#886c46]">
//     Built with intent
//   </span>

//   {/* Main editorial typography */}
//   <div className="absolute left-[10%] top-[24%]">

//     <h1 className="hero-text-1 text-[clamp(3.5rem,4vw,7.5rem)] uppercase ">

//       <span className="block">
//         Luxury That Leaves a <br /> Lighter Footprint
//       </span>

//       {/* <span className="ml-[16%] block">
//         without
//       </span>

//       <span className="ml-[34%] block">
//         the <em className="not-italic text-[#886c46]">wait.</em>
//       </span> */}

//     </h1>

//   </div>

//   {/* Secondary editorial copy */}
//   <div className="absolute bottom-[13%] right-[9%] w-[19rem]">

//     <p className="text-[0.7rem] leading-[1.55] text-black/65">
//       Prefabricated spaces engineered for
//       speed, precision and the way modern
//       construction should work.
//     </p>

//     <div className="mt-5 flex items-center gap-3">
//       <span className="h-px w-8 bg-black/30" />

//       <span className="text-[0.5rem] uppercase tracking-[0.25em] text-black/45">
//         Explore / 01
//       </span>
//     </div>

//   </div>

//   {/* Bottom metadata */}
//   <span className="absolute bottom-[2.5rem] left-[3vw] text-[0.58rem] uppercase tracking-[0.24em] text-black/40">
//     Structure / craft / time
//   </span>

//   <span className="absolute bottom-[2.5rem] right-[2.5rem] text-[0.58rem] uppercase tracking-[0.24em] text-black/40">
//     01 — 06
//   </span>

// </div>

//       {/* Image 1: starts as the right 25%, expands to 100% */}
//       <div
//         className="hero-img-1 absolute inset-0 z-10"
//         style={{ clipPath: "inset(0% 0% 0% 75%)" }}
//       >
//         <div className="hero-img-1-inner relative h-full w-full bg-neutral-200">
//           <Image
//             src={IMAGE_1}
//             alt="Hero image 1"
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover"
//           />
//         </div>
//       </div>

//       {/* Slide 2: image-2 slides in from the right, text centered */}
//       <div className="hero-slide-2 absolute inset-0 z-20 overflow-hidden">
//         <div className="hero-img-2-inner relative h-full w-full bg-neutral-300">
//           <Image
//             src={IMAGE_2}
//             alt="Hero image 2"
//             fill
//             sizes="100vw"
//             className="object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-black/40" />
//         <h2 className="hero-text-2 absolute inset-0 flex flex-col items-center justify-center text-center text-[clamp(2rem,6vw,7rem)] uppercase leading-[0.95] tracking-tighter text-white">
//           <span className="block overflow-hidden">Made off-site.</span>
//           <span className="block overflow-hidden">Built on-site.</span>
//         </h2>
//       </div>
//     </section>
//   );
// }

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([".detail-image-2", ".detail-image-3"], { yPercent: 100 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          // The header is visible on the first screen (brief, section 2), so the hero pins just below it.
          start: "top 68px",
          end: "+=250%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1: the 25% image expands to fill the whole screen
      tl.fromTo(
        ".hero-img-1",
        { clipPath: "inset(0% 0% 0% 85%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power2.inOut",
        },
        0
      )
        .fromTo(
          ".hero-img-1-inner",
          { scale: 1.2 },
          { scale: 1, duration: 1, ease: "power2.inOut" },
          0
        )
        .to(
          ".hero-text-1",
          {
            xPercent: -15,
            opacity: 0,
            duration: 0.7,
            ease: "power2.in",
          },
          0
        )

        // Small architectural detail appears once image 1 settles
        .fromTo(
          ".hero-detail",
          {
            opacity: 0,
            y: 30,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          },
          0.95
        )
        .fromTo(
          ".detail-image-1",
          { yPercent: 0 },
          { yPercent: -100, duration: 0.45, ease: "power2.inOut" },
          1.35
        )
        .fromTo(
          ".detail-image-2",
          { yPercent: 100 },
          { yPercent: 0, duration: 0.45, ease: "power2.inOut" },
          1.35
        )
        .fromTo(
          ".detail-image-2",
          { yPercent: 0 },
          { yPercent: -100, duration: 0.45, ease: "power2.inOut" },
          1.85
        )
        .fromTo(
          ".detail-image-3",
          { yPercent: 100 },
          { yPercent: 0, duration: 0.45, ease: "power2.inOut" },
          1.85
        )

        // Phase 2: image-2 slides in horizontally
        .fromTo(
          ".hero-slide-2",
          { xPercent: 100 },
          {
            xPercent: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          1.2
        )
        .fromTo(
          ".hero-img-2-inner",
          { scale: 1.25 },
          {
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          1.2
        )
        .fromTo(
          ".hero-text-2 span",
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          1.9
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative mt-[68px] h-[calc(100svh-68px)] w-screen overflow-hidden bg-white text-black max-md:portrait:h-[calc(100svh-68px-3.5rem-env(safe-area-inset-bottom))] md:h-[calc(100vh-68px)]"
    >
      {/* =========================================================
          85% EDITORIAL WHITE PANEL
      ========================================================= */}

      {/*
        Below lg the panel is a flow layout (headline + copy stacked, or two
        columns on short landscape screens) sized to the visible 85% beside the
        image strip. From lg up every element keeps its original absolute
        desktop position, so the desktop view is unchanged.
      */}
      <div
        className="
          absolute inset-y-0 left-0 z-0 flex w-[85%] flex-col overflow-hidden bg-white
          px-[8%] pb-[clamp(3rem,9svh,5.5rem)] pt-[clamp(2.75rem,12svh,8rem)] [@media(orientation:portrait)_and_(max-height:620px)]:pb-[2.5rem] [@media(orientation:portrait)_and_(max-height:620px)]:pt-[3rem]
          max-lg:landscape:grid max-lg:landscape:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
          max-lg:landscape:content-center max-lg:landscape:gap-x-[7%] max-lg:landscape:gap-y-[clamp(0.6rem,3svh,1.25rem)]
          max-lg:landscape:pb-[2.75rem] max-lg:landscape:pt-[3.25rem]
          lg:block lg:p-0
        "
      >

        

        {/* The site header (with the Texo logo) now sits above the hero, so the hero's own logo is not repeated here. */}

        {/* Top right metadata */}
        <span className="absolute right-5 top-6 text-[0.48rem] uppercase tracking-[0.16em] text-black md:right-[2.5rem] md:top-7 md:text-[0.55rem] md:tracking-[0.2em]">
          Hyderabad / Since {FACTS.founded}
        </span>

        <span className="absolute right-0 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[0.52rem] uppercase tracking-[0.28em] text-black lg:block">
          Form / Function / Future
        </span>

        {/* Vertical editorial label */}
        <span className="absolute left-[1.15rem] top-1/2 hidden -translate-y-1/2 -rotate-90 text-[0.52rem] uppercase tracking-[0.28em] text-[#886c46] lg:block">
          Built with intent
        </span>

        {/* Small vertical number */}
        <span className="absolute left-5 top-[43%] hidden text-[0.5rem] tracking-[0.15em] text-black md:left-[1.1rem] lg:block">
          01
        </span>

        {/* =====================================================
            MAIN EDITORIAL TYPE
        ===================================================== */}

        <div className="relative max-lg:landscape:col-start-1 max-lg:landscape:row-span-2 max-lg:landscape:row-start-1 max-lg:landscape:self-end lg:absolute lg:left-[10%] lg:top-[30%]">
          <h1
            className="
              hero-text-1
              text-[clamp(2.1rem,min(11vw,8.5svh),4.8rem)]
              uppercase
              leading-[0.84]
              tracking-[-0.035em]
              max-lg:landscape:text-[clamp(1.7rem,min(5.4vw,10svh),4rem)]
              [@media(orientation:portrait)_and_(max-height:620px)]:text-[1.6rem]
              lg:text-[clamp(3rem,5.6vw,7.2rem)]
            "
          >
            <span className="block">
              Premium Modular
            </span>

            <span className="ml-[7%] block lg:ml-[13%]">
              Buildings,
            </span>

            <span className="ml-[14%] block lg:ml-[28%]">
              <em
                className={`
                  tracking-[-0.025em]
                  text-[#886c46]
        `}
              >
                Ready in weeks.
              </em>
            </span>
          </h1>
        </div>

        {/* Right body text + the two lead actions (brief, section 2) */}
        <div className="relative mt-[clamp(1.25rem,4.5svh,2.75rem)] w-[85%] max-w-[24rem] [@media(orientation:portrait)_and_(max-height:620px)]:mt-3 max-lg:landscape:col-start-2 max-lg:landscape:row-start-1 max-lg:landscape:mt-0 max-lg:landscape:w-full lg:absolute lg:left-[58%] lg:top-[50%] lg:mt-0 lg:w-[min(19rem,24vw)]">
          <p className="text-[0.62rem] leading-[1.65] tracking-[0.01em] text-black sm:text-[0.74rem] max-lg:landscape:text-[0.66rem] lg:text-[0.68rem] lg:leading-[1.7]">
            Offices, homes, cottages and site cabins, designed to your brief,
            built in our Hyderabad factory and installed on your site, finished
            and ready to use.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 max-lg:grid max-lg:w-fit max-lg:grid-cols-1 [@media(orientation:portrait)_and_(max-height:620px)]:mt-2 max-lg:landscape:mt-3 lg:mt-4">
            <Link
              href={QUOTE_ANCHOR}
              className="inline-flex min-h-10 items-center max-lg:justify-center border border-[#886c46] px-4 bg-[#886c46]  text-[0.58rem] uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-[#886c46] max-lg:landscape:min-h-8 max-lg:landscape:px-3 max-lg:landscape:text-[0.52rem] [@media(orientation:portrait)_and_(max-height:620px)]:min-h-8 [@media(orientation:portrait)_and_(max-height:620px)]:px-3 [@media(orientation:portrait)_and_(max-height:620px)]:text-[0.52rem]"
            >
              Get a quote
            </Link>
            <a
              href={CONTACT.sales.href}
              className="inline-flex min-h-10 items-center max-lg:justify-center border border-black/25 px-4 text-[0.58rem] uppercase tracking-[0.2em] text-black transition-colors hover:border-[#886c46] hover:text-[#886c46] max-lg:landscape:min-h-8 max-lg:landscape:px-3 max-lg:landscape:text-[0.52rem] [@media(orientation:portrait)_and_(max-height:620px)]:min-h-8 [@media(orientation:portrait)_and_(max-height:620px)]:px-3 [@media(orientation:portrait)_and_(max-height:620px)]:text-[0.52rem]"
            >
              Call {CONTACT.sales.label}
            </a>
          </div>
        </div>

        <p className="relative mt-auto w-full max-w-[26rem] text-justify text-[0.6rem] leading-[1.6] tracking-[0.01em] text-black sm:text-[0.72rem] max-lg:landscape:col-start-1 max-lg:landscape:row-start-3 max-lg:landscape:mt-0 max-lg:landscape:text-[0.64rem] lg:absolute lg:bottom-[14%] lg:left-[10%] lg:mt-0 lg:w-[min(20rem,28vw)] lg:text-[0.66rem] lg:leading-[1.7]">
          Since {FACTS.founded}. {FACTS.projects} projects. {FACTS.cities} cities.
          Starting at {FACTS.startingPrice} per sq.ft.
        </p>

        {/* =====================================================
            EDITORIAL DESCRIPTION
        ===================================================== */}

        <div className="relative mt-[clamp(1rem,3.5svh,2rem)] w-full max-w-[26rem] [@media(orientation:portrait)_and_(max-height:620px)]:mt-2 max-lg:landscape:col-start-2 max-lg:landscape:row-span-2 max-lg:landscape:row-start-2 max-lg:landscape:mt-0 max-lg:landscape:self-start lg:absolute lg:bottom-[15%] lg:left-auto lg:right-[8%] lg:mt-0 lg:w-[18rem] ">

          <div className="mb-3 flex items-center gap-3 md:mb-4">
            <span className="h-px w-10 bg-[#886c46]" />

            <span className="text-[0.45rem] uppercase tracking-[0.2em] text-[#886c46] md:text-[0.5rem] md:tracking-[0.24em]">
              Design / build / install
            </span>
          </div>

          <p className="text-[0.62rem] leading-[1.55] tracking-[-0.01em] text-black md:text-[0.7rem] md:leading-[1.65] ">
            One team from first drawing to handover:
            design, manufacturing, transport and installation.
          </p>
        </div>

        {/* Bottom left metadata */}
        <span className="absolute bottom-5 left-5 text-[0.45rem] uppercase tracking-[0.18em] text-black md:bottom-7 md:left-[3vw] md:text-[0.52rem] md:tracking-[0.24em] hidden md:block">
          Structure / craft / time
        </span>

        

      </div>


      {/* =========================================================
          IMAGE 1
          Starts at 25%, expands to 100%
      ========================================================= */}

      <div
        className="hero-img-1 absolute inset-0 z-10"
        style={{
          clipPath: "inset(0% 0% 0% 85%)",
        }}
      >
        <div className="hero-img-1-inner relative h-full w-full bg-neutral-200">

          <Image
            src={IMAGE_1}
            alt="Prefab architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Slight image treatment */}
          <div className="absolute inset-0 bg-black/[0.035]" />


          {/* =====================================================
              SMALL ARCHITECTURAL WINDOW / DETAIL
          ===================================================== */}

          <div
            className="
              hero-detail
              absolute
              left-1/2
              top-1/2
              z-20
              w-[min(72vw,280px)]
              -translate-x-1/2
              -translate-y-1/2
              md:left-[25%]
              md:w-[clamp(220px,24vw,360px)]
            "
          >

            {/* Image frame */}
            <div className="relative aspect-[4/3] overflow-hidden border border-white/50 bg-white/10 p-[5px]">

              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={DETAIL_IMAGES[0]}
                  alt="Architectural detail one"
                  fill
                  sizes="360px"
                  className="detail-image-1 absolute object-cover"
                />

                <Image
                  src={DETAIL_IMAGES[1]}
                  alt="Architectural detail two"
                  fill
                  sizes="360px"
                  className="detail-image-2 absolute object-cover"
                />

                

                {/* Window-like inner frame */}
                <div className="pointer-events-none absolute inset-0 border border-white/30" />

                <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-white/30" />

                <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-white/30" />
              </div>

            </div>

            {/* Caption */}
            <div className="mt-2 flex items-start justify-between gap-3 text-white md:mt-3 md:gap-5">

              <div>
                <p className="text-[0.42rem] uppercase tracking-[0.16em] opacity-70 md:text-[0.48rem] md:tracking-[0.2em]">
                  Detail / 01
                </p>

                <p className="mt-1 text-[0.78rem] italic md:text-[0.95rem]">
                  Designed to last.
                </p>
              </div>

              <span className="text-[0.42rem] uppercase tracking-[0.15em] opacity-60 md:text-[0.48rem] md:tracking-[0.18em]">
                +01
              </span>

            </div>

          </div>


          {/* Tiny image-stage metadata */}
          <div className="absolute right-5 top-6 z-20 text-white md:right-[3vw] md:top-7">

            <span className="text-[0.45rem] uppercase tracking-[0.18em] opacity-65 md:text-[0.52rem] md:tracking-[0.24em]">
              Project / 01
            </span>

          </div>

        </div>
      </div>


      {/* =========================================================
          IMAGE 2
      ========================================================= */}

      <div className="hero-slide-2 absolute inset-0 z-20 overflow-hidden">

        <div className="hero-img-2-inner relative h-full w-full bg-neutral-300">

          <Image
            src={IMAGE_2}
            alt="Prefab construction"
            fill
            sizes="100vw"
            className="object-cover"
          />

        </div>

        <div className="absolute inset-0 bg-black/40" />

        {/* Image 2 metadata */}
        <div className="absolute left-5 top-6 z-10 md:left-[4vw] md:top-8">
          <span className="text-[0.45rem] uppercase tracking-[0.18em] text-white/60 md:text-[0.55rem] md:tracking-[0.25em]">
            Field notes / 02
          </span>
        </div>

        <div className="absolute right-5 top-6 z-10 md:right-[4vw] md:top-8">
          <span className="text-[0.45rem] uppercase tracking-[0.18em] text-white/60 md:text-[0.55rem] md:tracking-[0.25em]">
            Manufacture / Deliver / Install
          </span>
        </div>

        {/* Main text */}
        <h2
          className="
            hero-text-2
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            text-center
            text-[clamp(2.4rem,12vw,5rem)]
            uppercase
            leading-[0.86]
            tracking-[-0.035em]
            text-white
            md:text-[clamp(2rem,6vw,7rem)]
          "
        >
          <span className="block overflow-hidden">
            Made off-site.
          </span>

          <span className="block overflow-hidden italic">
            Built on-site.
          </span>
        </h2>

        {/* Bottom metadata */}
        <div className="absolute bottom-6 left-5 z-10 md:bottom-8 md:left-[4vw]">
          <span className="text-[0.45rem] uppercase tracking-[0.18em] text-white/60 md:text-[0.52rem] md:tracking-[0.24em]">
            Precision / speed / permanence
          </span>
        </div>

        <div className="absolute bottom-6 right-5 z-10 md:bottom-8 md:right-[4vw]">
          <span className="text-[0.45rem] uppercase tracking-[0.18em] text-white/60 md:text-[0.52rem] md:tracking-[0.24em]">
            02 — 06
          </span>
        </div>

      </div>

    </section>
  );
}