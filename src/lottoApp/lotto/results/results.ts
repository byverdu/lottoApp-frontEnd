import { autoinject, BindingEngine, Disposable } from 'aurelia-framework';
import { LottoModel } from '../../../models/LottoModel';
import LottoUtils from '../../../services/lottoUtils';
import LottoRouter from '../lotto';

@autoinject
export default class Results {
  public subscriber: Disposable;
  public raffleType: LottoModel;
  public lastResult: Array<number>;
  constructor(
    private lottoUtils: LottoUtils,
    private lottoRouter: LottoRouter,
    private bindingEngine: BindingEngine
  ) {
      this.raffleType = lottoRouter.raffleType;
      this.subscriber = this.bindingEngine
        .propertyObserver(this.lottoRouter, 'raffleType')
        .subscribe(this.lottoRouterData.bind(this));
  }

  private lottoRouterData(data) {
    this.raffleType = data;
    // this.lastResult = data.combinations.map(item => {
    //   return this.lottoUtils.stringsToNumbers(item);
    // })
    console.log(data, this.lastResult, 'bindingEngine')
  }
}
