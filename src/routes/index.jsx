'use strict';

const express = require( 'express' );
import App from '../container/App';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
let router = express.Router();

router.get( '/', (request, response)  => {

  let reactHtml = ReactDOMServer.renderToString( <App />);

  response.render( 'index', {title: 'lottoApp', reactOutput: reactHtml});
});

module.exports = router;
