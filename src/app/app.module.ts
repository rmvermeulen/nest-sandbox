import { Module } from '@nestjs/common'

import { HomeController } from './controllers/home/home.controller'
import { GQLModule } from './modules/gql/gql.module'

@Module({
  controllers: [HomeController],
  imports: [GQLModule],
})
export class ApplicationModule {}
