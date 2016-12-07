import React from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';

export default class SignUp extends React.Component {

  signUp(event) {
    event.preventDefault();

    axios.post('/api/user', {
      name: this.refs['name'].value,
      email: this.refs['email'].value,
      bio: this.refs['bio'].value,
      password: this.refs['password'].value
    })
    .then(function (response) {
      notify.show('You are now signed up!', 'success');
    })
    .catch(function (error) {
      notify.show(`${error}`, 'success');
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
              <div className="row">
                <div className="col s10 offset-s1 m6 offset-m3">
                  <label>Tell us a bit about yourself</label>
                  <input type="text" ref="bio" />
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
