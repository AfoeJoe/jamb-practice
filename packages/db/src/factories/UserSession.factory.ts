import { setSeederFactory } from 'typeorm-extension';
import { UserSession } from '../entity/UserSession.js';

const UserSessionFactory = setSeederFactory(UserSession, () => {
  const user = new UserSession();
  user.id = crypto.randomUUID();
  /*   user.totalAttempt = 0;
    user.totalScore = 0; */

  return user;
});

export { UserSessionFactory };
