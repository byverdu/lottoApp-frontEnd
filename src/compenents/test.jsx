'use strict';

import React from 'react';

class About extends React.Component {
  render() {
    return <h3>About</h3>;
    }
}

class Inbox extends React.Component {
  render(){
    return (
      <div>
        <h2>Inbox</h2>
        "Welcome to your Inbox"
      </div>
    );
  }
}

export default { About, Inbox };
