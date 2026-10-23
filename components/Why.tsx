// import Image from 'next/image'
// import Link from 'next/link'
// import { ArrowUpRight } from 'lucide-react'

// const reasons = [
// 	{
// 		number: '01',
// 		title: 'Rapid installation',
// 		description: 'Factory-built structures installed on-site in weeks, not months.',
// 		image: '/products/prefab/house/main.webp',
// 		label: 'Built off-site / finished on-site',
// 	},
// 	{
// 		number: '02',
// 		title: 'Custom designs',
// 		description: 'Tailored layouts, finishes, colors, and interiors shaped around the way you work or live.',
// 		image: '/products/portable/farmhouse/farmhouse-white-ai.png',
// 		label: 'Made to fit your brief',
// 	},
// 	{
// 		number: '03',
// 		title: 'Plug & play',
// 		description: 'Electrical, plumbing, and interiors are coordinated and ready when your space arrives.',
// 		image: '/products/puf/control/main.webp',
// 		label: 'Ready from day one',
// 	},
// 	{
// 		number: '04',
// 		title: 'Relocatable & scalable',
// 		description: 'Expand, relocate, or reconfigure your structure as your needs grow and change.',
// 		image: '/products/portable/container/main.webp',
// 		label: 'Designed for what is next',
// 	},
// ]

// export default function Why() {
// 	return (
// 			<section className="overflow-hidden bg-white text-black">
// 				<div className="mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-[0.8fr_1.2fr]">
// 					<div className="self-start md:sticky md:top-0 md:h-screen">
// 						<div className="flex h-full flex-col justify-center px-6 py-24 sm:px-10 md:px-[5vw] md:py-16">
// 							<p className="mb-10 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-black/50">
// 								<span className="h-px w-10 bg-[#886c46]" />
// 								Why prefab / 02
// 							</p>
// 							<h2 className="max-w-[34rem] text-[clamp(3.4rem,6.7vw,8rem)] uppercase leading-[0.78] tracking-[-0.075em]">
// 								<span className="block">The case</span>
// 								<span className="ml-[10vw] block text-[#886c46]">for better</span>
// 								<span className="ml-[5vw] block">building.</span>
// 							</h2>
// 							<p className="mt-10 max-w-[21rem] text-[0.82rem] leading-[1.8] text-black/55 md:ml-[10%]">
// 								Not just faster. A smarter way to make space, built around how you plan to use it.
// 							</p>
// 							<div className="mt-14 hidden border-t border-black/15 pt-5 md:ml-[10%] md:flex md:max-w-[19rem] md:items-center md:justify-between">
// 								<span className="text-[0.58rem] uppercase tracking-[0.2em] text-black/45">Scroll to explore</span>
// 								<span className="h-8 w-px bg-[#886c46]" />
// 								<span className="text-[0.58rem] uppercase tracking-[0.2em] text-black/45">04 reasons</span>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="px-6 pb-24 sm:px-10 md:px-8 md:py-24">
// 						<div className="grid gap-5">
// 							{reasons.map((reason) => (
// 								<article key={reason.number} className="group overflow-hidden bg-[#f3ede3]">
// 									<div className="relative aspect-[1.8] overflow-hidden">
// 										<Image
// 											src={reason.image}
// 											alt={`${reason.title} prefab construction`}
// 											fill
// 											sizes="(min-width: 768px) 40vw, 100vw"
// 											className="object-cover transition duration-700 ease-out group-hover:scale-105"
// 										/>
// 										<span className="absolute left-5 top-5 text-[0.58rem] uppercase tracking-[0.22em] text-white mix-blend-difference">
// 											Why / {reason.number}
// 										</span>
// 									</div>
// 									<div className="p-6 sm:p-8">
// 										<div className="mb-5 h-px w-12 bg-[#886c46] transition-all duration-500 group-hover:w-20" />
// 										<div className="flex items-start justify-between gap-6">
// 											<h3 className="max-w-[24rem] text-[clamp(2.3rem,4.2vw,5rem)] uppercase leading-[0.8] tracking-[-0.07em] transition-colors duration-300 group-hover:text-[#886c46]">
// 												{reason.title}
// 											</h3>
// 											<ArrowUpRight className="h-5 w-5 shrink-0 text-[#886c46]" />
// 										</div>
// 										<div className="mt-6 grid grid-cols-[minmax(4rem,0.7fr)_minmax(0,1.4fr)] border-t border-black/70 pt-5">
// 											<span className="text-[0.85rem]">{reason.number}</span>
// 											<p className="border-l border-black/70 pl-5 text-[0.85rem] leading-[1.5] text-black/65">
// 												{reason.description}
// 											</p>
// 										</div>
// 										<p className="mt-5 text-[0.58rem] uppercase tracking-[0.2em] text-black/45">{reason.label}</p>
// 									</div>
// 								</article>
// 							))}
// 						</div>
// 						<div className="mt-8 flex items-center justify-between border-t border-black/15 pt-5 text-[0.62rem] uppercase tracking-[0.2em] text-black/60">
// 							<span>Built around your needs</span>
// 							<Link href="/#our-process" className="group flex items-center gap-3 transition-colors hover:text-[#886c46]">
// 								See how we build
// 								<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 	)
// }


