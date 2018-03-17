import { Module } from '@nestjs/common'

import { HomeController } from '@controllers/home'
import { GQLModule } from '@modules/gql'
import { OrmModule } from '@modules/orm'
import { PostModule } from '@modules/post'

@Module({
  imports: [GQLModule, OrmModule, PostModule],

  controllers: [HomeController],
})
export class ApplicationModule {}
