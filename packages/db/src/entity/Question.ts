import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation } from 'typeorm';
import { AnswerList, ESubject, IMedia } from '../types/index.js';
import { Attempt } from './Attempt.js';

@Entity('question')
export class Question {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar')
  slug!: string;

  @Column('varchar')
  question!: string;

  @Column({
    type: 'varchar',
    array: true
  })
  answers!: AnswerList;

  @Column('int')
  correct!: number;

  @Column({
    type: 'text'
  })
  description!: string;

  @Column({
    type: 'jsonb'
  })
  media!: IMedia;

  @Column({ type: 'enum', enum: ESubject })
  subject!: ESubject;

  @OneToMany(() => Attempt, (attempt) => attempt.question)
  attempts!: Relation<Attempt[]>;
}
