import type { Metadata } from "next";
import "./globals.css";

/*
 * Site-wide SEO and link previews (brief, section 1). Pages override the title
 * and description where the brief gives page-specific ones. The favicon is the
 * Texo mark (app/icon.png, app/apple-icon.png).
 *
 * TODO(Texo): add `openGraph.images` with a real Texo project photo (1200 × 630 px)
 * once supplied, and update metadataBase when the final domain is live.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://raaya-construction.vercel.app"),
  title: "Texo Prefab World — Premium Prefab & Modular Buildings, Hyderabad",
  description:
    "Premium prefab and modular buildings: offices, homes, cottages and site cabins. 1,359+ projects in 56+ cities. Designed and built in Hyderabad.",
  openGraph: {
    type: "website",
    siteName: "Texo Prefab World",
    title: "Texo Prefab World — Premium Prefab & Modular Buildings",
    description: "Designed to your brief, built in our factory, installed on your site. 1,359+ projects delivered.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
