// Parent Component
import React, { Component, PropTypes } from 'react';

export default class App extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      messages: {
        mainScreen: 'Hello Main',
        infoScreen: 'Hello infoScreen'
      }
    };
  }
  render() {
    return React.cloneElement(
      this.props.children,
      {
        lotto: this.state
      }
    );
  }
}

App.propTypes = {
  children: PropTypes.any
};
