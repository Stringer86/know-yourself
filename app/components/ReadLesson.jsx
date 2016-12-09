import React from 'react';
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Link } from 'react-router';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles';

export default class ReadLesson extends React.Component {
  componentDidMount() {
    const id = Number(location.pathname.slice(8));

    axios.get(`/api/lessons/${id}`)
      .then((res) => {
        console.log(res.data, 'RESPONSE');
        this.props.getLesson(res.data).bind(this);
      })
      .catch((err) => {
        return err;
      })
  }

  render() {
    if (this.props.lesson.length === 0) {
      return false;
    }

    let html;
    let css;
    let js;

    if (this.props.lesson.html) {
      html = this.props.lesson.html;
    }

    if (this.props.lesson.css) {
      css = this.props.lesson.css;
    }

    if (this.props.lesson.js) {
      js = this.props.lesson.js;
    }

    // const initialCodeString = this.props.lesson.html;

    return (
      <div className="container">
        <div className="row center-align">
          <p className="lesson-title">{this.props.lesson.title}</p>
        </div>
        <p className="lesson-description">{this.props.lesson.description}</p>
        <p className="lesson-category"><Link to={`/category/${this.props.lesson.category}`}>{this.props.lesson.category}</Link></p>
        <SyntaxHighlighter style={tomorrowNightEighties}>{html}</SyntaxHighlighter>
        <SyntaxHighlighter style={tomorrowNightEighties}>{css}</SyntaxHighlighter>
        <SyntaxHighlighter style={tomorrowNightEighties}>{js}</SyntaxHighlighter>
        <p className="lesson-body">{this.props.lesson.body}</p>
      </div>
    );
  }
}
