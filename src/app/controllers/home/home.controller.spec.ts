import { Test } from '@nestjs/testing'
import { TestingModule } from '@nestjs/testing/testing-module'
import { HomeController } from './home.controller'
import { expect } from 'chai'

describe('HomeController', () => {
  let module: TestingModule
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [HomeController],
    })
      .compile()
      .then(compiledModule => (module = compiledModule))
  })

  let controller: HomeController
  beforeEach(() => {
    controller = module.get(HomeController)
  })

  it('should exist', () => {
    expect(controller).to.exist
  })
})
