export default class LottoUtils {
  public getCountBalls( lottoID: string ): number {
    const config: Object = {
      primitiva: 49,
      bonoloto: 49,
      euromillions: 50
    };
    return config[ lottoID ];
  }
}
