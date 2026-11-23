import CategoryView from '@/components/products/CategoryView'
import ProductView from '@/components/products/ProductView'
import ProductNotFound from '@/components/products/ProductNotFound'
import { getCategoryBySlug } from '@/lib/productCategories'
import { getProductByName } from '@/lib/productsData'

/*
 * One segment serves two kinds of URL:
 *   /products/wooden-series      → a collection (linked from the Home page)
 *   /products/A-Frame%20Cabin    → a product (linked from cards and the menu)
 */
export default async function ProductRoute({ params }: PageProps<'/products/[product]'>) {
  const { product: segment } = await params
  const key = decodeURIComponent(segment)

  const category = getCategoryBySlug(key)
  if (category) return <CategoryView category={category} />

  const product = getProductByName(key)
  if (product) return <ProductView product={product} />

  return <ProductNotFound />
}
