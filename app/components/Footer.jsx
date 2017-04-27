import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer>
        <p><Link to="/profile" className="grey-text text-lighten-2">© 2016 MyJournal</Link></p>
      </footer>
    );
  }

module.exports = Footer;
