import React from 'react';
import axios from 'axios';
import {Line, Polar, Radar} from 'react-chartjs-2';
import {Link} from 'react-router';
import Entry from './Entry';


export default class Entries extends React.Component {

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
      return <div><p>there doesn't seem to be anything here</p></div>
    }

    const entries = this.props.entries.map((entry, index) => {
      return <Entry data={entry}
                    getEntries={this.props.getEntries}
                    key={index}
                    id={entry.id}
                />
    });


    return (
      <div>
      <div className="row">
        <h1>Your Journal Entries</h1>
      </div>
      { entries }
      </div>
    );
  }
}
