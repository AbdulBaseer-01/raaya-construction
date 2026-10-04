"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
	quote: string;
	name: string;
	project: string;
	location: string;
	image: string;
};

const testimonials: Testimonial[] = [
	{
		quote: "The team understood what the site needed before we had every detail resolved.",
		name: "Anika Rao",
		project: "Courtyard Residence",
		location: "Hyderabad",
		image: "/products/puf/solar-room/main.webp",
	},
	{
		quote: "The build arrived with the clarity of a finished plan, but the flexibility of a live site.",
		name: "Rohan Mehta",
		project: "Field Office Campus",
		location: "Pune",
		image: "/products/prefab/cottage/images/image1.png",
	},
	{
		quote: "We could see the thinking in every decision, from the first sketch to the final installation.",
		name: "Maya Sen",
		project: "Garden Studio",
		location: "Bengaluru",
		image: "/products/prefab/iot-pod/ext-1.png",
	},
];

function TestimonialStory({ testimonial }: { testimonial: Testimonial }) {
	return (
		<div className="testimonial-story grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
			<div className="testimonial-image-frame relative aspect-[1.2/1] overflow-hidden bg-black/5 md:aspect-[1.35/1]">
				<Image
					src={testimonial.image}
					alt={`${testimonial.project}, ${testimonial.location}`}
					fill
					sizes="(min-width: 1024px) 58vw, (min-width: 768px) 55vw, 100vw"
					className="testimonial-image object-cover"
				/>
			</div>

			<div className="testimonial-copy">
				<blockquote className="max-w-[34rem] text-[clamp(2.2rem,4.5vw,5.7rem)] uppercase leading-[0.87] tracking-[-0.06em]">
					“{testimonial.quote}”
				</blockquote>
				<div className="mt-10 border-l border-[#886c46] pl-4 text-[0.58rem] uppercase tracking-[0.22em] text-black/55">
					<p className="testimonial-meta text-black">— {testimonial.name}</p>
					<p className="mt-3">{testimonial.project}</p>
					<p className="mt-1">{testimonial.location}</p>
				</div>
			</div>
		</div>
	);
}

export default function Testimonials() {
	const root = useRef<HTMLElement>(null);
	const storyRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const activeTestimonial = testimonials[activeIndex];

	const changeTestimonial = (direction: number) => {
		setActiveIndex((currentIndex) => (currentIndex + direction + testimonials.length) % testimonials.length);
	};

	useLayoutEffect(() => {
		const context = gsap.context(() => {
			gsap.fromTo(
				".testimonial-heading-line",
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
				".testimonial-story",
				{ opacity: 0, y: 24 },
				{
					opacity: 1,
					y: 0,
					duration: 0.9,
					ease: "power3.out",
					scrollTrigger: { trigger: root.current, start: "top 62%", once: true },
				},
			);
		}, root);

		return () => context.revert();
	}, []);

	useLayoutEffect(() => {
		if (!storyRef.current) return;

		const context = gsap.context(() => {
			gsap.fromTo(
				".testimonial-image-frame",
				{ clipPath: "inset(0 100% 0 0)" },
				{ clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "power3.inOut" },
			);
			gsap.fromTo(
				".testimonial-copy",
				{ opacity: 0, y: 18 },
				{ opacity: 1, y: 0, duration: 0.55, delay: 0.12, ease: "power3.out" },
			);
		}, storyRef);

		return () => context.revert();
	}, [activeIndex]);

	return (
		<section ref={root} className="w-full bg-[#ffffff] text-black">
			<div className="mx-auto flex min-h-[100vh] max-w-[1600px] flex-col px-[5vw] pb-24 pt-28 md:pb-32 md:pt-40 lg:min-h-[110vh]">
				<div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16">
					<p className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[#886c46]">
						<span className="h-px w-10 bg-[#886c46]" />
						Real words / 06
					</p>
					<div className="md:col-start-1 md:row-start-2">
						<h2 className="max-w-[58rem] text-[clamp(3rem,7vw,8.5rem)] uppercase leading-[0.78] tracking-[-0.075em]">
							<span className="testimonial-heading-line block">The space</span>
							<span className="testimonial-heading-line ml-0 block text-[#886c46] md:ml-[12%]">speaks for itself.</span>
						</h2>
					</div>
				</div>

				<div ref={storyRef} className="mt-20 md:mt-28">
					<TestimonialStory key={activeIndex} testimonial={activeTestimonial} />
				</div>

				<div className="mt-12 flex items-center gap-5 border-t border-black/15 pt-5 md:mt-16 md:gap-8">
					<button
						type="button"
						aria-label="Show previous testimonial"
						title="Previous testimonial"
						onClick={() => changeTestimonial(-1)}
						className="group flex h-9 w-9 shrink-0 items-center justify-center border border-black/20 transition-colors hover:border-[#886c46] hover:text-[#886c46]"
					>
						<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
					</button>
					<nav aria-label="Testimonials" className="flex min-w-0 flex-1 items-center gap-4 md:gap-6">
						{testimonials.map((testimonial, index) => (
							<div key={testimonial.project} className="flex flex-1 items-center gap-4 md:gap-6">
								<button
									type="button"
									aria-label={`Show testimonial ${index + 1}`}
									aria-pressed={activeIndex === index}
									onClick={() => setActiveIndex(index)}
									className={`text-[0.62rem] uppercase tracking-[0.2em] transition-colors ${activeIndex === index ? "text-[#886c46]" : "text-black/70 hover:text-black"}`}
								>
									{String(index + 1).padStart(2, "0")}
								</button>
								{index < testimonials.length - 1 && <span className="h-px flex-1 bg-black/15" />}
							</div>
						))}
					</nav>
					<button
						type="button"
						aria-label="Show next testimonial"
						title="Next testimonial"
						onClick={() => changeTestimonial(1)}
						className="group flex h-9 w-9 shrink-0 items-center justify-center border border-black/20 transition-colors hover:border-[#886c46] hover:text-[#886c46]"
					>
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
					</button>
				</div>

				<div className="mt-auto flex flex-col gap-4 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
					<p className="text-[clamp(1.8rem,3.5vw,4.5rem)] uppercase leading-[0.86] tracking-[-0.055em]">
						Built on trust.
						<br />
						Finished on site.
					</p>
					<p className="max-w-[19rem] text-[0.7rem] leading-[1.6] text-black/50 md:text-right">
						The next story starts with a conversation.
					</p>
				</div>
			</div>
		</section>
	);
}