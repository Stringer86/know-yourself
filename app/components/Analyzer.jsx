import React from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import { Match, Miss, Link } from 'react-router';
import MessageChart from './MessageChart';
import Loading from './Loading';

export default class Analyzer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      loading: false,
      entry: {},
    }
  }

   publishEntry(event) {
     event.preventDefault();

     this.setState({loading: true})

     axios.post('/api/analyzer', {
       body: this.refs['body'].value,
     })
     .then((res) => {
       notify.show('Analysis complete!', 'success');
       this.refs['body'].value = '';
       this.setState({submitted: true, loading: false, entry: res.data})
     })
     .catch(err => {
       notify.show("something went wrong", 'error')
     })

   }

   changeState(event) {
     event.preventDefault();

     this.setState({submitted: this.state.submitted})
   }

  render() {
      return (
        <div className="center-align analyzer">
        <hr></hr>

          {!this.state.submitted &&
          <div className="row center-align">
            <h1>Input your email and we'll analyze it for you</h1>
            <div className="row">
            <div className="input-field col s8 offset-s2">
                   <textarea id="textarea2" ref="body" placeholder="enter email here"></textarea>
                </div>
              </div>
              <div className="row">
              <a className="btn" onClick={this.publishEntry.bind(this)}><Link to="/analyzer/complete" className="white-text">Analyze!</Link></a>
              </div>

            </div>
          }
          {this.state.submitted &&
            <div className="row align-center">
            <div className="row"><a className="btn" onClick={this.changeState.bind(this)}><Link to="/analyzer" className="white-text">New Email</Link></a></div>
              <div className="row">
              <div className="col s12 m6 offset-m3">
                {!this.state.loading &&
                  <Match pattern="/analyzer/complete" exactly render={
                      () => <MessageChart entry={this.state.entry}
                              />
                          }/>
                }
                {this.state.loading &&
                  <Match pattern="/analyzer/complete" exactly render={
                      () => <Loading
                              />
                          }/>
                }

              </div>
              </div>
              </div>
          }
        </div>
      );
    }
}
