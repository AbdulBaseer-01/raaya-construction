import type { ProductData } from '@/lib/productsData'

/** ProductData without the Lucide icon component, so it can be passed to client components. */
export type ProductDetail = Omit<ProductData, 'icon'>

export const toDetail = ({ icon, ...detail }: ProductData): ProductDetail => {
  void icon
  return detail
}
