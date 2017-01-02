import React from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import Moment from 'moment';
import Loading from './Loading';
import MessageChart from './MessageChart';

export default class Journal extends React.Component {
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

     axios.post('/api/entries', {
       body: this.refs['body'].value,
     })
     .then((res) => {
       notify.show('Published!', 'success');
       this.setState({submitted: true, loading: false, entry: res.data})
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
      <div>
      {this.state.loading &&
        <div className="row center-align">
        <Loading />
        </div>

      }
        {!this.state.submitted && !this.state.loading &&
        <div className="journalEntry center-align">
        <h1>{modDate}</h1>
        <div className="row journal">
          <div className="input-field col s12 col l8 offset-l2">
                 <textarea autoFocus id="textarea1" ref="body" placeholder="Share your thoughts...."></textarea>
              </div>
          </div>
          <div className="row center-align">
          <a className="btn" onClick={this.publishEntry.bind(this)}>submit</a>
          </div>
          </div>

        }

        {this.state.submitted &&
          <div className="row center-align">
          <div className="col s12 l7 m7">
            <div className="card">
              <p className="journalBody">{this.state.entry[0].body}</p>
            </div>
          </div>
          <div className="col s12 l3 m3 journalChart">
          <MessageChart entry={this.state.entry[0]}
          />
          </div>
          </div>

        }
    </div>

      )

  }
}
