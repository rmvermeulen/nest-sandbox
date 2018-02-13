import {
  Module,
  MiddlewaresConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { GraphQLModule } from '@nestjs/graphql'
import { makeExecutableSchema } from 'graphql-tools'

import { HomeController } from './controllers/home/home.controller'
import { typeDefs } from './typedefs'
import { resolvers } from './resolvers'

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

@Module({
  controllers: [HomeController],
  imports: [GraphQLModule],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(
        graphqlExpress(req => ({
          schema: executableSchema,
          rootValue: req as any,
        })),
      )
      .forRoutes({ path: '/graphql', method: RequestMethod.ALL })
      .apply(
        graphiqlExpress(() => ({
          endpointURL: '/graphql',
        })),
      )
      .forRoutes({
        path: '/graphiql',
        method: RequestMethod.ALL,
      })
  }
}
