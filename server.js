const express = require( 'express' );
const config = require( './config/config' );
const glob = require( 'glob' );
const mongoose = require( 'mongoose' );
const path = require( 'path' );

// mongoose.connect( config.db );
// const db = mongoose.connection;
// db.on( 'error', () => {
//   throw new Error( `unable to connect to database at ${config.db}` );
// });

// const models = glob.sync( `${config.root}/server_app/models/*.js` );
// models.forEach(( model ) => {
//   require( model ); // eslint-disable-line global-require
// });
const app = express();
const router = express.Router();
app.use( express.static( `${config.root}/dist/public` ));
app.use( express.static( `${config.root}` ));
app.use( '/', router.get( '/', ( req, res ) => {
  res.sendFile( path.join( `${config.root}/dist/index.html` ));
}));

app.listen( config.port, () => {
  console.log( `Express server listening on port ${config.port}` );
});

// app.use(( req, res, next ) => {
//   const err = new Error( 'Not Found' );
//   err.status = 404;
//   next( err );
// });
//
// if ( app.get( 'env' ) === 'development' ) {
//   app.use(( err, req, res ) => {
//     res.status( err.status || 500 );
//     res.render( 'error', {
//       message: err.message,
//       error: err,
//       title: 'error'
//     });
//   });
// }
//
// app.use(( err, req, res ) => {
//   res.status( err.status || 500 );
//   res.render( 'error', {
//     message: err.message,
//     error: {},
//     title: 'error'
//   });
// });

module.exports = app;
