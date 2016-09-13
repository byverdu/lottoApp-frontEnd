import { autoinject, BindingEngine, Disposable } from 'aurelia-framework';
import { LottoModel } from '../../../models/LottoModel';
import LottoUtils from '../../../services/lottoUtils';
import LottoRouter from '../lotto';

@autoinject
export default class Results {
  public subscriber: Disposable;
  public raffleType: LottoModel;
  public x//: Array<Object> = [{}];
  constructor(
    private lottoUtils: LottoUtils,
    private lottoRouter: LottoRouter,
    private bindingEngine: BindingEngine,
    private element: Element
  ) {
      this.raffleType = lottoRouter.raffleType;
      this.subscriber = this.bindingEngine
        .propertyObserver(this.lottoRouter, 'raffleType')
        .subscribe(this.lottoRouterData.bind(this));
  }

  public activate() {

  }

  private lottoRouterData(data) {
    this.raffleType = data;
    console.log(data, 'bindingEngine')
    this.x = this.raffleType.combinations.map((item) => {
      return item.map((item2, index) => {
        return {
          isMatched:false,
          value: item2
        }
      });
    })
    console.log(this.x, 'xxxxxxxxxxxxxxxxx')
  }

  public compareLastResultWithSaved() {
    const x = this.raffleType.lastResultNumbers;
    this.x.forEach((item) => {
      item.forEach((item2, index) => {
        if( x.indexOf(item2.value) !== -1 ) {
          item2.isMatched = true;
          console.log(item2.value,index, 'compareLastResultWithSaved')
        }
      })
    })
  }

  public clearCompared() {
    this.x.forEach((item) => {
      item.forEach((item2, index) => {
        item2.isMatched = false;
      })
    })
  }
}
