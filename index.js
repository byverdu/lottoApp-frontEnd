'use strict';

// Entry point

let app = require( './src/server');
let config = require( './config/config' );

app.listen( config.server.port, config.server.host, function() {

  console.log( `App running on http://${this.address().address}:${this.address().port}`);
});
