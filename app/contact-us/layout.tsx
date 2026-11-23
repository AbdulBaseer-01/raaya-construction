import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Texo Prefab World",
  description: "A world of Prefabs",
};

/* This page is itself a contact form, so the footer's enquiry form is left out. */
export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell footerContact={false}>{children}</SiteShell>;
}
