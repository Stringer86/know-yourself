import React from 'react';
import axios from 'axios';
import {Line, Polar, Radar} from 'react-chartjs-2';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import Entry from './Entry';


export default class Entries extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    axios.get('/api/entries')
      .then(res => {
        this.props.getEntries(res.data);
      })
      .catch(err => {
        this.setState({ loadErr: err });
      });

      const element = ReactDOM.findDOMNode(this.refs.dropdown)

      $(element).ready(function() {
        $('select').material_select();
      }).on('change', this.sortIt.bind(this))

  }

  sortIt(event) {
  let newValue = event.target.value;
  this.props.sortIt(newValue)
  }


  render() {
    if (this.props.entries.length === 0) {
      return <div>
      <hr></hr>
      <div className="row center-align noEntries">
      <h1>You haven't made any entries yet! Get writing!</h1>
      </div>
      </div>
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
      <hr></hr>
      <select className="col s4 browser-default dropdown" ref="dropdown" onChange={this.sortIt.bind(this)}>
          <option value="" disabled selected>Sort By</option>
          <option>Most Recent</option>
          <option>Saddest</option>
          <option>Angriest</option>
          <option>Most Full of Disgust</option>
          <option>Most Fearful</option>
          <option>Most Joyous</option>
        </select>
        <br>

        </br>
      <div className="entry">
      { entries }
      </div>

      </div>

    );
  }
}
