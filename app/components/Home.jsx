import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal';
import Hero from './Home-components/Hero';
import MiddleSection1 from './Home-components/MiddleSection1';
import MiddleSection2 from './Home-components/MiddleSection2';
import MiddleSection3 from './Home-components/MiddleSection3';

const Home = (props) => {

    return (
      <div>
        <Hero isLoggedIn={props.isLoggedIn} />
        <MiddleSection1 />
        <MiddleSection2 isLoggedIn={props.isLoggedIn} />
        <MiddleSection3 />
      </div>
    );
}

module.exports = Home;
