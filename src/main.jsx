'use strict';

import React from 'react';
import { Router } from 'react-router';
import {createHashHistory} from 'history/lib/createBrowserHistory';
import { render } from 'react-dom';
import routes from './routes.jsx';

let rootElement = document.getElementById( 'reactOutput' );


render(
  <Router routes={ routes } history={ createHashHistory }></Router>, rootElement
);
