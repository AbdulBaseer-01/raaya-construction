import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Contact Texo Prefab World — Jeedimetla, Hyderabad",
  "Get a quote for a prefab or modular building. Call +91 90008 00665 or visit our office in IDA Jeedimetla, Hyderabad.",
);

/* This page is itself a contact form, so the footer's enquiry form is left out. */
export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell footerContact={false}>{children}</SiteShell>;
}
