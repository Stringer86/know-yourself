import React from 'react';
import { Link } from 'react-router-dom';

const NewUser = () => {

  return (
    <div>
    <div className="row">
    <div className="col s12 m3 l3 sidebar">
        <a className="btn sidebtn"><Link to="/myjournal" className="white-text">New Entry</Link></a>
        <a className="btn sidebtn"><Link to="/entries" className="white-text">Past Entries</Link></a>
        <a className="btn sidebtn"><Link to="/analyzer" className="white-text">Analyzer</Link></a>
        <a className="btn sidebtn"><Link to="/bigfive" className="white-text">Big Five</Link></a>
      </div>
      <div className="col s12 m8 offset-m1 l8 offset-l1 center-align">
      <div className="row card timeline center-align">
      <h3>My Timeline</h3>
        <p>Write 5 entries to see your timeline in action!</p>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="row card timeline center-align">
        <h3>Recommendations</h3>
        <p>Once you have 5 entries, check back here!</p>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="row card timeline center-align">
        <h3>My Personality</h3>
        <p>Once you have 5 entries, check back here!</p>
      </div>
      </div>
      </div>
    </div>
    )
  }

module.exports = NewUser;
