interface UserUpdateDetailPageProps {
  params: {
    id: string
  }
}
import { IBlogDetail } from '@/types/blogs'
import { getBlog } from '@/action/getBlog'
import Detail from '@/layouts/detail'
export default async function UserUpdateDetailPage(
  props: UserUpdateDetailPageProps,
) {
  const blog: IBlogDetail = await getBlog(Number(props.params.id))
  return (
    <>
      <Detail
        author={blog.author}
        createdAt={blog.createdAt}
        bodyHTML={blog.bodyHTML}
        title={blog.title}
      />
    </>
  )
}
