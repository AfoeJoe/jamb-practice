import { AppDataSource } from '../../data-source.js';
import { User } from '../../entity/User.js';

export const UserRepository = AppDataSource?.getRepository(User).extend({});
