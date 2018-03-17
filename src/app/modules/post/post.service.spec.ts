import { Test } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Author } from '@modules/author'
import { Post, PostService } from '@modules/post'

describe('Post Service', () => {
  let service: PostService

  beforeAll(async () => {
    const tm = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([Post]),
        TypeOrmModule.forRoot({
          database: ':memory:',
          entities: [Author, Post],
          synchronize: true,
          type: 'sqlite',
        }),
      ],
      components: [PostService],
    }).compile()

    service = tm.get(PostService)
    expect(service).toBeTruthy()
  })

  it('enables orm stuff', async () => {
    const repo = service.postRepository
    expect(await repo.find()).toEqual([])
  })
})
