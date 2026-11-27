import type { ProductData } from '@/lib/productsData'
import { getProductsByCategory } from '@/lib/productsData'
import { getCategoryByName, productCategories } from '@/lib/productCategories'
import Breadcrumb from '@/components/site/Breadcrumb'
import ProductHero from './Hero'
import Advantages from './Advantages'
import Applications from './Applications'
import Gallery from './Gallery'
import TechSpecs from './TechSpecs'
import TrustBand from './TrustBand'
import Faq from './Faq'
import Variants from './Variants'
import RelatedProducts from './RelatedProducts'
import { toDetail } from './types'

export default function ProductView({ product }: { product: ProductData }) {
  const detail = toDetail(product)
  const category = getCategoryByName(product.category)
  const categoryIndex = category ? productCategories.indexOf(category) : -1
  const related = getProductsByCategory(product.category)
    .filter((p) => p.name !== product.name)
    .map(toDetail)

  return (
    <>
      <Breadcrumb
        trail={[
          { label: 'Products', href: '/products' },
          { label: product.category, href: category ? `/products/${category.slug}` : '/products' },
          { label: product.name },
        ]}
      />
      <ProductHero product={detail} categoryIndex={categoryIndex} />
      <Advantages product={detail} />
      <Applications product={detail} />
      <Gallery product={detail} />
      {product.techSpecs && <TechSpecs name={product.name} techSpecs={product.techSpecs} />}
      <TrustBand />
      <Faq product={detail} />
      <Variants product={detail} />
      <RelatedProducts
        category={product.category}
        categoryHref={category ? `/products/${category.slug}` : '/products'}
        products={related}
      />
    </>
  )
}
