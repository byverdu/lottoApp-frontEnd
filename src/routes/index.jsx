'use strict';

const express = require( 'express' );
// import App from '../container/App';
import React from 'react';
// import ReactDOMServer from 'react-dom/server';
let router = express.Router();
//
// router.get( '/', (request, response)  => {
//
//   let reactHtml = ReactDOMServer.renderToString( <App />);
//
//   response.render( 'index', {title: 'lottoApp', reactOutput: reactHtml});
// });
//
// router.get( '/about', ( request, response ) => {
//
//   // res
// });
//

function renderApp(props, res) {
  const markup = renderToString(<RoutingContext {...props}/>);
  const html = createPage(markup);
  res.send(html);
}

function createPage(html) {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>My Universal App</title>
    </head>
    <body>
      <div id="reactOutput">${ html }</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
}

import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from '../routes.jsx';

router.get('*', function(req, res) {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      renderApp( renderProps, res );
    } else {
      res.status(404).send('Not found');
    }
  });
});




module.exports = router;
