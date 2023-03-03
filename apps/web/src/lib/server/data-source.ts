import { config } from 'db';
import dotenv from "dotenv";

import { DataSource, type DataSourceOptions } from 'typeorm';
import { createDatabase, runSeeders, type SeederOptions } from 'typeorm-extension';

dotenv.config()

const options: DataSourceOptions & SeederOptions = {
  url: process.env.DATABASE_URL,
  type: 'postgres',
  host: '',
  port: undefined,
  username: '',
  password: '',
  database: '',
  logging: false,
  entities: config.entities,
  migrations: [],
  subscribers: [],
  seeds: config.seeds,
  factories: config.factories,
  synchronize: true,
  migrationsRun: true,
};

await createDatabase({
  ifNotExist: true,
  options
}); 

const AppDataSource = new DataSource({
  url: process.env.DATABASE_URL,
  type: 'postgres',
  host: '',
  port: undefined,
  username: '',
  password: '',
  database: '',
  logging: false,
  entities: config.entities,
  migrations: [],
  subscribers: [],
  synchronize: true,
  factories: config.factories,
  seeds: config.seeds,
  migrationsRun: true,
} as any);

async function initDB(){
  if(!AppDataSource.isInitialized){
    await AppDataSource.initialize();
    // await runSeeders(AppDataSource);

  }
}


await createDatabase({
  ifNotExist: true,
  options
}); 


// await initDB()
// console.log({syn:AppDataSource.synchronize, entity:AppDataSource.options})
// await runSeeders(AppDataSource);

export { AppDataSource, initDB };

