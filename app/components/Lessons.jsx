import React from 'react';
import axios from 'axios';
import LessonCard from './LessonCard';

export default class Lessons extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      myLesson: true
    }
  }

  componentDidMount() {
    axios.get('/api/user')
      .then(res => {
        this.props.getMyLessons(res.data).bind(this);
      })
      .catch(err => {
        return err;
    });
  }

  render() {
    if(this.props.myLessons.length === 0) {
      return false;
    }

    const myLessons = this.props.myLessons.filter((e) => {
      if (e.published === true) {
        return e;
      }
    }).map((lesson, index) => {
      return <LessonCard data={lesson}
                         key={index}
                         myLesson={this.state.myLesson}
                         getMyLessons={this.props.getMyLessons}
              />
    });

    return (
      <div>
        { myLessons }
      </div>
    );
  }
}
