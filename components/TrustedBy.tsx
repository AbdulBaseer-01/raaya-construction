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
];

const partnerGroups = [
	{ partners: [partners[0], partners[1]], layout: "grid-cols-2 md:grid-cols-12" },
	{ partners: [partners[2]], layout: "grid-cols-1 md:grid-cols-12" },
	{ partners: [partners[3], partners[4]], layout: "grid-cols-2 md:grid-cols-12" },
	{ partners: [partners[5], partners[6], partners[7]], layout: "grid-cols-2 md:grid-cols-12" },
];

function PartnerMark({ partner, index }: { partner: Partner; index: number }) {
	return (
		<a
			href="#contact"
			aria-label={`${partner.name}, start a conversation`}
			className={`partner-mark group relative flex min-h-24 items-center justify-center overflow-hidden py-6 md:min-h-32 md:py-8 ${
				index === 0 ? "md:col-span-4 md:col-start-2" : ""
			} ${index === 1 ? "md:col-span-4 md:col-start-8" : ""} ${index === 2 ? "md:col-span-4 md:col-start-5" : ""} ${index === 3 ? "md:col-span-4 md:col-start-2" : ""} ${index === 4 ? "md:col-span-4 md:col-start-8" : ""} ${index === 5 ? "md:col-span-3 md:col-start-2" : ""} ${index === 6 ? "md:col-span-3 md:col-start-6" : ""} ${index === 7 ? "md:col-span-3 md:col-start-10" : ""}`}
		>
			<Image
				src={partner.logo}
				alt={partner.name}
				width={240}
				height={64}
				className="h-auto w-[clamp(8rem,16vw,15rem)] transition duration-500 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
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

				<div className="mt-20 md:mt-28">
					{partnerGroups.map((group, groupIndex) => (
						<div key={groupIndex} className="partner-group">
							<div className="partner-rule h-px w-full bg-black/15" />
							<div className={`grid ${group.layout} md:gap-x-6`}>
								{group.partners.map((partner, index) => (
									<PartnerMark key={partner.name} partner={partner} index={groupIndex === 3 ? index + 5 : groupIndex === 2 ? index + 3 : groupIndex === 1 ? 2 : index} />
								))}
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