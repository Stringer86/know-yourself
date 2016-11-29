import React from 'react';
import Nav from './Nav';

export default class Header extends React.Component {
  render() {
    return <Nav
              isLoggedIn={this.props.isLoggedIn}
            />;
  }
}
