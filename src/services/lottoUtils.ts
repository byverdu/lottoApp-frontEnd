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

  public getRandomBallsByLotto(
    countBalls: number, totalBalls: number
  ): Array<number> {
    const result = [];

    console.log(countBalls,totalBalls, 'result getRandomBallsByLotto')
    while( result.length < countBalls ) {

      const randomValue: number = Math.floor(Math.random()*totalBalls) + 1;
      if ( result.indexOf(randomValue) === -1 ) {
        result.push(randomValue);
      }
    }
    console.log(result, 'result getRandomBallsByLotto')
    return result.sort(( a, b ) => a - b );
  }
}
