'use strict';

import Button from '../compenents/Button.jsx';
import Navigation from '../compenents/Nav.jsx';
import React, { Component } from 'react';

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
        <Button buttonText={ 'pajarito' } onClick={this.onClickHandle} />
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}
