import { DataSource } from 'typeorm';
import { Attempt } from '../../entity/Attempt.js';

export const AttemptRepository = (dataSource:DataSource) => dataSource?.getRepository(Attempt).extend({});
