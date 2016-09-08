import { autoinject } from 'aurelia-framework';
import FetchApi from '../../../services/fetchApi';

@autoinject
export default class Statistics {
  public raffleType: Object = {};
  constructor( private fetchApi: FetchApi ) {
    }
  activate(params) {
    console.log(params, 'statistics params')
    this.fetchApi.chooseFetchMethod( params.lottoID )
      .then( response => {
        this.raffleType = response[ params.lottoID ];
        console.log(this.raffleType, 'statistics lotto');
      })
  }
}