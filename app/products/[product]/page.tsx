import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'
import CategoryView from '@/components/products/CategoryView'
import ProductView from '@/components/products/ProductView'
import ProductNotFound from '@/components/products/ProductNotFound'
import { LEGACY_CATEGORY_SLUGS, getCategoryBySlug } from '@/lib/productCategories'
import { LEGACY_PRODUCT_NAMES, getProductByName, getProductBySlug, productSlug } from '@/lib/productsData'
import { FACTS } from '@/lib/siteFacts'
import { pageMetadata } from '@/lib/seo'

/*
 * One segment serves these kinds of URL:
 *   /products/homes                  → a category
 *   /products/toilet-cabins          → a product (lowercase, hyphenated slug)
 *   /products/wooden-series          → an old collection URL, redirected to its new category
 *   /products/a-frame-cabin          → an old product slug or name ("A-Frame%20Cabin"),
 *                                      redirected to the product's current slug
 * A category with a single product of the same name (Pre-Engineered Buildings)
 * shows that product's page directly.
 */

async function resolve(params: PageProps<'/products/[product]'>['params']) {
  const { product: segment } = await params
  const key = decodeURIComponent(segment)
  const category = getCategoryBySlug(key)
  const product = getProductBySlug(key)
  // Single-product category whose product shares its slug: show the product page.
  if (category && product) return { key, category: undefined, product }
  return { key, category, product }
}

/** Old product name or old slug → current product. */
function legacyProduct(key: string) {
  const byName = LEGACY_PRODUCT_NAMES[key] ?? key
  const direct = getProductByName(byName)
  if (direct) return direct
  const oldName = Object.keys(LEGACY_PRODUCT_NAMES).find((name) => productSlug(name) === key)
  return oldName ? getProductByName(LEGACY_PRODUCT_NAMES[oldName]) : undefined
}

export async function generateMetadata({ params }: PageProps<'/products/[product]'>): Promise<Metadata> {
  const { category, product } = await resolve(params)
  if (category) {
    return pageMetadata(`${category.name} — Texo Prefab World`, category.description)
  }
  if (!product) return {}
  const title = `${product.name} Manufacturer in Hyderabad — Texo Prefab World`
  const description = `${product.name} designed and factory-built by Texo in Hyderabad. Drawings and quote within ${FACTS.quoteTurnaround}. ${FACTS.projects} projects across ${FACTS.cities} cities.`
  return {
    ...pageMetadata(title, description),
    alternates: { canonical: `/products/${productSlug(product.name)}` },
  }
}

export default async function ProductRoute({ params }: PageProps<'/products/[product]'>) {
  const { key, category, product } = await resolve(params)

  if (category) return <CategoryView category={category} />
  if (product) return <ProductView product={product} />

  const newCategory = LEGACY_CATEGORY_SLUGS[key]
  if (newCategory) permanentRedirect(`/products/${newCategory}`)

  const legacy = legacyProduct(key)
  if (legacy) permanentRedirect(`/products/${productSlug(legacy.name)}`)

  return <ProductNotFound />
}
