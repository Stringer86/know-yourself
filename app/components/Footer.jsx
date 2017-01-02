import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p><Link to="/profile" className="grey-text text-lighten-2">© 2016 MyJournal</Link></p>
      </footer>
    );
  }
}
