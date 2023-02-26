import { Game } from './../entity/Game';
import { Question } from './../entity/Question';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Attempt } from '../entity/Attempt.js';
import { User } from '../entity/User.js';

export class AttemptSeeder implements Seeder {
  public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
    const [attemptFactory, gameFactory] = [factoryManager.get(Attempt), factoryManager.get(Game)];
    const [questionRepo, attemptRepo, userRepo, gameRepo] = [
      dataSource.getRepository(Question),
      dataSource.getRepository(Attempt),
      dataSource.getRepository(User),
      dataSource.getRepository(Game)
    ];
    async function getQuestion() {
      return questionRepo.createQueryBuilder('question').select().orderBy('RANDOM()').getOne();
    }

    async function getUser() {
      return userRepo.createQueryBuilder('user').select().orderBy('RANDOM()').getOne();
    }

    for (let i = 0; i < 20; i++) {
      const user = (await getUser()) || undefined;
      const game = await gameFactory.make({
        user,
        startedAt: new Date()
      });

      for (let j = 0; j < 5; j++) {
        const question = (await getQuestion()) || undefined;
        const attempt = await attemptFactory.make({
          question,
          game
        });

        if (attempt.userAnswer === question?.correct) {
          game.score++;
        }
        game.completedAt = new Date();
        if (question?.id) game.questions = [...(game.questions || []), question.id];
        await attemptRepo.save(attempt);
      }
      await gameRepo.save(game);
    }
  }
}
