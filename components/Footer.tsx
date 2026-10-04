"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const exploreLinks = [
	{ label: "Home", href: "/" },
	{ label: "Products", href: "/products" },
	{ label: "Projects", href: "/projects" },
	{ label: "About", href: "/about-us" },
	{ label: "Journal", href: "/blogs" },
	{ label: "Contact", href: "#contact" },
];

const socialLabels = ["Instagram", "LinkedIn", "YouTube"];

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div>
			<p className="mb-6 text-[0.58rem] uppercase tracking-[0.28em] text-[#b3976d]">{title}</p>
			<div className="flex flex-col items-start gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-white/65">{children}</div>
		</div>
	);
}

export default function Footer() {
	const footerRef = useRef<HTMLElement>(null);
	const wordmarkRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!footerRef.current || !wordmarkRef.current) return;

		const context = gsap.context(() => {
			ScrollTrigger.create({
				trigger: footerRef.current,
				start: "top bottom",
				end: "bottom bottom",
				onUpdate: (self) => {
					const shift = gsap.utils.clamp(-2.5, 2.5, self.getVelocity() / 700);
					gsap.to(wordmarkRef.current, { xPercent: shift, duration: 0.8, ease: "power3.out", overwrite: true });
				},
			});
		}, footerRef);

		return () => context.revert();
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<footer ref={footerRef} className="w-full overflow-hidden bg-[#171716] text-white">
			<div className="mx-auto max-w-[1600px] px-[5vw] pb-8 pt-24 md:pb-10 md:pt-36">
				<div className="border-b border-white/20 pb-24 md:pb-36">
					<p className="text-[clamp(4rem,12vw,13rem)] uppercase leading-[0.73] tracking-[-0.09em]">
						<span className="block">Built</span>
						<span className="ml-0 block text-[#b3976d] md:ml-[13%]">different.</span>
					</p>
				</div>

				<div  className="ml-[-6vw] w-screen py-16 md:py-24">
					<p className="whitespace-nowrap text-center w-full text-[clamp(5rem,10vw,14rem)] uppercase leading-[0.65] tracking-[-0.11em] text-white">
						TEXO PREFAB WORLD
					</p>
				</div>

				<div className="grid gap-14 border-t border-white/20 pt-10 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
					<FooterColumn title="Explore">
						{exploreLinks.map((link) => (
							<Link key={link.label} href={link.href} className="transition-colors hover:text-[#b3976d]">{link.label}</Link>
						))}
					</FooterColumn>
					<FooterColumn title="Connect">
						{socialLabels.map((label) => <span key={label} className="text-white/35">{label} / coming soon</span>)}
					</FooterColumn>
					<FooterColumn title="Contact">
						<span className="normal-case tracking-[0.08em] text-white/55">info@company.com</span>
						<span className="normal-case tracking-[0.08em] text-white/55">+91 XXXXX XXXXX</span>
						<span className="normal-case tracking-[0.08em] text-white/55">Hyderabad, India</span>
					</FooterColumn>
					<FooterColumn title="The principle">
						<span className="max-w-48 leading-[1.6] text-white/55">Built for different needs.</span>
					</FooterColumn>
				</div>

				<div className="mt-24 flex flex-col gap-5 border-t border-white/20 pt-5 text-[0.55rem] uppercase tracking-[0.22em] text-white/45 md:flex-row md:items-center md:justify-between">
					<span>© {new Date().getFullYear()} TEXO PREFAB WORLD</span>
					<span>Made for real spaces.</span>
					<button type="button" onClick={scrollToTop} className="group flex items-center gap-2 self-start transition-colors hover:text-[#b3976d] md:self-auto">
						Back to top
						<span className="relative border-b border-white/40 pb-1 transition-colors group-hover:border-[#b3976d]"><ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-1" /></span>
					</button>
				</div>

				<div className="mt-8 flex items-center justify-between text-[0.52rem] uppercase tracking-[0.2em] text-white/25">
					<span>Manufacture / Install / Deliver</span>
					<span className="hidden md:block">Design / Development</span>
					<ArrowUpRight className="h-3 w-3" />
				</div>
			</div>
		</footer>
	);
}