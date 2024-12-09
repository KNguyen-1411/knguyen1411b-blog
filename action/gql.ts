export function discussionGql(ghDiscussionCategoryId: string | undefined) {
  return `{
          repository(owner: "knguyen-1411", name: "knguyen1411b-blog") {
              discussions(first: 99,categoryId: "${ghDiscussionCategoryId}") {
                nodes {
                  title
                  url
                  number
                  bodyHTML
                  bodyText
                  createdAt
                  lastEditedAt
                  author {
                    login
                    url
                    avatarUrl
                  }
                   labels(first: 100) {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
      }`
}

export function discussionDetailGql(postId: number | undefined) {
  return `{
      repository(owner: "knguyen-1411", name: "knguyen1411b-blog") {
        discussion(number: ${postId}) {
          title
          bodyHTML
          createdAt
          author {
            login
            url
            avatarUrl
          }
        }
      }
    }`
}
export function meProfile() {
  return `{
    viewer {
      login
      name
      avatarUrl
    }
  }`
}
