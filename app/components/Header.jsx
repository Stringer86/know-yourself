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
          <div className="nav-wrapper">
            <Link to='/' className="brand-logo center">My Journal</Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to='/'>My Journal</Link></li>
              <li><Link to='/profile'>My Profile</Link></li>
              <li><Link to='/signin'>Sign in</Link></li>
              <li><Link to='/signup'>Sign up</Link></li>
            </ul>
          </div>
        </nav>
      )
    }
  }
