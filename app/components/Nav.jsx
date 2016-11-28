import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return <nav>
      <div className="row">
        <div className="col s12">

          <div className="col s8">
            <h1>Dev Connect</h1>
          </div>

          <div className="col s4">
            <ul>
              <li><Link to="">Write a lesson</Link></li>
              <li><Link to="">Sign in</Link></li>
              <li><Link to="">Sign up</Link></li>
            </ul>
          </div>

        </div>
      </div>

      <hr />

      <div className="row">
        <ul>
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
    </nav>
  }
}
