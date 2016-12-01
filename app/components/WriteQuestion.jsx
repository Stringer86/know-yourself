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
    return <div>
      <input ref="category" type="text" />
      <textarea ref="question"></textarea>
      <button type="submit" onClick={this.submit.bind(this)}>Submit</button>
    </div>
  }
}
