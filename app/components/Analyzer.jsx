import React from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import { Match, Miss, Link } from 'react-router';
import MessageChart from './MessageChart';

export default class Analyzer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      entry: {},
    }
  }

   publishEntry(event) {
     event.preventDefault();

     axios.post('/api/analyzer', {
       body: this.refs['body'].value,
     })
     .then((res) => {
       notify.show('Analysis complete!', 'success');
       this.refs['body'].value = '';
       this.setState({submitted: true, entry: res.data})
     })
     .catch(err => {
       notify.show("something went wrong", 'error')
     })

   }

  render() {

      return (
        <div className="center-align">
          <h1>Input your email and we'll analyze it for you</h1>
          <div className="row">
            <div className="input-field col s12">
                   <textarea id="textarea1" className="materialize-textarea" ref="body"></textarea>
                   <label htmlFor="textarea1">Textarea</label>
                </div>
                <button onClick={this.publishEntry.bind(this)}><Link to="/analyzer/complete">Analyze!</Link></button>
            </div>
            <div className="row"></div>
            <div className="row align-center">
              <div className="col s12 m6 offset-m3">
                <Match pattern="/analyzer/complete" exactly render={
                    () => <MessageChart entry={this.state.entry}
                            />
                        }/>
              </div>
              </div>
        </div>
      );
    }
}
