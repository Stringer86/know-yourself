import React from 'react';
import NotFound from './NotFound';
import Home from './Home';
// import LessonRead from './LessonRead';
// import LessonWrite from './LessonWrite';
// import Category from './Category';
import Profile from './Profile';
import {Match, Miss, Link} from 'react-router';
import Auth from './Auth';

export default class Main extends React.Component {

  render() {
    return (
      <div className="row">
        <Link to="/profile" style={{'marginTop': '60px', 'color': 'black'}}>bob</Link>
        <Match pattern="/" exactly render={
          () => <Home
            lessons={this.props.lessons}
            getLessons={this.props.getLessons}
          />
        }/>
        <Match pattern="/login" exactly render={
          () => <Auth
            isLoggedIn={this.props.isLoggedIn}
          />
        }/>
        <Match pattern="/profile" exactly render={
          () => <Profile
            user={this.props.user}
            getUserInfo={this.props.getUserInfo}
          />
        }/>
        <Miss component={NotFound} />
      </div>
    )
  }
}
