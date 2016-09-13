import { LottoModel } from '../models/LottoModel';

export default class LottoUtils {
  public getTotalBalls( lottoID: string ): number {
    const config: Object = {
      primitiva: 49,
      bonoloto: 49,
      euromillions: 50
    };
    return config[ lottoID ];
  }
  public getCountBalls( lottoID: string ): number {
    const config: Object = {
      primitiva: 6,
      bonoloto: 6,
      euromillions: 5
    };
    return config[ lottoID ];
  }

  public getRandomBallsByLotto( raffleType: LottoModel): Array<number> {
    const result = [];

    console.log(raffleType.countBalls,raffleType.totalBalls, 'result getRandomBallsByLotto')
    while( result.length < raffleType.countBalls ) {

      const randomValue: number = Math.floor(Math.random()*raffleType.totalBalls) + 1;
      if ( result.indexOf(randomValue) === -1 ) {
        result.push(randomValue);
      }
    }
    console.log(result, 'result getRandomBallsByLotto')
    return result.sort(( a, b ) => a - b );
  }

  public itemsToString( combinations: Array<number> ): string {
    if (combinations === undefined ) return;
    return combinations.join(',');
  }

  public stringsToNumbers(singleString: string): Array<number> {
    const tempArray: Array<string> = singleString.split(',');
    return tempArray.map( item => Number(item));
  }
}
