import { ArrowLink, Eyebrow, shell } from '@/components/site/primitives'

export default function ArticleNotFound() {
  return (
    <section className="bg-white">
      <div className={`${shell} flex min-h-[70vh] flex-col justify-center py-24`}>
        <Eyebrow className="mb-10">Error / 404</Eyebrow>
        <h1 className="text-[clamp(3rem,8vw,9rem)] uppercase leading-[0.82] tracking-[-0.035em]">
          <span className="block">Blog</span>
          <span className="ml-[10vw] block text-[#886c46]">not found.</span>
        </h1>
        <ArrowLink href="/blogs" className="mt-10 md:ml-[10%]">
          Back to articles
        </ArrowLink>
      </div>
    </section>
  )
}
