import { type GameStore, INITIAL_DATA } from '$lib/utils';
import type { IInitGameDTO } from 'db/src/types';
import type { Writable } from 'svelte/store';
import { localStorageStore } from './localStorage';

function createGame(): Writable<GameStore> & {
  init: (arg: IInitGameDTO) => void;
  select: (answerArg: number, selectedArg: number) => void;
  next(): void;
} {
  const { subscribe, set, update } = localStorageStore<GameStore>('game', INITIAL_DATA);

  function init(arg: IInitGameDTO) {
    if (arg.questions?.length < 1) throw new Error('Incorrect Data');

    const gameData: GameStore = {
      ...INITIAL_DATA,
      ...arg,
      answers: arg.questions.map(() => undefined),
      selected: arg.questions.map(() => undefined)
    };
    set(gameData);
  }

  function select(answerArg: number, selectedArg: number) {
    update((n) => {
      const { selected, cIdx, answers } = n;
      selected[cIdx] = selectedArg;
      answers[cIdx] = answerArg;
      
      return { ...n, selected, answers };
    });
  }

  function next() {
    update((n) => {
      const { cIdx } = n;
      return { ...n, cIdx: cIdx + 1 };
    });
    /*   setTimeout(function() {
      if (cIdx< quiz.data.length) {
          quiz.draw();
      } else {
          quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
          quiz.hAns.innerHTML = '<a class="m-btn-white mt-4" style="left: calc(50% - 16px); margin: 0 16px; position: absolute; transform: translate(calc(-50% - 0.5px),calc(-50% - 0.5px)); width: 40%; text-align: center; background: #f34b4b; color: #fff; font-size: 24px;" href="https://www.wordscoach.com/quiz">Play again</a>';
      }
  }, 1000); */
  }
  return { subscribe, init, select, set, update, next };
}

export const game$ = createGame();
