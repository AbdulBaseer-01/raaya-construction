/**
 * Product collections shown on /products and on the category routes
 * (/products/wooden-series, ...). Product detail data lives in productsData.ts.
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

export const productHref = (name: string) => `/products/${encodeURIComponent(name)}`;

const categories: Omit<ProductCategory, "slug">[] = [
  {
    name: "Wooden Series",
    cover: "/products/woodenseries/aframe/a-frame-hero.webp",
    description: "Luxury modular wooden structures blending elegance with sustainability",
    longDescription:
      "Our Wooden Series represents the finest in sustainable modular architecture. Each structure is crafted from responsibly sourced timber, precision-engineered for structural integrity while preserving the warmth and character of natural wood. Whether nestled in a forest retreat or set against an urban backdrop, these cabins deliver a living experience that is both timeless and contemporary — marrying the craftsmanship of traditional joinery with the efficiency of modern prefabrication.",
    products: [
      { name: "A-Frame Cabin", image: "/products/woodenseries/aframe/a-frame-hero-img.png" },
      { name: "Arc Pod", image: "/products/woodenseries/arcpod/arc-pod-main.webp" },
      { name: "Wooden House", image: "/products/woodenseries/wooden/wooden-house-main.webp" },
      { name: "Smart House", image: "/products/woodenseries/smart/main.png" },
    ],
  },
  {
    name: "Portable Solutions",
    cover: "/products/portable/porta-cabin/main.webp",
    description: "Quick deployment solutions for construction sites and temporary facilities",
    longDescription:
      "Designed for speed without sacrifice, our Portable Solutions are engineered to be operational within hours of delivery. Each unit is built to withstand demanding site conditions, offering weatherproof shells, thermal insulation, and modular interior configurations. From single-room site offices to multi-unit bunkhouse complexes, this series gives project managers a dependable, cost-effective answer to temporary accommodation and operational space.",
    products: [
      { name: "Porta Cabin", image: "/products/portable/porta-cabin/main.webp" },
      { name: "Farmhouse", image: "/products/portable/farmhouse/farmhouse-night-1.jpg" },
      { name: "Portable Office", image: "/products/portable/office/main.webp" },
      { name: "Bunk House Cabin", image: "/products/portable/bunkhouse/main.webp" },
      { name: "Containers House", image: "/products/portable/container/main.webp" },
      { name: "Modular Toilet", image: "/products/portable/modular-toilet/modular-toilet.png" },
      { name: "Mobile Toilet", image: "/products/portable/mobile-toilet/mobile-main.webp" },
      { name: "Portable Toilet Cabin", image: "/products/portable/portable-toilet/pt-2.jpg" },
    ],
  },
  {
    name: "Prefab Solutions",
    cover: "/products/prefab/structures/main.webp",
    description: "Complete prefabricated structures for residential and commercial use",
    longDescription:
      "Our Prefab Solutions combine factory precision with on-site flexibility. Every component is manufactured under controlled conditions, ensuring consistent quality and dramatically reduced construction timelines. The result is a permanent-grade structure — complete with plumbing, electrical, and finishing options — delivered at a fraction of the time and cost of conventional builds. Ideal for schools, housing colonies, offices, and beyond.",
    products: [
      { name: "Prefab Site Offices", image: "/products/prefab/site-office/main.webp" },
      { name: "Prefab Structures", image: "/products/prefab/structures/main.webp" },
      { name: "Prefabricated Accommodation", image: "/products/prefab/accomodation/main.webp" },
      { name: "Prefab House", image: "/products/prefab/house/main.webp" },
      { name: "Prefab Cottages", image: "/products/prefab/cottage/images/image1.png" },
      { name: "IOT Pods", image: "/products/prefab/iot-pod/ext-1.png" },
      { name: "Prefab Schools", image: "/products/prefab/school/main.webp" },
    ],
  },
  {
    name: "Specialized Structures",
    cover: "/products/special/clinic/main.webp",
    description: "Custom-designed facilities for specific commercial applications",
    longDescription:
      "Not every need fits a standard template. Our Specialized Structures are purpose-engineered for specific commercial environments — from hygienic clinical cabins and hospitality-ready restaurant units to controlled smoking enclosures and dedicated electrical rooms. Each structure meets the technical and regulatory requirements of its use-case, delivered with the same build quality and speed that defines all of our product lines.",
    products: [
      { name: "Clinic Cabin", image: "/products/special/clinic/main.webp" },
      { name: "Restaurant Cabin", image: "/products/special/restaurant/main.webp" },
      { name: "Smoking Room", image: "/products/special/smoking/main.webp" },
      { name: "Electrical Room", image: "/products/special/electric/main-1.webp" },
    ],
  },
  {
    name: "Security Solutions",
    cover: "/products/security/security-cabin/security-cabin-ai.png",
    description: "Purpose-built security and monitoring structures",
    longDescription:
      "Security infrastructure demands reliability above all else. Our Security Solutions series delivers robust, tamper-resistant structures designed for round-the-clock operation in exposed environments. From manned guard posts at facility perimeters to revenue-collecting toll booths and weather-protected ATM enclosures, every unit is built with reinforced panels, secure access points, and climate control options to keep personnel and equipment safe.",
    products: [
      { name: "Security Cabins", image: "/products/security/security-cabin/security-cabin-ai.png" },
      { name: "Toll Booth", image: "/products/security/toll-booth/toll.png" },
      { name: "ATM Cabin", image: "/products/security/atm/atm.png" },
    ],
  },
  {
    name: "PUF Insulated Cabin",
    cover: "/products/puf/control/main.webp",
    description: "Thermally efficient insulated cabins for extreme conditions",
    longDescription:
      "Where temperature control is non-negotiable, our PUF Insulated Cabin series excels. Polyurethane foam core panels provide industry-leading thermal resistance, keeping interiors stable regardless of external climate extremes. These structures are the first choice for control rooms, solar monitoring stations, and clean-room environments where temperature variance, dust ingress, and humidity must be precisely managed throughout the operational lifecycle.",
    products: [
      { name: "Control Room", image: "/products/puf/control/main.webp" },
      { name: "Solar Control Room", image: "/products/puf/solar-room/main.webp" },
      { name: "Clean Room", image: "/products/puf/clean/clean.webp" },
    ],
  },
];

export const productCategories: ProductCategory[] = categories.map((category) => ({
  ...category,
  slug: toSlug(category.name),
}));

export const getCategoryBySlug = (slug: string) =>
  productCategories.find((category) => category.slug === slug);

export const getCategoryByName = (name: string) =>
  productCategories.find((category) => category.name === name);

export const totalProductCount = productCategories.reduce(
  (sum, category) => sum + category.products.length,
  0,
);
