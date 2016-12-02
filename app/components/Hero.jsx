import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="row" id="hero-container">
        <div id="hero-img">
          <p>Some filler text about what this app is. Some filler text about what this app is.
            Some filler text about what this app is. Some filler text about what this app is.
          </p>
          <Link id="signup-button" to="/signup">Sign Up</Link>
        </div>
      </div>
    )
  }
}
