import { autoinject } from 'aurelia-framework';
import FetchApi from '../../../services/fetchApi';
import LottoUtils from '../../../services/lottoUtils';
import WindowStorage from '../../../services/windowStorage';
import { LottoModel } from '../../../models/LottoModel';

@autoinject
export default class Lotto {
  public raffleType: LottoModel;
  public test;
  constructor(
    private fetchApi: FetchApi,
    private lottoUtils: LottoUtils,
    private windowStorage: WindowStorage) {
    }

  attached() {
    this.windowStorage.setWindowStorage('xocsxo', [0,1,2,3]);
    this.test = this.windowStorage.getWindowStorage('xoxo');
  }

  activate( params ) {
    console.log(params, 'params');
    const lottoID = params.lottoID;
    const totalBalls = this.lottoUtils.getTotalBalls( lottoID );
    const countBalls = this.lottoUtils.getCountBalls( lottoID );
    this.fetchApi.chooseFetchMethod( lottoID )
      .then( response => {
        this.raffleType = response[ lottoID ];
        this.raffleType.totalBalls = totalBalls;
        this.raffleType.countBalls = countBalls;
      })
    }

  public getRandomBallsByLotto() {
    const randomBalls = this.lottoUtils.getRandomBallsByLotto(this.raffleType);

    this.raffleType.randomBalls = randomBalls;
    console.log(this.raffleType, 'raffleType');
  }
}
