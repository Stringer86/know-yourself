import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class Wish extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      upvoteActive: false,
      downvoteActive: false
    }
  }

  upvoted() {
    if (!this.props.isLoggedIn) {
      return;
    }

    const upvotes = this.props.data.upvotes + 1;
    axios.patch(`/api/wishList/${this.props.data.id}`, {
      upvotes: upvotes
    })
    .catch((err) => {
      return err;
    })
    const wish = this.props.data;
    this.props.upVote(wish);
    this.setState({ upvoteActive: true })
    this.setState({ downvoteActive: false })
  }

  downVoted() {
    if (!this.props.isLoggedIn) {
      return;
    }

    const upvotes = this.props.data.upvotes - 1;
    axios.patch(`/api/wishList/${this.props.data.id}`, {
      upvotes: upvotes
    })
    .catch((err) => {
      return err;
    })
    const wish = this.props.data;
    this.props.downVote(wish);
    this.setState({ downvoteActive: true })
    this.setState({ upvoteActive: false} )
  }

  cancelUpvote() {
    const upvotes = this.props.data.upvotes - 1;
    axios.patch(`/api/wishList/${this.props.data.id}`, {
      upvotes: upvotes
    })
    .catch((err) => {
      return err;
    })
    const wish = this.props.data;
    this.props.downVote(wish);
    this.setState({ upvoteActive: false })
  }

  cancelDownvote() {
    const upvotes = this.props.data.upvotes + 1;
    axios.patch(`/api/wishList/${this.props.data.id}`, {
      upvotes: upvotes
    })
    .catch((err) => {
      return err;
    })
    const wish = this.props.data;
    this.props.upVote(wish);
    this.setState({ downvoteActive: false })
  }

  componentDidMount() {
    axios.get('/api/lessons/');
  }

  render() {
    return (
      <div className="row wish-container">
        <div className="col s12 wish-item">
          <div className="row info">
            <div className="col s4">
            {!this.state.upvoteActive && <div className="arrow-up" onClick={this.upvoted.bind(this)}></div>}
            {this.state.upvoteActive && <div className="arrow-up-active" onClick={this.cancelUpvote.bind(this)}></div>}
                <p className="upvote-count">{this.props.data.upvotes}</p>
            {!this.state.downvoteActive && <div className="arrow-down" onClick={this.downVoted.bind(this)}></div>}
            {this.state.downvoteActive && <div className="arrow-down-active" onClick={this.cancelDownvote.bind(this)}></div>}
            </div>
            <div className="col s7">
              <h4 className="wish-question"><strong>Question:</strong> {this.props.data.question}</h4>
              <p><strong>Category:</strong> {this.props.data.category}</p>
              {this.props.isLoggedIn &&
                <Link className="btn write-button" to='/write-lesson'>Write Lesson</Link>
              }
              {!this.props.isLoggedIn &&
                <Link className="btn write-button" to='/signin'>Write Lesson</Link>
              }
            </div>
          </div>
        </div>
      </div>
   );
  }
}
