import React from 'react';
import axios from 'axios';

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

    return <div className="container center-align">
        <h1>{this.props.lesson.title}</h1>
        <h4>Category: {this.props.lesson.category} </h4>
        <p>{this.props.lesson.body}</p>
    </div>
  }
}
