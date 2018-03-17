import { Test } from '@nestjs/testing'

import { SharedService } from './shared.service'
describe('Shared Service', () => {
  let service: SharedService
  beforeAll(async () => {
    const tm = await Test.createTestingModule({
      components: [SharedService],
    }).compile()

    service = tm.get(SharedService)
  })

  it('works', () => {
    expect(service).toBeTruthy()
  })
})
