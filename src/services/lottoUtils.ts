import { LottoModel } from '../models/LottoModel';
import { BallModel } from '../models/BallModel';

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

  public getRandomBallsByLotto( raffleType: LottoModel): Array<BallModel> {
    const result = [];

    while( result.length < raffleType.countBalls ) {
      const valuesSaved = result.map( item => item.value);
      console.log(valuesSaved, 'result getRandomBallsByLotto')

      const randomValue: number = Math.floor(Math.random()*raffleType.totalBalls) + 1;
      if ( valuesSaved.indexOf(randomValue) === -1 ) {
        result.push(new BallModel(randomValue));
      }
    }
    console.log(result, 'result getRandomBallsByLotto')
    return result.sort(( a, b ) => a.value - b.value );
  }

  public stringsToNumbers(singleString: string): Array<number> {
    const tempArray: Array<string> = singleString.split(',');
    return tempArray.map( item => Number(item));
  }
}
