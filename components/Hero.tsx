"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
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
          start: "top top",
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
      className="relative h-screen w-screen overflow-hidden bg-white text-black"
    >
      {/* =========================================================
          85% EDITORIAL WHITE PANEL
      ========================================================= */}

      <div className="absolute inset-y-0 left-0 z-0 w-[85%] overflow-hidden bg-white">

        

        <Image
          src="/logo-2.png"
          alt="Prefab Construction Company"
          width={88}
          height={88}
          className="absolute left-[3vw] top-5 z-10 h-20 w-auto object-contain"
        />

        {/* Top right metadata */}
        <span className="absolute right-[2.5rem] top-7 text-[0.55rem] uppercase tracking-[0.2em] text-black">
          2026 / On site
        </span>

        <span className="absolute right-0 top-1/2 -translate-y-1/2 -rotate-90 text-[0.52rem] uppercase tracking-[0.28em] text-black">
          Form / Function / Future
        </span>

        {/* Vertical editorial label */}
        <span className="absolute left-[1.15rem] top-1/2 -translate-y-1/2 -rotate-90 text-[0.52rem] uppercase tracking-[0.28em] text-[#886c46]">
          Built with intent
        </span>

        {/* Small vertical number */}
        <span className="absolute left-[1.1rem] top-[43%] text-[0.5rem] tracking-[0.15em] text-black">
          01
        </span>

        {/* =====================================================
            MAIN EDITORIAL TYPE
        ===================================================== */}

        <div className="absolute left-[10%] top-[30%]">
          <h1
            className="
              hero-text-1
              text-[clamp(3rem,5.2vw,7rem)]
              uppercase
              leading-[0.84]
              tracking-[-0.065em]
            "
          >
            <span className="block">
              Luxury That
            </span>

            <span className="ml-[13%] block">
              Leaves a
            </span>

            <span className="ml-[28%] block">
              <em
                className={`
                  tracking-[-0.045em]
                  text-[#886c46]
        `}
              >
                Lighter Footprint.
              </em>
            </span>
          </h1>
        </div>

        <p className="absolute left-[58%] top-[37%] w-[min(17rem,20vw)] text-[0.68rem] leading-[1.7] tracking-[0.01em] text-black">
          Designed around the realities of modern living, each space balances
          speed, clarity and the freedom to evolve over time.
        </p>

        <p className="absolute bottom-[14%] left-[10%] w-[min(20rem,28vw)] text-justify text-[0.66rem] leading-[1.7] tracking-[0.01em] text-black">
          A considered approach to modern construction, where material,
          proportion and permanence meet in spaces made to belong.
        </p>

        {/* =====================================================
            EDITORIAL DESCRIPTION
        ===================================================== */}

        <div className="absolute bottom-[15%] right-[8%] w-[18rem]">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#886c46]" />

            <span className="text-[0.5rem] uppercase tracking-[0.24em] text-[#886c46]">
              Prefabricated living
            </span>
          </div>

          <p className="text-[0.7rem] leading-[1.65] tracking-[-0.01em] text-black">
            Spaces engineered with precision,
            designed for permanence and built
            with a lighter footprint.
          </p>
        </div>

        {/* Bottom left metadata */}
        <span className="absolute bottom-7 left-[3vw] text-[0.52rem] uppercase tracking-[0.24em] text-black">
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
              left-[25%]
              top-1/2
              z-20
              w-[clamp(220px,24vw,360px)]
              -translate-x-1/2
              -translate-y-1/2
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
            <div className="mt-3 flex items-start justify-between gap-5 text-white">

              <div>
                <p className="text-[0.48rem] uppercase tracking-[0.2em] opacity-70">
                  Detail / 01
                </p>

                <p className="mt-1 text-[0.95rem] italic">
                  Designed to last.
                </p>
              </div>

              <span className="text-[0.48rem] uppercase tracking-[0.18em] opacity-60">
                +01
              </span>

            </div>

          </div>


          {/* Tiny image-stage metadata */}
          <div className="absolute right-[3vw] top-7 z-20 text-white">

            <span className="text-[0.52rem] uppercase tracking-[0.24em] opacity-65">
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
        <div className="absolute left-[4vw] top-8 z-10">
          <span className="text-[0.55rem] uppercase tracking-[0.25em] text-white/60">
            Field notes / 02
          </span>
        </div>

        <div className="absolute right-[4vw] top-8 z-10">
          <span className="text-[0.55rem] uppercase tracking-[0.25em] text-white/60">
            Manufacture / Install
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
            text-[clamp(2rem,6vw,7rem)]
            uppercase
            leading-[0.86]
            tracking-[-0.065em]
            text-white
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
        <div className="absolute bottom-8 left-[4vw] z-10">
          <span className="text-[0.52rem] uppercase tracking-[0.24em] text-white/60">
            Precision / speed / permanence
          </span>
        </div>

        <div className="absolute bottom-8 right-[4vw] z-10">
          <span className="text-[0.52rem] uppercase tracking-[0.24em] text-white/60">
            02 — 06
          </span>
        </div>

      </div>

    </section>
  );
}