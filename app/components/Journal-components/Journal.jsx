import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';

export default class Journal extends React.Component {
  constructor(props) {
    super(props);

    this.publishEntry = this.publishEntry.bind(this)
  }

  publishEntry(event) {
    event.preventDefault()
    const body = this.refs.body;
    this.props.publishEntry(event, body)
  }

  render() {

    const date = new Date();

    const modDate = Moment(date).format('LL')


    if (!this.props.submitted && !this.props.loading) {
      return (
        <div>
        <div className="row right-align journalBtn">
        <a className="btn"><Link to="/profile" className="white-text">My Profile</Link></a>
        </div>
        <hr></hr>
        <div className="center-align row">
        <h1><strong>{modDate}</strong></h1>
        <div className="row journal">
          <div className="input-field col s12 col l8 offset-l2">
                 <textarea autoFocus id="textarea1" ref="body" placeholder="Share your thoughts...."></textarea>
              </div>
          </div>
          <div className="row center-align">
          <a className="btn" onClick={this.publishEntry}>save</a>
          </div>
          </div>
          </div>
      )
    } else {
      return null;
    }
  }

}
