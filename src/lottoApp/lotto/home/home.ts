import { autoinject } from 'aurelia-framework';
import FetchApi from '../../../services/fetchApi';
import LottoUtils from '../../../services/lottoUtils';
import WindowStorage from '../../../services/windowStorage';
import { LottoModel } from '../../../models/LottoModel';

@autoinject
export default class Lotto {
  public raffleType: LottoModel;
  public combinations: Array<number>;
  constructor(
    private fetchApi: FetchApi,
    private lottoUtils: LottoUtils,
    private windowStorage: WindowStorage) {
    }

  activate( params ) {
    console.log(params, 'params');
    const lottoID = params.lottoID;
    const totalBalls = this.lottoUtils.getTotalBalls( lottoID );
    const countBalls = this.lottoUtils.getCountBalls( lottoID );
    this.fetchApi.chooseFetchMethod( lottoID )
      .then( response => {
        this.raffleType = response[ lottoID ];
        this.setLottoProps(
          this.raffleType,
          totalBalls,
          countBalls
        );
      });
    }

  public saveSelectedNumbers(typeCombi: string) {
    const randToString: string = this.lottoUtils.itemsToString(this.combinations);
    if ( randToString !== undefined ) {
      this.windowStorage.setWindowStorage(this.raffleType.lottoID, randToString);
      console.log(this.raffleType, randToString, 'saveSelectedNumbers');
    }
  }

  public getRandomBallsByLotto() {
    this.combinations = this.lottoUtils.getRandomBallsByLotto(this.raffleType);
    console.log(this.combinations, 'getRandomBallsByLotto');
  }

  private setLottoProps(lotto: LottoModel, ...args): LottoModel {
    console.log(args, 'args setLottoProps')
    return Object.assign( lotto, {
      totalBalls: args[0],
      countBalls: args[1]
    })
  }
}
