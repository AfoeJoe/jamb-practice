import { instanceToPlain } from 'class-transformer';
import { User } from '../../entity/User';
import { UserRepository } from './user.repository';

export const UserController = {
  async user(id: string) {
    return <User | null>instanceToPlain(
      UserRepository?.findOneBy({
        id
      })
    );
  },
  async saveNewUser(id: string) {
    return <User | null>instanceToPlain(
      UserRepository?.save({
        id
      })
    );
  }
};
