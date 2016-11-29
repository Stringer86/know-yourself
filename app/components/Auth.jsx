import React from 'react';

export default class Auth extends React.Component {

  render() {
    return (
      <div>
      {!this.props.isLoggedIn &&
        <h1>Sign-Up!</h1>
      }
      </div>
    )
  }
}
