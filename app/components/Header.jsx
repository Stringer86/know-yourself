import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class Header extends React.Component {

  logOut(event) {
    event.preventDefault();

    axios.delete('/token')
      .then(res => {
        this.props.logoutUser(res.data).bind(this);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <nav>
        <div className="row">
          <div className="col s12">

            <div className="col s8">
              <h1 id="logo">dev connect</h1>
            </div>

            <div className="col s4">
            {!this.props.isLoggedIn &&
              <ul id="auth-list">
                <li id="write-hook"><Link to="">Write a lesson</Link></li>
                <li><Link to="/signin" style={{color: 'orange'}}>Sign in</Link></li>
                <li><Link to="/signup" style={{color: 'orange'}}>Sign up</Link></li>
              </ul>
            }
            {this.props.isLoggedIn &&
              <ul id="auth-list">
                <li id="write-hook"><Link to="">Write a lesson</Link></li>
                <li onClick={this.logOut.bind(this)}><Link to="/" style={{color: 'orange'}}>Log Out</Link></li>
              </ul>
            }
            </div>

          </div>
          <div className="col s12">
            <ul id="category-list">
              <li><Link to="">Angular 1</Link></li>
              <li><Link to="">Angular 2</Link></li>
              <li><Link to="">Backbone</Link></li>
              <li><Link to="">Ember</Link></li>
              <li><Link to="">Meteor</Link></li>
              <li><Link to="">Polymer</Link></li>
              <li><Link to="">React</Link></li>
              <li><Link to="">Vue</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};
