import React from 'react';

export default class WriteLesson extends React.Component {
  render() {
    return <div>
      <input type="text" placeholder="title" />
      <textarea placeholder="description"></textarea>
      <textarea placeholder="teach something new..."></textarea>
      <button type="submit">Publish</button>
    </div>
  }
}
