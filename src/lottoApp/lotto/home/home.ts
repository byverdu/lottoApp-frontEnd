import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import FetchApi from '../../../services/fetchApi';

@autoinject
export default class Lotto {
  public raffleType: Object = {};
  constructor(
    private fetchApi: FetchApi,
    private router: Router) {
    }

  attached() {
    // this.events.publish( 'selectedLotto', this.raffleType)
  }

  activate( params ) {
    console.log(params, 'params');
    this.fetchApi.chooseFetchMethod( params.lottoID )
      .then( response => {
        this.raffleType = response[ params.lottoID ];
        console.log(this.raffleType, 'raffleType');
      })
    }

  deactivate() {
    console.log('deactivate')
    // this.events.publish( 'selectedLotto', { lotto: this.raffleType });
  }
}
