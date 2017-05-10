import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();

    axios.delete('/token')
      .then(res => {
        this.props.authUser(false);
      })
      .catch(err => {
        return err;
      });
  }

  render() {
    if (window.location.pathname === '/myjournal') {
      return null;
    }

    if (this.props.isLoggedIn) {
      return (
        <Headroom >
        <header>
        <nav className="z-depth-0 header">
          <div className="nav-wrapper">
            <Link to='/' className="brand-logo left"><strong>My Journal</strong></Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse black-text right"><i className="material-icons right">menu</i></a>
            <ul className="right hide-on-small-and-down">
              <li><a className="btn"><Link to='/analyzer' className="white-text">Analyzer</Link></a></li>
              <li><Link to='/profile' className="blue-text">My Profile</Link></li>
              <li><Link to='/' className="black-text" onClick={this.logOut}>Log out</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
            <li><a className="btn"><Link to='/analyzer' className="white-text">Analyzer</Link></a></li>
            <li><a><Link to='/profile' className="blue-text">My Profile</Link></a></li>
            <li><a><Link to='/' className="black-text" onClick={this.logOut}>Log out</Link></a></li>
          </ul>
          </div>
        </nav>
        </header>
        </Headroom>
      )
    }

    return (
      <Headroom>
      <header>
      <nav className="z-depth-0 header">
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo left">My Journal</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse black-text right"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-small-and-down">
            <li><Link to='/signin' className="blue-text">Log-in</Link></li>
            <a className="btn"><Link to='/analyzer' className="white-text">Analyzer</Link></a>
          </ul>
          <ul className="side-nav" id="mobile-demo">
          <li><a className="btn"><Link to='/analyzer' className="white-text">Analyzer</Link></a></li>
          <li><Link to='/signin' className="blue-text">Log-in</Link></li>
        </ul>
        </div>
      </nav>
      </header>
      </Headroom>
    )

    }
  }
