import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Project Gallery — Texo Prefab World",
  "Completed Texo prefab and modular projects across India. Filter by structure type and size.",
);

export default function InspirationGalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell>{children}</SiteShell>;
}
