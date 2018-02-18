import {
  MiddlewaresConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import { HomeController } from './controllers/home/home.controller'
import { resolvers } from './resolvers'
import { typeDefs } from './typedefs'

const executableSchema = makeExecutableSchema({
  resolvers,
  typeDefs,
} as any)

@Module({
  controllers: [HomeController],
  imports: [GraphQLModule],
})
export class ApplicationModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(
        graphqlExpress(req => ({
          rootValue: req,
          schema: executableSchema,
        })),
      )
      .forRoutes({ path: '/graphql', method: RequestMethod.ALL })
      .apply(
        graphiqlExpress(() => ({
          endpointURL: '/graphql',
        })),
      )
      .forRoutes({
        method: RequestMethod.ALL,
        path: '/graphiql',
      })
  }
}
