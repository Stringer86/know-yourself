import React from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import Moment from 'moment';

export default class Journal extends React.Component {

   publishEntry(event) {
     event.preventDefault();

     axios.post('/api/entries', {
       body: this.refs['body'].value,
     })
     .then((res) => {
       notify.show('Published!', 'success');
       this.refs['body'].value = '';
     })
     .catch(err => {
       notify.show("something went wrong", 'error')
     })

   }

  render() {

    const date = new Date();

    const modDate = Moment(date).format('LL')
    return (
      <div className="journalEntry center-align">
      <hr></hr>
        <h1>{modDate}</h1>
        <div className="row journal">
          <div className="input-field col s8 offset-s2">
                 <textarea autoFocus id="textarea1" ref="body" placeholder="Share your thoughts...."></textarea>
              </div>
          </div>
          <div className="row center-align">
          <a className="btn" onClick={this.publishEntry.bind(this)}>submit</a>
          </div>
      </div>
    );
  }
}
