import type { ProductData } from '@/lib/productsData'

/** ProductData without the Lucide icon component, so it can be passed to client components. */
export type ProductDetail = Omit<ProductData, 'icon'>

export const toDetail = ({ icon, ...detail }: ProductData): ProductDetail => {
  void icon
  return detail
}

/** Most products still carry the same placeholder variant set; it is never shown. */
const TEMPLATE_VARIANTS = 'Studio / 1-BHK / 2-BHK / 3-BHK'

/** True when a product has variants of its own (e.g. Toilet Cabins, Security Cabins). */
export const hasRealVariants = (product: Pick<ProductData, 'variants'>) =>
  product.variants.length > 0 && product.variants.map((v) => v.variantName).join(' / ') !== TEMPLATE_VARIANTS
