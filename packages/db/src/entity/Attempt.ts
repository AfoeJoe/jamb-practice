import { Question } from './Question.js';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
  Relation
} from 'typeorm';
import { Game } from './Game.js';

@Entity()
export class Attempt {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'user_answer', type: 'int' })
  userAnswer!: number;

  @CreateDateColumn({ name: 'created_at', type: 'date' })
  createdAt!: Date;

  @ManyToOne(() => Question, (question) => question.attempts)
  @JoinColumn({ name: 'question_id' })
  question!: Relation<Question>;

  @ManyToOne(() => Game, (game) => game.attempts, {
    cascade: true
  })
  @JoinColumn({ name: 'game_id' })
  game!: Relation<Game>;
}
