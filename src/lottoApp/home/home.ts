import { autoinject } from 'aurelia-framework';
import FetchApi from '../../services/fetchApi';

@autoinject
export default class Home {
  public lottos: Array<string>;
  public title: string = 'Select your game!';
  constructor( private fetchApi: FetchApi ) {
    }

  attached() {
    this.fetchApi.getLottos()
      .then(( response ) => {
        console.log( response );
        this.lottos = response.lottos;
      });
  }
}
