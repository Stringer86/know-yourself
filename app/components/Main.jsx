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
import Header from './Header';

import { Match, Miss, Link, Redirect} from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div className="row">
        <Match pattern="/" exactly render={
          () =>
          <div>
          <Header
              isLoggedIn={this.props.isLoggedIn}
              authUser={this.props.authUser}
              />
              <Home />
          </div>
        }/>

        <Match pattern="/signup" exactly render={() =>
          this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <div>
            <Header
                isLoggedIn={this.props.isLoggedIn}
                authUser={this.props.authUser}
                />
            <SignUp authUser={this.props.authUser} />
            </div>
          )
        }/>

        <Match pattern="/signin" exactly render={() =>
          this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <div>
            <Header
                isLoggedIn={this.props.isLoggedIn}
                authUser={this.props.authUser}
                />
            <SignIn authUser={this.props.authUser} />
            </div>
          )
        }/>

        <Match pattern="/myjournal" exactly render={
          () => <Journal
                        entries={this.props.entries}
                        getEntries={this.props.getEntries}
          />
        }/>

        <Match pattern="/bigfive" exactly render={
          () =>
          <div>
          <Header
              isLoggedIn={this.props.isLoggedIn}
              authUser={this.props.authUser}
              />
          <Big5 />
          </div>
        }/>

        <Match pattern="/analyzer" exactly render={
          () =>
          <div>
          <Header
              isLoggedIn={this.props.isLoggedIn}
              authUser={this.props.authUser}
              />
          <Analyzer />
          </div>
        }/>

        <Match pattern="/profile" exactly render={
          () =>
          <div>
          <Header
              isLoggedIn={this.props.isLoggedIn}
              authUser={this.props.authUser}
              />
          <Profile
                      entries={this.props.entries}
                      getEntries={this.props.getEntries}
                      />
          </div>
        }/>
        <Match pattern="/entries" exactly render={() =>
          !this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <div>
            <Header
                isLoggedIn={this.props.isLoggedIn}
                authUser={this.props.authUser}
                />
            <Entries  entries={this.props.entries}
                      getEntries={this.props.getEntries}
                      sortIt={this.props.sortIt}
            />
            </div>
          )
        }/>
        <Match pattern="/entry/:id?" exactly render={
          () =>
          <div>
          <Header
              isLoggedIn={this.props.isLoggedIn}
              authUser={this.props.authUser}
              />
          <ReadEntry getEntries={this.props.getEntries}/>
          </div>
        }/>
        <Miss component={NotFound} />
      </div>
    );
  }
}
