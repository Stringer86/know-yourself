import React from 'react';
import Hero from './Hero';
import Feed from './Feed';
import VisitorFeed from './VisitorFeed';
import WishList from './WishList';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <Hero isLoggedIn={this.props.isLoggedIn}
          />
        </div>

        <div>
          {this.props.isLoggedIn &&
            <div className="col s12 m6 offset-m1">
              <Feed lessons={this.props.lessons}
                    getLessons={this.props.getLessons}
                    favorites={this.props.favorites}
                    getFavorites={this.props.getFavorites}
                />
            </div>
          }

          {!this.props.isLoggedIn &&
            <div className="col s12 m6 offset-m1">
              <VisitorFeed lessons={this.props.lessons}
                           getLessons={this.props.getLessons}
                           favorites={this.props.favorites}
                           getFavorites={this.props.getFavorites}
              />
            </div>
          }

          <div className="col s12 m4">
            <WishList upVote={this.props.upVote}
                      downVote={this.props.downVote}
                      wishes={this.props.wishes}
                      getWishList={this.props.getWishList}
                      isLoggedIn={this.props.isLoggedIn}
            />
          </div>
        </div>
      </div>
    );
  }
}
