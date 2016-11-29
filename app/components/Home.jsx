import React from 'react';
import Hero from './Hero';
import Feed from './Feed';
// import WishList from './WishList';


export default class Home extends React.Component {

  render() {
      return (
      <div>
      <Hero />
      <Feed lessons={this.props.lessons}
            getLessons={this.props.getLessons}
            />
      </div>
      )
  }



}
