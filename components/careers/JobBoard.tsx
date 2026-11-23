'use client'

import { useCallback, useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { departments, jobTypes, jobs, type Job } from '@/lib/careers'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, outlineButton, pad, shell } from '@/components/site/primitives'
import ApplyPanel from './ApplyPanel'
import JobCard from './JobCard'
import Perks from './Perks'

const tab = (active: boolean) =>
  `relative shrink-0 whitespace-nowrap py-4 text-[0.62rem] uppercase tracking-[0.2em] transition-colors focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46] ${
    active ? 'text-black' : 'text-black/45 hover:text-black'
  }`

const Underline = ({ active }: { active: boolean }) => (
  <span className={`absolute bottom-0 left-0 h-px bg-[#886c46] transition-all duration-300 ${active ? 'w-full' : 'w-0'}`} />
)

/** Hiring header with search, perks, department / type filters, role grid and the apply panel. */
export default function JobBoard() {
  const [query, setQuery] = useState('')
  const [activeDept, setActiveDept] = useState('All')
  const [activeType, setActiveType] = useState('All Types')
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return jobs.filter((job) => {
      const matchesQuery =
        query === '' ||
        job.title.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q)) ||
        job.department.toLowerCase().includes(q)
      const matchesDept = activeDept === 'All' || job.department === activeDept
      const matchesType = activeType === 'All Types' || job.type === activeType
      return matchesQuery && matchesDept && matchesType
    })
  }, [query, activeDept, activeType])

  const clearAll = () => {
    setQuery('')
    setActiveDept('All')
    setActiveType('All Types')
  }
  const closePanel = useCallback(() => setSelectedJob(null), [])

  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-black/15 bg-white">
        <div className={`${shell} grid gap-14 pb-16 pt-14 md:pb-24 md:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20`}>
          <div>
            <Eyebrow className="mb-10">8 Roles | Modular &amp; Construction Industry</Eyebrow>
            <DisplayHeading as="h1" lines={['Texo Prefab World', 'is hiring.']} className="text-[clamp(2.6rem,7.2vw,8.2rem)]" />
          </div>

          <div className="lg:pb-3">
            <p className="max-w-[26rem] text-[clamp(1.05rem,1.4vw,1.35rem)] leading-[1.45] tracking-[-0.015em]">
              Minimum 2 years experience in Construction / Modular background preferred.
            </p>
            <label htmlFor="job-search" className="mt-10 block text-[0.58rem] uppercase tracking-[0.25em] text-black/55">
              Search roles
            </label>
            <div className="relative mt-1 flex max-w-[26rem] items-center border-b border-black/25 transition-colors focus-within:border-[#886c46]">
              <Search className="h-4 w-4 shrink-0 text-black/40" aria-hidden="true" />
              <input
                id="job-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by role, skill, or department…"
                className="w-full min-w-0 bg-transparent px-3 py-4 text-[0.9rem] outline-none placeholder:text-black/30 [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="flex h-7 w-7 shrink-0 items-center justify-center border border-black/20 transition-colors hover:border-[#886c46]"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Perks />

      {/* ── Filters ── */}
      <nav aria-label="Filter roles" className="z-30 border-y border-black/15 bg-white md:sticky md:top-[68px]">
        <div className={`${shell} flex flex-col md:flex-row md:items-center md:gap-10`}>
          <div className="projects-rail -mx-6 flex min-w-0 flex-1 gap-7 overflow-x-auto border-b border-black/10 px-6 sm:-mx-10 sm:px-10 md:mx-0 md:border-b-0 md:px-0">
            {departments.map((dept) => (
              <button key={dept} type="button" aria-pressed={activeDept === dept} onClick={() => setActiveDept(dept)} className={tab(activeDept === dept)}>
                {dept}
                <Underline active={activeDept === dept} />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-6 md:border-l md:border-black/15 md:pl-10">
            <div className="projects-rail flex min-w-0 flex-1 gap-6 overflow-x-auto" role="group" aria-label="Job type">
              {jobTypes.map((type) => (
                <button key={type} type="button" aria-pressed={activeType === type} onClick={() => setActiveType(type)} className={tab(activeType === type)}>
                  {type}
                  <Underline active={activeType === type} />
                </button>
              ))}
            </div>
            <span className="shrink-0 text-[0.58rem] uppercase tracking-[0.22em] text-black/45" aria-live="polite">
              <span className="text-[#886c46]">{pad(filtered.length)}</span> open
            </span>
          </div>
        </div>
      </nav>

      {/* ── Roles ── */}
      <section id="roles" className="bg-white">
        <div className={`${shell} pb-24 pt-10 md:pb-36 md:pt-14`}>
          {filtered.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((job, i) => (
                <Reveal key={job.id} delay={(i % 3) * 0.06} className="h-full">
                  <JobCard job={job} onApply={setSelectedJob} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 py-16 md:grid-cols-[1fr_0.7fr] md:items-end md:py-24">
              <div>
                <Eyebrow className="mb-8">00 open</Eyebrow>
                <DisplayHeading lines={['No positions', 'found.']} className="text-[clamp(2.4rem,5vw,5.5rem)]" />
              </div>
              <div>
                <p className="mb-8 max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/65">
                  Try adjusting your search or filter criteria.
                </p>
                <button type="button" onClick={clearAll} className={outlineButton}>
                  Clear all filters
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <ApplyPanel job={selectedJob} onClose={closePanel} />
    </>
  )
}
