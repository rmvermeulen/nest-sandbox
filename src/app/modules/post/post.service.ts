import { Component } from '@nestjs/common'
import { InjectRepository as Repo } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { IEntityService } from '@app/interfaces'
import { Post } from './post.entity'

@Component()
export class PostService implements IEntityService<Post> {
  constructor(@Repo(Post) private readonly posts: Repository<Post>) {}

  get repo() {
    return this.posts
  }

  findAll(query = {}) {
    return this.posts.find(query)
  }

  findOneById(id: string) {
    return this.posts.findOneById(id)
  }
}
