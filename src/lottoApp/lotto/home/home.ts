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
  public subscriber: Disposable;
  constructor (
    private fetchApi: FetchApi,
    private lottoUtils: LottoUtils,
    private windowStorage: WindowStorage,
    private lottoRouter: LottoRouter,
    private bindingEngine: BindingEngine,
    private element: Element
  ) {
    this.raffleType = lottoRouter.raffleType;
    this.subscriber = this.bindingEngine
    .propertyObserver(this.lottoRouter, 'raffleType')
    .subscribe(this.lottoRouterData.bind(this));
  }

  public addBallToCombiToSave(ball) {
    const toNumber = Number(ball);
    const numberConverted: number = toNumber + 1;
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
    const x = this.element.querySelectorAll('.test:checked');
    [].forEach.call(x, item => item.checked = false);
    this.combiToSave = [];
  }

  deactivate(){
    this.subscriber.dispose();
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
    console.log(this.combiToSave, 'getRandomBallsByLotto');
  }

  private lottoRouterData(data) {
    console.log(data, 'bindingEngine')
    this.raffleType = data;
  }

  private setCombinations() {
    this.raffleType.combinations = this.windowStorage.getWindowStorage( this.raffleType.lottoID );
  }
}
