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

              <div className="col s4 headerInfo">
                {!this.props.isLoggedIn &&
                  <ul id="auth-list">
                    <li><Link to="/signin" style={{color: '#02b875', 'fontSize': '14px'}}>Sign in</Link></li>
                    <li><Link to="/signup" style={{color: '#02b875', 'fontSize': '14px'}}>Sign up</Link></li>
                  </ul>
                }

                {this.props.isLoggedIn &&
                  <ul id="auth-list">
                    <li id="write-hook"><Link to="/write-lesson">Write a lesson</Link></li>
                    <li><Link to="/profile" style={{color: '#02b875', 'fontSize': '14px'}}>My Profile</Link></li>
                    <li onClick={this.logOut.bind(this)}><Link to="/signin" style={{color: '#02b875', 'fontSize': '14px'}}>Log Out</Link></li>
                  </ul>
                }
              </div>
            </div>

            <div className="col s12">
              <ul id="category-list">
                <li className="frameworks"><Link to="/category/Angular1">Angular 1</Link></li>
                <li className="frameworks"><Link to="/category/Angular2">Angular 2</Link></li>
                <li className="frameworks"><Link to="/category/Backbone">Backbone</Link></li>
                <li className="frameworks"><Link to="/category/Ember">Ember</Link></li>
                <li className="frameworks"><Link to="/category/Meteor">Meteor</Link></li>
                <li className="frameworks"><Link to="/category/Polymer">Polymer</Link></li>
                <li className="frameworks"><Link to="/category/React">React</Link></li>
                <li className="frameworks"><Link to="/category/Vue">Vue</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};
