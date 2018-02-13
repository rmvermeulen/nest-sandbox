import {
  Module,
  MiddlewaresConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { graphqlExpress } from 'apollo-server-express'
import { GraphQLModule } from '@nestjs/graphql'
import { HomeController } from './controllers/home/home.controller'

@Module({
  controllers: [HomeController],
  imports: [GraphQLModule],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(
        graphqlExpress(req => ({
          schema: {},
          rootValue: req,
        })),
      )
      .forRoutes({ path: '/graphql', method: RequestMethod.ALL })
  }
}
