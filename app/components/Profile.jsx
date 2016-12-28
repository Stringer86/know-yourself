import React from 'react';
import axios from 'axios';
import {Line, Polar, Radar} from 'react-chartjs-2';
import {Link} from 'react-router';
import LineChart from './LineChart';
import PolarChart from './PolarChart';

export default class Profile extends React.Component {

  componentDidMount() {
    axios.get('/api/entries')
      .then(res => {
        this.props.getEntries(res.data);
      })
      .catch(err => {
        this.setState({ loadErr: err });
      });
  }

  render() {
    if (this.props.entries.length === 0) {
      return false;
    }

    const entries = this.props.entries;

    return (
      <div>
      <hr></hr>
        <h1>Your Timeline</h1>
        <div className="row">
          <button><Link to="/myjournal">New Entry</Link></button>
        </div>


        <div className="row">
            <button><Link to="/entries">View past posts</Link></button>

        </div>
        <div className="row">
        <div className="col s4">
        <LineChart entries={this.props.entries}
        />
      </div>
      <div className="col s4">
      <PolarChart entries={this.props.entries}/>
      </div>
      {/* <div className="col s4">
        <Radar data={radarData}
              width={200}
              height={300}
              options={{
              maintainAspectRatio: false
            }}/>
      </div> */}
      </div>
      </div>
    );
  }
}
