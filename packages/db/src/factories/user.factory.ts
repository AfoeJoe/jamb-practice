import { setSeederFactory } from 'typeorm-extension';
import { User } from '../entity/User.js';

const UserFactory = setSeederFactory(User, () => {
  const user = new User();
  //@ts-ignore
  user.id = crypto.randomUUID();
  user.totalAttempt = 0;
  user.totalScore = 0;

  return user;
});

export { UserFactory };
