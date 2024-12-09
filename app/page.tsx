import { getBlogs } from '@/action/getBlog'
import { IBlog } from '@/types/blogs'
import MainLayout from '@/layouts'
import { getMe } from '@/action/getMe'
import { IMe } from '@/types/me'

export default async function Index() {
  const blogs: IBlog[] | null = await getBlogs()
  const me: IMe | null = await getMe()

  if (!blogs || !me) {
    return <div>Loading...</div>
  }

  return <MainLayout me={me} data={blogs} />
}
