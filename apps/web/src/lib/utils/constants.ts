import { ESubject, type GameStore, type ISubjectData } from './types';

export const SUBJECTS_DATA: Record<ESubject, ISubjectData> = {
  [ESubject.Maths]: {
    iconName: 'maths.png',
    totalQuestions: 2200,
    name: 'Maths'
  },
  [ESubject.English]: {
    iconName: 'english.png',
    totalQuestions: 2200,
    name: 'English'
  },
  [ESubject.Physics]: {
    iconName: 'physics.png',
    totalQuestions: 200,
    name: 'Physics'
  },
  [ESubject.Chemistry]: {
    iconName: 'chemistry.png',
    totalQuestions: 2200,
    name: 'Chemistry'
  },
  [ESubject.Biology]: {
    iconName: 'biology.png',
    totalQuestions: 220,
    name: 'Biology'
  }
};

export const INITIAL_DATA: GameStore = {
  gameId: null,
  cIdx: 0,
  questions: [],
  answers: [],
  selected: []
};
