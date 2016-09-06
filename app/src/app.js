import { inject } from '../../jspm_packages/npm/aurelia-framework@1.0.2';
import FetchApi from '../services/fetchApi';

@inject( FetchApi )
export default class App {
  constructor( fetchApi ) {
    this.fetchApi = fetchApi;
  }

  attached() {
    this.fetchApi.getLottos()
      .then(( response ) => {
        console.log( response );
        this.lottos = response.lottos;
      });

    this.fetchApi.getPrimitiva()
      .then(( response ) => {
        console.log( response );
        this.primi = response.primitiva;
      });
    this.fetchApi.getBonoloto()
      .then(( response ) => {
        console.log( response );
          this.bono = response.bonoloto;
      });
    this.fetchApi.getEuromillions()
      .then(( response ) => {
        console.log( response );
        this.euro = response.euromillions;
      });
  }
}
