import { Component } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Post } from '@modules/post'

@Component()
export class PostService {
  // TODO: private repository
  constructor(
    @InjectRepository(Post) public readonly photoRepository: Repository<Post>,
  ) {}
  // TODO: methods
}
