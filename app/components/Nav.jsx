import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="row">
          <div className="col s12">

            <div className="col s8">
              <h1 id="logo">dev connect</h1>
            </div>

            <div className="col s4">
              <ul id="auth-list">
                <li id="write-hook"><Link to="">Write a lesson</Link></li>
                <li><Link to="" style={{color: 'orange'}}>Sign in</Link></li>
                <li><Link to="" style={{color: 'orange'}}>Sign up</Link></li>
              </ul>
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
}
