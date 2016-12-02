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
        <div className="col s12">
          <div className="row">
            <h1 className="instruction-title"><strong>how it works</strong></h1>
            <p className="col s12 m6 offset-m3 write-instructions center-align">The idea is to write one piece of code on one of the specific framework or libraries you see in the navbar. and then explain what you did in plain english. We feel that
            often times people are willing to show off code online, but we believe it is more helpful to learn through both code <i>and</i> explanation.</p>
          </div>
          <div className="row">
            <input className="col s12 m3 offset-m1" type="text" ref="title" placeholder="Title" />
            <input className="col s12 m2 offset-m1" type="text" ref="category" placeholder="Category" />
            <input className="col s12 m3 offset-m1" type="text" ref="description" placeholder="Description" />
          </div>
        </div>
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
