import React from 'react';
import { Link, Redirect } from 'react-router';
import axios from 'axios';


export default class LessonCard extends React.Component {

  favorite(event) {
    event.preventDefault()
    axios.post('/api/favorites', {
      lessonId: this.props.id
    })
    .then(res => {
      console.log("added!");
    })
    .catch(err => {
      console.log(err);
    });
  }

  removeFav(event) {
    event.preventDefault()
    axios({
      method: 'delete',
      url: `/api/favorites`,
      data: {lessonId: this.props.id}
    })
  }

  render() {
      return (

      <div className="row">
      <div className="col s12 card">
        <p><img className="img-circle" src={this.props.data.photoUrl} height='40px' width='40px' />By: {this.props.data.firstName}</p>
        <h4><strong>{this.props.data.title}</strong></h4>
        <p><strong>Category:</strong> {this.props.data.category}</p>
        <p><strong>Concept:</strong> {this.props.data.concept}</p>
        <p><strong>Description:</strong>{this.props.data.description}</p>
        <p>{this.props.data.body.substring(0, 200)}...</p>
        <div className="row btnrow">
        <div className="btn col s6">
        <Link to={`/lesson/${this.props.data.id}`}>Read</Link>
        </div>
        {!this.props.favorited &&
          <div className="btn col s6" onClick={this.favorite.bind(this)}>Favorite</div>
        }
        {this.props.favorited &&
          <div className="btn col s6" onClick={this.removeFav.bind(this)}>Favorited</div>
        }
        </div>
      </div>
      </div>
    )
  }
}
