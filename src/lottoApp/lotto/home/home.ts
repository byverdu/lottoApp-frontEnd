import { autoinject } from 'aurelia-framework';
import FetchApi from '../../../services/fetchApi';
import LottoUtils from '../../../services/lottoUtils';
import WindowStorage from '../../../services/windowStorage';

@autoinject
export default class Lotto {
  public raffleType;
  public test;
  constructor(
    private fetchApi: FetchApi,
    private lottoUtils: LottoUtils,
    private windowStorage: WindowStorage) {
    }

  attached() {
    // this.events.publish( 'selectedLotto', this.raffleType)
    this.windowStorage.setWindowStorage('xocsxo', [0,1,2,3]);
    this.test = this.windowStorage.getWindowStorage('xoxo');
  }

  activate( params ) {
    console.log(params, 'params');
    const lottoID = params.lottoID;
    this.fetchApi.chooseFetchMethod( lottoID )
      .then( response => {
        this.raffleType = response[ lottoID ];
        this.raffleType.countBalls = this.lottoUtils.getCountBalls( lottoID );
        console.log(this.raffleType, 'raffleType');
      })
    }

  deactivate() {
    console.log('deactivate')
    // this.events.publish( 'selectedLotto', { lotto: this.raffleType });
  }
}
