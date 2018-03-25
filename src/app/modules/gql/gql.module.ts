import {
  MiddlewaresConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { Request as Req, Response as Res } from 'express'

@Module({
  imports: [GraphQLModule],
})
export class GQLModule implements NestModule {
  constructor(private readonly graphQLFactory: GraphQLFactory) {}

  public configure(consumer: MiddlewaresConsumer) {
    const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql')
    const schema = this.graphQLFactory.createSchema({ typeDefs })

    consumer
      .apply(
        graphqlExpress(req => ({
          schema,
          rootValue: req,
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
