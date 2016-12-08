import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Notifications, { notify } from 'react-notify-toast';
import ReactDOM from 'react-dom';


export default class WriteQuestion extends React.Component {

  componentDidMount() {
    var element = ReactDOM.findDOMNode(this.refs.category)

    $(element).ready(function() {
      $('select').material_select();
    })

  }
  submit(event) {
    event.preventDefault();

    axios.post('/api/wishList', {
      category: this.refs['category'].value,
      question: this.refs['question'].value
    })
    .then((res) => {
      notify.show('Question posted!', 'success');
      this.refs['category'].value = '';
      this.refs['question'].value = '';
    })
    .catch(err => {
      notify.show('Make sure to fill out all fields', 'error');
    });
  }

  render() {
    return (
      <div className="container" id="question-container">
        <div className="row">
          <select className="col s12 m6 offset-m3" ref="category">
            <option value="" disabled selected>Select Category</option>
            <option>Angular1</option>
            <option>Angular2</option>
            <option>Backbone</option>
            <option>Ember</option>
            <option>Meteor</option>
            <option>Polymer</option>
            <option>React</option>
            <option>Vue</option>
          </select>
        </div>

        <div className="row">
          <div className="row">
          <textarea ref="question" className="card-1 col s12 m6 offset-m3" placeholder="Write Question..."></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 offset-m3 center-align">
            <button id="submit-question" type="submit" onClick={this.submit.bind(this)}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
