import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

import { Post } from '@modules/post'

@Entity()
export class Author {
  @PrimaryGeneratedColumn() id: number
  @Column() firstName: string
  @Column() lastName: string
  // @OneToMany(type => Post, prop('author'))
  posts: Post
}
