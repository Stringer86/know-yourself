import React from 'react';
import Hero from './Hero';
import Feed from './Feed';
import WishList from './WishList';


export default class Home extends React.Component {

  render() {
      return (
      <div className="row">
      <Hero />
      <div className="col s7">
      <Feed lessons={this.props.lessons}
            getLessons={this.props.getLessons}
            />
      </div>
      <div className="col s4">
      <WishList
        answering={this.props.answering}
        getAnswering={this.props.getAnswering}
        wishes={this.props.wishes}
        getWishList={this.props.getWishList}
      />
      </div>
      </div>
      )
  }



}
