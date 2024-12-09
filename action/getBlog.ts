'use server'
import { discussionGql, discussionDetailGql } from './gql'
const API_URL = 'https://api.github.com/graphql'
const DISCUSSION_CATEGORIES = process.env.DISCUSSION_CATEGORY_ID
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
import { IBlog, IBlogDetail } from '@/types/blogs'

export async function getBlogs(): Promise<IBlog[]> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: discussionGql(DISCUSSION_CATEGORIES),
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const result = await response.json()
    return result?.data?.repository?.discussions?.nodes
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

export async function getBlog(postId: number): Promise<IBlogDetail> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: discussionDetailGql(postId),
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const result = await response.json()
    return result?.data?.repository?.discussion
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}
