import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Post {
  @PrimaryGeneratedColumn() id: number

  @Column({
    type: 'text',
    nullable: true,
  })
  title: string

  @Column({
    type: 'int',
    nullable: true,
  })
  votes: number

  // @ManyToOne(type => Author, prop('posts'))
  // author: Author
}
