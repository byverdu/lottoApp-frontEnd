import { autoinject, BindingEngine, Disposable } from 'aurelia-framework';
import { LottoModel } from '../../../models/LottoModel';
import LottoUtils from '../../../services/lottoUtils';
import LottoRouter from '../lotto';
import { BallModel } from '../../../models/BallModel';
import WindowStorage from '../../../services/windowStorage';

@autoinject
export default class Results {
  public subscriber: Disposable;
  public raffleType: LottoModel;
  public combinations;
  public totalCombinations: number;
  public indexRowMatch: Array<string> = [];
  constructor(
    private lottoUtils: LottoUtils,
    private lottoRouter: LottoRouter,
    private windowStorage: WindowStorage,
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
    this.totalCombinations = this.getStoredCombisLength(data.lottoID);
    console.log(this.combinations, 'xxxxxxxxxxxxxxxxx')
  }

  public compareLastResultWithSaved() {
    const lastResultNumbers = this.raffleType.lastResultNumbers;
    if (lastResultNumbers === undefined || this.combinations === undefined) {
      return;
    }
    for (const index in this.combinations) {
      this.combinations[index].forEach(item => {
        if ( lastResultNumbers.indexOf(item.value) !== -1 ) {
          item.isChecked = true;
          if (this.indexRowMatch.indexOf(index) === -1) {
            this.indexRowMatch.push(index);
          }
        };
      });
    }
    // hiding those rows that doesn't contains selected
    this.buildArrayCombLength()
      .filter(
        item => this.indexRowMatch.indexOf(item) === -1
      )
      .forEach(
        item => jQuery(`#id_${item}`).hide()
      );
  }

  public clearCompared() {
    if (this.combinations === undefined) {
      return;
    }
    for (const index in this.combinations) {
      this.combinations[index].forEach(item => item.isChecked = false)
    }
    // Showing those rows that doesn't contains selected
    jQuery.each(this.buildArrayCombLength(), (index) => {
      jQuery(`#id_${index}`).show();
    })
    this.indexRowMatch = [];
  }

  public addStringZero(ball) {
    return ball <= 9 ? `0${ball}` : ball;
  }

  public deleteCombiFromStore(index: number): void {
    this.windowStorage.removeItemWindowStorage(this.raffleType.lottoID, index);
    this.combinations = this.getStoredCombis();
    this.totalCombinations = this.getStoredCombisLength(this.raffleType.lottoID);
  }

  public getStoredCombis() {
    return this.windowStorage.getWindowStorage(this.raffleType.lottoID);
  }
  public getStoredCombisLength(lottoID: string): number {
    return this.windowStorage.getWindowStorage(lottoID).length;
  }

  private buildArrayCombLength() {
    const arr = [];
    for (let i = 0; i < this.combinations.length; i++) {
        arr.push(`${i}`);
    }
    return arr;
  }
}
