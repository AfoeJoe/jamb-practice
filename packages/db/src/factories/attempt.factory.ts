import { Attempt } from './../entity/Attempt.js';
import { setSeederFactory } from 'typeorm-extension';

const AttemptFactory = setSeederFactory(Attempt, (faker) => {
  const attempt = new Attempt();
  // attempt.round = parseInt(faker.random.numeric(1));
  attempt.userAnswer = faker.helpers.arrayElement([0, 1, 2, 3]);

  return attempt;
});

export { AttemptFactory };
