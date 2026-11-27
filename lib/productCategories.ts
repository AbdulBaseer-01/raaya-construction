/**
 * The eight product categories, shared by the menu, the footer, /products and the
 * category routes (/products/homes, ...). Product detail data lives in productsData.ts;
 * product names here must match the `name` there.
 */

export interface CategoryProduct {
  name: string;
  image: string;
}

export interface ProductCategory {
  name: string;
  slug: string;
  cover: string;
  description: string;
  longDescription: string;
  products: CategoryProduct[];
}

export const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Product pages live at lowercase, hyphenated slugs (old /products/<Name> URLs redirect). */
export const productHref = (name: string) => `/products/${toSlug(name)}`;

const categories: Omit<ProductCategory, "slug">[] = [
  {
    name: "Homes",
    cover: "/products/portable/farmhouse/farmhouse-night-1.jpg",
    description: "Container homes and prefab farmhouses, designed for comfortable everyday living",
    longDescription:
      "Our homes bring the precision of factory construction to the places you live. Container homes turn robust steel modules into bright, insulated living spaces, while prefab farmhouses give rural plots a finished, low-maintenance home that is built off-site and installed with minimal disruption. Every layout, finish and interior is shaped around your family and your land.",
    products: [
      { name: "Container Homes", image: "/products/portable/container/main.webp" },
      { name: "Prefab Farmhouses", image: "/products/portable/farmhouse/farmhouse-night-1.jpg" },
    ],
  },
  {
    name: "Offices",
    cover: "/products/prefab/site-office/images/image20.jpg",
    description: "Container, site and marketing offices that are ready to work in from day one",
    longDescription:
      "From a single container office to a G+1 marketing office, our office range gives teams a professional workspace without the wait of conventional construction. Each office arrives with insulation, electrical fittings and interiors in place, and can be expanded, reconfigured or relocated as your project moves on.",
    products: [
      { name: "Container Offices", image: "/products/portable/office/main.webp" },
      { name: "Prefab Site Offices", image: "/products/prefab/site-office/main.webp" },
      { name: "Marketing Offices", image: "/products/prefab/site-office/images/image20.jpg" },
    ],
  },
  {
    name: "Resorts & Getaways",
    cover: "/products/woodenseries/aframe/a-frame-hero.webp",
    description: "A-frame homes, pods and wooden retreats for resorts, farm stays and weekend escapes",
    longDescription:
      "Designed for places people travel to, our resort and getaway range pairs striking architecture with the speed of prefabrication. A-frame homes, arc pods, prefab wooden homes and smart homes are built in our factory and installed on site, giving hospitality projects and private retreats a finished, characterful stay with minimal on-site work.",
    products: [
      { name: "A-Frame Homes", image: "/products/woodenseries/aframe/a-frame-hero-img.png" },
      { name: "Arc Pods", image: "/products/woodenseries/arcpod/arc-pod-main.webp" },
      { name: "Prefab Wooden Homes", image: "/products/woodenseries/wooden/wooden-house-main.webp" },
      { name: "Smart Homes", image: "/products/woodenseries/smart/main.png" },
    ],
  },
  {
    name: "Worker Accommodation & Site Welfare",
    cover: "/products/prefab/accomodation/main.webp",
    description: "Labour accommodation, bunk houses and toilet cabins for safe, hygienic project sites",
    longDescription:
      "Good site welfare keeps projects moving. Our labour accommodation and bunk houses give crews clean, ventilated living space, and our toilet cabins, in portable, mobile and modular versions, provide hygienic sanitation close to the work. Units are built to handle daily heavy use and can be moved to your next site when the project is complete.",
    products: [
      { name: "Labour Accommodation", image: "/products/prefab/accomodation/main.webp" },
      { name: "Bunk Houses", image: "/products/portable/bunkhouse/main.webp" },
      { name: "Toilet Cabins", image: "/products/portable/modular-toilet/modular-toilet.png" },
    ],
  },
  {
    name: "Security & Gate Cabins",
    cover: "/products/security/security-cabin/security-cabin-ai.png",
    description: "Security cabins in MS, ACP and PUF, plus toll booths and ATM cabins",
    longDescription:
      "Our security and gate cabins are built for the people who work in them all day. Security cabins come in mild-steel, ACP and PUF-insulated versions to suit the site and climate, while toll booths and ATM cabins are designed for continuous public use. Each unit is weather-resistant, well ventilated and ready for electrical and communication fittings.",
    products: [
      { name: "Security Cabins", image: "/products/security/security-cabin/security-cabin-ai.png" },
      { name: "Toll Booths", image: "/products/security/toll-booth/toll.png" },
      { name: "ATM Cabins", image: "/products/security/atm/atm.png" },
    ],
  },
  {
    name: "Clinics, Schools & Public Cabins",
    cover: "/products/special/clinic/main.webp",
    description: "Clinics, prefab schools, restaurant cabins and smoking rooms for public-facing spaces",
    longDescription:
      "Spaces that serve the public need to be clean, comfortable and dependable. Our clinics and health centres, prefab schools, restaurant cabins and smoking rooms are planned around how people use them, with the right ventilation, finishes and fittings for each purpose, and are built off-site so they can open sooner.",
    products: [
      { name: "Clinics & Health Centres", image: "/products/special/clinic/main.webp" },
      { name: "Prefab Schools", image: "/products/prefab/school/main.webp" },
      { name: "Restaurant Cabins", image: "/products/special/restaurant/main.webp" },
      { name: "Smoking Rooms", image: "/products/special/smoking/main.webp" },
    ],
  },
  {
    name: "Electrical, Control & Industrial Rooms",
    cover: "/products/puf/control/main.webp",
    description: "Electrical rooms, control rooms and solar control rooms for critical equipment",
    longDescription:
      "Critical equipment needs a controlled, protected environment. Our electrical rooms, control rooms and solar control rooms use insulated panel construction to keep interiors stable, with provision for cabling, cooling and equipment layouts planned to your specification. They are built in our factory and installed ready for commissioning.",
    products: [
      { name: "Electrical Rooms", image: "/products/special/electric/main-1.webp" },
      { name: "Control Rooms", image: "/products/puf/control/main.webp" },
      { name: "Solar Control Rooms", image: "/products/puf/solar-room/main.webp" },
    ],
  },
  {
    name: "Pre-Engineered Buildings",
    cover: "/products/prefab/structures/images/image2.png",
    description: "Steel pre-engineered buildings for warehouses, factories and large-span spaces",
    longDescription:
      "Pre-engineered buildings deliver large, column-free spaces quickly. Steel frames are designed for your span, height and loads, fabricated off-site and erected on prepared foundations, giving warehouses, factories and industrial sheds a durable structure with far less time on site than conventional construction.",
    products: [{ name: "Pre-Engineered Buildings", image: "/products/prefab/structures/main.webp" }],
  },
];

export const productCategories: ProductCategory[] = categories.map((category) => ({
  ...category,
  slug: toSlug(category.name),
}));

/**
 * The six collections the site used before the restructure. Their URLs (still
 * linked from the Home page's "The Collection" cards) redirect to the closest new category.
 */
export const LEGACY_CATEGORY_SLUGS: Record<string, string> = {
  "wooden-series": "resorts-getaways",
  "portable-solutions": "worker-accommodation-site-welfare",
  "prefab-solutions": "offices",
  "specialized-structures": "clinics-schools-public-cabins",
  "security-solutions": "security-gate-cabins",
  "puf-insulated-cabin": "electrical-control-industrial-rooms",
};

export const getCategoryBySlug = (slug: string) =>
  productCategories.find((category) => category.slug === slug);

export const getCategoryByName = (name: string) =>
  productCategories.find((category) => category.name === name);

export const totalProductCount = productCategories.reduce(
  (sum, category) => sum + category.products.length,
  0,
);
