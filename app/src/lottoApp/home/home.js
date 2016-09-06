import { inject } from '../../../../jspm_packages/npm/aurelia-framework@1.0.2';
import { Router } from '../../../../jspm_packages/npm/aurelia-router@1.0.2';
import FetchApi from '../../../services/fetchApi';

@inject( FetchApi, Router )
export default class Index {
  constructor( fetchApi, router ) {
    this.fetchApi = fetchApi;
    this.router = router;
  }

  attached() {
    this.fetchApi.getLottos()
      .then(( response ) => {
        console.log( response );
        this.lottos = response.lottos;
      });
  }

  handleClickBtnId( lottoID ) {
    console.log( lottoID );
  }
}
