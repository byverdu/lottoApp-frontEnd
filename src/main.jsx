// Entry point
import React from 'react';
import { Router } from 'react-router';
import { render } from 'react-dom';
import routes from './routes/routes.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const rootElement = document.getElementById( 'reactOutput' );

render(
  <Router routes={ routes } history={ createBrowserHistory() } />, rootElement
);
