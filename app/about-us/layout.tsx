import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "About Texo Prefab World — Prefab Manufacturer in Hyderabad since 2018",
  "Premium prefab and modular buildings, designed and manufactured in Hyderabad since 2018. 1,359+ projects across 56+ cities.",
);

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell>{children}</SiteShell>;
}
