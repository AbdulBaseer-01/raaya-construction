// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, ArrowUp } from "lucide-react";

// const exploreLinks = [
// 	{ label: "Home", href: "/" },
// 	{ label: "Products", href: "/products" },
// 	{ label: "Projects", href: "/projects" },
// 	{ label: "About", href: "/about-us" },
// 	{ label: "Journal", href: "/blogs" },
// 	{ label: "Contact", href: "#contact" },
// ];

// const socialLinks = [
// 	{ label: "Instagram", href: "#" },
// 	{ label: "LinkedIn", href: "#" },
// 	{ label: "YouTube", href: "#" },
// ];

// function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
// 	return (
// 		<div>
// 			<h2 className="mb-5 text-base font-semibold tracking-[-0.02em] text-white">{title}</h2>
// 			<div className="flex flex-col items-start gap-2 text-sm leading-6 text-white/60">{children}</div>
// 		</div>
// 	);
// }

// export default function Footer() {
// 	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// 	return (
// 		<footer id="contact" className="w-full overflow-hidden bg-[#07182b] text-white">
// 			<div className="relative h-screen overflow-hidden">
// 				<Image
// 					src="/products/prefab/iot-pod/ext-1.png"
// 					alt="Modern prefab pod at sunset"
// 					fill
// 					className="object-cover object-center"
// 					sizes="100vw"
// 				/>
// 				<div className="absolute inset-0 bg-gradient-to-r from-[#07182b]/95 via-[#07182b]/55 to-[#07182b]/10" />
// 				<div className="relative mx-auto flex min-h-[540px] max-w-[1600px] items-end px-6 pb-14 sm:px-10 md:px-[5vw] md:pb-20">
// 					<div className="max-w-xl">
// 						<p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#f2bf00]">Start a project / 08</p>
// 						<h1 className="max-w-lg text-[clamp(3rem,7vw,7rem)] font-semibold uppercase leading-[0.86] tracking-[-0.07em]">
// 							Ready to make <span className="text-[#f2bf00]">a move?</span>
// 						</h1>
// 						<p className="mt-7 max-w-sm text-base leading-7 text-white/75">
// 							Tell us what you&apos;re looking for — we&apos;ll take care of the rest.
// 						</p>
// 						<a href="mailto:info@texoprefabworld.com" className="group mt-8 inline-flex items-center gap-4 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] backdrop-blur-sm transition-colors hover:bg-[#f2bf00] hover:text-[#07182b]">
// 							Let&apos;s talk
// 							<span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
// 								<ArrowRight className="h-4 w-4" />
// 							</span>
// 						</a>
// 					</div>
// 				</div>
// 			</div>

// 			<div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-10 md:px-[5vw] md:py-14">
// 				<div className="flex flex-col gap-10 border-b border-white/10 pb-12 md:flex-row md:items-start md:justify-between">
// 					<Link href="/" className="w-fit transition-opacity hover:opacity-80" aria-label="TEXO Prefab World home">
// 						<Image
// 							src="/horiz-logo.png"
// 							alt="TEXO Prefab World"
// 							width={360}
// 							height={82}
// 							className="h-auto w-[250px] object-contain object-left sm:w-[320px]"
// 						/>
// 					</Link>
// 					<div className="flex flex-col gap-1 text-left text-lg leading-7 text-white/90 md:text-right">
// 						<a href="tel:+919999999999" className="transition-colors hover:text-[#f2bf00]">+91 99999 99999</a>
// 						<a href="mailto:info@texoprefabworld.com" className="transition-colors hover:text-[#f2bf00]">info@texoprefabworld.com</a>
// 					</div>
// 				</div>

// 				<div className="grid gap-12 border-b border-white/10 py-12 sm:grid-cols-2 md:grid-cols-[1fr_1.2fr_1fr] md:gap-16 md:py-16">
// 					<FooterColumn title="About us">
// 						<p className="max-w-[230px]">Innovative prefab spaces designed, manufactured, and delivered for the way you build today.</p>
// 					</FooterColumn>
// 					<FooterColumn title="Explore">
// 						{exploreLinks.map((link) => (
// 							<Link key={link.label} href={link.href} className="transition-colors hover:text-[#f2bf00]">{link.label}</Link>
// 						))}
// 					</FooterColumn>
// 					<FooterColumn title="Address">
// 						<span>Hyderabad, Telangana</span>
// 						<span>India</span>
// 						<span className="mt-1">Mon - Sat: 9am - 6pm</span>
// 					</FooterColumn>
// 				</div>

