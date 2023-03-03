import { Entity, PrimaryColumn, CreateDateColumn, OneToMany, Relation } from 'typeorm';
import { Game } from './Game.js';

@Entity('user')
export class UserSession {
  @PrimaryColumn('uuid')
  id!: string;

  @CreateDateColumn({ name: 'created_at', type: 'date' })
  createdAt!: Date;

  @OneToMany(() => Game, (game) => game.user)
  games!: Relation<Game[]>;
}
