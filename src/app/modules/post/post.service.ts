import { Component } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Post } from './post.entity'

@Component()
export class PostService {
  // TODO: private repository
  constructor(
    @InjectRepository(Post) public readonly postRepository: Repository<Post>,
  ) {}
  // TODO: methods
}
