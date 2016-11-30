import React from 'react';
import axios from 'axios';

export default class WriteAnswer extends React.Component {
  render() {
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
