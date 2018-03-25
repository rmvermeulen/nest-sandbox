import { Test } from '@nestjs/testing'
import * as express from 'express'
import { path } from 'ramda'
import * as request from 'supertest'

import { GQLModule } from '@modules/gql'

describe('Server', () => {
  let server: Express.Application

  beforeAll(async () => {
    const testModule = await Test.createTestingModule({
      imports: [GQLModule],
    })
      // .overrideComponent(database)
      // .useValue({})
      .compile()

    server = express()
    const app = testModule.createNestApplication(server)
    await app.init()
  })

  it(`serves the IDE`, () =>
    request(server)
      .get('/graphiql')
      .expect(200))

  // graphql helper
  const getQuery = (query: string) =>
    request(server)
      .post('/graphql')
      .send({ query })
      .expect(200)
      .then(path(['body', 'data']))

  it('can query Posts', () =>
    expect(
      getQuery(`{
      posts { id }
    }`),
    ).resolves.toMatchSnapshot())

  it('can query Authors', () =>
    expect(
      getQuery(`{
      authors { id }
    }`),
    ).resolves.toMatchSnapshot())

  it('can resolve arbitrarily nested queries', () =>
    expect(
      getQuery(`{
        authors {
          posts {
            author {
              posts {
                author {
                  id
                }
              }
            }
          }
        }
      }`),
    ).resolves.toMatchSnapshot())
})
