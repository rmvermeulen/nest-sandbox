import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface'
import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './app/app.module'

const app: Promise<INestApplication> = NestFactory.create(ApplicationModule)
// tslint:disable-next-line no-floating-promises
app.then(instance =>
  instance.listen(3000, () =>
    console.log('Application is listening on port 3000'),
  ),
)
