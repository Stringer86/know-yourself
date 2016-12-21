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
        <div className="row">
          <div className="input-field col s12">
                 <textarea id="textarea1" className="materialize-textarea" ref="body"></textarea>
                 <label htmlFor="textarea1">Textarea</label>
              </div>
              <button onClick={this.publishEntry.bind(this)}>submit</button>
          </div>
      </div>
    );
  }
}
