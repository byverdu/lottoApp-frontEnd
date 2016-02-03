'use strict';

import Button from '../compenents/Button.jsx';
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
      <Button buttonText={ 'pajarito' } onClick={this.onClickHandle} />
    );
  }
}
