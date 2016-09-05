import { inject } from '../../jspm_packages/npm/aurelia-framework@1.0.2';
import { HttpClient } from '../../jspm_packages/npm/aurelia-fetch-client@1.0.0';
import { HttpRequestInterceptor } from '../services/httpRequestInterceptor';

@inject( HttpClient, HttpRequestInterceptor )
export default class App {
  constructor( http, requestInterceptor ) {
    this.http = http;
    this.requestInterceptor = requestInterceptor;
  }

  attached() {
    this.name = 'paco xoxo';
    const rq = {};
    rq.method = 'get';

    if (null) {
      rq.body = JSON.stringify(null);
    }

    this.requestInterceptor.process(rq);
    console.log(rq);
    this.http.fetch( 'primitiva', rq )
      .then( response => response.json())
      .then( data => {
        console.log( data );
      });
  }
}
