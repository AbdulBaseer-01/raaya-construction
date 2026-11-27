import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Products — Texo Prefab World",
  "Prefab and modular buildings by Texo: wooden series, portable cabins, prefab offices and homes, specialised structures, security cabins and PUF insulated cabins. Designed and built in Hyderabad.",
);

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell>{children}</SiteShell>;
}
