import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

// import { Post } from '@modules/post'

@Entity('author')
export class Author {
  @PrimaryGeneratedColumn() id: number

  @Column('text', {
    nullable: true,
  })
  firstName: string

  @Column('text', {
    nullable: true,
  })
  lastName: string

  // @OneToMany(type => Post, prop('author'))
  // posts: Post
}
