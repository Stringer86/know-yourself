import React from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import { Match, Link, Redirect} from 'react-router';

export default class SignUp extends React.Component {

  signUp(event) {
    event.preventDefault();

    if (!this.refs['name'].value) {
      notify.show('Name must not be blank.', 'error', 2000);
    }

    if (!this.refs['email'].value) {
      notify.show('Email must not be blank.', 'error', 2000);
    }

    if (this.refs['email'].value.indexOf('@') < 0) {
      notify.show('Invalid email.', 'error', 2000);
    }

    if (!this.refs['password'].value) {
      notify.show('Password must not be blank.', 'error', 2000);
    }

    if (this.refs['password'].value.length < 8) {
      notify.show('Password must be at least 8 characters long.', 'error', 2000);
    }

    axios.post('/api/user', {
      name: this.refs['name'].value,
      email: this.refs['email'].value,
      password: this.refs['password'].value
    })
    .then(res => {
      axios.post('/api/token', {
        email: this.refs['email'].value,
        password: this.refs['password'].value
      })
      .then(res => {
          notify.show('You are now signed up!', 'success');
          this.props.authUser(res.data.bool).bind(this);
        })
        .catch(err => {
          notify.show('something went wrong', 'error');
        });
    })
    .catch(function (error) {
      notify.show('An error occurred while processing your info. Please try again.', 'error');
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <form className="col s12">
              <h2 className="auth-title center-align">Sign Up</h2>
              <div className="row">
                <div className="col s10 offset-s1 m6 offset-m3">
                  <label>Name</label>
                  <input type="text" autoFocus ref="name"/>
                </div>
              </div>
              <div className="row">
                <div className="col s10 offset-s1 m6 offset-m3">
                  <label>Email</label>
                  <input type="email" ref="email"/>
                </div>
              </div>
              <div className="row">
                <div className="col s10 offset-s1 m6 offset-m3">
                  <label>Password</label>
                  <input type="password" ref="password"/>
                </div>
              </div>
                <div className="row center-align">
                  <button id="action-button" type="button" name="button" onClick={this.signUp.bind(this)}>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
