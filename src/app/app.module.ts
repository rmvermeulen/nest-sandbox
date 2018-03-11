import { Module } from '@nestjs/common'

import { HomeController } from '@controllers/home'
import { GQLModule } from '@modules/gql'
import { OrmModule } from '@modules/orm'

@Module({
  controllers: [HomeController],
  imports: [GQLModule, OrmModule],
})
export class ApplicationModule {}
