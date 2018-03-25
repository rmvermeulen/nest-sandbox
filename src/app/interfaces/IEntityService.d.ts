import { Repository } from 'typeorm'

export interface IEntityService<T> {
  repo: Repository<T>
  findAll: Repository<T>['find']
  findOneById: Repository<T>['findOneById']
}
