import { Module } from '@nestjs/common'

import { SharedService } from './shared.service'

import { createTypedFromFn } from './typeHelpers'

const moduleTyped = createTypedFromFn(Module)
type ModuleArg = typeof moduleTyped.Args[0]

const components: ModuleArg['components'] = [SharedService]
const modules: ModuleArg['modules'] = []

@Module({
  imports: modules,
  components,
  exports: [...modules, ...components],
})
export class SharedModule {}
