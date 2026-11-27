import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Careers — Texo Prefab World",
  "Open roles at Texo Prefab World, a prefab and modular construction company in Hyderabad.",
);

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell>{children}</SiteShell>;
}
