/*
 * Content for two sections that were switched off on the Features page
 * (previously commented out inline). Kept verbatim so they can be re-enabled.
 */
import type { AddOnItem } from '@/components/addons/AddOns'
import type { ContainerProps } from '@/components/container/Container'

export const addOnsHeroImage = '/addons/farm-house-2.png'

export const externalItems: AddOnItem[] = [
  { id: 1, name: 'Pergola — GF', image: '/addons/pergola-gf.png' },
  { id: 2, name: 'Tiling and Railing', image: '/addons/tiling-railing.png' },
  { id: 3, name: 'Pergola — FF', image: '/addons/pergola-ff.png' },
  { id: 4, name: 'Ladder', image: '/addons/ladder.png' },
  { id: 5, name: 'Spiral Staircase', image: '/addons/spiral-staricase.png' },
  { id: 6, name: 'Dog Legged Staircase', image: '/addons/dog-legged-staircase.png' },
  { id: 7, name: 'Solar', image: '/addons/solar.png' },
  { id: 8, name: 'Utility', image: '/addons/utility.png' },
  { id: 9, name: 'Overhead Tank 500 L', image: '/addons/water tank.png' },
]

export const internalItems: AddOnItem[] = [
  { id: 1, name: 'Kitchen', image: '/addons/int-kitchen.png' },
  { id: 2, name: 'Vanity', image: '/addons/int-vanity.png' },
  { id: 3, name: 'Wardrobe', image: '/addons/int-wardrobe.png' },
  { id: 4, name: 'Bed', image: '/addons/int-bed.png' },
  { id: 5, name: 'Side Table', image: '/addons/side-table.png' },
  { id: 6, name: 'Fold-out Table', image: '/addons/fold-table.png' },
  { id: 7, name: 'Blind Curtain', image: '/addons/blind-curtains.png' },
  { id: 8, name: 'Shower Glass Partition', image: '/addons/bathroom.png' },
  { id: 9, name: 'Vanity Mirror', image: '/addons/mirror.png' },
  { id: 10, name: 'Bathroom Accessories', image: '/addons/bathroom accessories.png' },
]

const containerDetail = [
  '/container/container full.png',
  '/container/container full.png',
  '/container/container full.png',
  '/container/container full.png',
]

export const containerLayers: ContainerProps = {
  mainImage: '/container/container-full-1.png',
  mainHeading: 'Crafted to Perfection',
  mainSubtitle: 'Explore our curated collection of premium products',
  subImages: [
    {
      src: '/container/container floor.png',
      heading: 'Floor Layer',
      description: 'Natural teak with a rich grain texture, perfect for accent walls and statement furniture.',
      tag: 'Floor Layer',
      detailImages: containerDetail,
    },
    {
      src: '/container/container wall layer f.png',
      heading: 'Wall Layer',
      description: 'Lightweight stone veneer slabs that bring the beauty of natural rock indoors.',
      tag: 'Wall Layer',
      detailImages: containerDetail,
    },
    {
      src: '/container/container-roof.png',
      heading: 'Roof Layer',
      description: 'Premium marble-effect surfaces that are durable, low-maintenance, and breathtaking.',
      tag: 'Roof Layer',
      detailImages: containerDetail,
    },
  ],
}
