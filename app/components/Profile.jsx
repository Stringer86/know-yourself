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
  //   const radarData = {
  //   labels: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"],
  //   datasets: [
  //     {
  //     label: "Post 1",
  //     borderColor: 'blue',
  //     data: bigFive[0],
  //     backgroundColor: 'rgba(00, 255, 00, 0.1)',
  //   },
  //   {
  //   label: "Post 2",
  //   borderColor: 'yellow',
  //   data: bigFive[1],
  //   backgroundColor: 'rgba(255, 255, 00, 0.1)',
  //   },
  //   {
  //   label: "Post 3",
  //   borderColor: 'blue',
  //   data: bigFive[2],
  //   backgroundColor: 'rgba(255, 00, 00, 0.1)',
  //   },
  //   {
  //   label: "Post 4",
  //   borderColor: 'blue',
  //   data: bigFive[3],
  //   backgroundColor: 'rgba(255, 255, 255, 0.1)',
  //   },
  //   {
  //   label: "Post 5",
  //   borderColor: 'blue',
  //   data: bigFive[4],
  //   backgroundColor: 'rgba(145, 25, 200, 0.1)',
  //   },
  //
  //   ]
  // }

    return (
      <div>
      <div className="row">
        <h1>Your Timeline</h1>
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
      <div className="col s4">
        <button><Link to="/myjournal">New Entry</Link></button>
      </div>

      </div>
      <div className="row">
        <div className="col s4">
          <button><Link to="/entries">View past posts</Link></button>
        </div>

      </div>
      </div>
    );
  }
}
