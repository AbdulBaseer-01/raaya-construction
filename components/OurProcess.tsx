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
        <div className="px-6 pb-24 sm:px-10 md:px-[5vw] md:pb-40">
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
                  className={`absolute left-0 top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 bg-white transition-all duration-500 ${
                    activeStep >= index
                      ? "scale-125 border-[#886c46]"
                      : "border-black/25"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-[#886c46] transition-transform duration-500 ${
                      activeStep >= index ? "scale-100" : "scale-0"
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[1fr_1.1fr] md:gap-14">
                  {/* Text — left */}
                  <div className="flex flex-col justify-between py-1 md:py-2">
                    <div>
                      <div className="flex items-center justify-between gap-6">
                        <span className="text-[0.58rem] uppercase tracking-[0.22em] text-black/50">
                          Process / {number}
                        </span>
                        <Icon
                          className="h-5 w-5 shrink-0 text-[#886c46]"
                          strokeWidth={1.4}
                        />
                      </div>
                      <h3 className="mt-8 text-[clamp(2.3rem,4.2vw,5rem)] leading-[0.9] tracking-[-0.07em] transition-colors duration-300 hover:text-[#886c46]">
                        {title}
                      </h3>
                    </div>

                    <div className="mt-10 grid grid-cols-[minmax(3rem,0.5fr)_minmax(0,1.4fr)] border-t border-black/70 pt-5">
                      <span className="text-[0.85rem]">{number}</span>
                      <p className="border-l border-black/70 pl-5 text-[0.85rem] leading-[1.35] text-black/80">
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Image — right */}
                  <div className="relative aspect-[1.2] overflow-hidden bg-[#f3ede3] md:aspect-auto md:min-h-[26rem]">
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