import { autoinject, BindingEngine, Disposable } from 'aurelia-framework';
import { LottoModel } from '../../../models/LottoModel';
import LottoUtils from '../../../services/lottoUtils';
import LottoRouter from '../lotto';
import { BallModel } from '../../../models/BallModel';

@autoinject
export default class Results {
  public subscriber: Disposable;
  public raffleType: LottoModel;
  public combinations;
  constructor(
    private lottoUtils: LottoUtils,
    private lottoRouter: LottoRouter,
    private bindingEngine: BindingEngine
  ) {
      this.subscriber = this.bindingEngine
        .propertyObserver(this.lottoRouter, 'raffleType')
        .subscribe(this.lottoRouterData.bind(this));
  }

  private lottoRouterData(data: LottoModel) {
    this.raffleType = data;
    console.log(data, 'bindingEngine')
    this.combinations = data.combinations;
    console.log(this.combinations, 'xxxxxxxxxxxxxxxxx')
    return this.combinations;
  }

  public compareLastResultWithSaved() {
    const lastResultNumbers = this.raffleType.lastResultNumbers;
    const combinations = this.combinations;
    if (lastResultNumbers === undefined || combinations === undefined) {
      return;
    }
    for (const index in this.combinations) {
      this.combinations[index].forEach(item => {
        if( lastResultNumbers.indexOf(item.value) !== -1 ) {
          item.isChecked = true;
          console.log(item.value,index, 'compareLastResultWithSaved')
        }
      })
    }
  }

  public clearCompared() {
    if (this.combinations === undefined) {
      return;
    }
    for (const index in this.combinations) {
      this.combinations[index].forEach(item => item.isChecked = false)
    }
  }
}
