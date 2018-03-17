import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Author } from '../author'
import { Post } from '../post'

const rootOrmModule = TypeOrmModule.forRoot({
  database: './db.sqlite',
  entities: [Post, Author],
  synchronize: true,
  type: 'sqlite',
})

@Module({
  imports: [rootOrmModule],
  exports: [rootOrmModule],
})
export class OrmModule {}
