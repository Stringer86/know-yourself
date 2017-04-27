import React from 'react';
import Reveal from 'react-reveal';
import { Link } from 'react-router-dom';

export default class MiddleSection2 extends React.Component {

  render() {
  const isLoggedIn = this.props.isLoggedIn;

  return (
    <div className="row middleSections">
    <Reveal effect="animated fadeInLeft">
    <div className="col s12 l6 m6 center-align">
    <img id="line" src="./img/line.png" alt="line chart" width="100%" height="100%"></img>
    </div>
    </Reveal>
    <Reveal effect="animated fadeInRight">
    <div className="col s12 l6 m6">
    <div className="row center-align">
      <h3>See how your emotions change over time!</h3>
      </div>
      <div className="row">
      <p className="explanation">MyJournal will chart out the emotional tones of each of your past entries in order to help you see changes over time.  Never before has it been this easy!</p>
      </div>
      <div className="row center-align">
        <div>
        {isLoggedIn &&
          <a className="btn"><Link to="/signup" className="white-text">Sign Up Today!</Link></a>
        }
        </div>
      </div>
    </div>
    </Reveal>
    </div>
    );
  };
}
