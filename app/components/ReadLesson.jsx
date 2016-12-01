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

    const initialCodeString = `const woah = fun => fun + 1;
    const dude = woah(2) + 3;
    function thisIsAFunction() {
      return [1,2,3].map(n => n + 1).filter(n !== 3);
    }
    console.log('making up fake code is really hard');
    function itIs() {
      return 'no seriously really it is';
    }
      `
    return (
          <div>
          <SyntaxHighlighter style={tomorrowNightEighties}>{initialCodeString}</SyntaxHighlighter>

           </div>
    )}
}
