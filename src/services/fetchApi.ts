import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import HttpRequestInterceptor from './httpRequestInterceptor';
import { IFetchAPI } from '../interfaces/IFetchAPI';
import 'fetch';

@autoinject
export default class FetchApi {
  constructor(
    private http: HttpClient,
    private requestInterceptor: HttpRequestInterceptor
  ){}

  get httpHeader() {
    const rq: any = {};
    rq.method = 'get';
    if ( null ) {
      rq.body = JSON.stringify( null );
    }
    this.requestInterceptor.process( rq );
    return rq;
  }

  public getLottos(): Promise<IFetchAPI> {
    const rq = this.httpHeader;
    return this.http.fetch( 'lottos' )
      .then( response => response.json());
  }

  public getPrimitiva(): Promise<IFetchAPI> {
    const rq = this.httpHeader;
    return this.http.fetch( 'primitiva', rq )
      .then( response => response.json());
  }

  public getBonoloto(): Promise<IFetchAPI> {
    const rq = this.httpHeader;
    return this.http.fetch( 'bonoloto', rq )
      .then( response => response.json());
  }

  public getEuromillions(): Promise<IFetchAPI> {
    const rq = this.httpHeader;
    return this.http.fetch( 'euromillions', rq )
      .then( response => response.json());
  }
}
