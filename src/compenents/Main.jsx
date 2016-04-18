// Main screen Component

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {

  componentWillMount() {
    console.log( 'Main jsx Component' );
  }

  render() {
    return (
      <div>
        <h2>{ this.props.lotto.messages.mainScreen }</h2>
        <h4>Select your option</h4>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
      </div>
    );
  }
}

Main.propTypes = {
  lotto: PropTypes.object
};
