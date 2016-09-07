export default class HttpRequestInterceptor {
  public process( request ) {
    if ( !request.headers ) {
      request.headers = {};
    }
    request.headers[ 'Access-Control-Allow-Origin' ] = '*';
  }
}
