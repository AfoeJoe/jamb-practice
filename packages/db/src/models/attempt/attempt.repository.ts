import { AppDataSource } from '../../data-source.js';
import { Attempt } from '../../entity/Attempt.js';

export const AttemptRepository = AppDataSource?.getRepository(Attempt).extend({});
