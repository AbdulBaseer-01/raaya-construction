import { Award, Building2, TrendingUp, Users } from 'lucide-react'
import { pad, shell } from '@/components/site/primitives'

const perks = [
  { icon: Building2, title: 'Modern Workspace', desc: 'State-of-the-art offices designed for collaboration.' },
  { icon: TrendingUp, title: 'Growth Track', desc: 'Structured learning paths and promotion cycles.' },
  { icon: Users, title: 'Diverse Team', desc: 'Work with top talent from across the industry.' },
  { icon: Award, title: 'Recognition', desc: 'Performance bonuses and quarterly awards.' },
]

/* Home's numbered row pattern: number column, hairline, then the copy. */
export default function Perks() {
  return (
    <section aria-label="Why work with us" className="bg-white">
      <ul className={`${shell} grid gap-x-6 gap-y-10 py-14 sm:grid-cols-2 md:py-20 xl:grid-cols-4`}>
        {perks.map(({ icon: Icon, title, desc }, i) => (
          <li key={title} className="group grid grid-cols-[minmax(3rem,0.3fr)_minmax(0,1.7fr)] border-t border-black/70 pt-5">
            <span className="text-[0.85rem]">{pad(i + 1)}</span>
            <div className="border-l border-black/70 pl-5">
              <Icon className="h-5 w-5 text-[#886c46]" strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-4 text-[clamp(1.4rem,1.8vw,1.9rem)] uppercase leading-[0.9] tracking-[-0.06em] transition-colors group-hover:text-[#886c46]">
                {title}
              </p>
              <p className="mt-3 text-[0.82rem] leading-[1.7] text-black/60">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
