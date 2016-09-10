import { LottoInterface } from '../interfaces/LottoInterface';

export class LottoModel implements LottoInterface {
  lottoID;
  date;
  countBalls;
  totalBalls;
  randomBalls;
  statistics;
  lastResult;
  mostRepeated;
  combinations;
}
