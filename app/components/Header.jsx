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
        <nav className="black-text">
          <div className="nav-wrapper white">
            <Link to='/' className="brand-logo center black-text">My Journal</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.props.isLoggedIn &&
              <div>
              <li><Link to='/analyzer' className="black-text">E-mail analyzer</Link></li>
              <li><Link to='/profile' className="black-text">My Profile</Link></li>
              </div>
            }
            {!this.props.isLoggedIn &&
              <div>
              <li><Link to='/signin' className="black-text">Sign in</Link></li>
              <li><Link to='/signup' className="black-text">Sign up</Link></li>
              <li><Link to='/analyzer' className="black-text">E-mail analyzer</Link></li>
              </div>
            }
            </ul>
          </div>
        </nav>
      )
    }
  }
