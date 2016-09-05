const express = require( 'express' );
const path = require( 'path' );

const app = express();
const router = express.Router();

app.use( express.static( `${__dirname}/dist/public` ));
app.use( express.static( `${__dirname}` ));
app.use( '/', router.get( '/', ( req, res ) => {
  res.sendFile( path.join( `${__dirname}/dist/index.html` ));
}));

app.listen( 3000, () => {
  console.log( `Express server listening on port ${3000}` );
});

module.exports = app;
