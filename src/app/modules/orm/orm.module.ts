import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  exports: [TypeOrmModule],
  imports: [
    TypeOrmModule.forRoot({
      database: './db.sqlite',
      entities: [__dirname + '/../**/*.entity.{ts,js}'],
      synchronize: true,
      type: 'sqlite',
    }),
  ],
})
export class OrmModule {}
