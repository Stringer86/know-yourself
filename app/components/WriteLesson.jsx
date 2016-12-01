import React from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import { Redirect, Match, Link } from 'react-router';

export default class WriteAnswer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      published: false,

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
      console.log(res.data.lesson[0], 'looking for');
      this.props.getPublished(res.data.lesson[0]).bind(this);
      this.setState({ published: res.data.posted })

    })
    .catch(err => {
      return err;
    });
  }


  render() {
    return <div>
      <div>
        <input type="text" ref="title" placeholder="Title" />
        <input type="text" ref="category" placeholder="Category" />
        <textarea ref="description" placeholder="Description"></textarea>
        <textarea ref="code" placeholder="Let's see the code..."></textarea>
        <textarea ref="body" placeholder="Now explain the code..."></textarea>
        <button type="submit" onClick={this.publish.bind(this)}><Link to="/write-lesson/review">Publish</Link></button>
      </div>
      <div className="container">
        <Match pattern="/write-lesson/review" exactly render={
          () => <ReviewCard
            userData={this.props.userData}
            publishedArticle={this.props.publishedArticle}
            getUserData={this.props.getUserData}
          />
        }/>
      </div>
    </div>
  }
}
