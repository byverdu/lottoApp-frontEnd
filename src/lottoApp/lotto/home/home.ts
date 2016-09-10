import { autoinject, BindingEngine, Disposable } from 'aurelia-framework';
import FetchApi from '../../../services/fetchApi';
import LottoUtils from '../../../services/lottoUtils';
import WindowStorage from '../../../services/windowStorage';
import { LottoModel } from '../../../models/LottoModel';
import LottoRouter from '../lotto';

@autoinject
export default class Home {
  public raffleType: LottoModel;
  public combiToSave: Array<number>;
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

  deactivate(){
    this.subscriber.dispose();
  }

  public saveSelectedNumbers() {
    const randToString: string = this.lottoUtils.itemsToString(this.combiToSave);
    if ( randToString !== undefined ) {
      this.windowStorage.setWindowStorage(this.raffleType.lottoID, randToString);
      console.log(this.raffleType, randToString, 'saveSelectedNumbers');
      this.setCombinations();
    }
  }

  public getRandomBallsByLotto() {
    this.combiToSave = this.lottoUtils.getRandomBallsByLotto(this.raffleType);
    console.log(this.combiToSave, 'getRandomBallsByLotto');
  }

  private setLottoProps(lotto: LottoModel, ...args): LottoModel {
    console.log(args, 'args setLottoProps')
    return Object.assign( lotto, {
      totalBalls: args[0],
      countBalls: args[1],
      combinations: args[2]
    })
  }

  private lottoRouterData(data) {
    console.log(data, 'bindingEngine')
    this.raffleType = data;
    const totalBalls = this.lottoUtils.getTotalBalls( data.lottoID );
    const countBalls = this.lottoUtils.getCountBalls( data.lottoID );
    const combinations = this.windowStorage.getWindowStorage( data.lottoID );
    this.setLottoProps(
      this.raffleType,
      totalBalls,
      countBalls,
      combinations
    );
  }

  private setCombinations() {
    this.raffleType.combinations = this.windowStorage.getWindowStorage( this.raffleType.lottoID );
  }
}
