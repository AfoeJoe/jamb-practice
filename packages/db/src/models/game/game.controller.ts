import { instanceToPlain } from 'class-transformer';
import { ESubject, IInitGameDTO, CheckAnswerDTO } from '../../types';
import { GameRepository } from './game.repository';
import { DataSource } from 'typeorm';

export const GameController = (dataSource:DataSource) =>  ({
  async initGame(subject: ESubject, userId: string) {
    return <Promise<IInitGameDTO>>instanceToPlain(GameRepository(dataSource).initGame(subject, userId));
  },
  async getAnswer(arg: CheckAnswerDTO) {
    return <Promise<number | undefined>>instanceToPlain(GameRepository(dataSource).registerScore(arg));
  }
})
