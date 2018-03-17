import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Author } from './author.entity'
import { AuthorService } from './author.service'

const AuthorFeature = TypeOrmModule.forFeature([Author])

@Module({
  imports: [AuthorFeature],
  components: [AuthorService],
  exports: [AuthorService, AuthorFeature],
})
export class AuthorModule {}
