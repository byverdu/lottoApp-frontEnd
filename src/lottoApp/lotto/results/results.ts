import { autoinject, BindingEngine, Disposable } from 'aurelia-framework';
import { LottoModel } from '../../../models/LottoModel';
import LottoRouter from '../lotto';

@autoinject
export default class Results {
  public subscriber: Disposable;
  public raffleType: LottoModel;
  constructor(
    private lottoRouter: LottoRouter,
    private bindingEngine: BindingEngine
  ) {
      this.lottoRouter = lottoRouter;
      console.log(this.lottoRouter.raffleType, 'lottoRouter');
      this.subscriber = this.bindingEngine
        .propertyObserver(this.lottoRouter, 'raffleType')
        .subscribe(this.lottoRouterData.bind(this));
  }

  private lottoRouterData(data) {
    console.log(data, 'bindingEngine')
    this.raffleType = data;
  }
}
