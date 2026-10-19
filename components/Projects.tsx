"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { useRef } from "react";

type Project = {
	number: string;
	title: string;
	category: string;
	location: string;
	image: string;
	accent: string;
};

const projects: Project[] = [
	{
		number: "01",
		title: "The Courtyard",
		category: "Prefab residence",
		location: "Hyderabad / 2024",
		image: "/products/prefab/house/main.webp",
		accent: "#c8a97e",
	},
	{
		number: "02",
		title: "Desert Pod",
		category: "Luxury retreat",
		location: "Rajasthan / 2024",
		image: "/products/prefab/iot-pod/ext-1.png",
		accent: "#9aa98e",
	},
	{
		number: "03",
		title: "Field Office",
		category: "Workplace system",
		location: "Pune / 2023",
		image: "/products/prefab/site-office/main.webp",
		accent: "#b7a28e",
	},
	{
		number: "04",
		title: "The Bunkhouse",
		category: "Accommodation",
		location: "Goa / 2023",
		image: "/products/portable/bunkhouse/main.webp",
		accent: "#d0aa78",
	},
	{
		number: "05",
		title: "The Workshop",
		category: "Flexible space",
		location: "Bengaluru / 2022",
		image: "/products/prefab/structures/main.webp",
		accent: "#9d9b8d",
	},
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
	return (
		<Link
			href="/projects"
			className="project-card group relative flex h-[57vh] min-h-[25rem] w-[72vw] max-w-[22rem] shrink-0 flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#242421] p-5 text-white shadow-2xl transition-transform duration-500 hover:-translate-y-3 sm:w-[48vw] md:h-[62vh] md:w-[28vw] md:max-w-[25rem]"
			style={{ transform: `translateY(${index % 2 === 0 ? "0" : "2.5rem"})` }}
		>
			<Image
				src={project.image}
				alt={`${project.title} - ${project.category}`}
				fill
				sizes="(min-width: 768px) 28vw, 72vw"
				className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/85" />

			<div className="relative z-10 flex items-start justify-between text-[0.62rem] uppercase tracking-[0.2em] text-white/70">
				<span>{project.number} / 05</span>
				<span>{project.location}</span>
			</div>

			<div className="relative z-10">
				<div className="mb-4 h-1 w-10 rounded-full" style={{ backgroundColor: project.accent }} />
				<p className="mb-2 text-[0.62rem] uppercase tracking-[0.22em] text-white/60">{project.category}</p>
				<h3 className="max-w-[14rem] text-[clamp(2rem,4vw,4rem)] uppercase leading-[0.84] tracking-[-0.06em]">
					{project.title}
				</h3>
				<div className="mt-6 flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.18em] text-white/70 transition-colors group-hover:text-white">
					Explore project
					<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
				</div>
			</div>
		</Link>
	);
}

export default function Projects() {
	const projectsRailRef = useRef<HTMLDivElement>(null);

	const scrollProjects = (direction: "left" | "right") => {
		projectsRailRef.current?.scrollBy({
			left: direction === "left" ? -420 : 420,
			behavior: "smooth",
		});
	};

	return (
		<section className="relative min-h-screen overflow-hidden bg-[#ffffff] text-black md:min-h-[120vh]">
			<div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#886c46]/20 blur-[100px]" />
			<div className="pointer-events-none absolute bottom-0 left-[-10rem] h-96 w-96 rounded-full bg-[#385148]/20 blur-[120px]" />

			<div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 py-16 sm:px-10 md:min-h-[120vh] md:px-[5vw] md:py-24">
				<div className="flex items-start justify-between gap-8">
					<div>
						<p className="mb-8 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[#b3976d]">
							<span className="h-px w-10 bg-[#b3976d]" />
							Our Portfolio
						</p>
						<h2 className="max-w-4xl text-[clamp(3.5rem,9vw,10rem)] uppercase leading-[0.76] tracking-[-0.09em]">
							<span className="block">Made</span>
							<span className="ml-[12vw] block text-[#b3976d]">to stay.</span>
						</h2>
					</div>
					<p className="mt-2 hidden max-w-[13rem] text-right text-[0.72rem] leading-[1.7] text-black/80 md:block">
						Five spaces. Five different answers to the same question: what should a building make possible?
					</p>
				</div>

				<div className="relative">
					<div ref={projectsRailRef} className="projects-rail -mx-6 mt-14 flex items-end gap-4 overflow-x-auto px-6 pb-10 sm:-mx-10 sm:px-10 md:-mx-[5vw] md:mt-24 md:gap-6 md:px-[5vw] md:pb-16 pt-8">
					{projects.map((project, index) => (
						<ProjectCard key={project.number} project={project} index={index} />
					))}
					</div>
					<div className="pointer-events-none absolute inset-x-2 top-1/2 z-20 flex -translate-y-1/2 justify-between sm:inset-x-4 md:inset-x-6">
						<button
							type="button"
							onClick={() => scrollProjects("left")}
							aria-label="Scroll projects left"
							className="pointer-events-auto flex h-32 w-14 items-center justify-center rounded-full border border-[#886c46]/70 bg-[#886c46]/65 text-white shadow-lg backdrop-blur-xl transition-colors hover:bg-[#886c46]/85"
						>
							<ArrowLeft className="h-5 w-5" />
						</button>
						<button
							type="button"
							onClick={() => scrollProjects("right")}
							aria-label="Scroll projects right"
							className="pointer-events-auto flex h-32 w-14 items-center justify-center rounded-full border border-[#886c46]/70 bg-[#886c46]/65 text-white shadow-lg backdrop-blur-xl transition-colors hover:bg-[#886c46]/85"
						>
							<ArrowRight className="h-5 w-5" />
						</button>
					</div>
				</div>

				<div className="flex items-center justify-between border-t border-white/15 pt-5 text-[0.58rem] uppercase tracking-[0.2em] text-black">
					<span>Scroll to explore</span>
					<Link href="/projects" className="transition-colors hover:text-[#b3976d]">View all projects <span className="ml-2">↗</span></Link>
				</div>
			</div>
		</section>
	);
}
