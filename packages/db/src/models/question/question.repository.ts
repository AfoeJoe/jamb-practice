import { Question } from './../../entity/Question';
import { ESubject, ISubjectSummaryDTO } from '../../types';
import { AppDataSource } from '../../data-source';

export const QuestionRepository = AppDataSource?.getRepository(Question).extend({
  getSummary() {
    // return this.find();
    return (
      this.createQueryBuilder('question')
        .select('question.subject', 'subjectCount')
        .addSelect('COUNT(*)', 'count')
        .groupBy('question.subject')
        //   .cache(60000)
        .getRawMany<ISubjectSummaryDTO>()
    );
  },
  getQuestions(subject?: ESubject, count = 5) {
    return this.createQueryBuilder('question')
      .where({
        ...(subject
          ? {
              subject: subject
            }
          : {})
      })
      .limit(count)
      .orderBy('RANDOM()')
      .getMany();
  }
});
