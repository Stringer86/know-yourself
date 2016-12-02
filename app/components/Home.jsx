import React from 'react';
import Hero from './Hero';
import Feed from './Feed';
import VisitorFeed from './VisitorFeed';
import WishList from './WishList';


export default class Home extends React.Component {

  render() {
    console.log(this.props.isLoggedIn);
      return (
        <div>
          <div className="row">
            <Hero />
          </div>
          <div>
            {this.props.isLoggedIn &&
              <div className="col s12 m7 l6">
                <Feed lessons={this.props.lessons}
                  getLessons={this.props.getLessons}
                  favorites={this.props.favorites}
                  getFavorites={this.props.getFavorites}
                  />
              </div>
            }

            {!this.props.isLoggedIn &&
              <div className="col s12 m4 l6">
                <VisitorFeed lessons={this.props.lessons}
                  getLessons={this.props.getLessons}
                  favorites={this.props.favorites}
                  getFavorites={this.props.getFavorites}
                />
              </div>
            }

            <div className="col s12 m4 l4 offset-s2">
              <WishList
                upVote={this.props.upVote}
                downVote={this.props.downVote}
                wishes={this.props.wishes}
                getWishList={this.props.getWishList}
              />
            </div>
          </div>
        </div>
      );
  }



}
