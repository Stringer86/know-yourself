import React from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import { Redirect, Match, Link } from 'react-router';
import Notifications, { notify } from 'react-notify-toast';
import brace from 'brace';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow_night_eighties';
import AceEditor from 'react-ace';
import ReactDOM from 'react-dom';


export default class WriteAnswer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      html: '',
      css: '',
      js: '',
      submittedArticle: false
    }
  }

  componentDidMount() {
    axios.get('/api/userData')
      .then(res => {
        this.props.getUserData(res.data).bind(this);
      })
      .catch(err => {
        return err;
    });

    var element = ReactDOM.findDOMNode(this.refs.category)

    $(element).ready(function() {
      $('select').material_select();
    })
  }

  getHtml(event) {
    this.setState({ html: event });
  }

  getCss(event) {
    this.setState({ css: event });
  }

  getJs(event) {
    this.setState({ js: event });
  }

  publish(event) {
    event.preventDefault();

    axios.post('/api/lessons', {
      title: this.refs['title'].value,
      category: this.refs['category'].value,
      description: this.refs['description'].value,
      published: true,
      html: this.state.html,
      css: this.state.css,
      js: this.state.js,
      body: this.refs['body'].value,
      likes: 0
    })
    .then((res) => {
      notify.show('Published!', 'success');
      this.state.submittedArticle = true;
      this.refs['title'].value = '',
      this.refs['category'].value = '',
      this.refs['description'].value = '',
      this.refs['body'].value = '',
      this.props.getPublished(res.data.lesson[0]).bind(this);
      this.setState({ published: res.data.posted })
    })
    .catch(err => {
      notify.show('Make sure to fill out all fields', 'error');
    });
  }

  render() {
    return (
      <div>
        <div id="question-container">
          <div className="row">
            <div className="col s12">
              <div className="row">
                <h1 className="instruction-title"><strong>how it works</strong></h1>
                <p className="col s12 m6 offset-m3 write-instructions center-align">Know how to make something awesome? Don't hide it. Share it with the rest of the community. First, walk us through the code. After, make sure to explain how you did what you did. We want this to
                be a place where code is not only shared but <i>also</i> explained.</p>
              </div>
              <div className="row">
                <div className="row">
                  <input className="col s12 m6 offset-m3 lesson-details" type="text" ref="title" placeholder="Title" />
                </div>
                <div className="row">
                  <input className="col s12 m6 offset-m3 lesson-details" type="text" ref="description" placeholder="Description" />
                </div>
                <div className="row">
                  <select className="col s12 m6 offset-m3 center-align" id="select-arrow" ref="category">

                    <option className="select-category" defaultValue="Select Category" disabled selected>Select Category</option>
                    <option className="select-option">Angular1</option>
                    <option className="select-option">Angular2</option>
                    <option className="select-option">Backbone</option>
                    <option className="select-option">Ember</option>
                    <option className="select-option">Meteor</option>
                    <option className="select-option">Polymer</option>
                    <option className="select-option">React</option>
                    <option className="select-option">Vue</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4" style={{padding: '0'}}>
              <h5 className="center-align">HTML</h5>
              <AceEditor
                onChange={this.getHtml.bind(this)}
                ref="html"
                tabSize="2"
                width="100%"
                height="350px"
                mode="html"
                theme="tomorrow_night_eighties"
                value={this.state.html}
              />
            </div>
            <div className="col s12 m4" style={{padding: '0'}}>
              <h5 className="center-align">CSS</h5>
              <AceEditor
                onChange={this.getCss.bind(this)}
                ref="css"
                tabSize="2"
                width="100%"
                height="350px"
                mode="css"
                theme="tomorrow_night_eighties"
                value={this.state.css}
              />
            </div>
            <div className="col s12 m4" style={{padding: '0'}}>
              <h5 className="center-align">JavaScript</h5>
              <AceEditor
                onChange={this.getJs.bind(this)}
                ref="js"
                tabSize="2"
                width="100%"
                height="350px"
                mode="javascript"
                theme="tomorrow_night_eighties"
                value={this.state.js}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 offset-m3" style={{marginTop: '50px'}}>
              <textarea className="card-1  lesson-box" ref="body" placeholder="Now explain the code..."></textarea>
            </div>
          </div>

          <div className="row center-align">
            {!this.state.submittedArticle &&
              <button id="submit-question" type="submit"
                onClick={this.publish.bind(this)}>
                <Link to="/write-lesson/review">Publish</Link>
              </button>
            }
            {this.state.submittedArticle &&
              <div>
                <div className="row">
                  <button className="published-option"><Link to="/">Home</Link></button>
                </div>
                <div className="row">
                  <button className="published-option"><Link to={`/lesson/${this.props.publishedArticle.id}`}>Published Article</Link></button>
                </div>
              </div>
            }
          </div>
        </div>

        {/* <div className="container">
          <Match pattern="/write-lesson/review" exactly render={
            () => <ReviewCard
              userData={this.props.userData}
              publishedArticle={this.props.publishedArticle}
              getUserData={this.props.getUserData}
              getPublished={this.props.getPublished}
            />
          }/>
        </div> */}
      </div>
    );
  }
}
