import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const featuredProducts = [
	{
		name: 'Wooden Series',
		slug: 'wooden-series',
		image: '/products/woodenseries/aframe/a-frame-hero.webp',
		features: ['A-Frame Cabin', 'Arc Pod', 'Wooden House'],
	},
	{
		name: 'Portable Solutions',
		slug: 'portable-solutions',
		image: '/products/portable/porta-cabin/main.webp',
		features: ['Porta Cabin', 'Farmhouse', 'Portable Office'],
	},
	{
		name: 'Prefab Solutions',
		slug: 'prefab-solutions',
		image: '/products/prefab/structures/main.webp',
		features: ['Site Offices', 'Prefab Houses', 'Prefab Cottages'],
	},
	{
		name: 'Specialized Structures',
		slug: 'specialized-structures',
		image: '/products/special/clinic/main.webp',
		features: ['Clinic Cabin', 'Restaurant Cabin', 'Electrical Room'],
	},
	{
		name: 'Security Solutions',
		slug: 'security-solutions',
		image: '/products/security/security-cabin/security-cabin-ai.png',
		features: ['Security Cabins', 'Toll Booths', 'ATM Cabins'],
	},
	{
		name: 'PUF Insulated Cabins',
		slug: 'puf-insulated-cabin',
		image: '/products/puf/control/main.webp',
		features: ['Control Rooms', 'Solar Control Rooms', 'Clean Rooms'],
	},
]

export default function Products() {
	return (
		<section className="w-full overflow-hidden bg-[#ffffff] text-black">
			<div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 md:px-[5vw] md:py-36">
				<div className="mb-16 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
					<div>
						<p className="mb-8 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[#b3976d]">
							<span className="h-px w-10 bg-[#b3976d]" />
							The collection / 03
						</p>
						<h2 className="max-w-[48rem] text-[clamp(3.2rem,7.5vw,8.5rem)] uppercase leading-[0.78] tracking-[-0.075em]">
							<span className="block">Built for</span>
							<span className="ml-[10vw] block text-[#b3976d]">different</span>
							<span className="ml-[4vw] block">needs.</span>
						</h2>
					</div>
					<div className="md:pb-2">
						<p className="max-w-[23rem] text-[0.82rem] leading-[1.8] text-black/85">
							Modular spaces with a point of view. Explore six collections designed to adapt, endure and belong wherever they land.
						</p>
						<p className="mt-8 text-[0.58rem] uppercase tracking-[0.22em] text-black/75">
							35 products / 06 categories
						</p>
					</div>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{featuredProducts.map((product, index) => (
						<Link
							key={product.name}
							href={`/products/${product.slug}`}
							className="group overflow-hidden border border-black/15 bg-[#f3ede3] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(49,38,25,0.12)]"
						>
							<div className="relative aspect-[1.5] overflow-hidden">
								<Image
									src={product.image}
									alt={product.name}
									fill
									sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
									className="object-cover transition duration-700 ease-out group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
								<span className="absolute left-5 top-5 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">
									{String(index + 1).padStart(2, '0')}
								</span>
								<ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-white mix-blend-difference transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
							</div>

							<div className="p-6 sm:p-7 md:p-8">
								<div className="mb-5 h-px w-12 bg-[#886c46] transition-all duration-500 group-hover:w-20" />
								<h3 className="max-w-[23rem] text-[clamp(2rem,3.5vw,4rem)] uppercase leading-[0.82] tracking-[-0.07em]">
									{product.name}
								</h3>
								<p className="mt-6 max-w-[22rem] text-[0.62rem] uppercase tracking-[0.18em] text-black/55">
									{product.features.join('  /  ')}
								</p>
								<p className="mt-6 border-t border-black/15 pt-4 text-[0.58rem] uppercase tracking-[0.2em] text-black/45">
									Explore collection
								</p>
							</div>
						</Link>
					))}
				</div>

				<div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-black/15 pt-6 sm:flex-row sm:items-center">
					<p className="max-w-[22rem] text-[0.7rem] leading-[1.6] text-black/50">
						From a quiet retreat to a high-performance worksite, there is a better way to build.
					</p>
					<Link href="/products" className="group flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em] text-black/75 transition-colors hover:text-[#b3976d]">
						Explore the full collection
						<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
					</Link>
				</div>
			</div>
		</section>
	)
}