// 				<div className="flex flex-col gap-5 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
// 					<span>© {new Date().getFullYear()} TEXO PREFAB WORLD</span>
// 					<div className="flex items-center gap-6">
// 						<div className="hidden items-center gap-4 sm:flex">
// 							<span className="text-white/60">Follow us</span>
// 							{socialLinks.map((link) => (
// 								<a key={link.label} href={link.href} className="transition-colors hover:text-[#f2bf00]">{link.label}</a>
// 							))}
// 						</div>
// 						<Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy</Link>
// 						<Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
// 						<button type="button" onClick={scrollToTop} className="group flex items-center gap-2 transition-colors hover:text-[#f2bf00]">
// 							Back to top
// 							<ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1" />
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, ArrowUpRight, LoaderCircle, Mail, MapPin, Phone } from "lucide-react";

const ACCENT = "#886c46";

const legalLinks = [
	{ label: "Terms Of Service", href: "/terms" },
	{ label: "Privacy Policy", href: "/privacy-policy" },
	{ label: "Contact", href: "mailto:info@texoprefabworld.com" },
];

const contacts = [
	{
		phone: { label: "+91 99999 99999", href: "tel:+919999999999" },
		email: { label: "info@texoprefabworld.com", href: "mailto:info@texoprefabworld.com" },
	},
	{
		phone: { label: "+91 88888 88888", href: "tel:+918888888888" },
		email: { label: "sales@texoprefabworld.com", href: "mailto:sales@texoprefabworld.com" },
	},
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

const LinkedInIcon = () => (
	<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
		<path d="M5.4 8.6H2.2V21h3.2V8.6zM3.8 3a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM21.8 14.3c0-3.3-1.8-5-4.2-5-1.8 0-2.7 1-3.1 1.7V8.6h-3.2c0 .9 0 12.4 0 12.4h3.2v-6.9c0-.4 0-.7.1-1 .3-.7.9-1.5 2.1-1.5 1.5 0 2.1 1.1 2.1 2.8V21h3.2l-.2-6.7z" />
	</svg>
);

const socials = [
	{ label: "Instagram", href: "#", Icon: InstagramIcon },
	{ label: "Facebook", href: "#", Icon: FacebookIcon },
	{ label: "LinkedIn", href: "#", Icon: LinkedInIcon },
];

export default function Footer() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 700));
		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	return (
		<footer id="contact" className="relative w-full overflow-hidden bg-black text-white">
			{/* Hero / CTA */}
			<section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
				<Image
					src="/products/prefab/iot-pod/ext-1.png"
					alt="Modern prefab pod at sunset"
					fill
					priority={false}
					className="object-cover object-[65%_center]"
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />
				<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

				<div className="relative mx-auto grid h-full max-w-[1600px] grid-cols-1 gap-12 px-6 pb-24 pt-10 sm:px-10 md:grid-cols-[1fr_minmax(320px,430px)] md:items-end md:gap-16 md:px-[5vw]">
					<Link href="/" aria-label="TEXO Prefab World home" className="w-fit transition-opacity hover:opacity-80 md:col-span-2">
						<Image
							src="/horiz-logo.png"
							alt="TEXO Prefab World"
							width={360}
							height={82}
							className="h-auto w-[180px] object-contain object-left sm:w-[220px]"
						/>
					</Link>

					<div className=" max-w-2xl md:col-start-1">
						<h1 className="text-[clamp(2rem,6vw,5rem)]  uppercase leading-[0.98] tracking-[-0.03em]">
							Ready to
							<br />
							make a <span style={{ color: ACCENT }}>move?</span>
						</h1>
						<p className="mt-8 max-w-sm text-md leading-8 text-white/85">
							Tell us what you&apos;re looking for &ndash; we&apos;ll take care of the rest.
						</p>

						<a
							href="mailto:info@texoprefabworld.com"
							className="group mt-10 inline-flex items-center gap-8 rounded-full pl-4 text-sm font-bold uppercase tracking-[0.04em] text-white shadow-[0_0_0_2px_rgba(255,255,255,0.18)] transition-all hover:brightness-110"
							style={{ background: `linear-gradient(135deg, #a88c64 0%, ${ACCENT} 60%, #6d5535 100%)` }}
						>
							Let&apos;s talk
							<span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
								<ArrowRight className="h-5 w-5" />
							</span>
						</a>
					</div>

					<div className="rounded-2xl border border-white/20 bg-black/45 p-6 shadow-2xl backdrop-blur-md md:col-start-2 md:row-start-2 md:mb-1 md:p-8">
						{isSubmitted ? (
							<div className="py-8" role="status" aria-live="polite">
								<p className="text-2xl font-semibold uppercase">Thank you.</p>
								<p className="mt-3 text-sm leading-6 text-white/70">We&apos;ll be in touch shortly.</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="flex flex-col gap-5">
								<div>
									<p className="text-lg font-semibold uppercase tracking-wide">Let&apos;s talk</p>
									<p className="mt-2 text-sm leading-6 text-white/65">Tell us a little about your project.</p>
								</div>
								<label className="sr-only" htmlFor="footer-name">Your name</label>
								<input id="footer-name" name="name" required placeholder="Your name" className="border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#a88c64]" />
								<label className="sr-only" htmlFor="footer-email">Your email</label>
								<input id="footer-email" name="email" type="email" required placeholder="Your email" className="border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#a88c64]" />
								<label className="sr-only" htmlFor="footer-phone">Your Phone</label>
								<input id="footer-phone" name="phone" type="tel" required placeholder="Your Phone" className="border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#a88c64]" />
								<label className="sr-only" htmlFor="footer-message">Tell us about your project</label>
								<textarea id="footer-message" name="message" required rows={3} placeholder="Tell us about your project" className="resize-none border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#a88c64]" />
								<button type="submit" disabled={isSubmitting} className="mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-[#a88c64] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#c0a47b] disabled:cursor-wait disabled:opacity-70">
									{isSubmitting ? "Sending" : "Send enquiry"}
									{isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
								</button>
							</form>
						)}
					</div>
				</div>
			</section>


<section className="relative overflow-clip">
	<div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-10 md:px-[5vw]">
		{/* Header */}
		<div className="grid grid-cols-1 items-end gap-10 pb-16 pt-24 md:grid-cols-[1.2fr_0.8fr] md:pb-24 md:pt-32">
			<div>
				<p className="mb-10 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-white/50">
					<span className="h-px w-10 bg-[#886c46]" />
					Get in touch
				</p>
				<h2 className="text-[clamp(3.4rem,6.7vw,8rem)] uppercase leading-[0.78] tracking-[-0.075em]">
					<span className="block">Let&apos;s plan</span>
					<span className="ml-[10vw] block text-[#886c46]">your space.</span>
				</h2>
			</div>
			<div className="md:justify-self-end">
				<p className="max-w-[21rem] text-[0.82rem] leading-[1.8] text-white/55">
					Tell us what you need to build. We will help you shape it, from the first call to the final handover.
				</p>
				<div className="mt-10 hidden max-w-[19rem] items-center justify-between border-t border-white/15 pt-5 md:flex">
					<span className="text-[0.58rem] uppercase tracking-[0.2em] text-white/45">Reach out</span>
					<span className="h-8 w-px bg-[#886c46]" />
					<span className="text-[0.58rem] uppercase tracking-[0.2em] text-white/45">03 ways</span>
				</div>
			</div>
		</div>

		{/* Columns */}
		<div className="grid grid-cols-1 gap-14 border-t border-white/15 pt-10 md:grid-cols-3 md:gap-10">
			{/* Contact */}
			<nav aria-label="Primary">
				<div className="mb-8 flex items-center justify-between">
					<span className="text-[0.58rem] uppercase tracking-[0.22em] text-white/50">Contact / 01</span>
					
				</div>
				<div className="flex flex-col gap-10">
					{contacts.map((contact, index) => (
						<div key={contact.phone.href}>
							<div className="grid grid-cols-[minmax(3rem,0.5fr)_minmax(0,1.6fr)] border-t border-white/70 pt-5">
								<span className="text-[0.85rem]">{String(index + 1).padStart(2, '0')}</span>
								<div className="flex flex-col gap-5 border-l border-white/70 pl-5">
									<a
										href={contact.phone.href}
										className="group flex items-center gap-3 text-[0.85rem] text-white/80 transition-colors hover:text-[#886c46]"
									>
										<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#886c46]/50 bg-[#886c46]/15 text-[#886c46] transition-all group-hover:bg-[#886c46] group-hover:text-white">
											<Phone className="h-4 w-4" />
										</span>
										<span>{contact.phone.label}</span>
									</a>
									<a
										href={contact.email.href}
										className="group flex items-center gap-3 text-[0.85rem] text-white/80 transition-colors hover:text-[#886c46]"
									>
										<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#886c46]/50 bg-[#886c46]/15 text-[#886c46] transition-all group-hover:bg-[#886c46] group-hover:text-white">
											<Mail className="h-4 w-4" />
										</span>
										<span className="break-all">{contact.email.label}</span>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</nav>

			{/* Social */}
			<div>
				<div className="mb-8 flex items-center justify-between">
					<span className="text-[0.58rem] uppercase tracking-[0.22em] text-white/50">Follow / 02</span>
					
				</div>
				{/* <h3 className="mb-10 text-[clamp(2.3rem,3.2vw,3.6rem)] uppercase leading-[0.85] tracking-[-0.07em]">
					Follow us
					<span className="block text-[#886c46]">on social.</span>
				</h3> */}
				<ul className="border-t border-white/70">
					{socials.map(({ label, href, Icon }) => (
						<li key={label} className="border-b border-white/15">
							<a
								href={href}
								aria-label={label}
								className="group flex items-center justify-between gap-4 py-4 text-[0.62rem] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[#886c46]"
							>
								<span className="flex items-center gap-4">
									<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black ring-4 ring-white/15 transition-all group-hover:bg-[#886c46] group-hover:text-white group-hover:ring-[#886c46]/30 [&>svg]:h-4 [&>svg]:w-4">
										<Icon />
									</span>
									{label}
								</span>
								<ArrowUpRight className="h-4 w-4 text-[#886c46] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
							</a>
						</li>
					))}
				</ul>
			</div>

			{/* Legal + location */}
			<nav aria-label="Legal">
				<div className="mb-8 flex items-center justify-between">
					<span className="text-[0.58rem] uppercase tracking-[0.22em] text-white/50">Info / 03</span>
					
				</div>
				<ul className="border-t border-white/70">
					{legalLinks.map((link, index) => (
						<li key={link.label} className="border-b border-white/15">
							<Link
								href={link.href}
								className="group flex items-center justify-between gap-4 py-4 text-[0.85rem] text-white/80 transition-colors hover:text-[#886c46]"
							>
								<span className="flex items-center gap-5">
									<span className="text-[0.58rem] tracking-[0.2em] text-white/45">
										{String(index + 1).padStart(2, '0')}
									</span>
									{link.label}
								</span>
								<ArrowUpRight className="h-4 w-4 text-[#886c46] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
							</Link>
						</li>
					))}
				</ul>

				<a
					href="https://maps.app.goo.gl/qNSyNS4xH7eMCv2z9"
					target="_blank"
					rel="noopener noreferrer"
					className="group mt-10 flex items-start gap-3 text-[0.85rem] leading-6 text-white/80 transition-colors hover:text-[#886c46]"
				>
					<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#886c46]/50 bg-[#886c46]/15 text-[#886c46] transition-all group-hover:bg-[#886c46] group-hover:text-white">
						<MapPin className="h-4 w-4" />
					</span>
					<span>
						Plot no 1, Venkateshwara Colony, IDA Jeedimetla, Apurupa Colony, Jeedimetla, Hyderabad, Telangana 500055
						<br />
						India
					</span>
				</a>
			</nav>
		</div>
	</div>

	{/* Watermark */}
	<div className="pointer-events-none relative flex w-full select-none justify-center overflow-hidden px-4 pb-10 pt-20">
		<span className="block whitespace-nowrap text-center text-[clamp(2rem,9vw,9rem)] font-extrabold uppercase leading-none tracking-[-0.02em] text-white/16">
			Texo Prefab World
		</span>
	</div>

	{/* Bottom bar */}
	<div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-10 md:px-[5vw]">
		<div className="flex flex-col items-center justify-between gap-3 border-t border-white/15 py-5 text-[0.58rem] uppercase tracking-[0.2em] text-white/45 md:flex-row">
			<span>© {new Date().getFullYear()} TEXO PREFAB WORLD. All rights reserved.</span>
			<span className="flex items-center gap-3">
				{/* <span className="h-px w-8 bg-[#886c46]" /> */}
				Built around your needs
			</span>
		</div>
	</div>
</section>
		</footer>
	);
}