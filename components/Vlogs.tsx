"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Vlog = {
  youtubeId: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  description: string;
};

const ACCENT = "#886c46";

const VLOGS: Vlog[] = [
  {
    youtubeId: "cul1LcpEFIs",
    quote: "We needed a solution that was fast, reliable and functional.",
    name: "Anirudh S.",
    role: "Founder",
    company: "Ayana Hilltop Resort",
    description:
      "Replace this with a short summary of the project: what was delivered, where, and the outcome the client cares about most.",
  },
  {
    youtubeId: "GPNkwPsOYCs",
    quote: "The team handled everything from design to delivery without a hitch.",
    name: "Client Name",
    role: "Director",
    company: "Company Name",
    description:
      "Replace this with a short summary of the project: what was delivered, where, and the outcome the client cares about most.",
  },
  {
    youtubeId: "ocE7J7QmotU",
    quote: "Clear communication, steady progress and a result we trust.",
    name: "Client Name",
    role: "Owner",
    company: "Company Name",
    description:
      "Replace this with another short project summary. Keep it to two or three sentences for the cleanest layout.",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Vlogs() {
  const [index, setIndex] = useState(0);
  const vlog = VLOGS[index];

  const next = () => setIndex((i) => (i + 1) % VLOGS.length);

  return (
    <section className="overflow-clip bg-white text-black">
      <div className="mx-auto max-w-[1600px]">
        {/* Heading */}
        <div className="px-6 pb-16 pt-24 sm:px-10 md:px-[5vw] md:pb-20 md:pt-32">
          <p className="mb-10 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-black/50">
            <span className="h-px w-10 bg-[#886c46]" />
            Client stories / {pad(VLOGS.length)} films
          </p>
          <h2 className="text-[clamp(3.4rem,6.7vw,8rem)] uppercase leading-[0.78] tracking-[-0.075em]">
            <span className="block">Watch the future</span>
            <span className="ml-[10vw] block text-[#886c46]">of prefab unfold.</span>
          </h2>
          <p className="mt-10 max-w-[21rem] text-[0.82rem] leading-[1.8] text-black/55 md:ml-[10%]">
            Hear directly from the people we have built for, in their own words.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-10 px-6 pb-24 sm:px-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14 md:px-[5vw] md:pb-40">
          {/* Video */}
          <div className="group overflow-hidden bg-[#f3ede3]">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                key={vlog.youtubeId}
                src={`https://www.youtube-nocookie.com/embed/${vlog.youtubeId}?rel=0&modestbranding=1`}
                title={`${vlog.name}, ${vlog.company}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <div className="flex items-center justify-between px-6 py-5 sm:px-8">
              <span className="text-[0.58rem] uppercase tracking-[0.22em] text-black/50">
                Film / {pad(index + 1)}
              </span>
              <span className="text-[0.58rem] uppercase tracking-[0.22em] text-black/50">
                {vlog.company}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between gap-12">
            <div>
              <div className="mb-8 h-px w-12 bg-[#886c46]" />
              <blockquote
                key={index}
                className="text-[clamp(2.3rem,3.6vw,4.2rem)] uppercase leading-[0.9] tracking-[-0.07em]"
              >
                <span className="text-[#886c46]">&ldquo;</span>
                {vlog.quote}
                <span className="text-[#886c46]">&rdquo;</span>
              </blockquote>
            </div>

            <div>
              <div className="grid grid-cols-[minmax(4rem,0.7fr)_minmax(0,1.4fr)] border-t border-black/70 pt-5">
                <span className="text-[0.85rem]">{pad(index + 1)}</span>
                <div className="border-l border-black/70 pl-5">
                  <p className="text-[0.85rem]">{vlog.name}</p>
                  <p className="mt-1 text-[0.58rem] uppercase tracking-[0.2em] text-black/45">
                    {vlog.role} / {vlog.company}
                  </p>
                  <p className="mt-5 text-[0.85rem] leading-[1.5] text-black/65">
                    {vlog.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-black/15 pt-5">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  {VLOGS.map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: i === index ? 20 : 6,
                        backgroundColor: i === index ? ACCENT : "rgba(0,0,0,0.2)",
                      }}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="group flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em] text-black/60 transition-colors hover:text-[#886c46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#886c46] focus-visible:ring-offset-2"
                >
                  Next story
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}