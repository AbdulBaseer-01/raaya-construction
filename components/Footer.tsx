"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import QuoteForm from "@/components/site/QuoteForm";
import { CONTACT } from "@/lib/siteFacts";
import { productCategories } from "@/lib/productCategories";

/*
 * Palette
 *   background  #080808
 *   primary     #FFFFFF
 *   secondary   #A5A5A5
 *   accent      #886c46  (icons, indicators, focus + interactive states)
 *
 * Layout responds to the width actually available to each block (Tailwind v4
 * container queries), not to the viewport, so nothing is forced into a cramped
 * multi-column layout.
 */

const legalLinks = [
	{ label: "Terms Of Service", href: "/terms-of-use" },
	{ label: "Privacy Policy", href: "/privacy-policy" },
];

const contacts = [
	{ label: "Sales", phone: CONTACT.sales, email: CONTACT.infoEmail },
	{ label: "General", phone: CONTACT.general, email: CONTACT.salesEmail },
];

const address = {
	href: CONTACT.mapUrl,
	lines: [CONTACT.address, "India"],
};

const companyLinks = [
	{ label: "About Us", href: "/about-us" },
	{ label: "Projects", href: "/inspiration-gallery" },
	{ label: "Blogs", href: "/blogs" },
	{ label: "Careers", href: "/career" },
	{ label: "Contact", href: "/contact-us" },
];

const InstagramIcon = () => (
	<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<rect x="3" y="3" width="18" height="18" rx="5" />
		<circle cx="12" cy="12" r="4" />
		<circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
	</svg>
);

const FacebookIcon = () => (
	<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
		<path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V13h2.8v8h3.2z" />
	</svg>
);

const YouTubeIcon = () => (
	<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
		<path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
	</svg>
);

const socials = [
	{ label: "Instagram", href: "#", Icon: InstagramIcon },
	{ label: "Facebook", href: "#", Icon: FacebookIcon },
	{ label: "YouTube", href: "#", Icon: YouTubeIcon },
];

/** Small uppercase section label with an accent tick. */
function Eyebrow({ children }: { children: React.ReactNode }) {
	return (
		<p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#A5A5A5]">
			<span aria-hidden="true" className="h-px w-6 bg-[#886c46]" />
			{children}
		</p>
	);
}

/**
 * `showContact` renders the contact hero with its enquiry form. Pages that are
 * themselves a contact form (/contact-us) turn it off to avoid two forms in a row.
 */
