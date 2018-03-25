import { Module } from '@nestjs/common'

import { AuthorModule } from '@modules/author'
import { GQLModule } from '@modules/gql'
import { OrmModule } from '@modules/orm'
import { PostModule } from '@modules/post'

@Module({
  imports: [
    // SharedModule,
    // libs
    GQLModule,
    OrmModule.forRoot(),
    // features
    PostModule,
    AuthorModule,
  ],
})
export class ApplicationModule {}
