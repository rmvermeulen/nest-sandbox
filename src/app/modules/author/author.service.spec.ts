import { Test } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Author, AuthorService } from '@modules/author'
import { Post } from '@modules/post'

describe('Post Service', () => {
  let authors: AuthorService

  beforeAll(async () => {
    const tm = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([Author]),
        TypeOrmModule.forRoot({
          database: ':memory:',
          entities: [Author, Post],
          synchronize: true,
          type: 'sqlite',
        }),
      ],
      components: [AuthorService],
    }).compile()

    authors = tm.get(AuthorService)
    expect(authors).toBeTruthy()
  })

  it('enables orm stuff', async () => {
    expect(await authors.findAll()).toEqual([])
  })
})
