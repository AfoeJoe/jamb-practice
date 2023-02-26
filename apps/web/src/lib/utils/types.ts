import type { Question } from 'db/src/entity/Question';

export enum ESubject {
  Maths = 'maths',
  English = 'english',
  Chemistry = 'chemistry',
  Physics = 'physics',
  Biology = 'biology'
}

export interface ISubjectData {
  totalQuestions: number;
  name: string;
  iconName: string;
}

export interface GameStore {
  gameId: number | null;
  cIdx: number;
  questions: Question[];
  answers: (number | undefined)[];
  selected: (number | undefined)[];
  subject?: ESubject;
}

export interface CheckAnswerDTO {
  selected: number;
  cIdx: number;
  gameId: number;
  questionId: number;
}
