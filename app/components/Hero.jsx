import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="row" id="hero-container">
        <div id="hero-img">
          <p>
            If you are a developer, you know it can be hard to find quality
            resources online regarding the topics you want to learn about.
            The problem is that there are so many people blogging about code,
            but the information is dispersed all over the internet and can be tough to find.
            With Dev Connect, we are hoping to foster a community that shares their
            blogs about code in one centralized place. Get learning and sign up today!
          </p>
          {!this.props.isLoggedIn &&
          <Link id="signup-button" to="/signup">Sign Up</Link>
        }
        </div>
      </div>
    );
  }
}
