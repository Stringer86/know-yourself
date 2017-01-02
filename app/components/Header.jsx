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
        <nav className="z-depth-0">
          <div className="nav-wrapper">
            <Link to='/' className="brand-logo left">My Journal</Link>
            {this.props.isLoggedIn &&
              <ul id="nav-mobile" className="right hide-on-down">
              <li><a className="btn"><Link to='/analyzer' className="white-text">Analyzer</Link></a></li>
              <li><Link to='/profile' className="blue-text">My Profile</Link></li>
              <li><Link to='/' className="black-text" onClick={this.logOut.bind(this)}>Log out</Link></li>
              </ul>
            }
            {!this.props.isLoggedIn &&
              <ul id="nav-mobile" className="right hide-on-down">
              <li><Link to='/signin' className="blue-text">Log-in</Link></li>
              <a className="btn"><Link to='/analyzer' className="white-text">Analyzer</Link></a>
              </ul>
            }
          </div>
        </nav>
      )
    }
  }
