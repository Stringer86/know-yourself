import React from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';


export default class SignUp extends React.Component {

  signUp(event) {
    event.preventDefault()
    axios.post('/api/user', {
      firstName: this.refs['firstName'].value,
      lastName: this.refs['lastName'].value,
      userName: this.refs['userName'].value,
      email: this.refs['email'].value,
      password: this.refs['password'].value
        })
        .then(function (response) {
          notify.show('You are now signed up!', 'success')
        })
        .catch(function (error) {
          notify.show(`${error}`, 'success')

        });
  }

  render() {
    return (
      <div>
        <div className="container">
        <div className="row">
          <form className="col s12">
            <h2 className="auth-title center-align">Sign Up</h2>
            <div className="col s10 offset-s1">
              <label>First Name</label>
              <input type="text" autoFocus ref="firstName"/>
            </div>
            <div className="col s10 offset-s1">
              <label>Last Name</label>
              <input type="text" ref="lastName" />
            </div>
            <div className="col s10 offset-s1">
              <label>UserName</label>
              <input type="text" ref="userName" />
            </div>
            <div className="col s10 offset-s1">
              <label>Email</label>
              <input type="email" ref="email"/>
            </div>
            <div className="col s10 offset-s1">
              <label>Password</label>
              <input type="password" ref="password"/>
              <div className="row center-align">
              <button id="action-button" type="button" name="button" onClick={this.signUp.bind(this)}>Sign Up</button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    )
  }
}