import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const reasons = [
	{
		number: '01',
		title: 'Rapid installation',
		description: 'Factory-built structures installed on-site in weeks, not months.',
		image: '/products/prefab/house/main.webp',
		label: 'Built off-site / finished on-site',
	},
	{
		number: '02',
		title: 'Custom designs',
		description: 'Tailored layouts, finishes, colors, and interiors shaped around the way you work or live.',
		image: '/products/portable/farmhouse/farmhouse-white-ai.png',
		label: 'Made to fit your brief',
	},
	{
		number: '03',
		title: 'Plug & play',
		description: 'Electrical, plumbing, and interiors are coordinated and ready when your space arrives.',
		image: '/products/puf/control/main.webp',
		label: 'Ready from day one',
	},
	{
		number: '04',
		title: 'Relocatable & scalable',
		description: 'Expand, relocate, or reconfigure your structure as your needs grow and change.',
		image: '/products/portable/container/main.webp',
		label: 'Designed for what is next',
	},
]

export default function Why() {
	return (
		// overflow-hidden was creating a scroll container and breaking position: sticky.
		// overflow-clip clips the same way without becoming a scroll container.
		<section className="overflow-clip bg-white text-black">
			<div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start md:grid-cols-[0.8fr_1.2fr]">
				<div className="self-start md:sticky md:top-0 md:h-screen">
					<div className="flex h-full flex-col justify-center px-6 py-24 sm:px-10 md:px-[5vw] md:py-16">
						<p className="mb-10 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-black/50">
							<span className="h-px w-10 bg-[#886c46]" />
							Why prefab / 02
						</p>
						<h2 className="max-w-[34rem] text-[clamp(3.4rem,6.7vw,8rem)] uppercase leading-[0.78] tracking-[-0.075em]">
							<span className="block">The case</span>
							<span className="ml-[10vw] block text-[#886c46]">for better</span>
							<span className="ml-[5vw] block">building.</span>
						</h2>
						<p className="mt-10 max-w-[21rem] text-[0.82rem] leading-[1.8] text-black/55 md:ml-[10%]">
							Not just faster. A smarter way to make space, built around how you plan to use it.
						</p>
						<div className="mt-14 hidden border-t border-black/15 pt-5 md:ml-[10%] md:flex md:max-w-[19rem] md:items-center md:justify-between">
							<span className="text-[0.58rem] uppercase tracking-[0.2em] text-black/45">Scroll to explore</span>
							<span className="h-8 w-px bg-[#886c46]" />
							<span className="text-[0.58rem] uppercase tracking-[0.2em] text-black/45">04 reasons</span>
						</div>
					</div>
				</div>

				<div className="px-6 pb-24 sm:px-10 md:px-8 md:py-24">
					<div className="grid gap-5">
						{reasons.map((reason) => (
							<article key={reason.number} className="group overflow-hidden bg-[#f3ede3]">
								<div className="relative aspect-[1.8] overflow-hidden">
									<Image
										src={reason.image}
										alt={`${reason.title} prefab construction`}
										fill
										sizes="(min-width: 768px) 40vw, 100vw"
										className="object-cover transition duration-700 ease-out group-hover:scale-105"
									/>
									<span className="absolute left-5 top-5 text-[0.58rem] uppercase tracking-[0.22em] text-white mix-blend-difference">
										Why / {reason.number}
									</span>
								</div>
								<div className="p-6 sm:p-8">
									<div className="mb-5 h-px w-12 bg-[#886c46] transition-all duration-500 group-hover:w-20" />
									<div className="flex items-start justify-between gap-6">
										<h3 className="max-w-[24rem] text-[clamp(2.3rem,4.2vw,5rem)] uppercase leading-[0.8] tracking-[-0.07em] transition-colors duration-300 group-hover:text-[#886c46]">
											{reason.title}
										</h3>
										<ArrowUpRight className="h-5 w-5 shrink-0 text-[#886c46]" />
									</div>
									<div className="mt-6 grid grid-cols-[minmax(4rem,0.7fr)_minmax(0,1.4fr)] border-t border-black/70 pt-5">
										<span className="text-[0.85rem]">{reason.number}</span>
										<p className="border-l border-black/70 pl-5 text-[0.85rem] leading-[1.5] text-black/65">
											{reason.description}
										</p>
									</div>
									<p className="mt-5 text-[0.58rem] uppercase tracking-[0.2em] text-black/45">{reason.label}</p>
								</div>
							</article>
						))}
					</div>
					<div className="mt-8 flex items-center justify-between border-t border-black/15 pt-5 text-[0.62rem] uppercase tracking-[0.2em] text-black/60">
						<span>Built around your needs</span>
						<Link href="/#our-process" className="group flex items-center gap-3 transition-colors hover:text-[#886c46]">
							See how we build
							<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}