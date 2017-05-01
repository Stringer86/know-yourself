import React from 'react';
import { Link } from 'react-router-dom';
import MessageChartJournal from './MessageChartJournal';

export default class SubmittedEntry extends React.Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this)
  }

  deletePost(event) {
    event.preventDefault();
    this.props.deletePost(event)
  }

  render() {
    if (this.props.submitted) {

      return (
        <div>
          <div className="row right-align journalBtn">
            <a className="btn"><Link to="/profile" className="white-text">My Profile</Link></a>
          </div>
          <div className="col s12 l7 m7 submitted-journal">
            <div className="card center-align">
              <p className="journalBody">{this.props.entry[0].body}</p>
              <a className="btn read"><Link to="/entries" className="white-text">All entries</Link></a>
              <a className="btn delete" onClick={this.deletePost}>Delete</a>
            </div>
          </div>
          <div className="col s12 l3 offset-l1 m3 offset-m1 journalChart">
          <MessageChartJournal entry={this.props.entry[0]} />
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
