// React routing paths

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../container/App.jsx';
import About from '../compenents/About.jsx';
import Inbox from '../compenents/Inbox.jsx';
import Main from '../compenents/Main.jsx';

module.exports = [
  <Route path="/" component={ App } >
    <IndexRoute component={ Main } />
    <Route path="about" component={ About } />
    <Route path="inbox" component={ Inbox } />
  </Route>
];
