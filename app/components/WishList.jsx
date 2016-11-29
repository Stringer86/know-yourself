import React from 'react';
import Wish from './Wish';
import axios from 'axios';


export default class WishList extends React.Component {

  componentWillMount() {
    axios.get('/api/wishList')
      .then(res => {
        console.log(res);
        this.props.getWishList(res.data).bind(this);
      })
      .catch(err => {
        this.props.getWishList(err).bind(this);
      });
  }

  render() {
    const Wishes = this.props.wishes.map((wish, index) => {
      return <Wish data={wish}
                    key={index}
      />
    });


    return (
      <div className="row">
        { Wishes }
      </div>
    )
  }

}
