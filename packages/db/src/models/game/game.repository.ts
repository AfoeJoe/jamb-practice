import { AttemptRepository } from './../attempt/attempt.repository';
import { UserController } from './../user/user.controller';
import { Game } from '../../entity/Game.js';
import { CheckAnswerDTO, ESubject } from '../../types/index.js';
import { QuestionController } from '../question/question.controller';
import { AppDataSource } from '../../data-source';
import { Question } from '../../entity/Question';
import { QuestionRepository } from '../question/question.repository';

export const GameRepository = AppDataSource?.getRepository(Game).extend({
  async initGame(subject: ESubject, userId: string) {
    const questions = await QuestionController.getRandomQuestion(subject, 5);
    const game = new Game();
    game.subject = subject;
    const user = await UserController.user(userId);
    if (user) {
      game.user = user;
    } else throw new Error('User not found');
    game.questions = questions.map(({ id }) => id);
    // game.score = 0;

    const { identifiers } = await this.createQueryBuilder()
      .insert()
      .into(Game)
      .values(game)
      .returning('id')
      .execute();
    // const gameSaved = await this.save(game2[0]);
    return { questions, gameId: identifiers[0].id };
  },
  async registerScore(arg: CheckAnswerDTO) {
    const game = await this.findOneBy({
      id: arg.gameId
    });

    const correctAnswer = await QuestionRepository.findOne({
      where: { id: arg.questionId }
    });

    if (game) {
      AttemptRepository.save({
        game,
        question: correctAnswer ?? undefined,
        userAnswer: arg.selected
      });

      if (correctAnswer?.correct === arg.selected) game.score++;
      this.save(game);
    }
    return correctAnswer?.correct;
  }
});
