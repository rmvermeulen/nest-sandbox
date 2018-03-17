import { Component } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Author } from './author.entity'

@Component()
export class AuthorService {
  // TODO: private repository
  constructor(
    @InjectRepository(Author)
    public readonly authorRepository: Repository<Author>,
  ) {}
  // TODO: methods
}
