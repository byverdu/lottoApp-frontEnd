'use strict';

import React, { Component, PropTypes } from 'react';

export default class Button extends Component {

  render() {
    return (
      <button onClick={ this.props.onClick }> { this.props.buttonText } </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};
