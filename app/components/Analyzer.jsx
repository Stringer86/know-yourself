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
       this.setState({submitted: true, loading: false, entry: res.data})
       this.refs['body'].value = '';
     })
     .catch(err => {
       notify.show("something went wrong", 'error')
     })

   }

   changeState(event) {
     event.preventDefault();

     this.setState({submitted: false})
   }

  render() {
      return (
        <div className="center-align analyzer">
        <hr></hr>

        {this.state.loading &&
          <Loading />
        }
          {!this.state.submitted && !this.state.loading &&
          <div className="row center-align">
            <h1>Input your email, message, or blog post and we'll analyze it for you</h1>
            <div className="row">
            <div className="input-field col s8 offset-s2">
                   <textarea id="textarea2" ref="body" placeholder="enter text here"></textarea>
                </div>
              </div>
              <div className="row">
              <a className="btn" onClick={this.publishEntry.bind(this)}>Analyze!</a>
              </div>

            </div>
          }
          {this.state.submitted &&
            <div className="row align-center">
              <div className="row">
              <div className="col s12 m6 offset-m3">
                  <MessageChart entry={this.state.entry} />
                <div className="row"><a className="btn" onClick={this.changeState.bind(this)}><Link to="/analyzer" className="white-text">New Post</Link></a></div>
              </div>
              </div>
              </div>
          }
        </div>
      );
    }
}
