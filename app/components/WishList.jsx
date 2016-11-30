import React from 'react';
import Wish from './Wish';
import axios from 'axios';

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
      return <Wish
        upVote={this.props.upVote}
        downVote={this.props.downVote}
        data={wish}
        key={index}
        id={index}
      />
    });

    return (
      <div className="row" id="wishlist-container">
        { wishes }
      </div>
    )
  }

}
