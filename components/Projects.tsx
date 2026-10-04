"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
	number: string;
	title: string;
	category: string;
	location: string;
	description: string;
	image: string;
	layout: string;
	imageLayout: string;
	contentLayout: string;
};

const projects: Project[] = [
	{
		number: "01",
		title: "Project name pending",
		category: "Residential",
		location: "Location pending",
		description: "Project description to be replaced with the finished residential case study.",
		image: "/products/woodenseries/wooden/wooden-2.png",
		layout: "md:grid-cols-12",
		imageLayout: "md:col-span-8",
		contentLayout: "md:col-span-4 md:col-start-9 md:pt-16",
	},
	{
		number: "02",
		title: "Project name pending",
		category: "Commercial",
		location: "Location pending",
		description: "Project description to be replaced with the finished commercial case study.",
		image: "/products/portable/bunkhouse/main.webp",
		layout: "md:grid-cols-12",
		imageLayout: "md:col-span-5 md:col-start-8 md:row-start-1",
		contentLayout: "md:col-span-5 md:col-start-2 md:row-start-1 md:self-center",
	},
	{
		number: "03",
		title: "Project name pending",
		category: "Institutional",
		location: "Location pending",
		description: "Project description to be replaced with the finished institutional case study.",
		image: "/products/prefab/house/main.webp",
		layout: "md:grid-cols-12",
		imageLayout: "md:col-span-7 md:col-start-1",
		contentLayout: "md:col-span-4 md:col-start-9 md:self-center",
	},
	
	{
		number: "04",
		title: "Project name pending",
		category: "Flexible spaces",
		location: "Location pending",
		description: "Project description to be replaced with the finished flexible-space case study.",
		image: "/products/special/electric/main-2.webp",
		layout: "md:grid-cols-12",
		imageLayout: "md:col-span-6 md:col-start-7 md:row-start-1",
		contentLayout: "md:col-span-4 md:col-start-2 md:row-start-1 md:self-center",
	},
];

function ProjectItem({ project }: { project: Project }) {
	const root = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const context = gsap.context(() => {
			gsap.fromTo(
				".project-image-frame",
				{ clipPath: "inset(100% 0% 0% 0%)" },
				{
					clipPath: "inset(0% 0% 0% 0%)",
					duration: 1.1,
					ease: "power3.inOut",
					scrollTrigger: { trigger: root.current, start: "top 82%", once: true },
				},
			);

			gsap.fromTo(
				".project-image",
				{ scale: 1.08 },
				{
					scale: 1,
					duration: 1.3,
					ease: "power2.out",
					scrollTrigger: { trigger: root.current, start: "top 82%", once: true },
				},
			);

			gsap.fromTo(
				".project-copy",
				{ opacity: 0, y: 24 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
				},
			);
		}, root);

		return () => context.revert();
	}, []);

	return (
		<article ref={root} className={`grid gap-8 md:gap-12 ${project.layout}`}>
			<Link
				href="/projects"
				className={`project-image-frame group relative block min-h-[22rem] overflow-hidden bg-neutral-200 md:min-h-0 md:aspect-[1.35/1] ${project.imageLayout}`}
			>
				<Image
					src={project.image}
					alt={`${project.title}, ${project.category}`}
					fill
					sizes="(min-width: 768px) 65vw, 100vw"
					className="project-image object-cover transition-transform duration-700 ease-out group-hover:scale-105"
				/>
				<span className="absolute bottom-6 right-6 border-b border-white/60 pb-1 text-[0.58rem] uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					View project <span className="ml-1">→</span>
				</span>
			</Link>

			<div className={`project-copy ${project.contentLayout}`}>
				<div className="mb-6 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.25em] text-[#886c46]">
					<span>{project.number}</span>
					<span className="h-px w-8 bg-[#886c46]" />
					<span>{project.category}</span>
				</div>
				<h3 className="text-[clamp(2rem,4vw,4.8rem)] uppercase leading-[0.86] tracking-[-0.06em]">
					{project.title}
				</h3>
				<p className="mt-4 text-[0.62rem] uppercase tracking-[0.18em] text-black/45">{project.location}</p>
				<p className="mt-8 max-w-[20rem] text-[0.82rem] leading-[1.7] text-black/60">{project.description}</p>
				<Link href="/projects" className="mt-8 inline-block border-b border-black/30 pb-2 text-[0.58rem] uppercase tracking-[0.2em] transition-colors hover:border-[#886c46] hover:text-[#886c46]">
					View project <span className="ml-1">→</span>
				</Link>
			</div>
		</article>
	);
}

export default function Projects() {
	return (
		<section className="w-full bg-white text-black">
			<div className="mx-auto max-w-[1600px] px-[5vw] pb-32 pt-28 md:pb-44 md:pt-40">
				<div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
					<p className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[#886c46]">
						<span className="h-px w-10 bg-[#886c46]" />
						Selected projects / 04
					</p>
					<div className="max-w-[52rem] md:text-right">
						<h2 className="text-[clamp(3rem,7vw,8.5rem)] uppercase leading-[0.78] tracking-[-0.075em]">
							<span className="block">Built.</span>
							<span className="block text-[#886c46]">Not just</span>
							<span className="block md:mr-[12%]">specified.</span>
						</h2>
						<p className="mt-8 max-w-[26rem] text-[0.85rem] leading-[1.7] text-black/60 md:ml-auto">
							Real spaces. Real sites. Built for the way they need to work.
						</p>
					</div>
				</div>

				<div className="mt-24 space-y-28 md:mt-36 md:space-y-48">
					{projects.map((project) => <ProjectItem key={project.number} project={project} />)}
				</div>

				<div className="mt-28 bg-[#171716] px-6 py-10 text-white md:mt-44 md:flex md:items-end md:justify-between md:px-12 md:py-14">
					<div>
						<p className="mb-6 text-[0.58rem] uppercase tracking-[0.28em] text-[#b3976d]">The work continues / 05</p>
						<h2 className="max-w-[48rem] text-[clamp(2.5rem,5.5vw,6.5rem)] uppercase leading-[0.82] tracking-[-0.06em]">
							Built for real sites.
							<br />
							<span className="text-[#b3976d]">Real purposes.</span>
						</h2>
					</div>
					<Link href="/projects" className="mt-10 shrink-0 border-b border-white/50 pb-2 text-[0.62rem] uppercase tracking-[0.2em] transition-colors hover:border-[#b3976d] hover:text-[#b3976d] md:mb-1">
						View all projects <span className="ml-1">→</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
