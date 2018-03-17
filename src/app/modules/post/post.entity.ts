import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

// import { Author } from '@modules/author'
@Entity()
export class Post {
  @PrimaryGeneratedColumn() id: number

  @Column('text', {
    nullable: true,
  })
  title: string

  @Column('int', {
    nullable: true,
  })
  votes: number

  // @ManyToOne(type => Author, prop('posts'))
  // author: Author
}
