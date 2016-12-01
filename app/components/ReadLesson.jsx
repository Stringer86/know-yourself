import React from 'react';
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';
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
          <h4>{this.props.lesson.title}</h4>
          <h5>Category: {this.props.lesson.category}</h5>
          <h1>Description: {this.props.lesson.description}</h1>
          <SyntaxHighlighter style={tomorrowNightEighties}>{initialCodeString}</SyntaxHighlighter>
          <p>{this.props.lesson.body}</p>

           </div>
    )}
}
