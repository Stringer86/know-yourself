import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal';
import Hero from './Homeview/Hero';
import MiddleSection1 from './Homeview/MiddleSection1';
import MiddleSection2 from './Homeview/MiddleSection2';
import MiddleSection3 from './Homeview/MiddleSection3';

export default class Home extends React.Component {

  render() {

    return (
      <div>
      <Hero isLoggedIn={this.props.isLoggedIn} />
      <MiddleSection1 />
      <MiddleSection2 isLoggedIn={this.props.isLoggedIn} />
      <hr></hr>
      <MiddleSection3 />
      </div>

    );
  }
}
