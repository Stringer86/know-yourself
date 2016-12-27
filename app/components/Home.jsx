import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="bar"></div>
        <div className="hero">
        <div className="heroText">
      This is not your average journaling site.
      We use the state of the art Watson supercomputer created by IBM to analyze your posts and provide instant feedback
      about the emotional tones of your entries. Try it for free today!
      </div>
      <a className="btn" id="btn2"><Link to="/signup" className="white-text">Sign Up!</Link></a>
      </div>
      <div className="row middleHeader">
        <h3>Get instant feedback!</h3>
      </div>
      <div className="row pics">
      <div className="col s12 l4 m4">
        <img src="./img/doughnut.png" alt="doughnut chart" width="330px" height="200px"></img>
      </div>
      <div className="col s12 l4 m4">
      <img src="./img/line.png" alt="line chart" width="320px" height="200px"></img>
      </div>
      <div className="col s12 l4 m4">
      <img src="./img/polar.png" alt="polar chart" width="250px" height="220px"></img>
      </div>
      </div>
      <div className="row center-align">
        <div>
        <a className="btn"><Link to="/signup" className="white-text">Sign Up Today!</Link></a>
      </div>
      </div>
      <hr></hr>
      <div className="row center-align">
        <h3>Besides the journal, what else can you do here?</h3>
        <h6>Great Question! You can also use our state of the art email and message analyzer!</h6>
      </div>
      <div className="row pics">
      <div className="col s12 l5 m5">
      <img src="./img/email.png" alt="analyzer image" width="100%" height="100%"></img>
      </div>
      <div className="col s12 l2 m2 center-align">
      <img id="arrow" src="./img/arrow.png" alt="arrow" width="100%" height="100%"></img>
      </div>
      <div className="col s12 l5 m5 results">
      <img src="./img/results.png" alt="results image" width="45%" height="20%"></img>
      </div>
      </div>

      <div className="analyzerBtn">
        <a className="btn"><Link to="/analyzer" className="white-text">Email Analyzer</Link></a>
      </div>
      <hr></hr>
      <br></br>
      <br></br>
      </div>
    );
  }
}
