import { Maximize2 } from 'lucide-react'
import type { GalleryItem } from '@/lib/galleryItems'
import FallbackImage from '@/components/site/FallbackImage'
import { Rule, pad } from '@/components/site/primitives'

/* Masonry keeps each project's intended proportion; the grid view uses one shape for a tidy scan. */
const MASONRY_ASPECT: Record<GalleryItem['aspect'], string> = {
  tall: 'aspect-[4/5]',
  wide: 'aspect-[16/10]',
  square: 'aspect-square',
}

export type GalleryLayout = 'masonry' | 'grid'

/** Project tile in the Home collection-card style; opens the project viewer. */
export default function GalleryCard({
  item,
  index,
  layout,
  onOpen,
}: {
  item: GalleryItem
  index: number
  layout: GalleryLayout
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${item.title}`}
      className="group flex h-full w-full flex-col overflow-hidden border border-black/15 bg-[#f3ede3] text-left transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(49,38,25,0.12)] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]"
    >
      <div className={`relative w-full overflow-hidden ${layout === 'masonry' ? MASONRY_ASPECT[item.aspect] : 'aspect-[4/3]'}`}>
        <FallbackImage
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">{pad(index + 1)}</span>
        <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border border-black/10 bg-white text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>

      <div className="flex w-full flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4 text-[0.55rem] uppercase tracking-[0.2em] text-black/45">
          <span className="min-w-0 truncate">{item.tag}</span>
          <span className="shrink-0">{item.size}</span>
        </div>
        <Rule className="mb-5 mt-1" />
        <span className="text-[clamp(1.45rem,1.9vw,2.1rem)] uppercase leading-[0.88] tracking-[-0.06em] transition-colors duration-300 group-hover:text-[#886c46] [overflow-wrap:anywhere]">
          {item.title}
        </span>
        {item.highlight && <span className="mt-4 text-[0.78rem] text-[#886c46]">{item.highlight}</span>}
        <span className="mt-auto pt-5">
          <span className="flex items-center justify-between gap-4 border-t border-black/15 pt-4 text-[0.58rem] uppercase tracking-[0.2em] text-black/45">
            <span className="min-w-0 truncate">{item.location}</span>
            <span className="shrink-0">{item.sqft}</span>
          </span>
        </span>
      </div>
    </button>
  )
}
