import { Controller, Get } from '@nestjs/common'
import { delay } from 'bluebird'

@Controller('home')
export class HomeController {
  constructor() {}

  @Get()
  async root(): Promise<string> {
    return 'home page'
  }

  @Get('secret')
  async getSomeValue() {
    await delay(100)
    return 'some value'
  }

  @Get('value2')
  async getOtherValue() {
    await delay(100)
    return 'some other value'
  }
}
