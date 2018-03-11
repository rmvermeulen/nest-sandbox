import {
  __,
  contains,
  filter,
  flip,
  pipe,
  pluck,
  prop,
  propEq,
  propSatisfies,
  sum,
} from 'ramda'

import { Author, authors, Post, posts } from './database'

type Resolver<From, To> = (f: From) => To
export const resolvers = {
  Author: {
    name: ({ firstName, lastName }: Author) => `${firstName} ${lastName}`,
    posts: pipe(
      prop('id'),
      propEq('authorId') as any,
      filter(__, posts),
    ) as Resolver<Author, Post[]>,
    votes: pipe(
      prop('postIds'),
      flip(contains) as any,
      propSatisfies(__, 'id') as any,
      filter(__, posts),
      pluck('votes'),
      sum,
    ) as Resolver<Author, number>,
  },
  Mutation: {
    upvotePost(_, { postId }) {
      const post = posts.find(propEq('id', postId))
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`)
      }
      post.votes += 1
      return post
    },
  },
  Post: {
    author(post: Post) {
      return authors.find(propEq('id', post.authorId))
    },
  },
  Query: {
    authors: () => authors,
    posts: () => posts,
  },
}
