'use strict';

import Button from '../compenents/Button.jsx';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  constructor( props ){
    super(props);

    this.onClickHandle = this.onClickHandle.bind( this );
  }

  onClickHandle() {
    console.log('patata');
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Button buttonText={ 'pajarito' } onClick={this.onClickHandle} />
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