export default function Footer({ showContact = true }: { showContact?: boolean }) {
	return (
		<footer id="contact" className="relative w-full overflow-hidden bg-[#080808] text-white">
			{/* ───────────────────────── Contact hero ───────────────────────── */}
			{showContact && (
			<section aria-labelledby="footer-heading" className="relative isolate">
				<Image
					src="/products/prefab/iot-pod/ext-1.png"
					alt=""
					fill
					className="-z-10 object-cover object-center grayscale-[35%]"
					sizes="100vw"
				/>
				{/* Overlay: an even black wash, plus a fade into the footer body so both sections read as one. */}
				<div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#080808]/80" />
				<div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-b from-transparent to-[#080808]" />

				<div className="mx-auto w-full max-w-[1600px] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-[5vw] lg:pb-24">
					{/* Brand row */}
					<div className="flex items-center justify-between gap-6 border-b border-white/10 pb-6 sm:pb-8">
						<Link href="/" aria-label="TEXO Prefab World home" className="w-fit transition-opacity hover:opacity-80">
							<Image
								src="/horiz-logo.png"
								alt="TEXO Prefab World"
								width={360}
								height={82}
								className="h-auto w-[140px] object-contain object-left sm:w-[190px]"
							/>
						</Link>
						<span className="hidden text-[0.65rem] uppercase tracking-[0.24em] text-[#A5A5A5] sm:block">
							Start a project
						</span>
					</div>

					{/* Main grid — splits heading | contact+form only when the container is genuinely wide. */}
					<div className="@container pt-12 sm:pt-16 lg:pt-20">
						<div className="grid grid-cols-1 gap-14 @min-[76rem]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] @min-[76rem]:items-end @min-[76rem]:gap-16">
							{/* Heading block */}
							<div className="@container min-w-0">
								<Eyebrow>Contact / 10</Eyebrow>
								<h2
									id="footer-heading"
									className="mt-6 text-[clamp(2.25rem,10cqi,5.4rem)] font-normal uppercase leading-[0.92] tracking-[-0.03em] text-white"
								>
									Tell us what
									<br />
									you want to build.
								</h2>
								<p className="mt-6 max-w-[26rem] text-base leading-7 text-[#A5A5A5] sm:mt-8 sm:text-lg sm:leading-8">
									Share your requirement and site location. Our team will call you back with next steps and an estimate.
								</p>

								<a
									href={CONTACT.infoEmail.href}
									className="group mt-8 inline-flex min-h-12 items-center gap-6 border border-white/25 py-3 pl-6 pr-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-[#886c46] hover:bg-white/[0.03] sm:mt-10"
								>
									Let&apos;s talk
									<ArrowRight
										aria-hidden="true"
										className="h-4 w-4 text-[#886c46] transition-transform duration-300 group-hover:translate-x-1"
									/>
								</a>
							</div>

							{/* Contact details + enquiry form */}
							<div className="@container min-w-0">
								<div className="grid grid-cols-1 gap-12 @min-[42rem]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] @min-[42rem]:gap-10">
									{/* Details */}
									<div className="flex min-w-0 flex-col gap-8 border-t border-white/10 pt-6">
										<div className="grid gap-6">
											{contacts.map((contact) => (
												<div key={contact.phone.href} className="grid grid-cols-[4.75rem_minmax(0,1fr)] gap-x-2">
													<span className="pt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#886c46]">
														{contact.label}
													</span>
													<div className="grid min-w-0 gap-3 text-[0.95rem]">
														<a
															href={contact.phone.href}
															className="flex min-w-0 items-center gap-3 text-white transition-colors hover:text-[#A5A5A5]"
														>
															<Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-[#886c46]" />
															<span className="min-w-0">{contact.phone.label}</span>
														</a>
														<a
															href={contact.email.href}
															className="flex min-w-0 items-center gap-3 text-white transition-colors hover:text-[#A5A5A5]"
														>
															<Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-[#886c46]" />
															<span className="min-w-0 [overflow-wrap:anywhere]">{contact.email.label}</span>
														</a>
													</div>
												</div>
											))}
											<p className="grid grid-cols-[4.75rem_minmax(0,1fr)] gap-x-2 text-sm leading-6 text-[#A5A5A5]">
												<span className="pt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#886c46]">Hours</span>
												<span className="flex min-w-0 items-center gap-3">
													<Clock aria-hidden="true" className="h-4 w-4 shrink-0 text-[#886c46]" />
													{CONTACT.hours}
												</span>
											</p>
										</div>

										<a
											href={address.href}
											target="_blank"
											rel="noopener noreferrer"
											className="group grid grid-cols-[2rem_minmax(0,1fr)] gap-x-2 border-t border-white/10 pt-6 text-sm leading-6 text-[#A5A5A5] transition-colors hover:text-white"
										>
											<MapPin aria-hidden="true" className="mt-1 h-4 w-4 text-[#886c46]" />
											<span className="min-w-0">
												{/* TODO(Texo): change to "Office & factory" once confirmed both are at this address. */}
												<span className="mb-1 block text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white">Office</span>
												{address.lines[0]}
												<br />
												{address.lines[1]}
												<span className="mt-3 flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white">
													View on map
													<ArrowUpRight
														aria-hidden="true"
														className="h-3.5 w-3.5 text-[#886c46] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
													/>
												</span>
											</span>
										</a>
									</div>

									{/* Enquiry form */}
									<div className="@container min-w-0 border border-white/10 bg-[#080808]/60 p-6 sm:p-8">
										<QuoteForm tone="dark" idPrefix="footer" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			)}

			{/* ───────────────────────── Footer body ───────────────────────── */}
			{/* TODO(Texo): add "GSTIN: …" to the bottom line if it should be shown. */}
			<section aria-label="Site links" className="relative">
				<div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-[5vw]">
					<div className="@container border-t border-white/10 py-12 sm:py-14 lg:py-16">
						<div className="grid grid-cols-1 gap-12 @min-[60rem]:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] @min-[60rem]:gap-16">
							{/* Brand */}
							<div className="flex min-w-0 flex-col gap-6">
								<Link href="/" aria-label="TEXO Prefab World home" className="w-fit transition-opacity hover:opacity-80">
									<Image
										src="/horiz-logo.png"
										alt="TEXO Prefab World"
										width={360}
										height={82}
										className="h-auto w-[150px] object-contain object-left sm:w-[190px]"
									/>
								</Link>
								<p className="max-w-[22rem] text-[0.95rem] leading-7 text-[#A5A5A5]">
									Premium prefab and modular buildings, designed and manufactured in Hyderabad since 2018.
								</p>
								<div className="flex flex-wrap items-center gap-5">
									<span className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[#A5A5A5]">Follow</span>
									<ul className="flex items-center gap-2">
										{socials.map(({ label, href, Icon }) => (
											<li key={label}>
												<a
													href={href}
													aria-label={label}
													className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#886c46] transition-colors duration-300 hover:border-[#886c46]/70 hover:bg-[#886c46]/10 hover:text-[#886c46]"
												>
													<Icon />
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>

							{/* Columns */}
							<div className="grid min-w-0 grid-cols-1 gap-10 @min-[36rem]:grid-cols-3 @min-[36rem]:gap-8">
								<nav aria-label="Products" className="min-w-0">
									<Eyebrow>Products</Eyebrow>
									<ul className="mt-5 grid gap-3 text-[0.9rem]">
										{productCategories.map((category) => (
											<li key={category.slug}>
												<Link href={`/products/${category.slug}`} className="text-white transition-colors hover:text-[#886c46]">
													{category.name}
												</Link>
											</li>
										))}
									</ul>
								</nav>
								<nav aria-label="Company" className="min-w-0">
									<Eyebrow>Company</Eyebrow>
									<ul className="mt-5 grid gap-3 text-[0.9rem]">
										{companyLinks.map((link) => (
											<li key={link.href}>
												<Link href={link.href} className="text-white transition-colors hover:text-[#886c46]">
													{link.label}
												</Link>
											</li>
										))}
									</ul>
								</nav>
								<div className="min-w-0">
									<Eyebrow>Contact</Eyebrow>
									<ul className="mt-5 grid gap-3 text-[0.9rem]">
										<li>
											<a href={CONTACT.sales.href} className="text-white transition-colors hover:text-[#886c46]">
												{CONTACT.sales.label}
											</a>
										</li>
										<li>
											<a href={CONTACT.salesEmail.href} className="text-white transition-colors [overflow-wrap:anywhere] hover:text-[#886c46]">
												{CONTACT.salesEmail.label}
											</a>
										</li>
										<li>
											<a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[#A5A5A5] transition-colors hover:text-white">
												Jeedimetla, Hyderabad
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom bar */}
					<div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[0.65rem] uppercase tracking-[0.2em] text-[#A5A5A5] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
						<span>&copy; {new Date().getFullYear()} TEXO PREFAB WORLD. All rights reserved.</span>
						<nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2">
							{legalLinks.map((link) => (
								<Link key={link.label} href={link.href} className="transition-colors hover:text-white">
									{link.label}
								</Link>
							))}
						</nav>
					</div>
				</div>
			</section>
		</footer>
	);
}
