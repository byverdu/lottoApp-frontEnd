'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './container/App.jsx';

let rootElement = document.getElementById( 'reactOutput' );

render(
  <App />, rootElement
);
