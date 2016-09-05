import { HttpClient } from '../../jspm_packages/npm/aurelia-fetch-client@1.0.0';

function configureContainer( container ) {
  const http = new HttpClient();
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

export function configure( aurelia ) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
  configureContainer( aurelia.container );
  aurelia.start().then(() => aurelia.setRoot());
}
