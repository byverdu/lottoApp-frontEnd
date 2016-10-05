import { autoinject, BindingEngine, Disposable } from 'aurelia-framework';
import FetchApi from '../../../services/fetchApi';
import LottoUtils from '../../../services/lottoUtils';
import WindowStorage from '../../../services/windowStorage';
import { LottoModel } from '../../../models/LottoModel';
import { BallModel } from '../../../models/BallModel';
import LottoRouter from '../lotto';

@autoinject
export default class Home {
  public raffleType: LottoModel;
  public combiToSave: Array<BallModel> = [];
  public mostRepeated: Array<number> = [];
  public totalBalls: Array<BallModel> = [];
  public subscriber: Disposable;
  constructor (
    private fetchApi: FetchApi,
    private lottoUtils: LottoUtils,
    private windowStorage: WindowStorage,
    private lottoRouter: LottoRouter,
    private bindingEngine: BindingEngine
  ) {
    this.subscriber = this.bindingEngine
      .propertyObserver(this.lottoRouter, 'raffleType')
      .subscribe(this.lottoRouterData.bind(this));
  }

  public get getCountChecked(): number {
    return this.totalBalls.filter(item => item.isChecked).length;
  }

  public deactivate(){
    this.subscriber.dispose();
  }

  public addBallToCombiToSave(ball) {
    if (this.getCountChecked > this.raffleType.countBalls) {
      const arrIndex: number = ball.value-1;
      this.totalBalls[arrIndex].isChecked = false;
      return;
    }

    const numberConverted: number = Number(ball.value);
    const ballValues: Array<number> = this.getBallValues();
    const lastZeroItem: number = ballValues.lastIndexOf(0);
    const indexChecked: number = ballValues.indexOf(numberConverted);

    if (indexChecked === -1) {
      const tempObject = {
        value: ball.value,
        isChecked: ball.isChecked
      }
      Object.assign(this.combiToSave[lastZeroItem], tempObject);
      this.combiToSave.sort((a,b) => a.value - b.value)
    } else {
      this.combiToSave.splice(indexChecked, 1, new BallModel(0));
      this.combiToSave.sort((a,b) => a.value - b.value)
    }
    console.log(this.combiToSave,'addBallToCombiToSave')
  }

  public clearAndUncheck() {
    this.combiToSave = this.setArrayForBall(this.raffleType.countBalls, false);
    this.totalBalls.forEach(ball => ball.isChecked = false)
  }

  public saveSelectedNumbers() {
    const ballValues: Array<number> = this.getBallValues();
    this.windowStorage.setWindowStorage(this.raffleType.lottoID, ballValues);
    console.log(this.raffleType, 'saveSelectedNumbers');
    this.setCombinations();
    this.clearAndUncheck();
  }

  public getRandomBallsByLotto() {
    this.clearAndUncheck();
    this.combiToSave = this.lottoUtils.getRandomBallsByLotto(this.raffleType);
    this.checkAfterRandValues(this.totalBalls, this.combiToSave);
    console.log(this.combiToSave, 'getRandomBallsByLotto');
  }

  public addStringZero(ball) {
    return ball <= 9 ? `0${ball}` : ball;
  }

  private lottoRouterData(data: LottoModel) {
    // console.log(data, 'bindingEngine')
    this.raffleType = data;
    this.mostRepeated = this.lottoUtils.stringsToNumbers(data.mostRepeated);
    this.combiToSave = this.setArrayForBall(data.countBalls, false);
    this.totalBalls = this.setArrayForBall(data.totalBalls, true);
  }

  private setCombinations() {
    this.raffleType.combinations = this.windowStorage.getWindowStorage( this.raffleType.lottoID );
  }

  private checkAfterRandValues(totalBalls: Array<BallModel>, combiToSave: Array<BallModel>): void {
    const ballValues: Array<number> = this.getBallValues();
    totalBalls.forEach(ball => {
      if(ballValues.indexOf(ball.value) !== -1 ) {
        ball.isChecked = true;
      }
    })
  }

  private getBallValues(): Array<number> {
    return this.combiToSave.map(combi => combi.value );
  }

  private setArrayForBall(ballCount: number, checker: boolean): Array<BallModel> {
    const tempArray = [];
    for (let counter = 1; counter <= ballCount; counter++) {
      const isToCount: number = checker ? counter : 0;
      tempArray.push(
        new BallModel(isToCount)
      )
    }
    return tempArray;
  }
}
