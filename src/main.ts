import 'bootstrap';
import {Aurelia} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

function configureContainer( container ) {
  const http: HttpClient = new HttpClient();
  http.configure( config => {
    config
    .useStandardConfiguration()
    .withBaseUrl( 'http://localhost:3800/' )
    .withDefaults({
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Requested-With': 'Fetch'
      }
    });
  });
  container.registerInstance( HttpClient, http );
}

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
  configureContainer( aurelia.container );
  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
