import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import FetchApi from '../../services/fetchApi';

@autoinject
export default class Index {
  public lottos: Array<string>;
  public primi: Object;
  public bono: Object;
  public euro: Object;
  constructor( private fetchApi: FetchApi ) {
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

  handleClickBtnId( lottoID ) {
    console.log( lottoID );
  }
}
