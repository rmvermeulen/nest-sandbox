import { Module } from '@nestjs/common'

import { HomeController } from '@controllers/home'
import { AuthorModule } from '@modules/author'
import { GQLModule } from '@modules/gql'
import { PostModule } from '@modules/post'
import { SharedModule } from '@modules/shared'

@Module({
  imports: [GQLModule, SharedModule, PostModule, AuthorModule],
  controllers: [HomeController],
})
export class ApplicationModule {}
