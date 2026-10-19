"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Partner = {
	name: string;
	logo: string;
};

const partners: Partner[] = [
	{ name: "Client 01", logo: "/clients/int-1.webp" },
	{ name: "Client 02", logo: "/clients/int-2.png" },
	{ name: "Client 03", logo: "/clients/int-3.png" },
	{ name: "Client 04", logo: "/clients/int-4.png" },
	{ name: "Client 05", logo: "/clients/int-5.jpg" },
	{ name: "Client 06", logo: "/clients/int-6.png" },
	{ name: "Client 07", logo: "/clients/int-7.png" },
	{ name: "Client 08", logo: "/clients/int-8.png" },
	{ name: "Client 09", logo: "/clients/int-9.png" },
	{ name: "Client 10", logo: "/clients/int-10.png" },
	{ name: "Client 11", logo: "/clients/int-11.avif" },
	{ name: "Client 12", logo: "/clients/int-12.webp" },
	{ name: "Client 13", logo: "/clients/int-13.jpeg" },
	{ name: "Client 15", logo: "/clients/int-15.png" },
	{ name: "Client 16", logo: "/clients/int-16.webp" },
	{ name: "Client 17", logo: "/clients/int-17.webp" },
	{ name: "Client 18", logo: "/clients/int-18.png" },
	{ name: "Client 19", logo: "/clients/int-19.png" },
	{ name: "Client 20", logo: "/clients/int-20.jpg" },
	{ name: "Client 21", logo: "/clients/int-21.webp" },
	{ name: "Client 22", logo: "/clients/int-22.png" },
];

const partnerGroups = [partners.slice(0, 7), partners.slice(7, 14), partners.slice(14)];

function PartnerMark({ partner, index }: { partner: Partner; index: number }) {
	return (
		<a
			href="#contact"
			aria-label={`${partner.name}, start a conversation`}
			className="partner-mark group relative flex h-28 w-44 shrink-0 items-center justify-center overflow-hidden md:h-36 md:w-56"
		>
			<Image
				src={partner.logo}
				alt={partner.name}
				width={240}
				height={64}
				className="max-h-20 h-auto w-auto max-w-[90%] object-contain opacity-100 transition duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-100 md:max-h-24"
			/>
			<span className="absolute bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[#886c46] transition-all duration-500 group-hover:w-12" />
			<span className="absolute right-0 top-2 text-[0.5rem] uppercase tracking-[0.2em] text-[#886c46] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
				Partner / {String(index + 1).padStart(2, "0")}
			</span>
		</a>
	);
}

export default function TrustedBy() {
	const root = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const context = gsap.context(() => {
			gsap.fromTo(
				".trusted-heading-line",
				{ opacity: 0, y: 32 },
				{
					opacity: 1,
					y: 0,
					stagger: 0.08,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
				},
			);

			gsap.fromTo(
				".partner-rule",
				{ scaleX: 0, transformOrigin: "left center" },
				{
					scaleX: 1,
					stagger: 0.12,
					duration: 0.8,
					ease: "power2.out",
					scrollTrigger: { trigger: root.current, start: "top 68%", once: true },
				},
			);

			gsap.fromTo(
				".partner-mark",
				{ opacity: 0, y: 18 },
				{
					opacity: 1,
					y: 0,
					stagger: 0.06,
					duration: 0.65,
					ease: "power2.out",
					scrollTrigger: { trigger: root.current, start: "top 64%", once: true },
				},
			);
		}, root);

		return () => context.revert();
	}, []);

	return (
		<section ref={root} id="trusted-by" className="w-full bg-[#ffffff] text-black">
			<div className="mx-auto flex min-h-[80vh] max-w-[1600px] flex-col px-[5vw] pb-24 pt-8 md:pb-32 md:pt-4 lg:min-h-[90vh]">
				<div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16">
					<p className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[#886c46]">
						<span className="h-px w-10 bg-[#886c46]" />
						Trusted by / 05
					</p>
					<div className="md:col-start-1 md:row-start-2">
						<h2 className="max-w-232 text-[clamp(3rem,7vw,8.5rem)] uppercase leading-[0.78] tracking-[-0.075em]">
							<span className="trusted-heading-line block">Built with people</span>
							<span className="trusted-heading-line ml-0 block text-[#886c46] md:ml-[12%]">who build seriously.</span>
						</h2>
					</div>
					<p className="max-w-92 text-[0.85rem] leading-[1.7] text-black md:col-start-2 md:row-start-2 md:ml-auto">
						From developers and contractors to businesses and institutions, our spaces are built around real requirements.
					</p>
				</div>

				<div className="mt-20 space-y-5 md:mt-28 md:space-y-8">
					{partnerGroups.map((group, groupIndex) => (
						<div key={groupIndex} className="partner-group overflow-hidden">
							<div className="partner-rule h-px w-full bg-black/15" />
							<div className="partner-marquee">
								<div className={`partner-marquee-track ${groupIndex % 2 === 1 ? "partner-marquee-track-reverse" : ""}`}>
									{[...group, ...group].map((partner, index) => (
										<PartnerMark key={`${groupIndex}-${partner.name}-${index}`} partner={partner} index={index % group.length} />
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-auto flex flex-col gap-4 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
					<p className="text-[clamp(1.8rem,3.5vw,4.5rem)] uppercase leading-[0.86] tracking-[-0.055em]">
						From first sketch
						<br />
						to final installation.
					</p>
					<p className="max-w-76 text-[0.7rem] leading-[1.6] text-black/50 md:text-right">
						Built around your site, your timeline and your requirements.
					</p>
				</div>
			</div>
		</section>
	);
}