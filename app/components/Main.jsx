import React from 'react';
import NotFound from './NotFound';
import Home from './Home';
import Profile from './Profile';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Journal from './Journal';
import Analyzer from './Analyzer';
import Entries from './Entries';
import Big5 from './Big5';
import ReadEntry from './ReadEntry';

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

        <Match pattern="/myjournal" exactly render={
          () => <Journal
                        entries={this.props.entries}
                        getEntries={this.props.getEntries}
          />
        }/>

        <Match pattern="/bigfive" exactly render={
          () => <Big5

          />
        }/>

        <Match pattern="/analyzer" render={
          () => <Analyzer />
        }/>

        <Match pattern="/profile" exactly render={
          () => <Profile
                      entries={this.props.entries}
                      getEntries={this.props.getEntries}
                      />
        }/>
        <Match pattern="/entries" exactly render={() =>
          !this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <Entries  entries={this.props.entries}
                      getEntries={this.props.getEntries}
            />
          )
        }/>
        <Match pattern="/entry/:id?" exactly render={
          () => <ReadEntry getEntries={this.props.getEntries}/>
        }/>
        <Miss component={NotFound} />
      </div>
    );
  }
}
