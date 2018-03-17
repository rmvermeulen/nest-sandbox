import { Test } from '@nestjs/testing'
import * as express from 'express'
import * as request from 'supertest'

import { ApplicationModule } from './app.module'

describe('App, gql', () => {
  const server = express()

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ApplicationModule],
    }).compile()

    const app = module.createNestApplication(server)
    await app.init()
  })

  it(`query { authors { name votes } }`, () =>
    request(server)
      .get('/graphql?query={ authors { name votes } }')
      .expect(200)
      .then(({ body: { data } }) => {
        for (const author of data.authors) {
          expect(author).toBeTruthy()
          expect(author).toHaveProperty('name')
          expect(author).toHaveProperty('votes')
        }
      }))

  it(`query { posts { title votes } }`, () =>
    request(server)
      .get('/graphql?query={ posts { title votes } }')

      .expect(200)
      .then(({ body: { data } }) => {
        for (const post of data.posts) {
          expect(post).toBeTruthy()
          expect(post).toHaveProperty('title')
          expect(post).toHaveProperty('votes')
        }
      }))
})
