import { Query, ResolveProperty, Resolver } from '@nestjs/graphql'

import { Author } from '@modules/author'
import { PostService } from '@modules/post'

@Resolver('Author')
export class AuthorResolver {
  constructor(
    private readonly authors: AuthorService,
    private readonly posts: PostService,
  ) {}

  @Query('author')
  async getAuthor(obj, args, context, info) {
    const { id } = args
    return this.authors.findOneById(id)
  }

  @ResolveProperty('posts')
  async getPosts(author: Author) {
    const { id } = author
    return this.posts.findAll({ authorId: id })
  }
}
