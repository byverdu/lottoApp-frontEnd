import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import HttpRequestInterceptor from './httpRequestInterceptor';
import { FetchInterface } from '../interfaces/FetchInterface';
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

  public getLottos(): Promise<FetchInterface> {
    const rq = this.httpHeader;
    return this.http.fetch( 'lottos' )
      .then( response => response.json());
  }

  public getLottoDocById(lottoID: string): Promise<FetchInterface> {
    const rq = this.httpHeader;
    return this.http.fetch( lottoID, rq )
      .then( response => response.json());
  }
}
