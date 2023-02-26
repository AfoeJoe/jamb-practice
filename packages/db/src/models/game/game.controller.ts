import { AttemptRepository } from './../attempt/attempt.repository';
import { Attempt } from './../../entity/Attempt';
import { QuestionRepository } from './../question/question.repository';
import { instanceToPlain } from 'class-transformer';
import { ESubject, IInitGameDTO, CheckAnswerDTO } from '../../types';
import { GameRepository } from './game.repository';
import { Question } from '../../entity/Question';

export const GameController = {
  async initGame(subject: ESubject, userId: string) {
    return <Promise<IInitGameDTO>>instanceToPlain(GameRepository.initGame(subject, userId));
  },
  async getAnswer(arg: CheckAnswerDTO) {
    return <Promise<number | undefined>>instanceToPlain(GameRepository.registerScore(arg));
  }
};
