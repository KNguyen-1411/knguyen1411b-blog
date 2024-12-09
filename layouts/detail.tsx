import React from 'react'
import { IBlogDetail } from '@/types/blogs'
import Image from 'next/image'
import parse from 'html-react-parser'
export default function Detail({
  author,
  createdAt,
  bodyHTML,
  title,
}: IBlogDetail) {
  const createDate = new Date(createdAt).toLocaleDateString()
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{title}</h1>
        <div className="w-full center">
          <div className="flex my-8">
            <Image
              src={author.avatarUrl || 'https://placehold.co/50x50'}
              alt={author.login}
              width={50}
              height={50}
              className="rounded-full mr-3"
            />
            <div>
              <h2 className="font-semibold text-lg">{author.login}</h2>
              <div className="flex space-x-2 text-sm text-gray-500">
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
          </div>
        </div>
        <div>{parse(bodyHTML)}</div>
      </div>
    </div>
  )
}
