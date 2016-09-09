import { autoinject } from 'aurelia-framework';
import FetchApi from '../../../services/fetchApi';
import { LottoModel } from '../../../models/LottoModel';

@autoinject
export default class Results {
  public raffleType: LottoModel;
  constructor( private fetchApi: FetchApi ) {
    }

  activate(params) {
    console.log(params, 'results params')
    this.fetchApi.chooseFetchMethod( params.lottoID )
      .then( response => {
        this.raffleType = response[ params.lottoID ];
        console.log(this.raffleType, 'results lotto');
      })
  }
}
