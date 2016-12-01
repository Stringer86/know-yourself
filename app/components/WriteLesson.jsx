import React from 'react';
import axios from 'axios';
import LessonCard from './LessonCard';
import { Redirect } from 'react-router';

export default class WriteAnswer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      published: false,
      publishedArticle: [],
      favorited: false
    }
  }

  publish(event) {
    event.preventDefault();

    axios.post('/api/lessons', {
      title: this.refs['title'].value,
      category: this.refs['category'].value,
      description: this.refs['description'].value,
      published: true,
      code: this.refs['code'].value,
      body: this.refs['body'].value,
      likes: 0
    })
    .then((res) => {
      this.setState({ published: res.data.posted, publishedArticle: [res.data.lesson[0]] })
    })
    .catch(err => {
      return err;
    });
  }

  render() {
      if(this.state.publishedArticle.length === 0) {
        return <div>
          <input type="text" ref="title" placeholder="Title" />
          <input type="text" ref="category" placeholder="Category" />
          <textarea ref="description" placeholder="Description"></textarea>
          <textarea ref="code" placeholder="Let's see the code..."></textarea>
          <textarea ref="body" placeholder="Now explain the code..."></textarea>
          <button type="submit" onClick={this.publish.bind(this)}>Publish</button>
        </div>
      }

      if(this.state.publishedArticle.length > 0) {
        return
      <div>
        <h1>kadfjlad</h1>
      </div>
    }
  }
}
