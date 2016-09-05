export class HttpRequestInterceptor {

  process( request ) {
    const innerRequest = request;
    if ( !innerRequest.headers ) {
      innerRequest.headers = {};
    }

    innerRequest.headers[ 'Access-Control-Allow-Origin' ] = '*';
  }
}
