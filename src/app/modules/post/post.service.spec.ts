import { Test } from '@nestjs/testing'

import { Author } from '@modules/author'
import { OrmModule } from '@modules/orm'
import { Post, PostService } from '@modules/post'

describe('Post Service', () => {
  let posts: PostService

  beforeAll(async () => {
    const tm = await Test.createTestingModule({
      imports: [OrmModule.forTest([Author, Post])],
      components: [PostService],
    }).compile()

    posts = tm.get(PostService)
    expect(posts).toBeTruthy()
  })

  it('enables orm stuff', async () => {
    expect(await posts.findAll()).toEqual([])
  })
})
