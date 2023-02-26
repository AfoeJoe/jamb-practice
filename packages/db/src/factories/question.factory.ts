import { Question } from './../entity/Question';
import { setSeederFactory } from 'typeorm-extension';
import { ESubject } from '../types';

const QuestionFactory = setSeederFactory(Question, (faker) => {
  const question = new Question();

  question.question = faker.lorem.lines(Math.floor(Math.random() * 2 + 1));
  question.slug = faker.helpers.slugify(question.question);
  question.answers = [...Array(4).keys()].map((_) =>
    faker.lorem.sentence(Math.floor(Math.random() * 3 + 1))
  );
  question.correct = faker.helpers.arrayElement([0, 1, 2, 3]);
  question.media = {
    img: faker.image.technics(333, 333),
    mobile: faker.image.technics(333, 333)
  };
  question.description = faker.lorem.paragraph(1);
  question.subject = faker.helpers.arrayElement(Object.values(ESubject));

  return question;
});

export { QuestionFactory };
