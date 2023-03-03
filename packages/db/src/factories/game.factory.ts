import { ESubject } from './../types/index';
import { setSeederFactory } from 'typeorm-extension';
import { Game } from '../entity/Game.js';

const GameFactory = setSeederFactory(Game, (faker) => {
  const game = new Game();
  game.subject = faker.helpers.arrayElement(Object.values(ESubject));
  game.score = 0;

  return game;
});

export { GameFactory };
