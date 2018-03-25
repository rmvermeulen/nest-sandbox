import { Test } from '@nestjs/testing'

import { Author, AuthorService } from '@modules/author'
import { OrmModule } from '@modules/orm'
import { Post } from '@modules/post'

describe('Author Service', () => {
  let authors: AuthorService

  beforeAll(async () => {
    const tm = await Test.createTestingModule({
      imports: [OrmModule.forTest([Author, Post])],
      components: [AuthorService],
    }).compile()

    authors = tm.get(AuthorService)
    expect(authors).toBeTruthy()
  })

  it('enables orm stuff', async () => {
    expect(await authors.findAll()).toEqual([])
  })
})
