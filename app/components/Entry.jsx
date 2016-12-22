import React from 'react';
import { Link, Redirect } from 'react-router';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';


export default class Entry extends React.Component {


  // deletePost(event) {
  //   event.preventDefault();
  //
  //   axios({
  //     method: 'delete',
  //     url: `/api/entries/${this.props.data.id}`
  //   })
  //   .then(res => {
  //     notify.show('Lesson deleted', 'success');
  //     axios.get('/api/user')
  //       .then(res => {
  //         this.props.getEntries(res.data).bind(this);
  //       })
  //       .catch(err => {
  //         return err;
  //     })
  //   })
  //   .catch(err => {
  //     return err;
  //   })
  // }

  render() {
    const date = this.props.data.createdAt,
          cdate = (new Date(date)).toString();

    return (
      <div className="row">
        <div className="col s12 card">
            <p>{cdate}</p>
            <p>{this.props.data.body}</p>
        </div>
      </div>
    );
  }
}
