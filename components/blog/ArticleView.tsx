import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { blogHref, blogPosts, blogSummaries, getSummary, parseArticle, type BlogPost } from '@/lib/blogs'
import Breadcrumb from '@/components/site/Breadcrumb'
import FramedImage from '@/components/site/FramedImage'
import Reveal from '@/components/site/Reveal'
import { ArrowLink, DisplayHeading, Eyebrow, pad, shell } from '@/components/site/primitives'
import BlogCard from './BlogCard'
import ShareButton from './ShareButton'

export default function ArticleView({ post }: { post: BlogPost }) {
  const index = blogPosts.findIndex((p) => p.id === post.id)
  // Same rules as before: no "previous" on the first article; "next" wraps to the first.
  const previous = index > 0 ? blogPosts[index - 1] : null
  const next = index < blogPosts.length - 1 ? blogPosts[index + 1] : blogPosts[0]
  const blocks = parseArticle(post.content)
  const leadIndex = blocks.findIndex((b) => b.type === 'paragraph')
  // The article data points at images that don't exist; the card data has the real one for each post.
  const cover = getSummary(post.id)?.image ?? post.image
  const related = blogSummaries.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <>
      <Breadcrumb
        trail={[{ label: 'Home', href: '/' }, { label: 'Journal', href: '/blogs' }, { label: post.title }]}
        back={{ label: 'Back to articles', href: '/blogs' }}
      />

      {/* ── Header ── */}
      <header className="bg-white">
        <div className={`${shell} pb-12 pt-14 md:pb-16 md:pt-20`}>
          <Eyebrow className="mb-10">
            {post.category} / {pad(index + 1)}
          </Eyebrow>
          <h1 lang="en" className="max-w-[68rem] text-[clamp(2.1rem,4.6vw,5.4rem)] uppercase leading-[0.9] tracking-[-0.065em]">
            {post.title}
          </h1>
          <dl className="mt-12 grid max-w-[52rem] gap-y-5 border-t border-black/70 pt-5 sm:grid-cols-3">
            {[
              ['Published', post.date],
              ['Written by', post.author],
              ['Reading time', post.readTime],
            ].map(([label, value]) => (
              <div key={label} className="pr-5 sm:border-l sm:border-black/15 sm:pl-5 sm:first:border-l-0 sm:first:pl-0">
                <dt className="text-[0.55rem] uppercase tracking-[0.22em] text-black/45">{label}</dt>
                <dd className="mt-2 text-[0.9rem]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={shell}>
          <FramedImage src={cover} alt={post.title} priority sizes="(min-width: 1600px) 1440px, 90vw" aspect="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]" />
        </div>
      </header>

      {/* ── Body ── */}
      <section className="bg-white">
        <div className={`${shell} grid gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] lg:gap-16`}>
          <aside className="lg:sticky lg:top-[calc(68px+3rem)] lg:self-start">
            <div className="grid gap-6 border-t border-black/70 pt-5">
              <div>
                <p className="text-[0.55rem] uppercase tracking-[0.22em] text-black/45">Written by</p>
                <p className="mt-2 text-[clamp(1.5rem,2vw,2.1rem)] uppercase leading-[0.9] tracking-[-0.06em]">{post.author}</p>
              </div>
              <ShareButton title={post.title} />
              <ArrowLink href="/blogs" className="hidden lg:inline-flex">
                All articles
              </ArrowLink>
            </div>
          </aside>

          <article className="min-w-0 max-w-[46rem]">
            {blocks.map((block, i) => {
              if (block.type === 'heading')
                return (
                  <h2 key={i} className="mb-5 mt-14 text-[clamp(1.6rem,2.3vw,2.5rem)] uppercase leading-[0.92] tracking-[-0.06em] first:mt-0">
                    {block.text}
                  </h2>
                )
              if (block.type === 'list')
                return (
                  <ul key={i} className="mb-6 border-t border-black/15">
                    {block.items.map((item) => (
                      <li key={item} className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-baseline border-b border-black/15 py-3 text-[0.95rem] leading-[1.6]">
                        <span className="h-px w-3 -translate-y-1 bg-[#886c46]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              return i === leadIndex ? (
                <p key={i} className="mb-8 text-[clamp(1.15rem,1.5vw,1.45rem)] leading-[1.5] tracking-[-0.015em]">
                  {block.text}
                </p>
              ) : (
                <p key={i} className="mb-6 text-[1rem] leading-[1.85] text-black/72">
                  {block.text}
                </p>
              )
            })}
          </article>
        </div>
      </section>

      {/* ── Previous / next ── */}
      <nav aria-label="More articles" className="border-t border-black/15 bg-white">
        <div className={shell}>
        <div className="grid gap-px bg-black/15 md:grid-cols-2">
          {previous ? (
            <Link href={blogHref(previous.id)} className="group bg-white py-10 pr-6 md:py-14">
              <span className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.22em] text-black/50">
                <ArrowLeft className="h-4 w-4 text-[#886c46] transition-transform group-hover:-translate-x-1" />
                Previous article
              </span>
              <span className="mt-5 block max-w-[34rem] text-[clamp(1.2rem,1.6vw,1.6rem)] leading-[1.2] tracking-[-0.03em] transition-colors group-hover:text-[#886c46]">
                {previous.title}
              </span>
            </Link>
          ) : (
            <div className="hidden bg-white md:block" />
          )}
          <Link href={blogHref(next.id)} className="group bg-white py-10 md:py-14 md:pl-10 md:text-right">
            <span className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.22em] text-black/50 md:justify-end">
              Next article
              <ArrowRight className="h-4 w-4 text-[#886c46] transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-5 block max-w-[34rem] text-[clamp(1.2rem,1.6vw,1.6rem)] leading-[1.2] tracking-[-0.03em] transition-colors group-hover:text-[#886c46] md:ml-auto">
              {next.title}
            </span>
          </Link>
        </div>
        </div>
      </nav>

      {/* ── More articles ── */}
      <section className="border-t border-black/15 bg-[#f5f2ec]">
        <div className={`${shell} py-24 md:py-36`}>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div>
              <Eyebrow className="mb-8">Keep reading</Eyebrow>
              <DisplayHeading lines={['More', 'articles.']} />
            </div>
            <ArrowLink href="/blogs">All articles</ArrowLink>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((p) => (
              <Reveal key={p.id} className="h-full">
                <BlogCard post={p} index={blogSummaries.indexOf(p)} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
