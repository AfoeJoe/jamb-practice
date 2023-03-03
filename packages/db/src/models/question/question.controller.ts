import { instanceToPlain } from 'class-transformer';
import { QuestionRepository } from './question.repository';
import { ESubject, ISubjectSummaryDTO } from '../../types';
import { Question } from '../../entity/Question';
import { DataSource } from 'typeorm';

export const QuestionController =  (dataSource:DataSource) => ({
  async summary() {
    return <Promise<ISubjectSummaryDTO[]>>instanceToPlain(QuestionRepository(dataSource)?.getSummary());
  },
  async getRandomQuestion(subject?: ESubject, count = 5) {
    return <Promise<Question[]>>instanceToPlain(QuestionRepository(dataSource).getQuestions(subject, count));
  }
})
