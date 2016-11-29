import React from 'react';
// import NotFound from './NotFound';
import Home from './Home';
// import LessonRead from './LessonRead';
// import LessonWrite from './LessonWrite';
// import Category from './Category';
// import Profile from './Profile';
import { Match, Miss, Link} from 'react-router';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default class Main extends React.Component {

  render() {
    return (
      <div className="row">
        <Link to="/login">bob</Link>
        <Match pattern="/" exactly render={
          () => <Home
            lessons={this.props.lessons}
            getLessons={this.props.getLessons}/>
        }/>
        <Match pattern="/signup" exactly render={
          () => <SignUp
              />
        }/>
        <Match pattern="/signin" exactly render={
          () => <SignIn
              />
        }/>
        <Match pattern="/login" exactly render={
          () => <Auth isLoggedIn={this.props.isLoggedIn} />
        }/>

        <Match pattern="/profile" exactly render={
          () => <Profile
            user={this.props.user}
            getUserInfo={this.props.getUserInfo}
          />
        }/>
        <Miss component={NotFound} />
      </div>
    );
  }
}
