'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  render() {
    return(
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>
    );
  }
}
