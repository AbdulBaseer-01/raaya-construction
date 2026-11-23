"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { EASE, pad } from "@/components/site/primitives";

const projects = [
  {
    region: "Maharashtra",
    state: "Mumbai",
    title: "Coastal Prefab Warehousing",
    description:
      "Delivered a modular warehousing solution for a logistics park on the Mumbai coast, reducing on-site construction time by 60%.",
    year: "2023",
    value: "₹115 Cr",
  },
  {
    region: "Karnataka",
    state: "Bengaluru",
    title: "Affordable Modular Housing",
    description:
      "Built a cluster of prefabricated homes using sustainable materials for a rapid urban housing project in Bengaluru.",
    year: "2024",
    value: "₹72 Cr",
  },
  {
    region: "West Bengal",
    state: "Kolkata",
    title: "Healthcare Outreach Unit",
    description:
      "Developed mobile medical units for community healthcare outreach across Kolkata suburbs and remote districts.",
    year: "2023",
    value: "₹28 Cr",
  },
  {
    region: "Tamil Nadu",
    state: "Chennai",
    title: "Solar Control Room Pavilion",
    description:
      "Installed a prefab control room for a solar microgrid facility, enabling fast deployment and reliable operations.",
    year: "2024",
    value: "₹34 Cr",
  },
  {
    region: "Gujarat",
    state: "Ahmedabad",
    title: "Modular Office Campus",
    description:
      "Delivered a modern modular office campus for a technology services provider with flexible workspaces and rapid handover.",
    year: "2022",
    value: "₹95 Cr",
  },
  {
    region: "Telangana",
    state: "Hyderabad",
    title: "Industrial Lab Facility",
    description:
      "Created a prefabricated R&D lab campus for an industrial manufacturing client, with turnkey utilities pre-installed.",
    year: "2023",
    value: "₹48 Cr",
  },
  {
    region: "Rajasthan",
    state: "Jaipur",
    title: "Prefab School Campus",
    description:
      "Delivered a sustainable modular school campus with classrooms, labs, and administrative blocks for a rural education trust.",
    year: "2022",
    value: "₹22 Cr",
  },
  {
    region: "Punjab",
    state: "Ludhiana",
    title: "Portable Security Cabin Network",
    description:
      "Supplied and installed a network of portable security cabins across an industrial park, each with HVAC and security fit-outs.",
    year: "2023",
    value: "₹18 Cr",
  },
];

const regions = Array.from(new Set(projects.map((project) => project.region)));

interface Props {
  open: boolean;
  onClose: () => void;
}

/** Side drawer listing landmark projects by state. Escape, the backdrop and the close button dismiss it. */
export default function ProjectsPanel({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-1090 bg-[#080808]/60"
          />
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="projects-panel-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="fixed right-0 top-0 z-1100 flex h-full w-full max-w-2xl flex-col bg-white text-black"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-6 border-b border-black/15 px-6 py-6 sm:px-8">
              <div>
                <p className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-black/50">
                  <span className="h-px w-10 bg-[#886c46]" />
                  Across the Nation
                </p>
                <h2
                  id="projects-panel-title"
                  className="mt-5 text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[0.82] tracking-[-0.07em]"
                >
                  <span className="block">Our landmark</span>
                  <span className="ml-[8%] block text-[#886c46]">projects</span>
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close projects"
                className="group flex h-9 w-9 shrink-0 items-center justify-center border border-black/20 transition-colors hover:border-[#886c46]"
              >
                <X className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8">
              {regions.map((region, r) => {
                const regionProjects = projects.filter((p) => p.region === region);
                return (
                  <div key={region} className="mb-10 last:mb-0">
                    <p className="mb-4 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.24em] text-[#886c46]">
                      {pad(r + 1)} / {region} India
                      <span className="h-px flex-1 bg-black/10" />
                    </p>
                    {regionProjects.map((project) => (
                      <article key={project.title} className="group border-t border-black/70 pt-5">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-[0.58rem] uppercase tracking-[0.2em] text-black/50">
                          <span>{project.state}</span>
                          <span className="flex items-baseline gap-4">
                            {project.year}
                            <span className="text-[1.1rem] normal-case tracking-[-0.03em] text-black">{project.value}</span>
                          </span>
                        </div>
                        <h3 className="mt-3 text-[clamp(1.4rem,2.2vw,2rem)] uppercase leading-[0.9] tracking-[-0.06em] transition-colors group-hover:text-[#886c46]">
                          {project.title}
                        </h3>
                        <p className="mt-3 max-w-[34rem] text-[0.85rem] leading-[1.7] text-black/60">{project.description}</p>
                      </article>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-4 border-t border-black/15 px-6 py-4 text-[0.58rem] uppercase tracking-[0.22em] text-black/50 sm:px-8">
              <span className="text-[#886c46]">Rooted in India. Ready for the world.</span>
              <span className="shrink-0">{projects.length} projects listed</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
