export interface IBlogDetail {
  title: string
  bodyHTML: string
  createdAt: string
  author: {
    login: string
    avatarUrl: string
    url: string
  }
}

export interface IBlog {
  title: string
  url?: string
  number?: number
  discussionUrl?: string
  bodyHTML?: string
  bodyText: string
  labels: {
    nodes: Array<{
      name: string
    }>
  }
  createdAt: string
  lastEdited?: string | null
  author: {
    login: string
    avatarUrl: string
    url: string
  }
}
