import { Module } from '@nestjs/common'
import { HomeController } from './controllers/home/home.controller'

@Module({
  controllers: [HomeController],
})
export class ApplicationModule {}
