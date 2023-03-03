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
import { UserSession } from './UserSession';
import { Attempt } from './Attempt.js';
import { ESubject } from '../types/index.js';

@Entity('game')
export class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int', default: 0 })
  score!: number;

  @CreateDateColumn({ name: 'start_at' })
  startedAt!: Date;

  @Column({ type: 'timestamptz', default: null, nullable: true, name: 'completed_at' })
  completedAt!: Date;

  @Column({ type: 'int', array: true })
  questions!: Array<number>;

  @Column({ type: 'enum', enum: ESubject })
  subject!: ESubject;

  @ManyToOne(() => UserSession, (userSession) => userSession.games)
  @JoinColumn({ name: 'user_id' })
  user!: Relation<UserSession>;

  @OneToMany(() => Attempt, (attempt) => attempt.game)
  attempts!: Relation<Attempt[]>;
}
