type ID = string
export interface Author {
  id: ID
  firstName: string
  lastName: string
  postIds: Array<Post['id']>
}

export interface Post {
  id: ID
  title: string
  authorId: Author['id']
  votes: number
}

export const posts: Post[] = [
  { id: 'post-1', title: 'cool stuff', authorId: 'author-1', votes: 12 },
  { id: 'post-2', title: 'cooler stuff', authorId: 'author-2', votes: 2 },
  { id: 'post-3', title: 'coolest stuff', authorId: 'author-1', votes: 5 },
]

export const authors: Author[] = [
  {
    id: 'author-1',
    firstName: 'Andy',
    lastName: 'Armstrong',
    postIds: ['post-1', 'post-3'],
  },
  {
    id: 'author-2',
    firstName: 'Bob',
    lastName: 'Barley',
    postIds: ['post-2'],
  },
]
