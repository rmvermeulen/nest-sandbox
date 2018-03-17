import { Component } from '@nestjs/common'

import { createTypedFromFn } from './typeHelpers'

@Component()
export class SharedService {
  public createTypedFromFn = createTypedFromFn
}
