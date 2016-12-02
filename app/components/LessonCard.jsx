import React from 'react';
import { Link, Redirect } from 'react-router';
import axios from 'axios';


export default class LessonCard extends React.Component {

  constructor(props) {
    super(props)
    let fav = this.props.favorited;
    this.state = {
      favorited: fav
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ favorited: nextProps.favorited });
  }

  favorite(event) {
    event.preventDefault()
    axios.post('/api/favorites', {
      lessonId: this.props.id
    })
    .then(res => {
      console.log("added!");
      this.setState({favorited: !this.state.favorited})
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
    .then(res => {
      this.setState({favorited: !this.state.favorited})
    })
    .catch(err => {
      console.log(err);
    })
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
      return (

      <div className="row">
      <div className="col s12 card">
        <div className="row cardTop">
        <div className="col s1">
        <img className="img-circle" src={this.props.data.photoUrl} height='40px' width='40px' />
        </div>
        <div className="col s10 authorName">
          <p>{this.props.data.firstName} {this.props.data.lastName} <span className="on"> on </span> <Link to={`/category/${this.props.data.category}`}>{this.props.data.category}</Link></p>
        </div>
        </div>
        <h4 className="title">{this.props.data.title}</h4>
        <h5 className="description">{this.props.data.description}</h5>
        <p className="readMore"><Link to={`/lesson/${this.props.data.id}`}>Read More...</Link></p>
        <div className="row">
        {!this.state.favorited &&
          <div>
          <img onClick={this.favorite.bind(this)} className="icon icons8-Like" src="../img/outline-heart.png" width="30" height="30" />
          </div>
        }
        {this.state.favorited &&
          <div>
          <img onClick={this.removeFav.bind(this)} className="icon icons8-Like-Filled" src="../img/filled-heart.png" width="30" height="30" />
          </div>
        }
        {this.props.myLesson &&
          <div className="btn delete" onClick={this.deleteLesson.bind(this)}>Delete</div>
        }
        </div>
      </div>
      </div>
    )
  }
}
