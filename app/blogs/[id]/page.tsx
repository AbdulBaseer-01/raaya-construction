import ArticleView from '@/components/blog/ArticleView'
import ArticleNotFound from '@/components/blog/ArticleNotFound'
import { getPost } from '@/lib/blogs'

export default async function BlogDetail({ params }: PageProps<'/blogs/[id]'>) {
  const { id } = await params
  const post = getPost(Number(id))
  if (!post) return <ArticleNotFound />
  return <ArticleView post={post} />
}
