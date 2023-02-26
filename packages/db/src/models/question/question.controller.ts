import { instanceToPlain } from 'class-transformer';
import { QuestionRepository } from './question.repository';
import { ESubject, ISubjectSummaryDTO } from '../../types';
import { Question } from '../../entity/Question';

export const QuestionController = {
  async summary() {
    return <Promise<ISubjectSummaryDTO[]>>instanceToPlain(QuestionRepository?.getSummary());
  },
  async getRandomQuestion(subject?: ESubject, count = 5) {
    return <Promise<Question[]>>instanceToPlain(QuestionRepository.getQuestions(subject, count));
  }
};
