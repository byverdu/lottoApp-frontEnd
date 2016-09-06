import { inject } from '../../jspm_packages/npm/aurelia-framework@1.0.2';
import { HttpClient } from '../../jspm_packages/npm/aurelia-fetch-client@1.0.0';
import { HttpRequestInterceptor } from '../services/httpRequestInterceptor';

@inject( HttpClient, HttpRequestInterceptor )
export default class FetchApi {
  constructor( http, requestInterceptor ) {
    this.http = http;
    this.requestInterceptor = requestInterceptor;
  }

  get httpHeader() {
    const rq = {};
    rq.method = 'get';
    if ( null ) {
      rq.body = JSON.stringify( null );
    }
    this.requestInterceptor.process( rq );
    return rq;
  }

  getLottos() {
    const rq = this.httpHeader;
    return this.http.fetch( 'lottos', rq )
      .then( response => response.json());
  }

  getPrimitiva() {
    const rq = this.httpHeader;
    return this.http.fetch( 'primitiva', rq )
      .then( response => response.json());
  }

  getBonoloto() {
    const rq = this.httpHeader;
    return this.http.fetch( 'bonoloto', rq )
      .then( response => response.json());
  }

  getEuromillions() {
    const rq = this.httpHeader;
    return this.http.fetch( 'euromillions', rq )
      .then( response => response.json());
  }
}
