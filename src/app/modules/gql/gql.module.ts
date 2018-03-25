import {
  MiddlewaresConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { Request as Req, Response as Res } from 'express'
import { makeExecutableSchema } from 'graphql-tools'

import { resolvers } from './resolvers'
import { typeDefs } from './typedefs'

const executableSchema = makeExecutableSchema({
  resolvers,
  typeDefs,
} as any)

@Module({
  imports: [GraphQLModule],
})
export class GQLModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(
        graphqlExpress(req => ({
          rootValue: req,
          schema: executableSchema,
        })),
      )
      .forRoutes({ method: RequestMethod.ALL, path: '/graphql' })
      .apply(graphiqlExpress(() => ({ endpointURL: '/graphql' })))
      .forRoutes({
        method: RequestMethod.ALL,
        path: '/graphiql',
      })
      // route everything else to the IDE
      .apply((req: Req, res: Res) => res.redirect('/graphiql'))
      .forRoutes({ method: RequestMethod.ALL, path: '*' })
  }
}
