import { prop } from 'ramda'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Author } from '@entities/author'

@Entity()
export class Post {
  @PrimaryGeneratedColumn() id: number

  @Column() title: string

  @Column('int') votes: number

  @ManyToOne(type => Author, prop('posts'))
  author: Author
}
