import { Question } from '../entity/Question';

export interface IMedia {
  mobile: string;
  img: string;
}

export type Answer = string;

export type AnswerList = Answer[];

export enum ESubject {
  Maths = 'maths',
  English = 'english',
  Chemistry = 'chemistry',
  Physics = 'physics',
  Biology = 'biology'
}

export interface ISubjectSummaryDTO {
  subjectCount: ESubject;
  count: number;
}

export interface IInitGameDTO {
  questions: Question[];
  gameId: number;
  subject: ESubject;
}

export interface CheckAnswerDTO {
  selected: number;
  cIdx: number;
  gameId: number;
  questionId: number;
}
