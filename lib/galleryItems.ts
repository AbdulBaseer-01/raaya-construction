/* Inspiration Gallery content, moved verbatim from app/inspiration-gallery/page.tsx. */

export interface GalleryItem {
  id: number
  title: string
  category: string
  size: string          // e.g. 'Small', 'Medium', 'Large', 'Extra Large'
  sqft: string          // display label e.g. 'Up to 200 sq ft'
  location: string
  tag: string           // short use-case badge
  image: string
  aspect: 'tall' | 'wide' | 'square'   // drives masonry spanning
  highlight?: string    // one-line callout
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const CATEGORIES = ['All', 'Wooden Series', 'Portable Solutions', 'Prefab Solutions', 'Specialized Structures', 'Security Solutions', 'PUF Insulated Cabins']

export const SIZES = [
  { label: 'All Sizes',   value: 'all' },
  { label: 'Small',       value: 'Small',       sub: 'Up to 200 sq ft' },
  { label: 'Medium',      value: 'Medium',       sub: '200 – 500 sq ft' },
  { label: 'Large',       value: 'Large',        sub: '500 – 1000 sq ft' },
  { label: 'Extra Large', value: 'Extra Large',  sub: '1000 sq ft+' },
]

/*
 * The 24 template projects were removed (brief, section 19): they were
 * placeholders presented as "Real projects · Real sites".
 *
 * TODO(Texo): add 9–12 real projects, only with each client's permission to be named:
 *   { id, title: '<client or project name>', category: '<one of CATEGORIES>',
 *     size: 'Small' | 'Medium' | 'Large' | 'Extra Large', sqft: '<band label>',
 *     location: '<CITY, STATE>', tag: '<use case, e.g. Site office>',
 *     image: '<real project photo>', aspect: 'tall' | 'wide' | 'square',
 *     highlight: '<one true detail, e.g. "G+1, glass façade">' }
 *   Suggested first projects from the brief: SRIAS Developers marketing office
 *   (IDL Kukatpally), Raghava Halo marketing office, Ramky Estates site office,
 *   Godrej Properties site office (Kukatpally).
 */
export const galleryItems: GalleryItem[] = []
