import React from 'react';
import LessonCard from './LessonCard';
import axios from 'axios';


export default class Feed extends React.Component {

  componentDidMount() {
    axios.get('/api/lessons')
      .then(res => {
        this.props.getLessons(res.data).bind(this);
      })
      .catch(err => {
        this.props.getLessons(err).bind(this);
      });
  }

  render() {
    const parsedLessons = this.props.lessons
    console.log(parsedLessons);
    const lessonList = parsedLessons.map((lesson, index) => {
      return <LessonCard data={lesson}
                         key={index}
      />
    });


    return (
      <div className="row">
        { lessonList }
      </div>
    )
  }

}
