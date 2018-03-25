import { Test } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Author } from '@modules/author'
import { Post, PostService } from '@modules/post'

describe('Post Service', () => {
  let posts: PostService

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

    posts = tm.get(PostService)
    expect(posts).toBeTruthy()
  })

  it('enables orm stuff', async () => {
    expect(await posts.findAll()).toEqual([])
  })
})
