import React from 'react';
import NotFound from './NotFound';
import Home from './Home';
import Profile from './Profile';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Match, Miss, Link, Redirect} from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div className="row">
        <Match pattern="/" exactly render={
          () => <Home                />
        }/>

        <Match pattern="/signup" exactly render={() =>
          this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <SignUp authUser={this.props.authUser} />
          )
        }/>

        <Match pattern="/signin" exactly render={() =>
          this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <SignIn authUser={this.props.authUser} />
          )
        }/>

        <Match pattern="/profile" exactly render={
          () => <Profile
                      entries={this.props.entries}
                      getEntries={this.props.getEntries}
                      />
        }/>
        <Miss component={NotFound} />
      </div>
    );
  }
}
