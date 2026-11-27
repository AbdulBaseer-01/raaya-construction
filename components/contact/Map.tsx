import { ArrowUpRight } from "lucide-react";
import { Eyebrow, shell } from "@/components/site/primitives";
import { CONTACT, FACTS } from "@/lib/siteFacts";

const GOOGLE_MAPS_EMBED =
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.4497597202917!2d78.45042250000002!3d17.5222345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f032d62a9b9%3A0x91d4d57891508253!2sTexo%20Prefab%20World%20%7C%20Prefab%20Homes%20%7C%20Porta%20Cabins%20%7C%20Farmhouse%20%26%20Office%20Containers!5e1!3m2!1sen!2sin!4v1773656131570!5m2!1sen!2sin";

export default function Map() {
  return (
    <section className="border-t border-black/15 bg-[#f5f2ec]">
      <div className={`${shell} py-24 md:py-32`}>
        <Eyebrow className="mb-8">Location</Eyebrow>
        {/* Google rating as shown on Google Maps on 24 Nov 2026 (brief, section 16); update if it changes. */}
        <a
          href={CONTACT.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-6 inline-flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.85rem] transition-colors hover:text-[#886c46]"
        >
          Rated {FACTS.googleRating} by {FACTS.googleReviews} customers on Google
          <span className="inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#886c46]">
            See reviews
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
        </a>
        <div className="border border-black/15 p-[5px]">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe4d8] sm:aspect-[16/10] lg:aspect-[21/9]">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.35) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Texo Prefab World Location"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-4 text-[0.58rem] uppercase tracking-[0.22em] text-black/50">
          <span className="text-[#886c46]">Rooted in Hyderabad. Building across India.</span>
          <span>Texo Prefab World · Hyderabad</span>
        </div>
      </div>
    </section>
  );
}
