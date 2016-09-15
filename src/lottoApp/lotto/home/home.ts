import { autoinject, BindingEngine, Disposable } from 'aurelia-framework';
import FetchApi from '../../../services/fetchApi';
import LottoUtils from '../../../services/lottoUtils';
import WindowStorage from '../../../services/windowStorage';
import { LottoModel } from '../../../models/LottoModel';
import LottoRouter from '../lotto';

@autoinject
export default class Home {
  public raffleType: LottoModel;
  public combiToSave: Array<number> = [];
  public totalBalls = [];
  public subscriber: Disposable;
  public toggleLastResult: boolean = true;
  public showHideString: string;
  constructor (
    private fetchApi: FetchApi,
    private lottoUtils: LottoUtils,
    private windowStorage: WindowStorage,
    private lottoRouter: LottoRouter,
    private bindingEngine: BindingEngine,
    private element: Element
  ) {
    this.subscriber = this.bindingEngine
      .propertyObserver(this.lottoRouter, 'raffleType')
      .subscribe(this.lottoRouterData.bind(this));
      this.showHideString = this.toggleLastResult ? 'Hide' : 'Show';
  }

  public deactivate(){
    this.subscriber.dispose();
  }

  public isToggledLastResult() {
    if(this.toggleLastResult === false) {
      this.toggleLastResult = true;
    }
    this.toggleLastResult = false;
    this.showHideString = this.toggleLastResult ? 'Hide' : 'Show';
    console.log(this.toggleLastResult,this.showHideString,'skkskskskskskkskss')
  }

  public addBallToCombiToSave(ball: string) {
    const toNumber = Number(ball);
    const numberConverted: number = toNumber;
    const indexChecked = this.combiToSave.indexOf(numberConverted);

    if (this.combiToSave.indexOf(numberConverted) === -1) {
      this.combiToSave.push(numberConverted);
      this.combiToSave.sort(( a, b ) => a - b );
    } else {
      this.combiToSave.splice(indexChecked, 1);
    }
  }

  public clearAndUncheck() {
    console.log(this.element, 'balllllllllll')
    this.combiToSave = [];
    this.totalBalls.forEach(ball => ball.isChecked = false)
  }

  public saveSelectedNumbers() {
    this.windowStorage.setWindowStorage(this.raffleType.lottoID, this.combiToSave);
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

  private lottoRouterData(data: LottoModel) {
    console.log(data, 'bindingEngine')
    this.raffleType = data;
    const totalBalls: number = this.raffleType.totalBalls;
    for (let counter = 1; counter <= totalBalls; counter++) {
      this.totalBalls.push(
        {
          isChecked: false,
          value: counter
        }
      )
    }

    console.log(this.totalBalls, 'lottoRouterData totalBalls')
    return this.totalBalls;
  }

  private setCombinations() {
    this.raffleType.combinations = this.windowStorage.getWindowStorage( this.raffleType.lottoID );
  }

  private checkAfterRandValues(totalBalls: Array<any>, combiToSave: Array<number>): void {
    totalBalls.forEach(ball => {
      if(combiToSave.indexOf(ball.value) !== -1 ) {
        ball.isChecked = true;
      }
    })
  }
}
