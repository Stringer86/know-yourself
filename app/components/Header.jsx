import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class Header extends React.Component {

  logOut(event) {
    event.preventDefault();

    axios.delete('/token')
      .then(res => {
        this.props.authUser(false).bind(this);
      })
      .catch(err => {
        return err;
      });
  }

  render() {
    return (
      <div className="row">
      <nav>
        <div className="row">
          <div className="col s12">

            <div className="col s8">
              <h1><Link to="/" id="logo">dev connect</Link></h1>
            </div>

            <div className="col s4">
            {!this.props.isLoggedIn &&
              <ul id="auth-list">
                <li id="write-hook"><Link to="/write-lesson">Write a lesson</Link></li>
                <li><Link to="/signin" style={{color: 'orange'}}>Sign in</Link></li>
                <li><Link to="/signup" style={{color: 'orange'}}>Sign up</Link></li>
              </ul>
            }
            {this.props.isLoggedIn &&
              <ul id="auth-list">
                <li id="write-hook"><Link to="/write-lesson">Write a lesson</Link></li>
                <li onClick={this.logOut.bind(this)}><Link to="/signin" style={{color: 'orange'}}>Log Out</Link></li>
                <li><Link to="/profile" style={{color: 'orange'}}>My Profile</Link></li>
              </ul>
            }
            </div>

          </div>
          <div className="col s12">
            <ul id="category-list">
              <li><Link to="/category/Angular">Angular 1</Link></li>
              <li><Link to="/category/Angular2">Angular 2</Link></li>
              <li><Link to="/category/Backbone">Backbone</Link></li>
              <li><Link to="/category/Ember">Ember</Link></li>
              <li><Link to="/category/Meteor">Meteor</Link></li>
              <li><Link to="/category/Polymer">Polymer</Link></li>
              <li><Link to="/category/React">React</Link></li>
              <li><Link to="/category/Vue">Vue</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
  }
};
