import { Question } from './../entity/Question.js';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class QuestionSeeder implements Seeder {
  public async run(_dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
    const questionFactory = factoryManager.get(Question);

    questionFactory.saveMany(100);
  }
}
