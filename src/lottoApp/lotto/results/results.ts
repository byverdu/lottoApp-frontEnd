import { autoinject, BindingEngine, Disposable } from 'aurelia-framework';
import { LottoModel } from '../../../models/LottoModel';
import LottoUtils from '../../../services/lottoUtils';
import LottoRouter from '../lotto';

@autoinject
export default class Results {
  public subscriber: Disposable;
  public raffleType: LottoModel;
  public combinations;
  constructor(
    private lottoUtils: LottoUtils,
    private lottoRouter: LottoRouter,
    private bindingEngine: BindingEngine,
    private element: Element
  ) {
      this.subscriber = this.bindingEngine
        .propertyObserver(this.lottoRouter, 'raffleType')
        .subscribe(this.lottoRouterData.bind(this));
  }

  public activate() {

  }

  private lottoRouterData(data: LottoModel) {
    this.raffleType = data;
    console.log(data, 'bindingEngine')
    this.combinations = this.setCombinations(this.raffleType);
    console.log(this.combinations, 'xxxxxxxxxxxxxxxxx')
    return this.combinations;
  }

  public compareLastResultWithSaved() {
    const lastResultNumbers = this.raffleType.lastResultNumbers;
    this.combinations.forEach((combi) => {
      combi.forEach((item, index) => {
        if( lastResultNumbers.indexOf(item.value) !== -1 ) {
          item.isMatched = true;
          console.log(item.value,index, 'compareLastResultWithSaved')
        }
      })
    })
  }

  public clearCompared() {
    this.combinations.forEach((item) => {
      item.forEach((item2, index) => {
        item2.isMatched = false;
      })
    })
  }

  private setCombinations(raffleType) {
    return raffleType.combinations.map((combi) => {
      return combi.map((item, index) => {
        return {
          isMatched:false,
          value: item
        }
      });
    });
  }
}
