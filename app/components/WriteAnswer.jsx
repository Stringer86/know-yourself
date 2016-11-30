import React from 'react';
import axios from 'axios';

export default class WriteAnswer extends React.Component {
  componentDidMount() {
    const id = Number(location.pathname.slice(14)) + 1;

    axios.get(`/api/wishList/${id}`)
      .then((res) => {
        this.props.getWish(res.data).bind(this);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    if (this.props.wishItem.length === 0) {
      return <div></div>
    }

    return <div>
      <div>
        <input type="text" defaultValue={this.props.wishItem.question} disabled />
        <textarea placeholder="description"></textarea>
        <textarea placeholder="teach something new..."></textarea>
        <button type="submit">Publish</button>
      </div>
    </div>
  }
}
