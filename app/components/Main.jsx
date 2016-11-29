import React from 'react';
import NotFound from './NotFound';
import Home from './Home';
// import LessonRead from './LessonRead';
// import LessonWrite from './LessonWrite';
// import Category from './Category';
import Profile from './Profile';
import { Match, Miss, Link} from 'react-router';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default class Main extends React.Component {

  render() {
    return (
      <div className="row">
        <Link to="/profile" style={{'marginTop': '65px', color: 'black'}}>bob</Link>
        <Match pattern="/" exactly render={
          () => <Home
            lessons={this.props.lessons}
            getLessons={this.props.getLessons}
            wishes={this.props.wishes}
            getWishList={this.props.getWishList}
          />
        }/>
        <Match pattern="/signup" exactly render={
          () => <SignUp
              />
        }/>
        <Match pattern="/signin" exactly render={
          () => <SignIn
                authUser={this.props.authUser}
              />
        }/>
        <Match pattern="/profile" exactly render={
          () => <Profile
            userData={this.props.userData}
            getUserData={this.props.getUserData}
          />
        }/>
        <Miss component={NotFound} />
      </div>
    );
  }
}
