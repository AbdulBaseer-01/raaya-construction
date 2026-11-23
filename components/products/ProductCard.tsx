import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { productHref } from '@/lib/productCategories'
import FallbackImage from '@/components/site/FallbackImage'
import { Rule, pad } from '@/components/site/primitives'

/** Product tile, adapted from the collection cards on the Home page. */
export default function ProductCard({
  name,
  image,
  category,
  index,
}: {
  name: string
  image: string
  category: string
  index: number
}) {
  return (
    <Link
      href={productHref(name)}
      className="group flex h-full flex-col overflow-hidden border border-black/15 bg-[#f3ede3] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(49,38,25,0.12)]"
    >
      <div className="relative aspect-[1.5] overflow-hidden">
        <FallbackImage
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
        <span className="absolute left-5 top-5 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">
          {pad(index + 1)}
        </span>
        <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-white mix-blend-difference transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <Rule className="mb-5" />
        <h3 className="text-[clamp(1.6rem,2.4vw,2.6rem)] uppercase leading-[0.86] tracking-[-0.06em] [overflow-wrap:anywhere]">
          {name}
        </h3>
        <div className="mt-auto pt-6">
          <p className="flex items-center justify-between gap-4 border-t border-black/15 pt-4 text-[0.58rem] uppercase tracking-[0.2em] text-black/45">
            <span className="min-w-0 truncate">{category}</span>
            <span className="shrink-0 transition-colors group-hover:text-[#886c46]">View product</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
