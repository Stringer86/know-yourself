import React from 'react';
import Wish from './Wish';
import axios from 'axios';
import { Link } from 'react-router';

export default class WishList extends React.Component {
  componentWillMount() {
    axios.get('/api/wishList')
      .then(res => {
        this.props.getWishList(res.data).bind(this);
      })
      .catch(err => {
        return err;
      });
  }

  render() {
    const wishes = this.props.wishes.map((wish, index) => {
      return <Wish upVote={this.props.upVote}
                   downVote={this.props.downVote}
                   data={wish}
                   key={index}
              />
    });

    return (
      <div>
        <div className="row" id="wishlist-title">
          <div className="s4">
            <p>Recently asked questions</p>
          </div>
          <div className="s4">
            <div className="btn" id="question-button">
              <Link to="question">Ask a Question</Link>
            </div>
          </div>
        </div>
        <div className="row" id="wishlist-container">
          <div>
            { wishes }
          </div>
        </div>
      </div>
    );
  }
}
