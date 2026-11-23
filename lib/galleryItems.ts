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

export const CATEGORIES = ['All', 'Wooden Series', 'Portable Solutions', 'Prefab Solutions', 'Specialized Structures', 'Security Solutions', 'PUF Insulated']

export const SIZES = [
  { label: 'All Sizes',   value: 'all' },
  { label: 'Small',       value: 'Small',       sub: 'Up to 200 sq ft' },
  { label: 'Medium',      value: 'Medium',       sub: '200 – 500 sq ft' },
  { label: 'Large',       value: 'Large',        sub: '500 – 1000 sq ft' },
  { label: 'Extra Large', value: 'Extra Large',  sub: '1000 sq ft+' },
]

export const galleryItems: GalleryItem[] = [
  // Wooden Series
  { id: 1,  title: 'A-Frame Mountain Cabin',       category: 'Wooden Series',          size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Manali, HP',       tag: 'Residential',  image: '/siteoffice-2.webp', aspect: 'tall',   highlight: 'FSC Certified Timber' },
  { id: 2,  title: 'Arc Pod Retreat',              category: 'Wooden Series',          size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Coorg, KA',        tag: 'Hospitality',  image: '/products-hero.png', aspect: 'wide',   highlight: 'Off-Grid Ready' },
  { id: 3,  title: 'Smart Wooden House',           category: 'Wooden Series',          size: 'Large',       sqft: '500 – 1000 sq ft',  location: 'Dehradun, UK',     tag: 'Residential',  image: '/siteoffice-2.webp', aspect: 'square', highlight: 'IoT Integrated' },
  { id: 4,  title: 'Luxury Wooden Farmhouse',      category: 'Wooden Series',          size: 'Extra Large', sqft: '1000 sq ft+',       location: 'Lonavala, MH',     tag: 'Farmhouse',    image: '/products-hero.png', aspect: 'wide',   highlight: 'Custom Interiors' },

  // Portable Solutions
  { id: 5,  title: 'Executive Site Office',        category: 'Portable Solutions',     size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'Mumbai, MH',       tag: 'Site Office',  image: '/siteoffice-2.webp', aspect: 'wide',   highlight: 'Deployed in 72 hrs' },
  { id: 6,  title: 'Labour Bunk House Complex',    category: 'Portable Solutions',     size: 'Extra Large', sqft: '1000 sq ft+',       location: 'Surat, GJ',        tag: 'Accommodation',image: '/siteoffice-2.webp', aspect: 'tall',   highlight: 'Sleeps 40 Workers' },
  { id: 7,  title: 'Porta Cabin Unit',             category: 'Portable Solutions',     size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Delhi NCR',        tag: 'Portable',     image: '/products-hero.png', aspect: 'square', highlight: 'Fully Relocatable' },
  { id: 8,  title: 'Container Home Conversion',   category: 'Portable Solutions',     size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'Pune, MH',         tag: 'Residential',  image: '/siteoffice-2.webp', aspect: 'wide',   highlight: 'Repurposed Steel' },
  { id: 9,  title: 'Modular Toilet Block',         category: 'Portable Solutions',     size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Chennai, TN',      tag: 'Sanitation',   image: '/products-hero.png', aspect: 'tall',   highlight: '10-Seat Capacity' },

  // Prefab Solutions
  { id: 10, title: 'Prefab School Campus',         category: 'Prefab Solutions',       size: 'Extra Large', sqft: '1000 sq ft+',       location: 'Patna, BR',        tag: 'Education',    image: '/siteoffice-2.webp', aspect: 'wide',   highlight: '12 Classrooms' },
  { id: 11, title: 'Prefab Accommodation Block',   category: 'Prefab Solutions',       size: 'Large',       sqft: '500 – 1000 sq ft',  location: 'Hyderabad, TS',    tag: 'Accommodation',image: '/siteoffice-2.webp', aspect: 'square', highlight: 'NBC Compliant' },
  { id: 12, title: 'Prefab Site Office Complex',   category: 'Prefab Solutions',       size: 'Large',       sqft: '500 – 1000 sq ft',  location: 'Bengaluru, KA',    tag: 'Site Office',  image: '/products-hero.png', aspect: 'tall',   highlight: 'Multi-Storey' },
  { id: 13, title: 'Prefab Residential House',     category: 'Prefab Solutions',       size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'Jaipur, RJ',       tag: 'Residential',  image: '/products-hero.png', aspect: 'wide',   highlight: 'Ready in 3 Weeks' },

  // Specialized Structures
  { id: 14, title: 'Roadside Restaurant Cabin',    category: 'Specialized Structures', size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'NH-48, MH',        tag: 'Food & Bev',   image: '/siteoffice-2.webp', aspect: 'wide',   highlight: 'Full Kitchen Fit-Out' },
  { id: 15, title: 'Medical Clinic Cabin',         category: 'Specialized Structures', size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'Nagpur, MH',       tag: 'Healthcare',   image: '/products-hero.png', aspect: 'tall',   highlight: 'Sterile Interiors' },
  { id: 16, title: 'Smoking Enclosure — Hotel',    category: 'Specialized Structures', size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Goa',              tag: 'Hospitality',  image: '/siteoffice-2.webp', aspect: 'square', highlight: 'Ventilated & Branded' },
  { id: 17, title: 'Electrical Room Cabin',        category: 'Specialized Structures', size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Noida, UP',        tag: 'Industrial',   image: '/siteoffice-2.webp', aspect: 'square', highlight: 'Fire Retardant' },

  // Security Solutions
  { id: 18, title: 'Highway Toll Plaza',           category: 'Security Solutions',     size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'NH-44, TN',        tag: 'Toll / Traffic', image: '/products-hero.png', aspect: 'wide',   highlight: 'Bullet Resistant Glass' },
  { id: 19, title: 'Gated Community Guard Cabin',  category: 'Security Solutions',     size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Gurugram, HR',     tag: 'Security',     image: '/siteoffice-2.webp', aspect: 'tall',   highlight: 'Weatherproof' },
  { id: 20, title: 'ATM Enclosure Kiosk',          category: 'Security Solutions',     size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Kolkata, WB',      tag: 'Banking',      image: '/products-hero.png', aspect: 'square', highlight: 'Anti-Tamper Shell' },

  // PUF Insulated
  { id: 21, title: 'Industrial Control Room',      category: 'PUF Insulated',          size: 'Large',       sqft: '500 – 1000 sq ft',  location: 'Vizag, AP',        tag: 'Industrial',   image: '/siteoffice-2.webp', aspect: 'wide',   highlight: 'IS 875 Wind Rated' },
  { id: 22, title: 'Solar Farm Control Room',      category: 'PUF Insulated',          size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'Jodhpur, RJ',      tag: 'Renewable',    image: '/siteoffice-2.webp', aspect: 'tall',   highlight: 'Desert Rated' },
  { id: 23, title: 'Pharma Clean Room',            category: 'PUF Insulated',          size: 'Large',       sqft: '500 – 1000 sq ft',  location: 'Ahmedabad, GJ',    tag: 'Pharma',       image: '/products-hero.png', aspect: 'square', highlight: 'ISO 14644 Compliant' },
  { id: 24, title: 'Cold Storage Control Cabin',   category: 'PUF Insulated',          size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Pune, MH',         tag: 'Cold Chain',   image: '/siteoffice-2.webp', aspect: 'square', highlight: '-20°C Rated' },
]
