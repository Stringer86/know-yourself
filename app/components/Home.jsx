import React from 'react';
// import Hero from './Hero';
import Feed from './Feed';
// import WishList from './WishList';


export default class Home extends React.Component {

  render() {
    <div className="container">
      <Feed lessons={this.props.lessons}
            getLessons={this.getLessons}
            />
        </div>
    </div>
  }



}
