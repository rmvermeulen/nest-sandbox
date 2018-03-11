import { NestFactory } from '@nestjs/core'

import { ApplicationModule } from './app/app.module'
;(async () => {
  const server = await NestFactory.create(ApplicationModule)
  await server.listen(3000)
  console.log('Application is listening on port 3000')
})().catch(console.error)
