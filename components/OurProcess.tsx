"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Factory, Ruler, ShieldCheck, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Space planning & modular design",
    description:
      "We assess your requirements thoroughly and convert your space into smart, transportable modules.",
    image: "/products/prefab/house/main.webp",
    Icon: Ruler,
  },
  {
    number: "02",
    title: "Factory-built with smart engineering",
    description:
      "Modules are built with customised pre-installed plumbing, electricals, and finishes.",
    image: "/products/prefab/structures/main.webp",
    Icon: Factory,
  },
  {
    number: "03",
    title: "Quality testing & logistics prep",
    description:
      "Every unit is QC-tested and prepped for smooth transport and on-site assembly.",
    image: "/products/portable/container/main.webp",
    Icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Fast on-site installation",
    description:
      "Modules arrive ready to connect — install and move in within 3–7 days.",
    image: "/products/prefab/site-office/main.webp",
    Icon: Zap,
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const line = lineRef.current;
    if (!timeline || !line) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let current = 0;
    let target = 0;
    let raf = 0;
    let running = false;
    let lastActive = 0;

    const apply = () => {
      const height = timeline.offsetHeight || 1;
      line.style.transform = `scaleY(${clamp(current / height, 0, 1)})`;

      const articles = timeline.querySelectorAll<HTMLElement>(
        "[data-process-step]",
      );
      let next = 0;
      articles.forEach((article, index) => {
        if (article.offsetTop + 6 <= current) next = index;
      });
      if (next !== lastActive) {
        lastActive = next;
        setActiveStep(next);
      }
    };

    const tick = () => {
      const diff = target - current;
      if (Math.abs(diff) < 0.4) {
        current = target;
        running = false;
        apply();
        return;
      }
      current += diff * 0.12;
      apply();
      raf = requestAnimationFrame(tick);
    };

    const update = () => {
      const rect = timeline.getBoundingClientRect();
      target = clamp(window.innerHeight * 0.5 - rect.top, 0, rect.height);

      if (reduceMotion) {
        current = target;
        apply();
        return;
      }
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="our-process" className="bg-white text-black">
      <div className="mx-auto max-w-[1600px]">
        {/* Heading */}
        <div className="px-6 pb-16 pt-24 sm:px-10 md:px-[5vw] md:pb-24 md:pt-32">
          <p className="mb-10 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-black/50">
            <span className="h-px w-10 bg-[#886c46]" />
            Our process / 04 steps
          </p>
          <h2 className="text-[clamp(3.4rem,6.7vw,8rem)] uppercase leading-[0.78] tracking-[-0.075em]">
            <span className="block">From brief</span>
            <span className="ml-[10vw] block text-[#886c46]">to build.</span>
          </h2>
          <p className="mt-10 max-w-[21rem] text-[0.82rem] leading-[1.8] text-black/55 md:ml-[10%]">
            One clear process from the first conversation to a finished space.
            Every stage is planned to make the next one simpler.
          </p>
          <div className="mt-14 hidden border-t border-black/15 pt-5 md:ml-[10%] md:flex md:max-w-[19rem] md:items-center md:justify-between">
            <span className="text-[0.58rem] uppercase tracking-[0.2em] text-black/45">
              Scroll to explore
            </span>
            <span className="h-8 w-px bg-[#886c46]" />
            <span className="text-[0.58rem] uppercase tracking-[0.2em] text-black/45">
              04 stages
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-5 pb-24 sm:px-10 md:px-[5vw] md:pb-40">
          <div ref={timelineRef} className="relative">
            <div className="absolute bottom-0 left-[5.5px] top-0 w-px bg-black/15">
              <div
                ref={lineRef}
                className="absolute inset-0 origin-top bg-[#886c46] will-change-transform"
                style={{ transform: "scaleY(0)" }}
              />
            </div>

            {steps.map(({ number, title, description, image, Icon }, index) => (
              <article
                key={number}
                data-process-step={index}
                className="group relative mb-20 pl-10 last:mb-0 sm:pl-16 md:mb-32 md:pl-20"
              >
                <div
                  className={`absolute -left-3.5 top-0 flex h-9 w-9 items-center justify-center rounded-full border text-[0.58rem] font-medium tracking-[0.06em] transition-all duration-500 md:h-10 md:w-10 md:text-[0.65rem] md:tracking-[0.08em] ${
                    activeStep >= index
                      ? "border-[#886c46] bg-[#886c46] text-white"
                      : "border-black/25 bg-white text-black/50"
                  }`}
                >
                  {number}
                </div>

                <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
                  {/* Text — left */}
                  <div className="relative flex flex-col justify-between py-1 md:py-2">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute hidden sm:block -right-1 top-0 select-none text-[clamp(6.5rem,28vw,9rem)] font-medium leading-none tracking-[-0.12em] text-[#886c46] transition-opacity duration-700 md:-right-2 md:top-1/2 md:-translate-y-1/2 md:text-[clamp(8rem,16vw,15rem)]"
                      style={{
                        opacity: (activeStep >= index ? 0.14 : 0.035) + index * 0.012,
                        WebkitTextStroke: "1px #886c46",
                      }}
                    >
                      {number}
                    </span>
                    <div className="relative z-10 max-w-[90%] md:max-w-none">
                      <div className="flex items-center justify-between gap-6">
                        <span className="text-[0.58rem] uppercase tracking-[0.22em] text-black/50">
                          Process / {number}
                        </span>
                        <Icon
                          className="h-5 w-5 shrink-0 text-[#886c46]"
                          strokeWidth={1.4}
                        />
                      </div>
                      <h3 className="mt-6 text-[clamp(2.15rem,10vw,3.8rem)] leading-[0.9] tracking-[-0.07em] transition-colors duration-300 hover:text-[#886c46] md:mt-8 md:text-[clamp(2.3rem,4.2vw,5rem)]">
                        {title}
                      </h3>
                    </div>

                    <div className="relative z-10 mt-8 grid grid-cols-[minmax(2.5rem,0.35fr)_minmax(0,1.65fr)] border-t border-black/70 pt-4 md:mt-10 md:grid-cols-[minmax(3rem,0.5fr)_minmax(0,1.4fr)] md:pt-5">
                      <span className="text-[0.75rem] md:text-[0.85rem]">{number}</span>
                      <p className="border-l border-black/70 pl-4 text-[0.75rem] leading-[1.45] text-black/80 md:pl-5 md:text-[0.85rem] md:leading-[1.35]">
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Image — right */}
                  <div className="relative aspect-[1.15] overflow-hidden bg-[#f3ede3] md:aspect-auto md:min-h-[26rem]">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover transition duration-700 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-white/10" />
                    <span className="absolute left-5 top-5 text-[0.58rem] uppercase tracking-[0.22em] text-white mix-blend-difference md:left-7 md:top-7">
                      Process / {number}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}