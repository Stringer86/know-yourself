import React from 'react';
import { Link } from 'react-router-dom';
import { Line, Polar } from 'react-chartjs-2';
import LineChart from './LineChart';
import PolarChart from './PolarChart';
import Donors from './Donors';
import Instructables from './Instructables';
import Recommendation from './Recommendation';
import Reveal from 'react-reveal';

const ActiveUser = (props) => {
  const entries = props.entries;

  return (
    <div>
    <div className="row">
      <div className="col s12 m3 l3 sidebar">
        <a className="btn sidebtn"><i className="material-icons right">add</i><Link to="/myjournal" className="white-text">New Entry</Link></a>
        <a className="btn sidebtn"><Link to="/entries" className="white-text">Past Entries</Link></a>
        <a className="btn sidebtn"><Link to="/analyzer" className="white-text">Analyzer</Link></a>
        <a className="btn sidebtn"><Link to="/bigfive" className="white-text">Big Five</Link></a>
      </div>
      <div className="col s12 m8 offset-m1 l8 offset-l1">
      <div className="row card timeline center-align">
      <h3>My Timeline</h3>
      <LineChart entries={entries}
      />
      <p><Link to="/interpretation">How do I interpret this?</Link></p>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <Reveal effect="animated fadeIn">
      <Recommendation entry={entries[entries.length-1]} />
      </Reveal>
      <br></br>
      <hr></hr>
      <br></br>
      <Reveal effect="animated fadeIn">
      <div className="row card timeline center-align">
        <div className="col s9 m9 l9 center-align">
        <h3>My Personality</h3>
        <br></br>
        <PolarChart entries={entries}/>
        </div>
        <div className="col s3 m3 l3">
          <p id="scores"><em>Scores are calculated based on your previous posts and are out of 100. Read about each <Link to="/bigfive">here</Link> and <Link to="/interpretation">here.</Link></em></p>
        </div>
      </div>
      </Reveal>
      </div>
      </div>
    </div>
  );

}

module.exports = ActiveUser;
