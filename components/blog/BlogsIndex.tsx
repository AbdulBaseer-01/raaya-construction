import { blogSummaries } from '@/lib/blogs'
import Reveal from '@/components/site/Reveal'
import { DisplayHeading, Eyebrow, OutlineLink, pad, shell } from '@/components/site/primitives'
import BlogCard from './BlogCard'

export default function BlogsIndex() {
  return (
    <>
      <section className="bg-white">
        <div className={`${shell} pb-24 pt-14 md:pb-36 md:pt-20`}>
          <div className="mb-16 grid gap-10 md:mb-20 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
            <div>
              <Eyebrow className="mb-10">Latest articles / {pad(blogSummaries.length)}</Eyebrow>
              <DisplayHeading as="h1" lines={['Featured', 'stories.']} className="text-[clamp(3rem,8.2vw,9rem)]" />
            </div>
            <p className="text-[0.58rem] uppercase tracking-[0.22em] text-black/50 md:pb-3 md:text-right">
              Journal / Texo Prefab World
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {blogSummaries.map((post, i) => (
              <Reveal key={post.id} delay={(i % 3) * 0.06} className="h-full">
                <BlogCard post={post} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/15 bg-[#f5f2ec]">
        <div className={`${shell} grid gap-12 py-24 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16 md:py-36`}>
          <div>
            <Eyebrow className="mb-10">Newsletter</Eyebrow>
            <DisplayHeading lines={['Stay', 'updated.']} className="text-[clamp(2.6rem,5vw,6.2rem)]" />
          </div>
          <div className="md:pb-2">
            <p className="mb-8 max-w-[24rem] text-[0.85rem] leading-[1.8] text-black/70">
              Subscribe to our newsletter and get the latest insights on prefabrication, construction trends, and Texo
              innovations delivered to your inbox.
            </p>
            {/* There is no newsletter service yet; this opens the footer contact form on the same page. */}
            <OutlineLink href="#contact">Subscribe now</OutlineLink>
          </div>
        </div>
      </section>
    </>
  )
}
