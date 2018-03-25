import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as config from 'config'
import { merge } from 'ramda'
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions'

const ormConfig = config.get<SqliteConnectionOptions>('typeorm')

@Module({})
export class OrmModule {
  static forRoot() {
    return TypeOrmModule.forRoot(ormConfig)
  }

  // tslint:disable-next-line ban-types
  static forTest(entities?: Function[]) {
    const options: SqliteConnectionOptions = entities
      ? merge(ormConfig, { entities })
      : ormConfig

    const typeOrmModule = TypeOrmModule.forRoot(options)

    const ormWithFeatures = [typeOrmModule, TypeOrmModule.forFeature(entities)]
    return {
      exports: ormWithFeatures,
      module: OrmModule,
      modules: ormWithFeatures,
    }
  }
}
