'use strict';
// React routing paths

import React from 'react';
import { Route } from 'react-router';
import App from './container/App.jsx';
import  About from './compenents/About.jsx';
import { Inbox } from './compenents/Inbox.jsx';


module.exports = [
    <Route path={ '/' } component={ App }>
      <Route path={ '/about' } component={ About }/>
      <Route path={ '/inbox' } component={ Inbox } />
    </Route>
];
