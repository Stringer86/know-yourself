import React from 'react';
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Link } from 'react-router';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles';

export default class ReadLesson extends React.Component {
  componentDidMount() {
    const id = Number(location.pathname.slice(8));

    console.log(id);

    axios.get(`/api/lessons/${id}`)
      .then((res) => {
        console.log(res.data);
        this.props.getLesson(res.data).bind(this);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {

    if (this.props.lesson.length === 0) {
      return <div></div>
    }

    const initialCodeString = this.props.lesson.code;
    return (
          <div className="container">
          <div className="row center-align">
          <p className="lesson-title">{this.props.lesson.title}</p>
          </div>
          <p className="lesson-description">{this.props.lesson.description}</p>
          <p className="lesson-category"><Link to={`/category/${this.props.lesson.category}`}>{this.props.lesson.category}</Link></p>
          <SyntaxHighlighter style={tomorrowNightEighties}>{initialCodeString}</SyntaxHighlighter>
          <p className="lesson-body">{this.props.lesson.body}</p>

           </div>
    )}
}
