"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type JournalItem = {
	number: string;
	type: string;
	title: string;
	location: string;
	duration: string;
	image: string;
	videoUrl: string;
};

const journalItems: JournalItem[] = [
	{
		number: "01",
		type: "Home tour",
		title: "A look inside a modern prefab home",
		location: "Hyderabad",
		duration: "04:32",
		image: "/products/special/restaurant/main.webp",
		videoUrl: "",
	},
	{
		number: "02",
		type: "On site",
		title: "From factory to installation",
		location: "Pune",
		duration: "03:18",
		image: "/products/portable/mobile-toilet/mobile-main.webp",
		videoUrl: "",
	},
	{
		number: "03",
		type: "Design / process",
		title: "Inside a modular space",
		location: "Bengaluru",
		duration: "05:06",
		image: "/products/prefab/accomodation/main.webp",
		videoUrl: "",
	},
];

function JournalItem({ item, featured = false }: { item: JournalItem; featured?: boolean }) {
	const href = item.videoUrl || "/journal";

	return (
		<article className={featured ? "journal-featured" : "journal-secondary group"}>
			<Link href={href} className="block">
				<div className={`journal-image-frame relative overflow-hidden bg-black/5 ${featured ? "aspect-[1.9/1] md:aspect-[2.15/1]" : "aspect-[1.15/1] md:aspect-[1.25]"}`}>
					<Image
						src={item.image}
						alt={item.title}
						fill
						sizes={featured ? "(min-width: 768px) 90vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
						className="journal-image object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
					/>
					<span className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white/60 bg-black/10 text-white backdrop-blur-[2px] transition duration-500 group-hover:border-[#d8bd93] group-hover:bg-[#886c46] ${featured ? "h-16 w-16" : "h-12 w-12"}`}>
						<Play className={featured ? "ml-1 h-5 w-5" : "ml-0.5 h-4 w-4"} fill="currentColor" />
					</span>
				</div>
			</Link>
			<div className="mt-5 flex items-start justify-between gap-6">
				<div>
					<p className="mb-3 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.25em] text-[#886c46]">
						<span>{item.number}</span>
						<span className="h-px w-8 bg-[#886c46]" />
						<span>{item.type}</span>
					</p>
					<h3 className={`max-w-180 uppercase leading-[0.9] tracking-[-0.045em] ${featured ? "text-[clamp(1.5rem,3vw,3.4rem)]" : "text-[clamp(1.35rem,2.4vw,2.7rem)]"}`}>
						{item.title}
					</h3>
				</div>
				<Link href={href} className="journal-watch group/watch mt-1 shrink-0 border-b border-black/25 pb-1 text-[0.58rem] uppercase tracking-[0.2em] transition-colors hover:border-[#886c46] hover:text-[#886c46]">
					Watch <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover/watch:translate-x-1" />
				</Link>
			</div>
			<p className="mt-4 text-[0.58rem] uppercase tracking-[0.2em] text-black/50">{item.location} <span className="mx-2 text-black/20">·</span> {item.duration}</p>
		</article>
	);
}

export default function FromTheField() {
	const root = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const context = gsap.context(() => {
			gsap.fromTo(
				".field-heading-line",
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
				".field-featured-image",
				{ clipPath: "inset(0 100% 0 0)" },
				{
					clipPath: "inset(0 0% 0 0)",
					duration: 1,
					ease: "power3.inOut",
					scrollTrigger: { trigger: root.current, start: "top 58%", once: true },
				},
			);

			gsap.fromTo(
				".journal-secondary",
				{ opacity: 0, y: 24 },
				{
					opacity: 1,
					y: 0,
					stagger: 0.12,
					duration: 0.7,
					ease: "power3.out",
					scrollTrigger: { trigger: ".journal-secondary", start: "top 82%", once: true },
				},
			);
		}, root);

		return () => context.revert();
	}, []);

	return (
		<section ref={root} className="w-full bg-[#ffffff] text-black">
			<div className="mx-auto max-w-[1600px] px-[5vw] pb-28 pt-28 md:pb-40 md:pt-40">
				<div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16">
					<p className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[#886c46]">
						<span className="h-px w-10 bg-[#886c46]" />
						From the field / 07
					</p>
					<div className="md:col-start-1 md:row-start-2">
						<h2 className="max-w-4xl text-[clamp(3rem,7vw,8.5rem)] uppercase leading-[0.78] tracking-[-0.075em]">
							<span className="field-heading-line block">See it</span>
							<span className="field-heading-line ml-0 block text-[#886c46] md:ml-[14%]">in real life.</span>
						</h2>
					</div>
					<p className="max-w-88 text-[0.85rem] leading-[1.7] text-black/60 md:col-start-2 md:row-start-2 md:ml-auto">
						Home tours, site visits and a closer look at how our spaces come together.
					</p>
				</div>

				<div className="field-featured-image mt-20 md:mt-28">
					<JournalItem item={journalItems[0]} featured />
				</div>

				<div className="my-16 overflow-hidden border-y border-black/10 py-4 md:my-24">
					<p className="whitespace-nowrap text-center text-[0.58rem] uppercase tracking-[0.3em] text-black/35">
						Home tours <span className="mx-5 text-[#886c46]">—</span> On site <span className="mx-5 text-[#886c46]">—</span> Behind the build <span className="mx-5 text-[#886c46]">—</span> Home tours <span className="mx-5 text-[#886c46]">—</span> On site
					</p>
				</div>

				<div className="grid gap-14 md:grid-cols-12 md:items-start md:gap-8">
					<div className="md:col-span-5 md:col-start-8 md:pt-20">
						<JournalItem item={journalItems[1]} />
					</div>
					<div className="md:col-span-6 md:col-start-1 md:mt-16">
						<JournalItem item={journalItems[2]} />
					</div>
				</div>

				<div className="mt-32 flex flex-col gap-8 border-t border-black/15 pt-8 md:mt-44 md:flex-row md:items-end md:justify-between">
					<h2 className="text-[clamp(2.5rem,5vw,6rem)] uppercase leading-[0.82] tracking-[-0.06em]">
						There&apos;s more
						<br />
						<span className="text-[#886c46]">to see.</span>
					</h2>
					<Link href="/journal" className="group border-b border-black/30 pb-2 text-[0.62rem] uppercase tracking-[0.2em] transition-colors hover:border-[#886c46] hover:text-[#886c46] md:mb-1">
						Watch all journal <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</section>
	);
}