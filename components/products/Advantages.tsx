import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from '@/components/site/Reveal'
import { Eyebrow, Rule, hasLongWord, pad } from '@/components/site/primitives'
import type { ProductDetail } from './types'

/* Icon names used in productsData → Lucide components. */
const iconMap: Record<string, LucideIcon> = {
  Hammer: Icons.Hammer,
  Wrench: Icons.Wrench,
  Building: Icons.Building,
  Landmark: Icons.Landmark,
  House: Icons.House,
  Home: Icons.Home,
  Factory: Icons.Factory,
  Warehouse: Icons.Warehouse,
  HardHat: Icons.HardHat,
  Ruler: Icons.Ruler,
  DraftingCompass: Icons.DraftingCompass,
  PencilRuler: Icons.PencilRuler,
  Square: Icons.Square,
  Triangle: Icons.Triangle,
  LayoutGrid: Icons.LayoutGrid,
  LayoutDashboard: Icons.LayoutDashboard,
  Shield: Icons.Shield,
  ShieldCheck: Icons.ShieldCheck,
  Lock: Icons.Lock,
  CheckCircle: Icons.CheckCircle,
  BadgeCheck: Icons.BadgeCheck,
  Zap: Icons.Zap,
  Battery: Icons.Battery,
  Plug: Icons.Plug,
  Lightbulb: Icons.Lightbulb,
  SolarPanel: Icons.SolarPanel,
  Leaf: Icons.Leaf,
  Trees: Icons.TreePine,
  Recycle: Icons.Recycle,
  Sprout: Icons.Sprout,
  Thermometer: Icons.Thermometer,
  CloudRain: Icons.CloudRain,
  Sun: Icons.Sun,
  Wind: Icons.Wind,
  Snowflake: Icons.Snowflake,
  Cloud: Icons.Cloud,
  Clock: Icons.Clock,
  Timer: Icons.Timer,
  Rocket: Icons.Rocket,
  Truck: Icons.Truck,
  Mountain: Icons.Mountain,
  TreePine: Icons.TreePine,
  MapPinned: Icons.MapPinned,
  Globe: Icons.Globe,
  Palette: Icons.Palette,
  Paintbrush: Icons.Paintbrush,
  Gem: Icons.Gem,
  Star: Icons.Star,
  Layers: Icons.Layers,
  Boxes: Icons.Boxes,
  Package: Icons.Package,
  Container: Icons.Container,
  Expand: Icons.Expand,
  Move: Icons.Move,
  Maximize: Icons.Maximize,
  Combine: Icons.Combine,
  Droplets: Icons.Droplets,
  Flame: Icons.Flame,
  Fingerprint: Icons.Fingerprint,
  Cog: Icons.Cog,
  Settings: Icons.Settings,
}

export default function Advantages({ product }: { product: ProductDetail }) {
  if (!product.advantages.length) return null

  return (
    // overflow-clip (not hidden) keeps the sticky heading working, as in the Home "Why" section.
    <section className="overflow-clip border-t border-black/15 bg-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start md:grid-cols-[0.8fr_1.2fr]">
        <div className="self-start md:sticky md:top-[68px] md:min-h-[calc(100vh-68px)]">
          <div className="flex h-full flex-col justify-center px-6 pb-12 pt-24 sm:px-10 md:min-h-[calc(100vh-68px)] md:px-[5vw] md:py-16">
            <Eyebrow className="mb-10">Advantages / {pad(product.advantages.length)}</Eyebrow>
            <h2 lang="en" className={`break-words uppercase leading-[0.8] tracking-[-0.075em] ${
                hasLongWord(product.name) ? 'text-[clamp(2.1rem,4.4vw,5.4rem)]' : 'text-[clamp(2.8rem,5.4vw,6.5rem)]'
              }`}>
              <span className="block">Advantages</span>
              <span className="ml-[6vw] block text-[#886c46]">of the</span>
              <span className="ml-[2vw] block">{product.name}</span>
            </h2>
            <p className="mt-10 max-w-[21rem] text-[0.82rem] leading-[1.8] text-black/55 md:ml-[10%]">
              Every detail of the {product.name} is engineered for performance, comfort, and lasting value.
            </p>
          </div>
        </div>

        <div className="px-6 pb-24 sm:px-10 md:px-8 md:py-24 lg:pr-[5vw]">
          <div className="grid gap-5">
            {product.advantages.map((adv, i) => {
              const Icon = iconMap[adv.icon] ?? Icons.CheckCircle
              return (
                <Reveal key={adv.title}>
                  <article className="group bg-[#f3ede3] p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-[0.58rem] uppercase tracking-[0.22em] text-black/45">Advantage / {pad(i + 1)}</span>
                      <Icon className="h-5 w-5 shrink-0 text-[#886c46]" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <Rule className="mb-5 mt-1" />
                    <h3 className="max-w-[28rem] text-[clamp(1.9rem,3.2vw,3.6rem)] uppercase leading-[0.84] tracking-[-0.065em] transition-colors duration-300 group-hover:text-[#886c46]">
                      {adv.title}
                    </h3>
                    <div className="mt-6 grid grid-cols-[minmax(3rem,0.35fr)_minmax(0,1.65fr)] border-t border-black/70 pt-5">
                      <span className="text-[0.85rem]">{pad(i + 1)}</span>
                      <p className="border-l border-black/70 pl-5 text-[0.85rem] leading-[1.6] text-black/65">{adv.description}</p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
