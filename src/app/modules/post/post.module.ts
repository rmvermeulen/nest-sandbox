import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Post } from './post.entity'
import { PostService } from './post.service'

const PostFeature = TypeOrmModule.forFeature([Post])

@Module({
  imports: [PostFeature],
  components: [Post, PostService],
  exports: [PostService, PostFeature],
})
export class PostModule {}
