import * as express from 'express'
import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { evolve, is } from 'ramda'

import { ApplicationModule } from './app.module'

describe('App, gql', () => {
  const server = express()
  const catsService = { findAll: () => ['test'] }

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
        const [rms, bob] = data.authors
        expect(rms).toEqual({ name: 'Rms Frms', votes: 17 })
        expect(bob).toEqual({ name: 'Bob Suxxer', votes: 2 })
      }))

  it(`query { posts { title votes } }`, () =>
    request(server)
      .get('/graphql?query={ posts { title votes } }')

      .expect(200)
      .then(({ body: { data } }) => {
        for (const post of data.posts) {
          expect(post).toHaveProperty('title')
          expect(post).toHaveProperty('votes')
        }
      }))
})
