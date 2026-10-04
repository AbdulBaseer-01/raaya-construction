import Image from 'next/image'
import Link from 'next/link'

const productCategories = [
	{
		label: 'Wooden Series',
		slug: 'wooden-series',
		image: '/products/woodenseries/wooden/wooden-house-main.webp',
		items: ['A-Frame Cabin', 'Arc Pod', 'Wooden House', 'Smart House'],
	},
	{
		label: 'Portable Solutions',
		slug: 'portable-solutions',
		image: '/products/portable/porta-cabin/main.webp',
		items: ['Porta Cabin', 'Farmhouse', 'Portable Office', 'Bunk House Cabin', 'Containers House', 'Modular Toilet', 'Mobile Toilet', 'Portable Toilet Cabin'],
	},
	{
		label: 'Prefab Solutions',
		slug: 'prefab-solutions',
		image: '/products/prefab/structures/main.webp',
		items: ['Prefab Site Offices', 'Prefab Structures', 'Prefabricated Accommodation', 'Prefab House', 'Prefab Cottages', 'IOT Pods', 'Prefab Schools'],
	},
	{
		label: 'Specialized Structures',
		slug: 'specialized-structures',
		image: '/products/special/clinic/main.webp',
		items: ['Clinic Cabin', 'Restaurant Cabin', 'Smoking Room', 'Electrical Room'],
	},
	{
		label: 'Security Solutions',
		slug: 'security-solutions',
		image: '/products/security/security-cabin/security-cabin-ai.png',
		items: ['Security Cabins', 'Toll Booth', 'ATM Cabin'],
	},
	{
		label: 'PUF Insulated Cabin',
		slug: 'puf-insulated-cabin',
		image: '/products/puf/control/main.webp',
		items: ['Control Room', 'Solar Control Room', 'Clean Room'],
	},
]

const cardLayout = [
	'md:col-span-7 md:aspect-[1.45/1]',
	'md:col-span-5 md:aspect-[1/1.1]',
	'md:col-span-5 md:aspect-[1/1.05]',
	'md:col-span-7 md:aspect-[1.55/1]',
	'md:col-span-6 md:aspect-[1.2/1]',
	'md:col-span-6 md:aspect-[1.2/1]',
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

				<div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
					{productCategories.map((category, index) => (
						<Link
							key={category.slug}
							href={`/products/${category.slug}`}
							className={`group relative block min-h-[26rem] overflow-hidden bg-black md:min-h-0 ${cardLayout[index]}`}
						>
							<Image
								src={category.image}
								alt={`${category.label} collection`}
								fill
								sizes="(min-width: 768px) 50vw, 100vw"
								className="object-cover opacity-85 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
							/>
							<div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />

							<div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
								<div className="mb-5 flex items-center justify-between text-[0.58rem] uppercase tracking-[0.25em] text-white/70">
									<span>{String(index + 1).padStart(2, '0')}</span>
									<span>{category.items.length} products</span>
								</div>

								<div className="flex items-end justify-between gap-5">
									<div>
										<h3 className="max-w-[22rem] text-[clamp(1.5rem,3vw,3.5rem)] uppercase leading-[0.9] tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-2">
											{category.label}
										</h3>
										<p className="mt-4 max-w-[24rem] text-[0.62rem] uppercase tracking-[0.12em] text-white/60">
											{category.items.slice(0, 3).join(' / ')}
											{category.items.length > 3 ? ` / +${category.items.length - 3}` : ''}
										</p>
									</div>

									<span className="shrink-0 border-b border-white/50 pb-1 text-[0.58rem] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:border-[#886c46] group-hover:text-[#d8bd93]">
										Explore <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
									</span>
								</div>
							</div>

							<span className="absolute left-6 top-6 h-px w-0 bg-[#886c46] transition-all duration-500 group-hover:w-16 md:left-8 md:top-8" />
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
