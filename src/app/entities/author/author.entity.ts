import { prop } from 'ramda'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Post } from '../post/post.entity'

@Entity()
export class Author {
  @PrimaryGeneratedColumn() id: number
  @Column() firstName: string
  @Column() lastName: string
  @OneToMany(type => Post, prop('author'))
  posts: Post
}
