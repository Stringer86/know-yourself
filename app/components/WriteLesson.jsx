import React from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import { Redirect, Match, Link } from 'react-router';
import Notifications, { notify } from 'react-notify-toast';

export default class WriteAnswer extends React.Component {

  componentDidMount() {

    axios.get('/api/userData')
      .then(res => {
        this.props.getUserData(res.data).bind(this);
      })
      .catch(err => {
        return err;
    });
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
      notify.show('Published!', 'success');
      this.refs['title'].value = '',
      this.refs['category'].value = '',
      this.refs['description'].value = '',
      this.refs['code'].value = '',
      this.refs['body'].value = '',
      this.props.getPublished(res.data.lesson[0]).bind(this);
      this.setState({ published: res.data.posted })
    })
    .catch(err => {
      notify.show('Make sure to fill out all fields', 'error');
    });
  }


  render() {
    return <div>
    <div id="question-container">
    <div className="row">
        <input className="col s12 m3 offset-m1" type="text" ref="title" placeholder="Title" />
        </div>
        <div className="row">
        <input className="col s12 m3 offset-m1" type="text" ref="category" placeholder="Category" />
        </div>
        <div className="row">
        <textarea className="card-1 col s12 m3 offset-m1" ref="description" placeholder="Description"></textarea>
        </div>
        <div className="row">
        <textarea className="card-1 col s12 m10 offset-m1 lesson-box" ref="code" placeholder="Let's see the code..."></textarea>
        </div>
        <div className="row">
        <textarea className="card-1 col s12 m10 offset-m1 lesson-box" ref="body" placeholder="Now explain the code..."></textarea>
        </div>
        <div className="row center-align">
        <button id="submit-question" type="submit" onClick={this.publish.bind(this)}><Link to="/write-lesson/review">Publish</Link></button>
      </div>
      </div>
      <div className="container">
        <Match pattern="/write-lesson/review" exactly render={
          () => <ReviewCard
            userData={this.props.userData}
            publishedArticle={this.props.publishedArticle}
            getUserData={this.props.getUserData}
            getPublished={this.props.getPublished}
          />
        }/>
      </div>
    </div>
  }
}
