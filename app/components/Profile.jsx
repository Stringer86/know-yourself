import React from 'react';
import axios from 'axios';
// import Lessons from './Lessons';
// import IncompleteLessons from './IncompleteLessons';
// import Favorites from './Favorites';

export default class Profile extends React.Component {
  componentDidMount() {
    /* doesn't work b/c we don't have auth working yet */
    axios.get('/api/user')
      .then(res => {
        console.log(res.data);
        this.props.getUserData(res.data).bind(this);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.props.userData.length === 0) {
      return <h1>chase</h1>;
    }
    
    return (
      <div className="row">
        <h1>hello</h1>
        <ul>
          <li><img src={this.props.userData[0].photoUrl} height="30px" width="30px;" /></li>
          <li>{this.props.userData[0].userName}</li>
          <li>{this.props.userData[0].bio}</li>
        </ul>
      </div>
    );
  }
}
