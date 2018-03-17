import { join } from 'path'

import { Test } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Post, PostService } from '@modules/post'

describe('Post Service', () => {
  let service: PostService

  beforeAll(async () => {
    const tm = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          database: ':memory:',
          entities: [join(__dirname, 'post.entity.ts')],
          synchronize: true,
          type: 'sqlite',
        }),
        TypeOrmModule.forFeature([Post]),
      ],
      components: [PostService],
    }).compile()

    service = tm.get(PostService)
  })

  it('enables orm stuff', () => {
    expect(service).toBeDefined()
  })
})
