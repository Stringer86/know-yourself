import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class WriteQuestion extends React.Component {

  submit(event) {
    event.preventDefault();

    axios.post('/api/wishList', {
      category: this.refs['category'].value,
      question: this.refs['question'].value
    })
    .then((res) => {
      window.location.href="/";
    })
    .catch(err => {
      return err;
    });
  }

  render() {
    return (
      <div className="container" id="question-container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <input ref="category" type="text" placeholder="Framework or library name..." />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <textarea ref="question" placeholder="Write question..."></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <button id="submit-question" type="submit" onClick={this.submit.bind(this)}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}
