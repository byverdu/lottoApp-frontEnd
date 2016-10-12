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
      const randomValue: number = Math.floor(Math.random()*raffleType.totalBalls) + 1;

      if ( valuesSaved.indexOf(randomValue) === -1 ) {
        const ball = new BallModel(randomValue);
        ball.isChecked = true;
        result.push(ball);
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
