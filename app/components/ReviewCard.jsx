import React from 'react';
import { Link, Redirect } from 'react-router';
import axios from 'axios';


export default class ReviewCard extends React.Component {

  deleteLesson(event) {
    console.log(this.props.publishedArticle.id);
    event.preventDefault();
    axios({
      method: 'delete',
      url: `/api/lessons/${this.props.publishedArticle.id}`
    })
    .then(res => {
      this.props.getPublished([]).bind(this);
      console.log(this.props.publishedArticle);
      axios.get('/api/user')
        .then(res => {
          this.props.getMyLessons(res.data).bind(this);
        })
        .catch(err => {
        console.log(err);
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {

    if(this.props.publishedArticle.length === 0) {
      return <div></div>
    }
      return (

      <div className="row">
        <div className="col s12 card">
        <div className="btn col s3" onClick={this.deleteLesson.bind(this)}><Link to="/write-lesson">Delete</Link></div>
        <div className="row"></div>
        <p><img className="img-circle" src={this.props.userData[0].photoUrl} height='40px' width='40px' />By: {this.props.userData[0].firstName}</p>
        <h4><strong>Title: {this.props.publishedArticle.title}</strong></h4>
        <p><strong>Category:</strong> {this.props.publishedArticle.category}</p>
        <p><strong>Description:</strong>{this.props.publishedArticle.description}</p>
        <p>{this.props.publishedArticle.body.substring(0, 200)}...</p>
        <div className="row btnrow">
          <div className="btn col s6">
            <Link to={`/lesson/${this.props.publishedArticle.id}`}>Read</Link>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
