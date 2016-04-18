
import React, { Component, PropTypes } from 'react';

export default class Inbox extends Component {

  componentWillMount() {
    console.log( 'Inbox jsx Component' );
  }

  render() {
    return (
      <div>
        <h2>{this.props.lotto.messages.infoScreen}</h2>
        "Welcome to your Inbox"
      </div>
    );
  }
}

Inbox.propTypes = {
  lotto: PropTypes.object
};
