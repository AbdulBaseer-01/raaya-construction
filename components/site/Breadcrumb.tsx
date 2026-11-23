import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { shell } from './primitives'

export default function Breadcrumb({
  trail,
  back = { label: 'All products', href: '/products' },
}: {
  trail: { label: string; href?: string }[]
  back?: { label: string; href: string }
}) {
  return (
    <div className="border-b border-black/15">
      <div className={`${shell} flex items-center justify-between gap-6 py-4`}>
        <ol className="flex min-w-0 items-center gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-black/45">
          {trail.map((item, i) => (
            <li key={item.label} className={`flex min-w-0 items-center gap-2 ${i === trail.length - 1 ? 'truncate text-black' : 'shrink-0'}`}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-[#886c46]">
                  {item.label}
                </Link>
              ) : (
                <span className="truncate" aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
        <Link
          href={back.href}
          className="group hidden shrink-0 items-center gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-black/60 transition-colors hover:text-[#886c46] sm:flex"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          {back.label}
        </Link>
      </div>
    </div>
  )
}
