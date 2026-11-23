import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { blogHref, type BlogSummary } from '@/lib/blogs'
import FallbackImage from '@/components/site/FallbackImage'
import { Rule, pad } from '@/components/site/primitives'

/** Article tile in the Home collection-card style. `compact` drops the longer copy (related-article rows). */
export default function BlogCard({ post, index, compact = false }: { post: BlogSummary; index: number; compact?: boolean }) {
  return (
    <Link
      href={blogHref(post.id)}
      className="group flex h-full flex-col overflow-hidden border border-black/15 bg-[#f3ede3] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(49,38,25,0.12)] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46]"
    >
      <div className="relative aspect-[1.6] overflow-hidden">
        <FallbackImage
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
        <span className="absolute left-5 top-5 text-[0.65rem] tracking-[0.18em] text-white mix-blend-difference">{pad(index + 1)}</span>
        <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-white mix-blend-difference transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4 text-[0.55rem] uppercase tracking-[0.2em] text-black/45">
          <span className="text-[#886c46]">{post.category}</span>
          <span className="shrink-0">{post.readTime}</span>
        </div>
        <Rule className="mb-5 mt-1" />
        <h3 className="text-[clamp(1.3rem,1.6vw,1.75rem)] leading-[1.12] tracking-[-0.035em] transition-colors duration-300 group-hover:text-[#886c46]">
          {post.title}
        </h3>

        {!compact && (
          <>
            <p className="mt-4 line-clamp-2 text-[0.85rem] leading-[1.7] text-black/60">{post.excerpt}</p>
            {post.summary && <p className="mt-3 line-clamp-2 text-[0.8rem] leading-[1.7] text-black/70">{post.summary}</p>}
            {post.highlightTitle && (
              <div className="mt-5 border-t border-black/70 pt-4">
                <p className="text-[0.55rem] uppercase tracking-[0.2em] text-[#886c46]">{post.highlightTitle}</p>
                <ul className="mt-3 space-y-2 text-[0.8rem] leading-[1.55] text-black/70">
                  {post.highlights?.map((item) => (
                    <li key={item} className="grid grid-cols-[0.9rem_minmax(0,1fr)]">
                      <span className="mt-[0.55rem] h-px w-2 bg-[#886c46]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        <div className="mt-auto pt-6">
          <p className="flex items-center justify-between gap-4 border-t border-black/15 pt-4 text-[0.55rem] uppercase tracking-[0.2em] text-black/45">
            <span className="min-w-0 leading-[1.7]">
              {compact ? post.author : `${post.date} · ${post.author}`}
            </span>
            <span className="shrink-0 transition-colors group-hover:text-[#886c46]">Read article</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
