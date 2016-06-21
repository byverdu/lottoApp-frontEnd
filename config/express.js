// Expres configuration, required on the server file at ./
const express = require( 'express' );
const glob = require( 'glob' );
const logger = require( 'morgan' );
const cookieParser = require( 'cookie-parser' );
const bodyParser = require( 'body-parser' );
const compress = require( 'compression' );
const methodOverride = require( 'method-override' );
const path = require( 'path' );

module.exports = function ( app, config ) {
  const innerApp = app;
  const env = process.env.NODE_ENV || 'development';
  innerApp.locals.ENV = env;
  innerApp.locals.ENV_DEVELOPMENT = env === 'development';

  innerApp.set( 'views', `${config.root}/server_app/views` );
  innerApp.set( 'view engine', 'jade' );
  innerApp.use( logger( 'dev' ));
  innerApp.use( bodyParser.json());
  innerApp.use( bodyParser.urlencoded({
    extended: true
  }));
  innerApp.use( cookieParser());
  innerApp.use( compress());
  innerApp.use( express.static( `${config.root}/app/public` ));
  innerApp.use( '/angular', express.static( './node_modules/angular/' ));
  innerApp.use( '/jquery', express.static( './node_modules/jquery/dist/' ));
  innerApp.use( '/tether', express.static( './node_modules/tether/dist/' ));
  innerApp.use( '/bootstrap', express.static( './node_modules/bootstrap/dist/' ));
  innerApp.use( methodOverride());
  const controllers = glob.sync( `${config.root}/server_app/controllers/*.js` );
  controllers.forEach(( controller ) => {
    require( controller )( innerApp ); // eslint-disable-line global-require
  });

  innerApp.use(( req, res, next ) => {
    const err = new Error( 'Not Found' );
    err.status = 404;
    next( err );
  });

  if ( innerApp.get( 'env' ) === 'development' ) {
    innerApp.use(( err, req, res ) => {
      res.status( err.status || 500 );
      res.render( 'error', {
        message: err.message,
        error: err,
        title: 'error'
      });
    });
  }

  innerApp.use(( err, req, res ) => {
    res.status( err.status || 500 );
    res.render( 'error', {
      message: err.message,
      error: {},
      title: 'error'
    });
  });
};
