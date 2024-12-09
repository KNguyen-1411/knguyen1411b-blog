'use client'
import { IBlog } from '@/types/blogs'
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function BlogPreview({
  title,
  createdAt,
  number,
  bodyText,
  author,
  labels,
}: IBlog) {
  const previewText = bodyText.slice(0, 100) + '...'
  const createDate = new Date(createdAt).toLocaleDateString()

  const router = useRouter()

  const openId = (id: number | undefined) => {
    if (id) {
      router.push(`/${id}`)
    }
  }

  return (
    <div onClick={() => openId(number)}>
      <Card className="mb-4 px-3 pt-2 cardui rounded-xl">
        <CardHeader className="flex items-center space-x-3">
          <Image
            src={author.avatarUrl || 'https://placehold.co/50x50'}
            alt={author.login}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h2 className="font-semibold text-lg">{author.login}</h2>
            <div className="flex space-x-5 text-sm text-gray-200">
              <a
                href={author.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {author.url}
              </a>
              <p className="hidden md:block">{createDate}</p>
            </div>
          </div>
        </CardHeader>
        <CardBody className="-my-3">
          <h1 className="font-bold text-xl mb-2">{title}</h1>
          <p>{previewText}</p>
        </CardBody>
        <CardFooter className="text-sm text-gray-600">
          {labels.nodes.map((label) => (
            <span
              key={label.name}
              className="bg-gray-200 px-2 py-1 mx-1 rounded-full text-xs"
            >
              {label.name}
            </span>
          ))}
        </CardFooter>
      </Card>
    </div>
  )
}
