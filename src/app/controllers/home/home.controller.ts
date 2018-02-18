import { Controller, Get } from '@nestjs/common'
import { delay } from 'bluebird'

@Controller('home')
export class HomeController {
  @Get()
  public async root(): Promise<string> {
    return 'home page'
  }

  @Get('secret')
  public async getSomeValue() {
    await delay(100).then(() => true)
    return 'some value'
  }

  @Get('value2')
  public async getOtherValue() {
    await delay(100)
    return 'some other value'
  }
}
