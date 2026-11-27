import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Blogs — Texo Prefab World",
  "Articles on prefab and modular construction in Hyderabad from Texo Prefab World.",
);

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell>{children}</SiteShell>;
}
