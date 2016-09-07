import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import FetchApi from '../../../services/fetchApi';
import { IFetchAPI } from  '../../../interfaces/IFetchAPI';

@autoinject
export default class Lotto {
  public raffleType = Object;
  constructor(
    private fetchApi: FetchApi,
    private router: Router ) {
    }

  activate( params ) {
    console.log(params, 'params');
    this.chooseFetchMethod( params.lottoID )
      .then( response => {
        this.raffleType = response[ params.lottoID ];
        console.log(this.raffleType, 'raffleType')
      });
  }

  private chooseFetchMethod( params: string ): Promise<IFetchAPI> {
    switch( params ) {
      case 'primitiva':
        return this.fetchApi.getPrimitiva();
      case 'bonoloto':
        return this.fetchApi.getBonoloto();
      case 'euromillions':
        return this.fetchApi.getEuromillions();
      default:
        return;
    }
  }
}
