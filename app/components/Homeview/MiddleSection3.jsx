import React from 'react';
import Reveal from 'react-reveal';
import { Link } from 'react-router-dom';

const MiddleSection3 = () => {

  return (
    <div>
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
};

module.exports = MiddleSection3;
