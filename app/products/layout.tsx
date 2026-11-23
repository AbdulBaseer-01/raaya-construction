import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Texo Prefab World",
  description: "A world of Prefabs",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell>{children}</SiteShell>;
}
