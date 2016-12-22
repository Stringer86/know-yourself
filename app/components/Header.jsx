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
        <nav>
          <div className="nav-wrapper blue">
            <Link to='/' className="brand-logo center">My Journal</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.props.isLoggedIn &&
              <li><Link to='/profile'>My Profile</Link></li>
            }
            {!this.props.isLoggedIn &&
              <div>
              <li><Link to='/signin'>Sign in</Link></li>
              <li><Link to='/signup'>Sign up</Link></li>
              </div>
            }
            <li><Link to='/analyzer'>E-mail analyzer</Link></li>
            </ul>
          </div>
        </nav>
      )
    }
  }
