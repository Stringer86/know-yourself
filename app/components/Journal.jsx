import React from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';

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
    return (
      <div>
        <h1>Hello journal</h1>
        <div className="row journal">
          <div className="input-field col s8 offset-s2">
                 <textarea autoFocus id="textarea1" ref="body" placeholder="Share your thoughts...."></textarea>
              </div>
          </div>
          <div className="row center-align">
          <button onClick={this.publishEntry.bind(this)}>submit</button>
          </div>
      </div>
    );
  }
}
