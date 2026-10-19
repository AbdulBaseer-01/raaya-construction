import Image from 'next/image'
import Link from 'next/link'

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
		<section className="w-full bg-[#ffffff] text-black">
			<div className="mx-auto max-w-[1600px] px-[5vw] pb-24 pt-28 md:pb-36 md:pt-40">
				<div className="mb-16 grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end md:gap-16">
					<div className="md:col-start-2 md:row-start-1">
						<p className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[#886c46]">
							<span className="h-px w-10 bg-[#886c46]" />
							The collection / 03
						</p>
					</div>

					<div className="max-w-[48rem] md:col-start-1 md:row-start-1">
						<h2 className="text-[clamp(2.8rem,6.5vw,8rem)] uppercase leading-[0.82] tracking-[-0.065em] ">
                            <span className="block">Built for</span>
                            <span className="ml-0 md:ml-[15%] block">different</span>
                            <span className="ml-0 md:ml-[6%] block">needs.</span>
                        </h2>
						<p className="mt-8 max-w-[28rem] text-[0.85rem] leading-[1.7] text-black/60 md:ml-[12%]">
							Explore modular spaces designed for different environments,
							applications and ways of living.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{featuredProducts.map((product, index) => (
						<Link
							key={product.name}
							href={`/products/${product.slug}`}
							className="group overflow-hidden rounded-[1.5rem] border border-[#a17c4e] bg-white shadow-[0_12px_35px_rgba(61,43,24,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(61,43,24,0.16)]"
						>
							<div className="relative aspect-[1.25/0.95] overflow-hidden bg-[#e8e2d8]">
								<Image
									src={product.image}
									alt={product.name}
									fill
									sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
									className="object-cover transition duration-700 ease-out group-hover:scale-105"
								/>
								{index === 0 && (
									<span className="absolute right-4 top-4 rounded-full bg-[#8b6b43] px-4 py-2 text-[0.68rem] font-medium tracking-[0.04em] text-white shadow-lg">
										Most Popular
									</span>
								)}
								<span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1.5 text-[0.55rem] uppercase tracking-[0.16em] text-[#765a39] backdrop-blur-sm">
									Featured category
								</span>
							</div>

							<div className="p-7 md:p-8">
								<h3 className="font-serif text-[clamp(1.7rem,2.5vw,2.35rem)] leading-none tracking-[-0.035em] text-[#171716]">
									{product.name}
								</h3>
								<ul className="mt-6 space-y-3.5 text-[0.98rem] text-black/65">
									{product.features.map((feature) => (
										<li key={feature} className="flex items-center gap-4">
											<span className="text-lg leading-none text-[#9a7748]" aria-hidden="true">✓</span>
											<span>{feature}</span>
										</li>
									))}
								</ul>
								<div className="my-7 h-px w-3/4 bg-[#b99a70]" />
								<span className="block rounded-xl bg-[#8b6b43] px-4 py-3 text-center font-serif text-[1.1rem] text-white transition-colors duration-300 group-hover:bg-[#6f5232]">
									View Details
									<span className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
								</span>
							</div>
						</Link>
					))}
				</div>

				<div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-black/15 pt-8 md:flex-row md:items-end">
					<div>
						<p className="text-[clamp(2rem,4vw,5rem)] uppercase leading-[0.86] tracking-[-0.055em]">
							35 products.
							<br />
							6 categories.
						</p>
					</div>
					<Link href="/products" className="group border-b border-black/30 pb-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors hover:border-[#886c46] hover:text-[#886c46]">
						Explore the full collection <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
					</Link>
				</div>
			</div>
		</section>
	)
}
