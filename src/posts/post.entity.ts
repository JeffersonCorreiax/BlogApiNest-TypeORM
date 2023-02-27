import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255})
  img: string;

  @Column({ length: 255})
  category: string;

  @Column({ length: 255})
  title: string;

  @Column('int')
  date: number;

  @Column('text')
  text:  string;
 
  @Column({ length: 255})
  profileimg:  string;
 
  @Column({ length: 255})
  profilename:  string;
}