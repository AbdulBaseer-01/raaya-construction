import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Why Texo — Premium Prefab & Modular Buildings, Hyderabad",
  "Drawings and a quote in 48 hours. Built in our Hyderabad factory in about 10 days. Installed on your site, ready to use. 1,359+ projects across 56+ cities.",
);

export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell>{children}</SiteShell>;
}
