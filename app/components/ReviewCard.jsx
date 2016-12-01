import React from 'react';
import { Link, Redirect } from 'react-router';
import axios from 'axios';


export default class ReviewCard extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.userData === nextProps) {
      return;
    }
    
    axios.get('/api/userData')
      .then(res => {
        this.props.getUserData(res.data).bind(this);
      })
      .catch(err => {
      console.log(err);
    });
  }

  deleteLesson(event) {
    event.preventDefault();
    console.log(this.props.data.id);
    axios({
      method: 'delete',
      url: `/api/lessons/${this.props.data.id}`
    })
    .then(res => {
      console.log(res.data);
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
    console.log(this.props.publishedArticle);
    console.log(this.props.userData.photoUrl);

    if(this.props.userData.length === 0) {
      return <div></div>
    }
      return (

      <div className="row">
        <div className="col s12 card">
        <div className="btn col s6" onClick={this.deleteLesson.bind(this)}>Delete</div>
        <p><img className="img-circle" src={this.props.userData.photoUrl} height='40px' width='40px' />By: {this.props.userData.firstName}</p>
        <h4><strong>Title: {this.props.publishedArticle.title}</strong></h4>
        <p><strong>Category:</strong> {this.props.publishedArticle.category}</p>
        <p><strong>Description:</strong>{this.props.publishedArticle.description}</p>
        {/* <p>{this.props.publishedArticle.bod.substring(0, 200)}...</p> */}
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
