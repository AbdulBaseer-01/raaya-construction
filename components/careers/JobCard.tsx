import { ArrowUpRight } from 'lucide-react'
import type { Job } from '@/lib/careers'
import { Rule } from '@/components/site/primitives'

/** Role card in the Home card style (no image): meta, display title, description, tags and a fact list. */
export default function JobCard({ job, onApply }: { job: Job; onApply: (job: Job) => void }) {
  return (
    <article className="group flex h-full flex-col border border-black/15 bg-[#f3ede3] p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(49,38,25,0.12)] sm:p-7">
      <div className="flex items-center justify-between gap-4 text-[0.55rem] uppercase tracking-[0.2em] text-black/50">
        <span className="min-w-0">
          {job.department} <span className="mx-1.5 text-black/25">/</span> {job.posted}
        </span>
        {job.urgent && <span className="shrink-0 border border-[#886c46] px-2 py-1 text-[#886c46]">Urgent</span>}
      </div>
      <Rule className="mb-5 mt-2" />

      <h3 className="text-[clamp(1.6rem,2.1vw,2.3rem)] uppercase leading-[0.88] tracking-[-0.06em] transition-colors duration-300 group-hover:text-[#886c46] [overflow-wrap:anywhere]">
        {job.title}
      </h3>
      <p className="mt-5 text-[0.85rem] leading-[1.7] text-black/65">{job.description}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Skills">
        {job.tags.map((tag) => (
          <li key={tag} className="border border-black/15 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.18em] text-black/60">
            {tag}
          </li>
        ))}
      </ul>

      <dl className="mt-6 border-b border-black/15">
        {[
          ['Location', job.location],
          ['Type', job.type],
          ['Experience', job.experience],
        ].map(([label, value]) => (
          <div key={label} className="grid grid-cols-[minmax(5.5rem,0.6fr)_minmax(0,1.4fr)] border-t border-black/15 py-2.5">
            <dt className="text-[0.55rem] uppercase leading-[1.9] tracking-[0.2em] text-black/45">{label}</dt>
            <dd className="text-[0.82rem]">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto pt-6">
      <div className="flex items-center justify-between gap-4 border-t border-black/70 pt-4">
        <span className="text-[0.62rem] tracking-[0.18em] text-black/45">#{String(job.id).padStart(3, '0')}</span>
        <button
          type="button"
          onClick={() => onApply(job)}
          className="group/btn inline-flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em] text-black/80 transition-colors hover:text-[#886c46] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]"
        >
          Apply now
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
        </button>
      </div>
      </div>
    </article>
  )
}
