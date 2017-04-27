import React from 'react';
import {Link} from 'react-router-dom';

export default class Hero extends React.Component {

  render() {
    const isLoggedIn = this.props.isLoggedIn;

    return (
      <div>
        <div className="bar"></div>
        <div className="hero">
        <div className="heroText">
          This is not your average journaling site.
          We use the state of the art Watson supercomputer created by IBM to analyze your posts and provide instant feedback
          about the emotional tones of your entries. Try it for free today!
        </div>
        {!isLoggedIn &&
          <a className="btn" id="btn2"><Link to="/signup" className="white-text">Sign Up!</Link></a>
        }
      </div>
      </div>

    );
  }
}
