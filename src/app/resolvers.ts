import {
  propEq,
  sum,
  pipe,
  prop,
  pluck,
  contains,
  flip,
  tap,
  where,
  filter,
  propSatisfies,
  __,
} from 'ramda'

import { posts, authors, Author, Post } from './database'

type Resolver<From, To> = (f: From) => To
export const resolvers = {
  Query: {
    authors: () => authors,
    posts: () => posts,
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
  Author: {
    // prettier-ignore
    posts: pipe(
      prop('id'),
      propEq('authorId'),
      filter(__, posts)
    ) as Resolver<Author, Post[]>,

    name: ({ firstName, lastName }: Author) => `${firstName} ${lastName}`,
    votes: pipe(
      prop('postIds'),
      flip(contains),
      propSatisfies(__, 'id'),
      filter(__, posts),
      pluck('votes'),
      sum,
    ) as Resolver<Author, number>,
  },
  Post: {
    author(post: Post) {
      return authors.find(propEq('id', post.authorId))
    },
  },
}
