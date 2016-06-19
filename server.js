const express = require( 'express' );
const config = require( './config/config' );
const glob = require( 'glob' );
const mongoose = require( 'mongoose' );

function requireModel( model ) {
  require( model ); // eslint-disable-line global-require
}

mongoose.connect( config.db );
const db = mongoose.connection;
db.on( 'error', () => {
  throw new Error( `unable to connect to database at ${config.db}` );
});

const models = glob.sync( `${config.root}/app/models/*.js` );
models.forEach(( model ) => {
  requireModel( model );
});
const app = express();

require( './config/express' )( app, config );

app.listen( config.port, () => {
  console.log( `Express server listening on port ${config.port}` );
});
