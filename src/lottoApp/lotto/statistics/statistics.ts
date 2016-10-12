import { autoinject, BindingEngine, Disposable } from 'aurelia-framework';
import FetchApi from '../../../services/fetchApi';
import { LottoModel } from '../../../models/LottoModel';
import LottoRouter from '../lotto';

@autoinject
export default class Statistics {
  public subscriber: Disposable;
  public raffleType: LottoModel;
  constructor(
    private lottoRouter: LottoRouter,
    private bindingEngine: BindingEngine
  ) {
      console.log(this.lottoRouter.raffleType, 'lottoRouter');
      this.subscriber = this.bindingEngine
        .propertyObserver(this.lottoRouter, 'raffleType')
        .subscribe(this.lottoRouterData.bind(this));
  }

  public deactivate(){
    this.subscriber.dispose();
  }

  public sortByIndexOrCount(type) {
    switch(type) {
      case 'index':
        return this.raffleType.statistics.sort(
          (a,b) => a.index - b.index
        );
      case 'count':
        return this.raffleType.statistics.sort(
          (a,b) => b.count - a.count
        );
    }
  }

  public addStringZero(ball) {
    return ball <= 9 ? `0${ball}` : ball;
  }

  private lottoRouterData(data: LottoModel) {
    console.log(data, 'bindingEngine')
    this.raffleType = data;
  }
}
