"use client";

import { useState } from "react";

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

export default function Vlogs() {
  const [index, setIndex] = useState(0);
  const vlog = VLOGS[index];

  const next = () => setIndex((i) => (i + 1) % VLOGS.length);

  return (
    <section className="bg-[#ffffff] py-10 text-[#1E1D1D] md:py-14 px-12">
      <div className="mx-auto max-w-screen px-6 md:px-12">
        <h2 className="text-2xl font-normal tracking-tight text-center md:text-[28px]">
          Watch the Future of Prefab Unfold
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:h-[500px] lg:grid-cols-[28%_1fr]">
        {/* Video */}
        <div className="relative aspect-video w-full bg-black lg:aspect-auto lg:h-full">
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

        {/* Content */}
        <div className="grid grid-rows-[auto_1fr] lg:grid-rows-[45%_55%]">
          {/* Quote */}
          <div className="flex items-center bg-[#1E1D1D] px-8 py-10 md:px-14">
            <blockquote
              key={index}
              className="max-w-3xl text-3xl font-normal leading-[1.1] tracking-tight text-white md:text-5xl"
            >
              <span style={{ color: ACCENT }}>&ldquo;</span>
              {vlog.quote}
              <span style={{ color: ACCENT }}>&rdquo;</span>
            </blockquote>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-[45%_1fr]">
            <div className="flex flex-col justify-end bg-[#D9D9DB] px-8 py-8 md:px-10">
              <p className="text-xl text-[#5A5A5A]">{vlog.name}</p>
              <p className="mt-2 text-base text-[#5A5A5A]">{vlog.role}</p>
              <p className="text-base text-[#5A5A5A]">{vlog.company}</p>
            </div>

            <div className="relative flex items-center px-8 py-10 pb-24 md:px-10 md:pb-10">
              <p className="max-w-xl text-[15px] leading-snug">
                {vlog.description}
              </p>

              <div className="absolute bottom-6 right-6 flex items-center gap-4 md:bottom-8 md:right-10">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  {VLOGS.map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: i === index ? 20 : 6,
                        backgroundColor: i === index ? ACCENT : "#C9C4B8",
                      }}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1E1D1D] text-white transition-colors duration-200 hover:bg-[#886c46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#886c46] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDEAE3]"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 12h18" />
                    <path d="m15 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}