import { runSeeders } from 'typeorm-extension';
//@ts-ignore
import { DATABASE_URL } from '$env/static/private';
import { Question } from './entity/Question.js';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { createDatabase, SeederOptions } from 'typeorm-extension';
import { User } from './entity/User.js';
import { Attempt } from './entity/Attempt.js';
import { QuestionFactory, UserFactory, AttemptFactory, GameFactory } from './factories/index.js';
import { AttemptSeeder, UserSeeder, QuestionSeeder, GameSeeder } from './seeders/index.js';
import { Game } from './entity/Game.js';

const options: DataSourceOptions & SeederOptions = {
  url: DATABASE_URL,
  type: 'postgres',
  host: '',
  port: undefined,
  username: '',
  password: '',
  database: '',
  synchronize: true,
  logging: false,
  entities: [User, Question, Attempt, Game],
  migrations: [],
  subscribers: [],
  cache: true,
  seeds: [QuestionSeeder, UserSeeder, AttemptSeeder, GameSeeder],
  factories: [UserFactory, QuestionFactory, AttemptFactory, GameFactory]
};

/* export async function createDataSource(url: string) {
  console.log('Creating data source');
  console.log({ DATABASE_URL });
  async function createDB() {
    await createDatabase({
      ifNotExist: true,
      options: options(url)
    });
  }
  await createDB();
  return new DataSource(options(url));
}
 */
async function runSeeds(dataSource: DataSource) {
  await runSeeders(dataSource);
}

await createDatabase({
  ifNotExist: true,
  options
});

const AppDataSource = new DataSource(options);

AppDataSource.initialize().then(async (dataSource) => {
  await runSeeds(dataSource);
});

export { AppDataSource };
