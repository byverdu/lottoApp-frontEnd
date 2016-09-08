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

  public chooseFetchMethod( params: string ): Promise<IFetchAPI> {
    switch( params ) {
      case 'primitiva':
        return this.getPrimitiva();
      case 'bonoloto':
        return this.getBonoloto();
      case 'euromillions':
        return this.getEuromillions();
      default:
        return;
    }
  }

  private getPrimitiva(): Promise<IFetchAPI> {
    const rq = this.httpHeader;
    return this.http.fetch( 'primitiva', rq )
      .then( response => response.json());
  }

  private getBonoloto(): Promise<IFetchAPI> {
    const rq = this.httpHeader;
    return this.http.fetch( 'bonoloto', rq )
      .then( response => response.json());
  }

  private getEuromillions(): Promise<IFetchAPI> {
    const rq = this.httpHeader;
    return this.http.fetch( 'euromillions', rq )
      .then( response => response.json());
  }
}
