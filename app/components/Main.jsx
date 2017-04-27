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
import Interpretation from './Interpretation';

import axios from 'axios';
import { Route, Redirect, Link, Switch} from 'react-router-dom';


export default class Main extends React.Component {

  componentDidMount() {
    axios.get('/api/entries')
      .then(res => {
        this.props.getEntries(res.data)
      })
      .catch(err => {
        return err;
      })
  }

  render() {
    return (
      <div className="row">
      <Switch>
        <Route exact path="/" exactly render={() =>
          <Home isLoggedIn={this.props.isLoggedIn} />
        }/>

        <Route path="/signup" exactly render={() =>
          this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <div>
            <SignUp authUser={this.props.authUser} />
            </div>
          )
        }/>

        <Route path="/signin" exactly render={() =>
          this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <div>
            <SignIn authUser={this.props.authUser} />
            </div>
          )
        }/>

        <Route path="/myjournal" exactly render={
          () => !this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) :
          <div className="background-color">
          <Journal entries={this.props.entries}
                   getEntries={this.props.getEntries}
          />
          </div>
        }/>

        <Route path="/bigfive" component={Big5}/>

        <Route path="/interpretation" component={Interpretation}/>

        <Route path="/analyzer" component={Analyzer}/>

        <Route path="/profile" exactly render={
          () => !this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) :
          <div className="profilebackground">
          <Profile
                    entries={this.props.entries}
                    getEntries={this.props.getEntries}
                    />
          </div>
        }/>
        <Route path="/entries" exactly render={
          () => !this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) :
            <div>
            <Entries  entries={this.props.entries}
                      getEntries={this.props.getEntries}
                      sortIt={this.props.sortIt}
                      handleSearch={this.props.handleSearch}
                      searchFilter={this.props.search}
            />
            </div>

        }/>
        <Route path="/entry/:id?" exactly render={
          () => !this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) :
          <ReadEntry getEntries={this.props.getEntries}/>
        }/>
        <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}
