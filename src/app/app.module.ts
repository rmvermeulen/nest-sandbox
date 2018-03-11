import { Module } from '@nestjs/common'

import { HomeController } from '@controllers/home'
import { GQLModule } from '@modules/gql'

@Module({
  controllers: [HomeController],
  imports: [GQLModule],
})
export class ApplicationModule {}
