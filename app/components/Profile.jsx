import React from 'react';
import axios from 'axios';
import LessonCard from './LessonCard';
import Favorites from './Favorites';
import Lessons from './Lessons';
import IncompleteLessons from './IncompleteLessons';
import { Match, Link} from 'react-router';

export default class Profile extends React.Component {
  componentWillMount() {
      axios.get('/api/user')
        .then(res => {
          this.props.getUserData(res.data).bind(this);
        })
        .catch(err => {
        console.log(err);
      });
    }

  render() {
    if (this.props.userData.length === 0) {
      return <div></div>;
    }
    return (
      <div className="row center-align">
        <ul>
          <li><img src={this.props.userData[0].photoUrl} height="30px" width="30px;" /></li>
          <li>{this.props.userData[0].userName}</li>
          <li>{this.props.userData[0].bio}</li>
        </ul>
        <br></br>
        <hr/>
        <div className="row">
          <div className="col s12 m4 l4">
            <h5><Link to="/myLessons" style={{color: 'orange'}}>My Articles</Link></h5>
            <Match pattern="/myLessons" exactly render={
              () => <Lessons myLessons={this.props.myLessons}
                       getMyLessons={this.props.getMyLessons}
                       />
            }/>

          </div>
          <div className="col s12 m4 l4">
            <h5><Link to="/profile/incompleteLessons" style={{color: 'orange'}}>Lessons In Progress</Link></h5>
            <Match pattern="/profile/incompleteLessons" exactly render={
              () => <IncompleteLessons incompleteLessons={this.props.incompleteLessons}
                                getIncompleteLessons={this.props.getIncompleteLessons}
                              />
            }/>

          </div>
          <div className="col s12 m4 l4">
            <h5><Link to="/profile/favorites" style={{color: 'orange'}}>Favorites</Link></h5>
            <Match pattern="/profile/favorites" exactly render={
              () => <Favorites favorites={this.props.favorites}
                         getFavorites={this.props.getFavorites}
              />
            }/>
          </div>
        </div>
      </div>
    );
  }
}
