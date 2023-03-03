import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { UserSession } from '../entity/UserSession.js';

export class UserSessionSeeder implements Seeder {
  public async run(_dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
    const userSessionFactory = factoryManager.get(UserSession);

    userSessionFactory.saveMany(10);
  }
}
