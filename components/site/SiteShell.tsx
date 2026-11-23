import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

/** Nav + Footer frame for inner pages. The header is visible from the top, so content clears its 68px height. */
export default function SiteShell({
  children,
  footerContact = true,
}: {
  children: React.ReactNode
  /** Set false on pages that already are a contact form, to drop the footer's enquiry form. */
  footerContact?: boolean
}) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Nav alwaysVisible />
      <main className="pt-[68px]">{children}</main>
      <Footer showContact={footerContact} />
    </div>
  )
}
