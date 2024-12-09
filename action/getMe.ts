'use server'
import { IMe } from '@/types/me'
import { meProfile } from './gql'

const API_URL = 'https://api.github.com/graphql'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

export async function getMe(): Promise<IMe> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: meProfile(),
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`)
    }

    const result = await response.json()

    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`)
    }

    return result.data.viewer
  } catch (error) {
    throw new Error(`Error fetching profile: ${error}`)
  }
}
