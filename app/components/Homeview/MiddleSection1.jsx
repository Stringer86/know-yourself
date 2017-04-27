import React from 'react';
import Reveal from 'react-reveal';

const MiddleSection1 = () => {

  return (
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
    <hr></hr>
    </div>
  );
};

module.exports = MiddleSection1;
