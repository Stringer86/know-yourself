import React from 'react';
import { Link, Redirect } from 'react-router';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';


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
      this.setState({favorited: !this.state.favorited})
    })
    .catch(err => {
      notify.show('Must be logged in', 'error');
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
      return err;
    })
  }

  deleteLesson(event) {
    event.preventDefault();

    axios({
      method: 'delete',
      url: `/api/lessons/${this.props.data.id}`
    })
    .then(res => {
      notify.show('Lesson deleted', 'success');
      axios.get('/api/user')
        .then(res => {
          this.props.getMyLessons(res.data).bind(this);
        })
        .catch(err => {
          return err;
      })
    })
    .catch(err => {
      return err;
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 card">
            {this.props.data.photoUrl &&
              <div className="row cardTop">
              <div className="col s1">
                <img className="img-circle" src={this.props.data.photoUrl} height='40px' width='40px' />
              </div>
              <div className="col s10 authorName">
                <p><Link to={`/user/${this.props.data.userId}`}>{this.props.data.name} </Link><span className="on"> on </span> <Link to={`/category/${this.props.data.category}`}>{this.props.data.category}</Link></p>
              </div>
              </div>
            }

          <h4 className="title">{this.props.data.title}</h4>
          <h5 className="description">{this.props.data.description}</h5>
          <p className="read-more"><Link to={`/lesson/${this.props.data.id}`}>Read More...</Link></p>

          <div className="row">
            {!this.state.favorited &&
              <div className="heart">
                <img onClick={this.favorite.bind(this)}  src="../img/outline-heart.png" width="25" height="25" />
              </div>
            }
            {this.state.favorited &&
              <div className="heart">
                <img onClick={this.removeFav.bind(this)}  src="../img/filled-heart.png" width="25" height="25" />
              </div>
            }
            {this.props.myLesson &&
              <div className="btn delete" onClick={this.deleteLesson.bind(this)}>Delete</div>
            }
          </div>
        </div>
      </div>
    );
  }
}
