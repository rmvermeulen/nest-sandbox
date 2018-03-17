import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Author } from '@modules/author'
import { Post } from '@modules/post'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './db.sqlite',
      entities: [Post, Author],
      synchronize: true,
      type: 'sqlite',
    }),
  ],
  exports: [TypeOrmModule],
})
export class OrmModule {}
