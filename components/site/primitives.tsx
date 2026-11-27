import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

/*
 * Shared building blocks for the inner pages (Products, About). They mirror the
 * patterns the Home page components use inline (Products, Why, Vlogs):
 * 1600px column, 5vw gutters, hairline eyebrows, uppercase display type
 * and arrow text links.
 */

export const EASE = [0.22, 1, 0.36, 1] as const

export const shell = 'mx-auto w-full max-w-[1600px] px-6 sm:px-10 md:px-[5vw]'

/** True when a heading contains a word too long for full display size on a 360px screen. */
export const hasLongWord = (text: string, limit = 11) => text.split(/\s+/).some((word) => word.length >= limit)

export const pad = (n: number) => String(n).padStart(2, '0')

/** Splits a multi-line description from the data file into clean paragraphs. */
export const paragraphs = (text: string) =>
  text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)

export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-black/50 ${className}`}>
      <span className="h-px w-10 shrink-0 bg-[#886c46]" />
      {children}
    </p>
  )
}

/** Accent hairline that extends on group hover, as on the Home cards. */
export function Rule({ className = '' }: { className?: string }) {
  return <div className={`h-px w-12 bg-[#886c46] transition-all duration-500 group-hover:w-20 ${className}`} />
}

const arrow = (
  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
)

/** Arrow text link, the Home page's standard CTA. */
export function ArrowLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em] text-black/75 transition-colors hover:text-[#886c46] ${className}`}
    >
      {children}
      {arrow}
    </Link>
  )
}

/** Outlined square button for the primary enquiry action (as in the footer form). */
export const outlineButton =
  'group inline-flex min-h-12 items-center justify-between gap-6 border border-black/25 px-5 py-3 text-[0.62rem] uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:border-[#886c46] hover:text-[#886c46] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]'

/** Square icon button used for carousel and gallery controls. */
export const squareButton =
  'flex h-10 w-10 shrink-0 items-center justify-center border border-black/20 transition-colors hover:border-[#886c46] hover:text-[#886c46] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]'

export function OutlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={outlineButton}>
      {children}
      {arrow}
    </Link>
  )
}

const INDENTS = ['', 'ml-[10vw]', 'ml-[4vw]']

/**
 * Uppercase display heading with the Home page's staggered line indents.
 * `accent` is the index of the line set in the brand colour.
 */
export function DisplayHeading({
  as: Tag = 'h2',
  lines,
  accent = 1,
  className = 'text-[clamp(2.6rem,5vw,6.2rem)]',
}: {
  as?: 'h1' | 'h2'
  lines: string[]
  accent?: number
  className?: string
}) {
  return (
    <Tag lang="en" className={`break-words uppercase leading-[0.82] tracking-[-0.035em] ${className}`}>
      {lines.map((line, i) => (
        <span key={line} className={`block ${INDENTS[i] ?? ''} ${i === accent ? 'text-[#886c46]' : ''}`}>
          {line}
        </span>
      ))}
    </Tag>
  )
}
