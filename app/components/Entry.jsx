import React from 'react';
import { Link, Redirect } from 'react-router';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import {  Doughnut } from 'react-chartjs-2';
import Moment from 'moment';


export default class Entry extends React.Component {

  deletePost(event) {
    event.preventDefault();

    axios({
      method: 'delete',
      url: `/api/entries/${this.props.data.id}`
    })
    .then(res => {
      notify.show('Post Deleted', 'success');
      axios.get('/api/entries')
        .then(res => {
          this.props.getEntries(res.data);
        })
        .catch(err => {
          console.log(err);
      })
    })
    .catch(err => {
      return err;
    })
  }

  render() {
    const data = this.props.data;

    const doughnutData = {
      labels: ["Anger", "Disgust", "Fear", "Joy", "Sadness"],
      datasets: [
        {
          label: "Watson Summary",
          data: [data.anger, data.disgust, data.fear, data.joy, data.sadness],
          backgroundColor: ['#771F1F', '#33825e', '#783982', '#F6E481', '#5687d4' ],
        }
      ]
    }

    const date = this.props.data.createdAt,
          formattedDate = Moment(date).format('LL')

    let body = this.props.data.body;

    if(body.length > 255) body = body.substring(0,255) + '...';

    return (

      <div className="row">
        <div className="row card fade">
          <div className="col s12 m7 l7">
            <p className="strong">{formattedDate}</p>
            <p>{body}</p>
            <div className="row inline">
            <a className="btn read"><Link to={`/entry/${this.props.data.id}`} className="white-text">Read</Link></a>
            <a className="btn delete" onClick={this.deletePost.bind(this)}>Delete</a>
            </div>
            </div>
            <div className="col s12 m4 l4">
            <Doughnut data={doughnutData}
            width={200}
            height={200}
            options={{
            maintainAspectRatio: false
          }}/>
            </div>
        </div>
      </div>
    );
  }
}
