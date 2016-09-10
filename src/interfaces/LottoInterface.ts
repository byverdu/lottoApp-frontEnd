export interface LottoInterface {
  lottoID: string;
  date: string;
  countBalls: number;
  totalBalls: number;
  randomBalls: Array<number>;
  statistics: Array<Object>;
  lastResult: string;
  mostRepeated: string;
  combinations: Array<string>
}
