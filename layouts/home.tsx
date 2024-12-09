'use client'
import { useState } from 'react'
import { BlogPreview } from '@/components/BlogPreview'
import { IBlog } from '@/types/blogs'
import FilterTag from '@/components/filterTag'
import { TAGS } from '@/config/tags'
import About from './about'

interface HomeProps {
  blogs: IBlog[]
}

export default function Home({ blogs }: HomeProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const filteredBlogs = selectedTag
    ? blogs.filter((blog) =>
        blog.labels.nodes.some((label) => label.name === selectedTag),
      )
    : blogs
  return (
    <>
      <main className="min-h-screen py-4">
        <div className="container">
          <About />
          <FilterTag
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            TAGS={TAGS}
          />
          <div>
            {filteredBlogs.map((blog) => (
              <BlogPreview
                key={blog.title}
                title={blog.title}
                createdAt={blog.createdAt}
                bodyText={blog.bodyText}
                author={blog.author}
                labels={blog.labels}
                number={blog.number}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
