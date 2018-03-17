import { Test } from '@nestjs/testing'

import { PostModule } from './post.module'

describe('Post Service', () => {
  it('does not throw', () =>
    Test.createTestingModule({
      imports: [PostModule],
    }).compile())
})
