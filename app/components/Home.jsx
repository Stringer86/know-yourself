import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal';

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
      {!this.props.isLoggedIn &&
        <a className="btn" id="btn2"><Link to="/signup" className="white-text">Sign Up!</Link></a>
      }
      </div>
      <div className="row middleSections">
      <Reveal effect="animated fadeIn">
      <div className="col s12 l6 m6 instant">
      <div className="row center-align">
        <h3>Not your average journal!</h3>
        </div>
        <div className="row">
        <p className="explanation">There are many journaling websites out there today, but what sets ours apart is that we analyze the language of each individual entry to help you better understand yourself. The language we use can have a big impact on our thoughts and moods and, as a result, our personalities.  Learn more about yourself today!</p>
        </div>
      </div>
      </Reveal>
      <Reveal effect="animated fadeIn">
      <div className="col s12 l6 m6 center-align">
        <img id="doughnut" src="./img/doughnut.png" alt="doughnut chart" width="100%" height="100%"></img>
        <p className="explanation">Immediate analysis!</p>
      </div>
      </Reveal>
      </div>
      <hr></hr>
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
          {!this.props.isLoggedIn &&
            <a className="btn"><Link to="/signup" className="white-text">Sign Up Today!</Link></a>
          }
        </div>
      </div>

      </div>
      </Reveal>
      </div>
      <hr></hr>
      <div className="row middleSections">
      <Reveal effect="animated fadeIn">
      <div className="col s12 l6 m6 instant">
      <div className="row center-align">
        <h3>Feeling down? happy?</h3>
        </div>
        <div className="row">
        <p className="explanation">No matter how you have been feeling, MyJournal will give you recommendations to help improve your day.  Bad day? Why not create something new?  Great day? Share the happiness by helping someone in need!</p>
        </div>
      </div>
      </Reveal>
      <Reveal effect="animated fadeIn">
      <div className="col s12 l6 m6 center-align">
        <img id="apiImg" src="./img/apiImg.png" alt="Instructables image" width="100%" height="100%"></img>
      </div>
      </Reveal>
      </div>
      <hr></hr>
      <div className="row middleSections">
      <Reveal effect="animated fadeInLeft">
      <div className="col s12 m6 l6">
        <div className="row center-align">
        <h3>The Big Five</h3>
        </div>
        <div className="row">
        <ul className="browser-default homeList">
          <li>Openness</li>
          <li>Conscientiousness</li>
          <li>Extraversion</li>
          <li>Agreeableness</li>
          <li>Neuroticiscm</li>
        </ul>
        <p className="explanation">After you have recorded multiple entries, our service will analyze your posts and give you a score on each of the big five personality traits</p>
        <br></br>
        <div className="row center-align">
        <a className="btn"><Link to="/bigfive" className="white-text">Learn more!</Link></a>
        </div>
        </div>
      </div>
      </Reveal>
      <Reveal effect="animated fadeInRight">
        <div className="col s12 m6 l6">
        <img id="polar" src="./img/polar.png" alt="polar chart" width="100%" height="100%"></img>
        </div>
      </Reveal>

      </div>
      <hr></hr>
      <Reveal effect="animated fadeInUp">
      <div className="row center-align middleSections">
        <h3>Besides journaling, what else can you do here?</h3>
        <p className="explanation">You can also use our state of the art email and message analyzer!</p>
      <div className="row">
      <div className="col s5 l5 m5">
      <img src="./img/email.png" alt="analyzer image" width="100%" height="100%"></img>
      </div>
      <div className="col s2 l2 m2 center-align">
      <img id="arrow" src="./img/arrow.png" alt="arrow" width="100%" height="100%"></img>
      </div>
      <div className="col s5 l5 m5 results">
      <img src="./img/results.png" alt="results image" width="75%" height="100%"></img>
      </div>
      </div>
      <div className="row center-align">
        <a className="btn"><Link to="/analyzer" className="white-text">Analyzer</Link></a>
      </div>
      <hr></hr>
      <br></br>
      <br></br>
      </div>
      </Reveal>
      </div>

    );
  }
}
