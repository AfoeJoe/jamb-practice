import { AttemptRepository } from './../attempt/attempt.repository';
import { UserSessionController } from '../userSession/userSession.controller';
import { Game } from '../../entity/Game.js';
import { CheckAnswerDTO, ESubject } from '../../types/index.js';
import { QuestionController } from '../question/question.controller';
import { QuestionRepository } from '../question/question.repository';
import { DataSource } from 'typeorm';

export const GameRepository =  (dataSource:DataSource) => dataSource?.getRepository(Game).extend({
  async initGame(subject: ESubject, userId: string) {
    const questions = await QuestionController(dataSource).getRandomQuestion(subject, 5);
    const game = new Game();
    game.subject = subject;
    const user = await UserSessionController(dataSource).user(userId);
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
  async registerScore({selected, gameId,questionId}: CheckAnswerDTO) {
    const game = await this.findOneBy({
      id: gameId
    });

    const correctAnswer = await QuestionRepository(dataSource).findOne({
      where: { id: questionId }
    });
    console.log({game,correctAnswer,selected})

    if (game) {
      AttemptRepository(dataSource).save({
        game,
        question: correctAnswer ?? undefined,
        userAnswer: selected
      });
      console.log("Correct answer1")

      if (correctAnswer?.correct === +selected) {
        console.log("Correct answer")
        game.score++;
      }
      if (game.questions.at(-1) === +questionId){
        game.completedAt = new Date()
      }
      this.save(game);
    }
    return correctAnswer?.correct;
  }
});
