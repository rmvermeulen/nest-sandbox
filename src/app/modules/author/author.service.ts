import { Component } from '@nestjs/common'
import { InjectRepository as Repo } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { IEntityService } from '@app/interfaces'
import { Author } from './author.entity'

@Component()
export class AuthorService implements IEntityService<Author> {
  constructor(@Repo(Author) private readonly authors: Repository<Author>) {}

  public get repo() {
    return this.authors
  }

  public async findOneById(id: string): Promise<Author | undefined> {
    return this.authors.findOneById(id)
  }

  public async findAll(query = {}): Promise<Author[]> {
    return this.authors.find(query)
  }
}
