import { IMe } from '@/types/me'
import Footer from './footer'
import Home from './home'
import NavBarUI from './navbar'
import { IBlog } from '@/types/blogs'
interface MainLayoutProps {
  data: IBlog[]
  me: IMe
}

export default function MainLayout({ data, me }: MainLayoutProps) {
  return (
    <>
      <NavBarUI me={me} />
      <Home blogs={data} />
      <Footer />
    </>
  )
}
