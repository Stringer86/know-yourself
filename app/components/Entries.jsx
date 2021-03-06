import React from 'react';
import axios from 'axios';
import {Line, Polar, Radar} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import Entry from './Entry';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.sortIt = this.sortIt.bind(this);
  }

  componentDidMount() {
    if (document.body.style.backgroundColor !== '#f3f3f3') {
      document.body.style.backgroundColor = '#f3f3f3'
    }


    axios.get('/api/entries')
      .then(res => {
        this.props.getEntries(res.data);
      })
      .catch(err => {
        this.setState({ loadErr: err });
      });
  }

  sortIt(event) {

  let newValue = event.target.value;
  this.props.sortIt(newValue)

  }

  handleSearch(event) {
    let newSearch = event.target.value;

    this.props.handleSearch(newSearch);

  }


  render() {
    if (this.props.entries.length === 0) {
      return (
      <div>
        <div className="row center-align noEntries">
        <h1>You haven't made any entries yet! Get writing!</h1>
        <a className="btn sidebtn"><Link to="/myjournal" className="white-text">New Entry</Link></a>
        </div>
      </div>
    )
    }

    const entries = this.props.entries.filter((entry) => {
      let body = entry.body.toLowerCase();
      let search = this.props.searchFilter.toLowerCase();
      if (body.indexOf(search) !== -1) {
        return entry;
      }
    }).map((entry, index) => {
      return <Entry data={entry}
                    getEntries={this.props.getEntries}
                    key={index}
                    id={entry.id}
                />
    });

    const transitionOptions = {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    }

    return (
      <div>
      <br></br>
      <div className="row">
      <input className="col s7" type="text" placeholder="Search Entries Here" autoFocus onChange={this.handleSearch}>
        </input>
      <select className="col s4 offset-s1 browser-default" ref="dropdown" onChange={this.sortIt}>
          <option value="" disabled selected>Sort By</option>
          <option className="dropdown">Most Recent</option>
          <option>Saddest</option>
          <option>Angriest</option>
          <option>Most Full of Disgust</option>
          <option>Most Fearful</option>
          <option>Most Joyous</option>
        </select>
        </div>
      <div className="entry">
      <ReactCSSTransitionGroup {...transitionOptions}>
      { entries }
      </ReactCSSTransitionGroup>
      </div>
      </div>

    );
  }
}
