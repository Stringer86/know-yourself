import React from 'react';
import axios from 'axios';
// import ProfileImg from './ProfileImg';
// import Info from './Info';
// import Lessons from './Lessons';
// import IncompleteLessons from './IncompleteLessons';
// import Favorites from './Favorites';

export default class Profile extends React.Component {
  componentDidMount() {
    /* doesn't work b/c we don't have auth working yet */
    axios.get('/api/user')
      .then(res => {
        this.props.getUserInfo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <ul>
          <li><img src={this.props.user.photoUrl} /></li>
          <li>{this.props.user.userName}</li>
          <li>{this.props.user.bio}</li>
        </ul>
      </div>
    );
  }
}
