import React from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import Moment from 'moment';
import BlueLoading from './BlueLoading';
import MessageChart from './MessageChart';
import { Link } from 'react-router';

export default class Journal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      loading: false,
      entry: {},
    }
  }

  componentDidMount(){
    document.body.style.backgroundColor = '#6e9bc4'
  }

  deletePost(event) {
    event.preventDefault();

    axios({
      method: 'delete',
      url: `/api/entries/${this.state.entry[0].id}`
    })
    .then(res => {
      notify.show('Post Deleted', 'success');
      this.setState({submitted: false, entry: {}})
    })
    .catch(err => {
      return err;
    })
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
      <div className="journal-background">
      {this.state.loading &&
        <div className="row center-align">
        <BlueLoading />
        </div>

      }
        {!this.state.submitted && !this.state.loading &&
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
          <a className="btn" onClick={this.publishEntry.bind(this)}>save</a>
          </div>
          </div>
          </div>


        }

        {this.state.submitted &&
          <div>
          <div className="row right-align journalBtn">
          <a className="btn"><Link to="/profile" className="white-text">My Profile</Link></a>
          </div>
          <div className="col s12 l7 m7 submitted-journal">
            <div className="card center-align">
              <p className="journalBody">{this.state.entry[0].body}</p>
              <a className="btn read"><Link to="/entries" className="white-text">All entries</Link></a>
              <a className="btn delete" onClick={this.deletePost.bind(this)}>Delete</a>
            </div>
          </div>
          <div className="col s12 l3 offset-l1 m3 offset-m1 journalChart">
          <MessageChart entry={this.state.entry[0]}
          />
          </div>
          </div>

        }
    </div>

      )

  }
}
