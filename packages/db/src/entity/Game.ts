import { Question } from './Question.js';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
  Relation
} from 'typeorm';
import { User } from './User';
import { Attempt } from './Attempt.js';
import { ESubject } from '../types/index.js';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int', default: 0 })
  score!: number;

  @CreateDateColumn({ name: 'start_at' })
  startedAt!: Date;

  @Column({ type: 'date', default: null, nullable: true, name: 'completed_at' })
  completedAt!: Date;

  @Column({ type: 'int', array: true })
  questions!: Array<number>;

  @Column({ type: 'enum', enum: ESubject })
  subject!: ESubject;

  @ManyToOne(() => User, (user) => user.games)
  @JoinColumn({ name: 'user_id' })
  user!: Relation<User>;

  @OneToMany(() => Attempt, (attempt) => attempt.game)
  attempts!: Relation<Attempt[]>;
}
