// Entry point
const app = require( './src/server' );
const config = require( './config/config' );

app.listen( config.server.port, config.server.host, function() {

  console.log( `App running on http://${this.address().address}:${this.address().port}`);
});
