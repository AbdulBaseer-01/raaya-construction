import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileActionBar from './MobileActionBar'
import { QUOTE_ANCHOR } from '@/lib/siteFacts'

/** Nav + Footer frame for inner pages. The header is visible from the top, so content clears its 68px height. */
export default function SiteShell({
  children,
  footerContact = true,
}: {
  children: React.ReactNode
  /** Set false on pages that already are a contact form, to drop the footer's enquiry form. */
  footerContact?: boolean
}) {
  // "Get a quote" goes to the footer form, or to the page's own form on /contact-us.
  const quoteHref = footerContact ? QUOTE_ANCHOR : '#enquiry'
  return (
    <div className="min-h-screen bg-white text-black max-md:portrait:pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
      <Nav alwaysVisible quoteHref={quoteHref} />
      <main className="pt-[68px]">{children}</main>
      <Footer showContact={footerContact} />
      <MobileActionBar quoteHref={quoteHref} />
    </div>
  )
}
