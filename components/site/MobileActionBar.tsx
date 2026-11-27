import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/siteFacts'

/** Phones in portrait: a fixed bottom bar with the two lead actions (brief, section 14 item 8). In landscape the header’s Get a quote button covers it. */
export default function MobileActionBar({ quoteHref }: { quoteHref: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 hidden grid-cols-2 border-t border-black/15 bg-white pb-[env(safe-area-inset-bottom)] text-[0.62rem] uppercase tracking-[0.2em] max-md:portrait:grid">
      <a href={CONTACT.sales.href} className="flex h-14 items-center justify-center gap-2 text-black" aria-label={`Call ${CONTACT.sales.label}`}>
        <Phone className="h-4 w-4 text-[#886c46]" aria-hidden="true" />
        Call
      </a>
      <Link href={quoteHref} className="flex h-14 items-center justify-center gap-2 bg-[#886c46] text-white">
        Get a quote
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  )
}
